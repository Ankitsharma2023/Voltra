import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQ_CTA } from "../../constants/site";
import PillButton from "./ui/PillButton";

/**
 * FaqCta — "Let's power a better tomorrow" CTA on the left, an expandable FAQ
 * list on the right. Accordion is functional; the expand transition uses a
 * simple max-height so it can be enriched later.
 */
export default function FaqCta() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="w-full py-16 lg:py-20">
      <div className="mx-auto grid max-w-page items-start gap-12 px-6 md:px-12 lg:grid-cols-2 lg:px-20">
        {/* CTA */}
        <div className="flex flex-col items-start gap-6">
          <h2 className="max-w-[420px] text-3xl font-medium leading-[1.15] tracking-tight text-navy sm:text-4xl lg:text-[48px]/[1.15]">
            {FAQ_CTA.title}
          </h2>
          <p className="max-w-[360px] text-base leading-relaxed text-navy/60">{FAQ_CTA.body}</p>
          <PillButton to={FAQ_CTA.cta.to} label={FAQ_CTA.cta.label} variant="solid" size="lg" iconPosition="left" />
        </div>

        {/* Accordion */}
        <div className="flex flex-col">
          {FAQ_CTA.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className="border-b border-navy/15">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-medium text-navy">{item.q}</span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-navy/60 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="pb-5 pr-8 text-sm leading-relaxed text-navy/60">{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
