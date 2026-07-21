import React from "react";
import Eyebrow from "../home/ui/Eyebrow";
import PillButton from "../home/ui/PillButton";
import ConcentricRings from "../home/ui/ConcentricRings";
import { CONTACT_PAGE } from "../../constants/site";

/**
 * ContactHero — centred intro band for the Contact page
 * (Figma frame "Contact", node 62:161). The CTA is an in-page anchor down to
 * the form rather than a route, since we are already on the contact page.
 */
export default function ContactHero() {
  const { eyebrow, title, subtitle, cta } = CONTACT_PAGE.hero;

  return (
    <section className="relative w-full overflow-hidden">
      <ConcentricRings sizes={[640, 900, 1180]} />

      <div className="relative mx-auto flex max-w-page flex-col items-center gap-6 px-6 pb-16 pt-16 text-center md:px-12 lg:px-20 lg:pb-20 lg:pt-20">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="max-w-[820px] text-3xl font-medium leading-[1.15] tracking-tight text-navy sm:text-4xl lg:text-[54px]/[1.15]">
          {title}
        </h1>
        <p className="max-w-[620px] text-base leading-relaxed text-navy/60">{subtitle}</p>
        <PillButton to={cta.to} label={cta.label} variant="solid" size="lg" />
      </div>
    </section>
  );
}
