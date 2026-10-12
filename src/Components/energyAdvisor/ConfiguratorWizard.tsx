import React, { useMemo, useRef, useState } from "react";
import Eyebrow from "../home/ui/Eyebrow";
import PillButton from "../home/ui/PillButton";
import { ENERGY_ADVISOR, ROUTES } from "../../constants/site";

/**
 * ConfiguratorWizard — "Build Your Own Battery" (BYOB) configurator for the
 * Energy Advisor page (Figma frame "Energy Advisor", node 62:331).
 *
 * The left column carries the section intro and a sticky LIVE panel (battery-
 * bank diagram + kWh + stats). The right column is the build flow: pick system
 * voltage, module and bank size; choose mounting, BMS and warranty; check
 * inverter compatibility; then read the generated bill of materials and send
 * the exact configuration to a distributor.
 *
 * Ported from the standalone BYOB prototype and restyled into Voltra's
 * navy/brand type + colour system. The engineering data (modules, mounts, BMS,
 * sample inverters) and all sizing maths are kept faithful to that prototype —
 * swap in the master compatibility list when it's ready.
 */

/* ------------------------------- Catalog data ------------------------------ */

interface Mod { id: string; v: number; ah: number }
interface Bms { id: string; c: number; comm: string[]; par: number; s: string }
interface Inv { n: string; vmin: number; vmax: number; comm: string[]; a: number }

const MODS: Mod[] = [
  { id: "VB48-100", v: 48, ah: 100 },
  { id: "VB48-200", v: 48, ah: 200 },
  { id: "VB51-50", v: 51.2, ah: 50 },
  { id: "VB51-100", v: 51.2, ah: 100 },
  { id: "VB51-200", v: 51.2, ah: 200 },
  { id: "VB25-100", v: 25.6, ah: 100 },
  { id: "VB25-200", v: 25.6, ah: 200 },
];

const SYSV = [
  { v: 48, l: "48 V", s: "Standard low voltage" },
  { v: 51.2, l: "51.2 V", s: "LiFePO₄ nominal" },
  { v: 102.4, l: "102.4 V", s: "2 × 51.2 V in series" },
  { v: 153.6, l: "153.6 V", s: "3 × 51.2 V in series" },
];

const MOUNT = [
  { id: "Stack Mount", cap: 4, s: "Up to 4 per stack" },
  { id: "Floor Rack", cap: 8, s: "Up to 8 per rack" },
  { id: "Door/Enclosure Rack", cap: 6, s: "Up to 6 per rack" },
  { id: "Wall Mount", cap: 2, s: "Up to 2 per wall kit" },
  { id: "Custom Rack", cap: 0, s: "Engineered to site" },
];

const BMS: Bms[] = [
  { id: "Standard BMS", c: 0.5, comm: ["RS485"], par: 4, s: "RS485 · up to 4 parallel" },
  { id: "Smart BMS", c: 0.5, comm: ["CAN", "RS485"], par: 8, s: "CAN + RS485 · app monitoring" },
  { id: "High-current BMS", c: 1, comm: ["CAN", "RS485"], par: 8, s: "Up to 1C discharge" },
  { id: "Parallel-comm BMS", c: 0.5, comm: ["CAN", "RS485"], par: 16, s: "Master/slave · up to 16 parallel" },
];

const WAR = [5, 10];

// Sample data — replace with the master compatibility list.
const INV: Inv[] = [
  { n: "Victron MultiPlus-II 48/5000", vmin: 42, vmax: 60, comm: ["CAN"], a: 70 },
  { n: "Growatt SPF 5000ES", vmin: 42, vmax: 60, comm: ["CAN", "RS485"], a: 100 },
  { n: "Deye SUN-8K-SG04LP3", vmin: 40, vmax: 60, comm: ["CAN", "RS485"], a: 190 },
  { n: "Luxpower SNA 12K", vmin: 40, vmax: 60, comm: ["CAN", "RS485"], a: 250 },
  { n: "Solis RAI-3K-48ES", vmin: 42, vmax: 58, comm: ["CAN", "RS485"], a: 60 },
  { n: "Generic HV hybrid 10 kW", vmin: 90, vmax: 450, comm: ["CAN"], a: 25 },
  { n: "Other / not listed", vmin: 0, vmax: 999, comm: ["CAN", "RS485"], a: 0 },
];

