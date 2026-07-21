import React from "react";
import { ABOUT_PAGE } from "../../constants/site";

/**
 * StatsRow — four key figures separated by vertical rules (rules collapse into a
 * 2-col grid on mobile).
 */
export default function StatsRow() {
  return (
    <section className="w-full py-10 lg:py-14">
      <div className="mx-auto flex max-w-[900px] flex-wrap items-center justify-center gap-y-8 px-6">
        {ABOUT_PAGE.stats.map((stat, i) => (
          <div key={stat.label} className="flex items-stretch">
            {i > 0 && <span className="mx-6 hidden w-px self-center bg-navy/15 py-6 sm:block sm:h-12" aria-hidden />}
            <div className="flex w-40 flex-col items-center gap-2 text-center">
              <span className="text-[32px] font-medium tracking-tight text-brand/90">{stat.value}</span>
              <span className="text-sm leading-snug text-navy/40">{stat.label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
