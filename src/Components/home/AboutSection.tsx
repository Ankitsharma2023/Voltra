import React from "react";
import { ABOUT } from "../../constants/site";
import { assets } from "../../constants/assets";
import Eyebrow from "./ui/Eyebrow";
import PillButton from "./ui/PillButton";

/**
 * About — full-bleed wind/solar image on the left that fades (gradient mask)
 * into the page on the right, so there's no hard edge and the copy on the right
 * sits over the dissolved area. Stacks to a plain image on mobile.
 */

// Photo fades out toward the right AND the bottom into the page background.
// Two gradients composited (intersection) so both edges dissolve — no hard cut.
const IMAGE_FADE_RIGHT = "linear-gradient(90deg, #000 0%, #000 45%, transparent 92%)";
const IMAGE_FADE_BOTTOM = "linear-gradient(180deg, #000 0%, #000 68%, transparent 100%)";
const IMAGE_MASK = {
  WebkitMaskImage: `${IMAGE_FADE_RIGHT}, ${IMAGE_FADE_BOTTOM}`,
  maskImage: `${IMAGE_FADE_RIGHT}, ${IMAGE_FADE_BOTTOM}`,
  WebkitMaskComposite: "source-in",
  maskComposite: "intersect",
} as const;

export default function AboutSection() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Desktop image — bleeds off the LEFT, fades into the page on the right */}
      <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-[60%] lg:block xl:w-[58%]">
        <img
          src={assets.about.windSolar}
          alt="Wind turbines and solar panels along a waterfront"
          className="h-full w-full object-cover"
          style={IMAGE_MASK}
        />
      </div>

      <div className="relative mx-auto max-w-page px-6 md:px-12 lg:px-20">
        {/* Mobile image */}
        <div className="pt-6 lg:hidden">
          <img
            src={assets.about.windSolar}
            alt="Wind turbines and solar panels along a waterfront"
            className="h-60 w-full rounded-2xl object-cover"
          />
        </div>

        {/* Copy */}
        <div className="flex flex-col items-start gap-6 py-12 lg:ml-auto lg:min-h-[560px] lg:w-[46%] lg:items-end lg:justify-center lg:py-24 lg:text-right">
          <Eyebrow bar="right">{ABOUT.eyebrow}</Eyebrow>
          <h2 className="max-w-[620px] text-3xl font-medium leading-[1.15] tracking-tight text-navy sm:text-4xl lg:text-[54px]/[1.15]">
            {ABOUT.title}
          </h2>
          <p className="max-w-[600px] text-base leading-relaxed text-navy/60">{ABOUT.body}</p>
          <PillButton to={ABOUT.cta.to} label={ABOUT.cta.label} variant="solid" size="lg" iconPosition="left" />
        </div>
      </div>
    </section>
  );
}