/* --------------------------------- Maths ----------------------------------- */

interface Config { sv: number; mod: string; n: number; mount: string; bms: string; war: number; inv: string }

const f = (x: number, d = 2) => (+x.toFixed(d)).toString();

/** Modules whose voltage divides the chosen system voltage into 1–6 in series. */
const modsFor = (sv: number) =>
  MODS.filter(
    (m) =>
      Math.abs(sv / m.v - Math.round(sv / m.v)) < 1e-6 &&
      Math.round(sv / m.v) >= 1 &&
      Math.round(sv / m.v) <= 6 &&
      (m.v === 48 ? sv === 48 : m.v !== 48)
  );

function calc(S: Config) {
  const m = MODS.find((x) => x.id === S.mod)!;
  const b = BMS.find((x) => x.id === S.bms)!;
  const mt = MOUNT.find((x) => x.id === S.mount)!;
  const ser = Math.round(S.sv / m.v);
  const total = ser * S.n;
  const Ah = m.ah * S.n;
  const kwh = (S.sv * Ah) / 1000;
  const amps = Ah * b.c;
  const kw = (S.sv * amps) / 1000;
  const racks = mt.cap ? Math.ceil(total / mt.cap) : null;
  return { m, b, mt, ser, total, Ah, kwh, amps, kw, racks };
}

type Check = ["ok" | "warn" | "bad", string, string];

function checks(S: Config, c: ReturnType<typeof calc>): Check[] | null {
  const i = INV.find((x) => x.n === S.inv);
  if (!i) return null;
  const r: Check[] = [];

  const vok = S.sv >= i.vmin && S.sv <= i.vmax;
  r.push([
    vok ? "ok" : "bad",
    vok ? "Pass" : "Fail",
    `Voltage: ${S.sv} V ${vok ? "is within" : "is outside"} the inverter range (${i.vmin}–${i.vmax} V).`,
  ]);

  const sh = i.comm.filter((x) => c.b.comm.includes(x));
  r.push([
    sh.length ? "ok" : "bad",
    sh.length ? "Pass" : "Fail",
    sh.length
      ? `Communication: ${sh.join(" / ")} shared with ${c.b.id}.`
      : `Communication: inverter needs ${i.comm.join("/")} but ${c.b.id} offers ${c.b.comm.join("/")}. Choose a Smart BMS.`,
  ]);

  if (i.a) {
    const ok = c.amps >= i.a;
    r.push([
      ok ? "ok" : "warn",
      ok ? "Pass" : "Limited",
      `Current: bank supports about ${f(c.amps, 0)} A; inverter can draw up to ${i.a} A.${ok ? "" : " Output will be limited."}`,
    ]);
    const need = Math.ceil(i.a / (c.m.ah * c.b.c));
    r.push([
      S.n >= need ? "ok" : "warn",
      "Advice",
      `Recommended: ${need} parallel string${need > 1 ? "s" : ""} of ${c.m.id} for full inverter current.`,
    ]);
  }
  if (S.n > c.b.par)
    r.push(["warn", "Check", `${c.b.id} supports up to ${c.b.par} in parallel. You have ${S.n}.`]);
  return r;
}

