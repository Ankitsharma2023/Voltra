import React from "react";
import { GIGAFACTORY } from "../../constants/site";
import Eyebrow from "./ui/Eyebrow";
import PillButton from "./ui/PillButton";

/**
 * Gigafactory — heading + CTA. (The robotic-assembly illustration that used to
 * close this section now lives at the top of the global SiteFooter, so it isn't
 * duplicated here.)
 */
export default function Gigafactory() {
  return (
    <section className="w-full overflow-hidden bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-page px-6 md:px-12 lg:px-20">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col gap-4">
            <Eyebrow bar="left">{GIGAFACTORY.eyebrow}</Eyebrow>
            <h2 className="text-3xl font-medium leading-[1.15] tracking-tight text-navy/80 sm:text-4xl lg:text-[48px]/[1.15]">
              {GIGAFACTORY.title[0]}
              <br />
              {GIGAFACTORY.title[1]}
            </h2>
          </div>
          <div className="flex max-w-[440px] flex-col items-start gap-5 lg:items-end lg:text-right">
            <PillButton to={GIGAFACTORY.cta.to} label={GIGAFACTORY.cta.label} variant="solid" size="lg" iconPosition="left" />
            <p className="text-base leading-relaxed text-navy/60">{GIGAFACTORY.body}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
