import React, { useState } from "react";
import Eyebrow from "../home/ui/Eyebrow";
import PillButton from "../home/ui/PillButton";
import { ENERGY_ADVISOR } from "../../constants/site";

/**
 * ProductHub — "Understand Every Product"
 * (Figma frame "Energy Advisor", node 62:331).
 *
 * A segmented control swaps between the three product families. Each tab pairs
 * an explainer on the left with that family's spec table on the right; all of
 * it is data from constants/site.js, so adding a family is a data change.
 */
export default function ProductHub() {
  const hub = ENERGY_ADVISOR.productHub;
  const [active, setActive] = useState(0);
  const tab = hub.tabs[active];

  return (
    <section className="w-full py-16 lg:py-20">
      <div className="mx-auto max-w-page px-6 md:px-12 lg:px-20">
        <div className="flex flex-col gap-4">
          <Eyebrow bar="left">{hub.eyebrow}</Eyebrow>
          <h2 className="max-w-[640px] text-3xl font-medium leading-[1.15] tracking-tight text-navy sm:text-4xl lg:text-[44px]/[1.15]">
            {hub.title}
          </h2>
          <p className="max-w-[480px] text-base leading-relaxed text-navy/60">{hub.subtitle}</p>
        </div>

        {/* Segmented control */}
        <div
          role="tablist"
          aria-label="Product families"
          className="mt-8 grid grid-cols-3 gap-1 rounded-pill bg-white p-1 shadow-soft"
        >
          {hub.tabs.map((t, i) => {
            const selected = i === active;
            return (
              <button
                key={t.id}
                role="tab"
                aria-selected={selected}
                onClick={() => setActive(i)}
                className={`h-10 rounded-pill text-sm font-medium transition-colors duration-200 ${
                  selected ? "bg-brand text-white" : "text-brand hover:bg-brand/10"
                }`}
              >
                {t.label}
              </button>
            );
          })}
        </div>

        {/* Explainer + spec table */}
        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col items-start gap-4">
            <h3 className="text-2xl font-medium tracking-tight text-navy lg:text-3xl">
              {tab.title}
            </h3>
            <div
              className="text-sm font-bold uppercase text-brand-strong"
              style={{ letterSpacing: "0.24em" }}
            >
              {tab.series}
            </div>
            {tab.body.map((p) => (
              <p key={p.slice(0, 24)} className="max-w-[460px] text-sm leading-relaxed text-navy/60">
                {p}
              </p>
            ))}
            <PillButton to={tab.cta.to} label={tab.cta.label} variant="solid" size="md" className="mt-2" />
          </div>

          <div className="overflow-hidden rounded-[16px] bg-white shadow-card">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[440px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-navy/10">
                    {tab.columns.map((c) => (
                      <th key={c} className="px-4 py-4 text-xs font-normal text-navy/50">
                        {c}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tab.rows.map((row) => (
                    <tr
                      key={row[0]}
                      className="border-b border-navy/[0.06] transition-colors duration-200 last:border-0 hover:bg-surface"
                    >
                      {row.map((cell, ci) => (
                        <td
                          key={ci}
                          className={`px-4 py-4 text-sm ${
                            ci === 0 ? "font-medium text-navy" : "text-navy/60"
                          }`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