function bom(S: Config, c: ReturnType<typeof calc>): [string | number, string][] {
  const rows: [string | number, string][] = [
    [c.total, `${c.m.id} Voltra LiFePO₄ module (${c.m.v} V, ${c.m.ah} Ah)`],
    [c.total, `${c.b.id} (one per module)`],
  ];
  rows.push([c.racks || "Per design", `${S.mount}${c.racks ? " kit" : " – site engineered"}`]);
  rows.push([c.total * 2, "Power cables, battery to busbar / battery to battery"]);
  rows.push([Math.max(0, c.total - 1) + 1, `Communication cables (${c.b.comm.join("/")})`]);
  rows.push([c.total * 2, "Power connectors (Anderson / lugs)"]);
  rows.push([S.n > 1 ? "2" : "1", S.n > 1 ? "Positive and negative busbars" : "Terminal block"]);
  rows.push([S.n, "DC breaker / fuse per string"]);
  if (c.ser > 1) rows.push([S.n, `Series link kit (${c.ser} modules per string)`]);
  rows.push([1, "Installation kit: labels, fasteners, insulation covers"]);
  rows.push([1, `${S.war}-year warranty registration`]);
  return rows;
}

function summary(S: Config, c: ReturnType<typeof calc>) {
  return (
    `Voltra BYOB configuration\n` +
    `${S.sv} V system · ${c.m.id} × ${c.total} (${S.n} parallel string${S.n > 1 ? "s" : ""} × ${c.ser} series)\n` +
    `Total: ${f(c.Ah, 0)} Ah · ${f(c.kwh)} kWh\n` +
    `Mounting: ${S.mount}${c.racks ? ` (${c.racks} unit${c.racks > 1 ? "s" : ""})` : ""}\n` +
    `BMS: ${S.bms}\n` +
    `Warranty: ${S.war} years\n` +
    `Inverter: ${S.inv || "not selected"}`
  );
}

/* ------------------------------ UI primitives ------------------------------ */

function Opt({
  selected,
  onClick,
  label,
  sub,
}: {
  selected: boolean;
  onClick: () => void;
  label: React.ReactNode;
  sub?: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`min-h-[44px] rounded-[10px] border px-3.5 py-2.5 text-left text-sm transition-colors ${
        selected
          ? "border-brand bg-brand/[0.08] text-navy ring-1 ring-inset ring-brand"
          : "border-navy/15 bg-white text-navy/75 hover:border-navy/40 hover:bg-surface"
      }`}
    >
      <span className="font-medium">{label}</span>
      {sub && <span className="mt-0.5 block text-xs font-normal text-navy/45">{sub}</span>}
    </button>
  );
}

function Step({
  no,
  title,
  hint,
  children,
  id,
}: {
  no: number;
  title: string;
  hint?: string;
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-navy/10 py-6 first:border-t-0 first:pt-0">
      <h3 className="text-lg font-semibold text-navy">
        <span className="text-brand">{no}.</span> {title}
      </h3>
      {hint && <p className="mt-1 text-sm text-navy/50">{hint}</p>}
      <div className="mt-4">{children}</div>
    </section>
  );
}

const Module = () => (
  <div className="relative h-[46px] w-[30px] rounded-[5px] border-t-[5px] border-brand bg-white/90">
    <span
      className="absolute inset-x-[8px] bottom-2 top-3 rounded-[2px]"
      style={{ background: "repeating-linear-gradient(#3658ff 0 3px, transparent 3px 7px)", opacity: 0.5 }}
      aria-hidden
    />
  </div>
);

function BankDiagram({ ser, n }: { ser: number; n: number }) {
  const cap = 16;
  const rows = [];
  for (let i = 0; i < Math.min(n, cap); i++) {
    rows.push(
      <div key={i} className="mr-1.5 flex gap-1">
        {Array.from({ length: ser }).map((_, j) => (
          <Module key={j} />
        ))}
      </div>
    );
  }
  return (
    <div className="mb-4 flex min-h-[70px] flex-wrap content-start gap-1" aria-label="Battery bank diagram">
      {rows}
      {n > cap && <span className="self-center text-xs text-white/50">+{n - cap} more strings</span>}
    </div>
  );
}

function Stat({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="border-t border-white/15 pt-1.5">
      <dt className="text-xs text-white/55">{label}</dt>
      <dd className="mt-0.5 text-lg font-semibold">{value}</dd>
    </div>
  );
}

