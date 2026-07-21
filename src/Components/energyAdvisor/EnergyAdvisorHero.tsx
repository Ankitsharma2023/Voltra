import React from "react";
import Eyebrow from "../home/ui/Eyebrow";
import PillButton from "../home/ui/PillButton";
import ConcentricRings from "../home/ui/ConcentricRings";
import { ENERGY_ADVISOR } from "../../constants/site";

/**
 * EnergyAdvisorHero — centred intro band for the Energy Advisor page
 * (Figma frame "Energy Advisor", node 62:331). Shares the ring backdrop with
 * the Contact hero; the section clips it.
 */
export default function EnergyAdvisorHero() {
  const { eyebrow, title, subtitle, cta } = ENERGY_ADVISOR.hero;

  return (
    <section className="relative w-full overflow-hidden">
      <ConcentricRings />

      <div className="relative mx-auto flex max-w-page flex-col items-center gap-6 px-6 pb-20 pt-16 text-center md:px-12 lg:px-20 lg:pb-28 lg:pt-20">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="max-w-[760px] text-3xl font-medium leading-[1.15] tracking-tight text-navy sm:text-4xl lg:text-[54px]/[1.15]">
          {title}
        </h1>
        <p className="max-w-[560px] text-base leading-relaxed text-navy/60">
          {subtitle}
        </p>
        <PillButton to={cta.to} label={cta.label} variant="solid" size="lg" />
      </div>
    </section>
  );
}
