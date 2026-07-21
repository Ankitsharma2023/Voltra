import React from "react";
import { ABOUT_PAGE } from "../../constants/site";
import { assets } from "../../constants/assets";
import Eyebrow from "../home/ui/Eyebrow";

/**
 * MissionSection — left-aligned mission copy, product-in-situ image on the right
 * (bleeds to the edge on desktop). Stacks on mobile.
 */
export default function MissionSection() {
  const { eyebrow, title, body } = ABOUT_PAGE.mission;
  return (
    <section className="w-full py-16 lg:py-20">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        {/* Copy */}
        <div className="flex flex-col items-start gap-6 px-6 md:px-12 lg:pl-20">
          <Eyebrow bar="left">{eyebrow}</Eyebrow>
          <h2 className="max-w-[560px] text-3xl font-medium leading-[1.15] tracking-tight text-navy sm:text-4xl lg:text-[54px]/[1.15]">
            {title}
          </h2>
          <p className="max-w-[560px] text-base leading-relaxed text-navy/60">{body}</p>
        </div>

        {/* Image */}
        <div className="px-6 lg:px-0">
          <img
            src={assets.aboutPage.missionUnits}
            alt="Voltra inverter and battery installed in a home"
            className="h-64 w-full rounded-2xl object-cover sm:h-80 lg:h-[340px] lg:rounded-l-2xl lg:rounded-r-none"
          />
        </div>
      </div>
    </section>
  );
}