const inputCls =
  "w-full min-h-[44px] rounded-[10px] border-[1.5px] border-navy/15 bg-white px-3 py-2.5 text-sm text-navy transition-colors focus:border-brand focus:outline-none";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="mb-1 block text-xs text-navy/55">{label}</label>
      {children}
    </div>
  );
}

/* -------------------------------- Component -------------------------------- */

export default function ConfiguratorWizard() {
  const { eyebrow, title, subtitle } = ENERGY_ADVISOR.hero;

  const [cfg, setCfg] = useState<Config>({
    sv: 51.2,
    mod: "VB51-100",
    n: 2,
    mount: "Stack Mount",
    bms: "Smart BMS",
    war: 10,
    inv: "",
  });

  const [form, setForm] = useState({
    name: "",
    company: "",
    loc: "",
    mobile: "",
    cap: "",
    capTouched: false,
    type: "Home",
  });
  const [sent, setSent] = useState<{ name: string; loc: string; text: string } | null>(null);
  const [copied, setCopied] = useState(false);
  const doneRef = useRef<HTMLDivElement | null>(null);

  const c = useMemo(() => calc(cfg), [cfg]);
  const ml = useMemo(() => modsFor(cfg.sv), [cfg.sv]);
  const ck = useMemo(() => checks(cfg, c), [cfg, c]);

  const update = (patch: Partial<Config>) => setCfg((prev) => ({ ...prev, ...patch }));

  const setSV = (v: number) =>
    setCfg((prev) => {
      const next = { ...prev, sv: v };
      const list = modsFor(v);
      if (!list.find((x) => x.id === prev.mod)) next.mod = list[0].id;
      return next;
    });

  const capValue = form.capTouched ? form.cap : f(c.kwh);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(summary(cfg, c));
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  const send = () => {
    const text =
      summary(cfg, c) +
      `\n\nContact: ${form.name}, ${form.company}, ${form.loc}, ${form.mobile}` +
      `\nRequired: ${capValue} kWh · ${form.type} project`;
    setSent({ name: form.name, loc: form.loc, text });
    requestAnimationFrame(() => doneRef.current?.scrollIntoView({ block: "center", behavior: "smooth" }));
  };

  const kindColor = { ok: "text-emerald-600", warn: "text-amber-600", bad: "text-red-600" } as const;

  return (
    <section id="configurator" className="w-full scroll-mt-24 bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-page px-6 md:px-12 lg:px-20">
        <div className="grid gap-10 lg:grid-cols-[360px_1fr] lg:gap-14">
          {/* Left: intro + sticky live panel */}
          <div className="flex flex-col gap-6 lg:sticky lg:top-24 lg:self-start">
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2 className="text-3xl font-medium leading-[1.15] tracking-tight text-navy sm:text-4xl lg:text-[40px]/[1.12]">
              {title}
            </h2>
            <p className="text-base leading-relaxed text-navy/60">{subtitle}</p>
            <div>
              <PillButton to={ROUTES.contact} label="Book a Consultation" variant="outline" size="md" />
            </div>

            {/* Live panel */}
            <div className="rounded-[20px] bg-gradient-to-br from-navy to-navy-ink p-6 text-white shadow-card">
              <BankDiagram ser={c.ser} n={cfg.n} />
              <div className="flex items-end gap-2">
                <span className="text-5xl font-bold leading-none">{f(c.kwh)}</span>
                <span className="pb-1 text-lg font-semibold text-white/60">kWh</span>
              </div>
              <dl className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3">
                <Stat label="Voltage" value={`${cfg.sv} V`} />
                <Stat label="Capacity" value={`${f(c.Ah, 0)} Ah`} />
                <Stat label="Modules" value={c.total} />
                <Stat label="Parallel strings" value={cfg.n} />
                <Stat label="Max current (est.)" value={`${f(c.amps, 0)} A`} />
                <Stat label="Max inverter (est.)" value={`${f(c.kw, 1)} kW`} />
                <Stat label={cfg.mount} value={c.racks ? `${c.racks} unit${c.racks > 1 ? "s" : ""}` : "Custom"} />
                <Stat label="Warranty" value={`${cfg.war} years`} />
              </dl>
              <p className="mt-4 text-xs leading-relaxed text-white/50">
                {f(cfg.sv)} V × {f(c.Ah, 0)} Ah = {f(c.kwh)} kWh. Current and inverter limits use {c.b.c}C
                for {c.b.id}.
              </p>
            </div>
          </div>

          {/* Right: the build flow */}
          <div className="flex flex-col">
            <span className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand">
              Build Your Own Battery
            </span>

            <Step no={1} title="Battery voltage" hint="Higher voltages connect modules in series.">
              <div className="flex flex-wrap gap-2">
                {SYSV.map((x) => (
                  <Opt key={x.v} selected={cfg.sv === x.v} onClick={() => setSV(x.v)} label={x.l} sub={x.s} />
                ))}
              </div>
            </Step>

            <Step no={2} title="Battery module" hint="All modules are LiFePO₄. Options match your voltage.">
              <div className="flex flex-wrap gap-2">
                {ml.map((x) => (
                  <Opt
                    key={x.id}
                    selected={cfg.mod === x.id}
                    onClick={() => update({ mod: x.id })}
                    label={x.id}
                    sub={`${x.v} V · ${x.ah} Ah · ${f((x.v * x.ah) / 1000)} kWh`}
                  />
                ))}
              </div>
            </Step>

            <Step
              no={3}
              title="Build your bank"
              hint={`Parallel strings: each adds ${c.ser > 1 ? `${c.ser} modules in series` : "one module"}.`}
            >
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  aria-label="Remove a string"
                  onClick={() => update({ n: Math.max(1, cfg.n - 1) })}
                  className="grid size-12 place-items-center rounded-full border-[1.5px] border-navy text-2xl leading-none text-navy transition-colors hover:bg-navy hover:text-white"
                >
                  −
                </button>
                <b className="min-w-[2ch] text-center text-3xl font-bold text-navy">{cfg.n}</b>
                <button
                  type="button"
                  aria-label="Add a string"
                  onClick={() => update({ n: Math.min(32, cfg.n + 1) })}
                  className="grid size-12 place-items-center rounded-full border-[1.5px] border-navy text-2xl leading-none text-navy transition-colors hover:bg-navy hover:text-white"
                >
                  +
                </button>
                <span className="text-sm text-navy/55">
                  {c.total} module{c.total > 1 ? "s" : ""} in total
                </span>
              </div>
            </Step>

            <Step no={4} title="Mounting">
              <div className="flex flex-wrap gap-2">
                {MOUNT.map((x) => (
                  <Opt key={x.id} selected={cfg.mount === x.id} onClick={() => update({ mount: x.id })} label={x.id} sub={x.s} />
                ))}
              </div>
            </Step>

            <Step no={5} title="BMS">
              <div className="flex flex-wrap gap-2">
                {BMS.map((x) => (
                  <Opt key={x.id} selected={cfg.bms === x.id} onClick={() => update({ bms: x.id })} label={x.id} sub={x.s} />
                ))}
              </div>
            </Step>

            <Step no={6} title="Warranty">
              <div className="flex flex-wrap gap-2">
                {WAR.map((x) => (
                  <Opt key={x} selected={cfg.war === x} onClick={() => update({ war: x })} label={`${x} years`} />
                ))}
              </div>
            </Step>

            <Step
              no={7}
              title="Inverter compatibility"
              hint="Pick your inverter and we check voltage, communication and current."
            >
              <select
                value={cfg.inv}
                onChange={(e) => {
                  setCfg((p) => ({ ...p, inv: e.target.value }));
                  setSent(null);
                }}
                className={inputCls}
                aria-label="Inverter"
              >
                <option value="">Select inverter…</option>
                {INV.map((x) => (
                  <option key={x.n} value={x.n}>
                    {x.n}
                  </option>
                ))}
              </select>
              {ck && (
                <>
                  <ul className="mt-3 flex flex-col gap-2">
                    {ck.map((r, i) => (
                      <li
                        key={i}
                        className="flex gap-3 rounded-[10px] border border-navy/10 bg-surface px-3 py-2.5 text-sm"
                      >
                        <span className={`min-w-[64px] font-bold ${kindColor[r[0]]}`}>{r[1]}</span>
                        <span className="text-navy/70">{r[2]}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-2 text-xs text-navy/45">
                    Sample compatibility data. Confirm against the inverter datasheet before ordering.
                  </p>
                </>
              )}
            </Step>

            <Step
              no={8}
              title="Your configuration sheet"
              hint="Bill of materials generated from your choices."
              id="bom"
            >
              <div className="overflow-x-auto rounded-xl border border-navy/10">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left text-xs text-navy/50">
                      <th className="px-3 py-2 font-semibold">Qty</th>
                      <th className="px-3 py-2 font-semibold">Item</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bom(cfg, c).map((r, i) => (
                      <tr key={i} className="border-t border-navy/10">
                        <td className="whitespace-nowrap px-3 py-2 font-bold text-navy">{r[0]}</td>
                        <td className="px-3 py-2 text-navy/70">{r[1]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <button
                type="button"
                onClick={copy}
                className="mt-3 inline-flex min-h-[44px] items-center rounded-xl border-[1.5px] border-navy px-5 text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-white"
              >
                {copied ? "Copied" : "Copy configuration"}
              </button>
            </Step>

            <Step
              no={9}
              title="Get distributor price"
              hint="Your exact configuration goes to the authorized Voltra distributor in your area."
            >
              <div className="grid gap-3 sm:grid-cols-2">
                <Field label="Name">
                  <input
                    className={inputCls}
                    autoComplete="name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </Field>
                <Field label="Company">
                  <input
                    className={inputCls}
                    autoComplete="organization"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                  />
                </Field>
                <Field label="Location">
                  <input
                    className={inputCls}
                    autoComplete="address-level2"
                    value={form.loc}
                    onChange={(e) => setForm({ ...form, loc: e.target.value })}
                  />
                </Field>
                <Field label="Mobile">
                  <input
                    className={inputCls}
                    type="tel"
                    autoComplete="tel"
                    value={form.mobile}
                    onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                  />
                </Field>
                <Field label="Required capacity (kWh)">
                  <input
                    className={inputCls}
                    value={capValue}
                    onChange={(e) => setForm({ ...form, cap: e.target.value, capTouched: true })}
                  />
                </Field>
                <Field label="Project type">
                  <select
                    className={inputCls}
                    value={form.type}
                    onChange={(e) => setForm({ ...form, type: e.target.value })}
                  >
                    {["Home", "Commercial", "Industrial", "Telecom", "Solar farm"].map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </Field>
                <div className="sm:col-span-2">
                  <button
                    type="button"
                    onClick={send}
                    className="min-h-[48px] w-full rounded-xl bg-brand px-5 font-semibold text-white transition-colors hover:bg-brand-bright"
                  >
                    Get Distributor Price
                  </button>
                </div>
              </div>

              {sent && (
                <div
                  ref={doneRef}
                  role="status"
                  className="mt-4 rounded-xl border border-emerald-500/40 bg-emerald-500/10 p-4 text-sm"
                >
                  <b className="text-navy">Request ready, {sent.name || "thanks"}.</b>{" "}
                  <span className="text-navy/60">
                    Our team will connect you with the Voltra distributor covering {sent.loc || "your area"}.
                  </span>
                  <pre className="mt-2 whitespace-pre-wrap font-mono text-xs leading-relaxed text-navy/70">
                    {sent.text}
                  </pre>
                </div>
              )}
            </Step>
          </div>
        </div>
      </div>
    </section>
  );
}
