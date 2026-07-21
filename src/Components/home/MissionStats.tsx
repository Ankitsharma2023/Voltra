import React from "react";
import { MISSION } from "../../constants/site";
import { assets } from "../../constants/assets";
import PillButton from "./ui/PillButton";

/**
 * MissionStats — the "Our Story" band. Two large concentric dashed circles are
 * centred horizontally with their centres near the top, so only their bottom
 * arcs sweep down through the section (an orbit, matching Figma node 1:445).
 * Rounded photo tiles sit along those arcs (desktop only). Orbit animation is
 * deferred.
 */
function Tile({ src, className }: { src: string; className: string }) {
  return (
    <div
      className={`pointer-events-none absolute hidden size-[120px] overflow-hidden rounded-2xl border-2 border-brand shadow-card lg:block ${className}`}
    >
      <img src={src} alt="" className="h-full w-full object-cover" />
    </div>
  );
}

export default function MissionStats() {
  return (
    <section className="relative w-full overflow-hidden py-16 lg:py-0">
      <div className="relative mx-auto max-w-page px-6 lg:h-[700px]">
        {/* Concentric orbit rings — centred, only the bottom arcs are visible */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-[-686px] hidden size-[1344px] -translate-x-1/2 rounded-full border border-dashed border-navy/15 lg:block"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-[-550px] hidden size-[1072px] -translate-x-1/2 rounded-full border border-dashed border-navy/15 lg:block"
        />

        {/* Floating tiles along the arcs */}
        <Tile src={assets.mission.cityNight} className="left-[6%] top-[100px]" />
        <Tile src={assets.mission.skyline} className="right-[2%] top-[100px]" />
        <Tile src={assets.mission.village} className="left-[18%] top-[478px]" />
        <Tile src={assets.mission.factory} className="right-[16%] top-[440px]" />

        {/* Content */}
        <div className="relative mx-auto flex max-w-[892px] flex-col items-center gap-12 text-center lg:gap-16 lg:pt-[77px]">
          <h2 className="text-2xl leading-[1.4] tracking-tight sm:text-[28px]">
            <span className="text-navy/70">{MISSION.titleLead}</span>
            <span className="text-navy/40">{MISSION.titleRest}</span>
          </h2>

          <div className="grid w-full max-w-[760px] grid-cols-2 gap-8 md:grid-cols-4">
            {MISSION.stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-2">
                <span className="text-[32px] font-medium tracking-tight text-brand/90">{stat.value}</span>
                <span className="max-w-[150px] text-sm leading-snug text-navy/40">{stat.label}</span>
              </div>
            ))}
          </div>

          <PillButton to={MISSION.cta.to} label={MISSION.cta.label} variant="solid" size="lg" iconPosition="left" />
        </div>
      </div>
    </section>
  );
}
