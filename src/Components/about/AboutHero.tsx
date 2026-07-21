import React from "react";
import { ABOUT_PAGE } from "../../constants/site";
import Eyebrow from "../home/ui/Eyebrow";
import PillButton from "../home/ui/PillButton";

/**
 * AboutHero — centered intro that sits just below the dark nav band, with faint
 * concentric rings radiating behind the heading (decorative).
 */
export default function AboutHero() {
  const { eyebrow, title, body, cta } = ABOUT_PAGE.hero;
  return (
    <section className="relative overflow-hidden pb-10 pt-16 lg:pt-24">
      {/* Concentric rings — centres pushed well below the heading so the
          heading sits at the wide part of the arcs (clear of the curve). */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0">
        <div className="absolute left-1/2 top-[-330px] aspect-square w-[1300px] -translate-x-1/2 rounded-full border border-brand/10" />
        <div className="absolute left-1/2 top-[-230px] aspect-square w-[1040px] -translate-x-1/2 rounded-full border border-brand/10" />
      </div>

      <div className="relative mx-auto flex max-w-[820px] flex-col items-center gap-6 px-6 text-center">
        <Eyebrow className="justify-center">{eyebrow}</Eyebrow>
        <h1 className="max-w-[780px] text-4xl font-light leading-[1.15] tracking-wide text-navy sm:text-5xl lg:text-[54px]/[1.15]">
          {title}
        </h1>
        <p className="max-w-[700px] text-base leading-relaxed text-navy/60">{body}</p>
        <PillButton to={cta.to} label={cta.label} variant="solid" size="lg" iconPosition="left" />
      </div>
    </section>
  );
}
