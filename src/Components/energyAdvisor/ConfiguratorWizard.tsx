import React, { useMemo, useState } from "react";
import Eyebrow from "../home/ui/Eyebrow";
import PillButton from "../home/ui/PillButton";
import { ENERGY_ADVISOR, ROUTES } from "../../constants/site";

/**
 * ConfiguratorWizard — the three-step "Run Simulation" panel
 * (Figma frame "Energy Advisor", node 62:331).
 *
 * Left column carries the section copy; the right column is the dark card the
 * user actually drives. Steps 1-2 collect answers, step 3 renders a sizing
 * recommendation derived from them — see `recommend()` below for the maths.
 *
 * Answers are keyed by group id (`use`, `rooms`, `backup`, …) so adding a new
 * question is a data change in constants/site.js, not a change here.
 */

type Answers = Record<string, string>;

/** Inverter/battery sizes Voltra actually ships — we round up into these. */
const INVERTER_SIZES = [3, 5, 8, 15, 25, 50];
const BATTERY_SIZES = [5.1, 10.2, 16.4, 20.5, 30.7];

const roundUpInto = (value: number, sizes: number[]) =>
  sizes.find((s) => s >= value) ?? sizes[sizes.length - 1];

/**
 * Turn the collected answers into a system size.
 *
 * Connected load is estimated from the building type plus its room count, then:
 *   inverter = connected load x 1.25 headroom, rounded into a real model
 *   battery  = load x backup hours, divided by 95% usable depth-of-discharge
 *   solar    = daily units (from the electricity bill) over ~4 peak sun hours
 *
 * These are deliberately conservative rules of thumb, not a substitute for a
 * site survey — the CTA routes to a consultation for that reason.
 */
function recommend(a: Answers) {
  const rooms = Number(a.rooms ?? 4);
  const backupHours = Number(a.backup ?? 2);
  const monthlyBill = Number(a.bill ?? 1500);

  const perRoom: Record<string, { base: number; each: number }> = {
    home: { base: 0.4, each: 0.25 },
    shop: { base: 1.5, each: 0.4 },
    factory: { base: 5, each: 1 },
    epc: { base: 10, each: 1.5 },
  };
  const profile = perRoom[a.use ?? "home"] ?? perRoom.home;
  const loadKw = profile.base + rooms * profile.each;

  // Grid reliability nudges backup sizing — frequent cuts want more headroom.
  const gridFactor =
    a.grid === "offgrid" ? 2 : a.grid === "frequent" ? 1.5 : a.grid === "occasional" ? 1.2 : 1;

  const inverterKw = roundUpInto(loadKw * 1.25, INVERTER_SIZES);
  const batteryKwh = roundUpInto((loadKw * backupHours * gridFactor) / 0.95, BATTERY_SIZES);

  // Bill -> units -> daily -> array size. Tariff assumed ₹10/unit (see calculator).
  const monthlyUnits = monthlyBill / 10;
  const existingSolar = a.solar === "1-3" ? 2 : a.solar === "3-5" ? 4 : a.solar === "5+" ? 6 : 0;
  const solarKw = Math.max(0, Math.ceil(monthlyUnits / 30 / 4) - existingSolar);

  return { loadKw, inverterKw, batteryKwh, solarKw, backupHours };
}

/** One selectable option. Selected reads as a light chip on the dark card. */
function Choice({
  label,
  selected,
  onClick,
  shape,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
  shape: "tile" | "pill";
}) {
  const base =
    shape === "pill"
      ? "h-9 min-w-[52px] rounded-pill px-3 text-sm"
      : "h-11 rounded-[10px] px-4 text-sm";
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`${base} border transition-colors duration-200 ${
        selected
          ? "border-white bg-white font-medium text-navy"
          : "border-white/15 bg-white/10 text-white/80 hover:border-white/40 hover:bg-white/[0.18]"
      }`}
    >
      {label}
    </button>
  );
}

