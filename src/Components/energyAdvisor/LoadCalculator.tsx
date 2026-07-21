import React, { useMemo, useState } from "react";
import { Trash2, Plus, Minus } from "lucide-react";
import Eyebrow from "../home/ui/Eyebrow";
import { ENERGY_ADVISOR } from "../../constants/site";

/**
 * LoadCalculator — the "Live Load Calculator" block
 * (Figma frame "Energy Advisor", node 62:331).
 *
 * Genuinely live: every figure on the right is derived from the table on the
 * left, so editing a row updates all six tiles. Nothing here is hard-coded.
 *
 *   total load   = Σ(watts × qty) ÷ 1000
 *   daily units  = Σ(watts × qty × hrs) ÷ 1000
 *   monthly      = daily × 30
 *   inverter     = total load × 1.25 headroom, rounded into a real model
 *   battery      = total load × chosen backup hours
 *   bill         = monthly × tariff (₹/unit, user-adjustable)
 *   solar array  = daily ÷ 4 peak sun hours, rounded up
 */

interface Row {
  id: number;
  name: string;
  watts: number;
  qty: number;
  hours: number;
}

const INVERTER_SIZES = [3, 5, 8, 15, 25, 50];
/** Zero load means no system at all — don't recommend the smallest model. */
const roundUpInto = (v: number, sizes: number[]) =>
  v <= 0 ? 0 : sizes.find((s) => s >= v) ?? sizes[sizes.length - 1];

let nextId = 0;
const makeRow = (r: Omit<Row, "id">): Row => ({ ...r, id: nextId++ });

