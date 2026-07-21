import React from "react";
import { HERO } from "../../constants/site";
import { assets } from "../../constants/assets";
import PillButton from "./ui/PillButton";

/**
 * Hero — headline + CTAs + warranty badge on the left, a layered product
 * composite (India-map glow, waterfront landscape, founder-with-products PNG)
 * on the right. Stacks to a single column on mobile.
 */
function WarrantyBadge() {
  // The whole badge (shield + gradient plate + text) is one pixel-perfect image.
  return (
    <img
      src={assets.hero.warrantyBadge}
      alt={HERO.warranty.join(" — ")}
      className="mt-4 w-full max-w-[430px]"
    />
  );
}

const HERO_ALT =
  "Voltra founder with the LVW battery and hybrid inverter, India network map and a solar-and-wind landscape behind";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Desktop visual — anchored to and bleeding off the RIGHT viewport edge,
          so the landscape's crop edge sits off-screen (no hard vertical edge). */}
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[54%] lg:block xl:w-[50%]">
        <img
          src={assets.hero.composite}
          alt={HERO_ALT}
          className="absolute bottom-0 right-0 h-full w-auto max-w-none"
        />
      </div>

      <div className="relative mx-auto max-w-page px-6 md:px-12 lg:px-20">
        {/* Left copy */}
        <div className="flex flex-col justify-center gap-7 pb-10 pt-6 lg:min-h-[680px] lg:w-[47%] lg:pb-16 lg:pt-10">
          <h1 className="font-medium text-navy" style={{ letterSpacing: "-0.02em" }}>
            <span className="block text-4xl leading-[1.1] sm:text-5xl lg:text-[64px]/[1.15]">
              {HERO.titleLines[0]}
              <br />
              {HERO.titleLines[1]}
            </span>
            <span className="block text-4xl uppercase leading-[1.1] text-brand sm:text-5xl lg:text-[64px]/[1.15]">
              {HERO.titleAccent}
            </span>
          </h1>

          <p className="max-w-[560px] text-base leading-relaxed text-navy/60">{HERO.subtitle}</p>

          <div className="flex flex-wrap items-center gap-4">
            <PillButton to={HERO.primaryCta.to} label={HERO.primaryCta.label} variant="solid" size="lg" />
            <PillButton to={HERO.secondaryCta.to} label={HERO.secondaryCta.label} variant="outline" size="lg" icon="none" />
          </div>

          <WarrantyBadge />
        </div>

        {/* Mobile / tablet visual (stacked, full-width) */}
        <div className="pb-10 lg:hidden">
          <img src={assets.hero.composite} alt={HERO_ALT} className="mx-auto w-full max-w-[560px]" />
        </div>
      </div>
    </section>
  );
}
