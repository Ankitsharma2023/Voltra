import React from "react";
import {
  Sun, Zap, TrendingDown, Cloud, Gauge, ShieldCheck,
  BatteryCharging, Layers, Cpu, Thermometer, BadgeCheck, Flame,
} from "lucide-react";

// Exact Figma feature icons (node 1:1265 "Feature-Card_V1"), imported as raw
// SVG markup so they can be inlined and recolored. Each icon paints its shapes
// with `fill="var(--fill-0, white)"`; we swap that for `currentColor` so the
// icon follows the wrapper's text color — white by default, brand blue on hover.
import guaranteeRaw from "../../assets/feature-icons/guarantee.svg?raw";
import documentRaw from "../../assets/feature-icons/document.svg?raw";
import pinRaw from "../../assets/feature-icons/pin.svg?raw";
import badge24hRaw from "../../assets/feature-icons/badge-24h.svg?raw";
import calendarRaw from "../../assets/feature-icons/calendar.svg?raw";
import chatRaw from "../../assets/feature-icons/chat.svg?raw";
// Light "tab" accents that bracket the panel's left/right edges (used as bg image).
import edgeBracketLeft from "../../assets/feature-icons/edge-bracket-left.svg";
import edgeBracketRight from "../../assets/feature-icons/edge-bracket-right.svg";

/** icon key -> raw Figma SVG markup. */
const svgIcons: Record<string, string> = {
  guarantee: guaranteeRaw,
  document: documentRaw,
  pin: pinRaw,
  "badge-24h": badge24hRaw,
  calendar: calendarRaw,
  chat: chatRaw,
};

/** Make the icon inherit `color`: drive its fill via currentColor. */
const recolor = (svg: string) => svg.replace(/var\(--fill-0,\s*white\)/g, "currentColor");

/** icon key -> lucide icon (fallback for pages still on the semantic set). */
const lucideIcons: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number }>> = {
  sun: Sun,
  zap: Zap,
  "trending-down": TrendingDown,
  cloud: Cloud,
  gauge: Gauge,
  "shield-check": ShieldCheck,
  "battery-charging": BatteryCharging,
  layers: Layers,
  cpu: Cpu,
  thermometer: Thermometer,
  "badge-check": BadgeCheck,
  flame: Flame,
};

export interface FeatureItem {
  icon: string;
  title: string;
  body: string;
}

function FeatureIcon({ icon }: { icon: string }) {
  const raw = svgIcons[icon];
  if (raw) {
    return (
      <span
        aria-hidden
        className="block size-[68px] shrink-0 text-white transition-colors duration-300 group-hover:text-brand-bright [&_svg]:size-full"
        dangerouslySetInnerHTML={{ __html: recolor(raw) }}
      />
    );
  }
  const Icon = lucideIcons[icon] ?? Sun;
  return (
    <span className="grid size-[68px] shrink-0 place-items-center text-white transition-colors duration-300 group-hover:text-brand-bright">
      <Icon size={42} strokeWidth={1.75} />
    </span>
  );
}

/**
 * DarkFeatures — the shared dark "Engineered / Designed for …" panel
 * (Figma node 1:1265): a heading + intro over a two-column grid of icon
 * features, bracketed by light edge tabs. Content is fully prop-driven.
 */
export default function DarkFeatures({
  title,
  subtitle,
  items,
}: {
  title: string;
  subtitle: string;
  items: FeatureItem[];
}) {
  return (
    <section className="w-full px-6 py-16 md:px-12 lg:py-24">
      <div className="relative mx-auto max-w-content overflow-visible rounded-2xl bg-navy-deep px-6 py-12 sm:px-12 lg:px-20 lg:py-16">
        {/* Light edge "bracket" accents (Figma decorations 1:1277 / 1:1278) */}
        <span
          aria-hidden
          style={{ backgroundImage: `url(${edgeBracketLeft})` }}
          className="pointer-events-none absolute left-0 top-1/2 hidden h-[30px] w-[441px] -translate-x-1/2 -translate-y-1/2 -rotate-90 bg-contain bg-center bg-no-repeat lg:block"
        />
        <span
          aria-hidden
          style={{ backgroundImage: `url(${edgeBracketRight})` }}
          className="pointer-events-none absolute right-0 top-1/2 hidden h-[30px] w-[441px] -translate-y-1/2 translate-x-1/2 rotate-90 bg-contain bg-center bg-no-repeat lg:block"
        />

        {/* Header: heading left, intro right */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="max-w-[560px] text-3xl font-medium leading-[1.15] tracking-tight text-white/80 sm:text-4xl lg:text-[54px]/[1.15]">
            {title}
          </h2>
          <p className="max-w-[420px] text-sm leading-relaxed text-white/70">{subtitle}</p>
        </div>

        <div className="my-10 h-px w-full bg-white/15" />

        {/* Two-column feature grid */}
        <div className="grid gap-x-16 gap-y-10 md:grid-cols-2 lg:gap-x-28 lg:gap-y-14">
          {items.map((item) => (
            <div key={item.title} className="group flex items-start gap-5">
              <FeatureIcon icon={item.icon} />
              <div className="flex flex-col gap-1.5 pt-1">
                <h3 className="text-base font-bold text-white">{item.title}</h3>
                <p className="text-sm leading-relaxed text-white/70">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