export default function LoadCalculator() {
  const cfg = ENERGY_ADVISOR.calculator;

  const [rows, setRows] = useState<Row[]>(() => cfg.defaultRows.map(makeRow));
  const [backupHours, setBackupHours] = useState(cfg.backupOptions[0]);
  const [tariff, setTariff] = useState(cfg.defaultTariff);

  const totals = useMemo(() => {
    const watts = rows.reduce((sum, r) => sum + r.watts * r.qty, 0);
    const wh = rows.reduce((sum, r) => sum + r.watts * r.qty * r.hours, 0);
    const totalLoadKw = watts / 1000;
    const dailyKwh = wh / 1000;
    const monthlyKwh = dailyKwh * 30;
    return {
      totalLoadKw,
      dailyKwh,
      monthlyKwh,
      inverterKw: roundUpInto(totalLoadKw * 1.25, INVERTER_SIZES),
      batteryKwh: totalLoadKw * backupHours,
      bill: monthlyKwh * tariff,
      solarKw: Math.ceil(dailyKwh / 4),
    };
  }, [rows, backupHours, tariff]);

  const update = (id: number, field: keyof Omit<Row, "id" | "name">, value: number) =>
    setRows((prev) =>
      prev.map((r) => (r.id === id ? { ...r, [field]: Math.max(0, value) } : r))
    );

  const remove = (id: number) => setRows((prev) => prev.filter((r) => r.id !== id));

  const addPreset = (name: string) => {
    const preset = cfg.presets.find((p) => p.name === name);
    if (preset) setRows((prev) => [...prev, makeRow(preset)]);
  };

  return (
    <section className="w-full py-16 lg:py-20">
      <div className="mx-auto max-w-page px-6 md:px-12 lg:px-20">
        <div className="flex flex-col gap-4">
          <Eyebrow bar="left">{cfg.eyebrow}</Eyebrow>
          <h2 className="max-w-[560px] text-3xl font-medium leading-[1.15] tracking-tight text-navy sm:text-4xl lg:text-[44px]/[1.15]">
            {cfg.title}
          </h2>
          <p className="max-w-[420px] text-base leading-relaxed text-navy/60">{cfg.subtitle}</p>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_minmax(0,460px)]">
          {/* Appliance table */}
          <div className="flex flex-col">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[440px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-navy/15">
                    {cfg.columns.map((c) => (
                      <th key={c} className="pb-3 text-xs font-normal text-navy/50">
                        {c}
                      </th>
                    ))}
                    <th className="pb-3" />
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row) => (
                    <tr key={row.id} className="border-b border-navy/10">
                      <td className="py-3 pr-3 text-sm text-navy">{row.name}</td>
                      <td className="py-3 pr-3">
                        <NumberCell
                          value={row.watts}
                          onChange={(v) => update(row.id, "watts", v)}
                          suffix="W"
                        />
                      </td>
                      <td className="py-3 pr-3">
                        <Stepper
                          value={row.qty}
                          onChange={(v) => update(row.id, "qty", v)}
                        />
                      </td>
                      <td className="py-3 pr-3">
                        <NumberCell
                          value={row.hours}
                          max={24}
                          onChange={(v) => update(row.id, "hours", Math.min(24, v))}
                          suffix="h"
                        />
                      </td>
                      <td className="py-3 text-right">
                        <button
                          type="button"
                          onClick={() => remove(row.id)}
                          aria-label={`Remove ${row.name}`}
                          className="rounded-md p-1.5 text-navy/40 transition-colors duration-200 hover:bg-navy/5 hover:text-navy"
                        >
                          <Trash2 size={15} />
                        </button>
                      </td>
                    </tr>
                  ))}
                  {rows.length === 0 && (
                    <tr>
                      <td colSpan={5} className="py-8 text-center text-sm text-navy/40">
                        No appliances yet — add one below to size your system.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Add-appliance picker */}
            <div className="mt-5 flex items-center gap-3">
              <Plus size={16} className="shrink-0 text-brand" />
              <select
                value=""
                onChange={(e) => {
                  addPreset(e.target.value);
                  e.currentTarget.selectedIndex = 0;
                }}
                aria-label="Add an appliance"
                className="h-10 rounded-pill border border-brand bg-transparent px-4 text-sm font-medium text-brand outline-none transition-colors duration-200 hover:bg-brand hover:text-white"
              >
                <option value="">Add appliance…</option>
                {cfg.presets.map((p) => (
                  <option key={p.name} value={p.name} className="text-navy">
                    {p.name} · {p.watts} W
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Live results */}
          <div className="rounded-[20px] bg-white p-5 shadow-card lg:p-6">
            <div className="grid grid-cols-3 gap-3">
              <Tile label="Total Load" value={`${totals.totalLoadKw.toFixed(2)} kW`} />
              <Tile label="Daily Consumption" value={`${totals.dailyKwh.toFixed(1)} kWh`} />
              <Tile label="Monthly Consumption" value={`${Math.round(totals.monthlyKwh)} kWh`} />
            </div>

            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <Tile label="Recommended Inverter" value={`${totals.inverterKw} kW`} />
              <Tile label="Battery for backup" value={`${totals.batteryKwh.toFixed(1)} kWh`}>
                <div className="mt-2 flex gap-1">
                  {cfg.backupOptions.map((h) => (
                    <button
                      key={h}
                      type="button"
                      onClick={() => setBackupHours(h)}
                      aria-pressed={backupHours === h}
                      className={`rounded-pill px-2 py-0.5 text-[11px] transition-colors duration-200 ${
                        backupHours === h
                          ? "bg-brand text-white"
                          : "bg-navy/5 text-navy/50 hover:bg-navy/10"
                      }`}
                    >
                      {h} Hr
                    </button>
                  ))}
                </div>
              </Tile>
            </div>

            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <Tile
                label="Estimated bill"
                value={`₹${Math.round(totals.bill).toLocaleString("en-IN")}/mo`}
              >
                <div className="mt-2 flex items-center gap-2">
                  <span className="text-[11px] text-navy/50">Tariff</span>
                  <Stepper value={tariff} onChange={setTariff} min={1} compact />
                </div>
              </Tile>
              <Tile label="Solar to offset this load" value={`${totals.solarKw} kW array`} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- small presentational helpers ---------- */

function Tile({
  label,
  value,
  children,
}: {
  label: string;
  value: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="rounded-[10px] bg-surface p-4">
      <div className="text-[11px] leading-tight text-navy/50">{label}</div>
      <div className="mt-1 text-xl font-medium text-navy">{value}</div>
      {children}
    </div>
  );
}

/** Inline numeric input that keeps the table looking like text, not a form. */
function NumberCell({
  value,
  onChange,
  suffix,
  max,
}: {
  value: number;
  onChange: (v: number) => void;
  suffix?: string;
  max?: number;
}) {
  return (
    <span className="inline-flex items-baseline gap-1">
      <input
        type="number"
        min={0}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-14 rounded border border-transparent bg-transparent px-1 py-0.5 text-sm text-navy outline-none transition-colors duration-200 hover:border-navy/20 focus:border-brand [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none"
      />
      {suffix && <span className="text-xs text-navy/40">{suffix}</span>}
    </span>
  );
}

function Stepper({
  value,
  onChange,
  min = 0,
  compact = false,
}: {
  value: number;
  onChange: (v: number) => void;
  min?: number;
  compact?: boolean;
}) {
  const btn =
    "grid place-items-center rounded text-navy/50 transition-colors duration-200 hover:bg-navy/10 hover:text-navy";
  const size = compact ? "size-5" : "size-6";
  return (
    <span className="inline-flex items-center gap-1">
      <button
        type="button"
        onClick={() => onChange(Math.max(min, value - 1))}
        aria-label="Decrease"
        className={`${btn} ${size}`}
      >
        <Minus size={compact ? 11 : 13} />
      </button>
      <span className={`text-center text-sm text-navy ${compact ? "w-5" : "w-6"}`}>{value}</span>
      <button
        type="button"
        onClick={() => onChange(value + 1)}
        aria-label="Increase"
        className={`${btn} ${size}`}
      >
        <Plus size={compact ? 11 : 13} />
      </button>
    </span>
  );
}