export default function ConfiguratorWizard() {
  const { steps } = ENERGY_ADVISOR.configurator;
  const { eyebrow, title, subtitle } = ENERGY_ADVISOR.hero;

  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({
    use: "home",
    rooms: "2",
    backup: "1",
    bill: "1000",
  });

  const current = steps[step];
  const isLast = step === steps.length - 1;
  const result = useMemo(() => recommend(answers), [answers]);

  // Every group on the current step must be answered before advancing.
  const canAdvance = current.groups.every((g) => answers[g.id] !== undefined);

  const set = (id: string, value: string) =>
    setAnswers((prev) => ({ ...prev, [id]: value }));

  return (
    <section id="configurator" className="w-full scroll-mt-24 bg-white py-16 lg:py-20">
      <div className="mx-auto grid max-w-page items-center gap-12 px-6 md:px-12 lg:grid-cols-2 lg:px-20">
        {/* Copy */}
        <div className="flex flex-col items-start gap-6 lg:pr-8">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="max-w-[420px] text-3xl font-medium leading-[1.15] tracking-tight text-navy sm:text-4xl lg:text-[44px]/[1.15]">
            {title}
          </h2>
          <p className="max-w-[380px] text-base leading-relaxed text-navy/60">{subtitle}</p>
          <PillButton to={ROUTES.contact} label="Book a Consultation" variant="outline" size="md" />
        </div>

        {/* Dark configurator card */}
        <div className="rounded-[20px] bg-gradient-to-br from-navy to-navy-ink p-6 shadow-card lg:p-8">
          {/* Step rail */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              {steps.map((s, i) => (
                <span
                  key={s.title}
                  className={`text-sm transition-colors duration-200 ${
                    i <= step ? "font-medium text-white" : "text-white/40"
                  }`}
                >
                  Step {i + 1}
                </span>
              ))}
            </div>
            <div className="relative mt-3 h-px w-full bg-white/20">
              <div
                className="absolute left-0 top-0 h-px bg-white transition-all duration-300 ease-out"
                style={{ width: `${(step / (steps.length - 1)) * 100}%` }}
              />
              {steps.map((s, i) => (
                <span
                  key={s.title}
                  className={`absolute top-1/2 size-2 -translate-y-1/2 rounded-full transition-colors duration-200 ${
                    i <= step ? "bg-white" : "bg-white/30"
                  }`}
                  style={{ left: `calc(${(i / (steps.length - 1)) * 100}% - 4px)` }}
                />
              ))}
            </div>
          </div>

          {/* Question groups, or the recommendation on the last step */}
          {!isLast ? (
            <div className="flex flex-col gap-6">
              {current.groups.map((group) => (
                <div key={group.id} className="flex flex-col gap-3">
                  <span className="text-base font-medium text-white">{group.label}</span>
                  <div
                    className={
                      group.layout === "grid"
                        ? "grid grid-cols-1 gap-3 sm:grid-cols-2"
                        : "flex flex-wrap gap-2"
                    }
                  >
                    {group.options.map((opt) => (
                      <Choice
                        key={opt.value}
                        label={opt.label}
                        shape={group.layout === "pills" ? "pill" : "tile"}
                        selected={answers[group.id] === opt.value}
                        onClick={() => set(group.id, opt.value)}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              <span className="text-base font-medium text-white">{current.title}</span>
              <div className="grid grid-cols-2 gap-3">
                <ResultTile label="Recommended inverter" value={`${result.inverterKw} kW`} />
                <ResultTile
                  label={`Battery (${result.backupHours} hr backup)`}
                  value={`${result.batteryKwh} kWh`}
                />
                <ResultTile label="Estimated connected load" value={`${result.loadKw.toFixed(1)} kW`} />
                <ResultTile
                  label="Solar to add"
                  value={result.solarKw > 0 ? `${result.solarKw} kW` : "Covered"}
                />
              </div>
              <p className="text-xs leading-relaxed text-white/50">
                Indicative sizing based on your answers. A Voltra engineer will confirm
                against your actual load profile and roof area.
              </p>
              <PillButton
                to={ROUTES.contact}
                label="Book a Consultation"
                variant="solid"
                size="md"
                className="mt-1"
              />
            </div>
          )}

          {/* Nav */}
          <div className="mt-8 flex justify-end gap-3">
            <button
              type="button"
              onClick={() => setStep((s) => Math.max(0, s - 1))}
              disabled={step === 0}
              className="h-10 rounded-pill px-6 text-sm font-medium text-white transition-colors duration-200 enabled:bg-white/15 enabled:hover:bg-white/25 disabled:cursor-not-allowed disabled:bg-white/5 disabled:text-white/30"
            >
              Back
            </button>
            <button
              type="button"
              onClick={() => setStep((s) => Math.min(steps.length - 1, s + 1))}
              disabled={isLast || !canAdvance}
              className="h-10 rounded-pill bg-brand px-6 text-sm font-medium text-white transition-colors duration-200 enabled:hover:bg-brand-bright disabled:cursor-not-allowed disabled:opacity-40"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function ResultTile({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[10px] border border-white/15 bg-white/[0.07] p-4">
      <div className="text-xs text-white/60">{label}</div>
      <div className="mt-1 text-xl font-medium text-white">{value}</div>
    </div>
  );
}
