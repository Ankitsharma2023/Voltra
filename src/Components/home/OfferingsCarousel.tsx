import React, { useState } from "react";
import { OFFERINGS } from "../../constants/site";
import { assets } from "../../constants/assets";
import Eyebrow from "./ui/Eyebrow";

/**
 * OfferingsCarousel — "Storage that scales". Three tabs
 * (Inverters · Batteries · Grids) each swap a single FULL-BLEED image that
 * spans the entire viewport width — edge to edge, no side peeks, no gutters.
 * Only the active slide's copy overlays the image.
 *
 * Each slide currently renders the same shelf image; swap an entry in
 * `slideMedia` per tab id (or drop in a <video>) when the distinct assets
 * are ready.
 */

// Per-slide media. All use the same shelf image for now — replace per tab id
// (or drop in videos) when the distinct assets are ready.
const slideMedia: Record<string, string> = {
  inverters: assets.offerings.batteriesShelf,
  batteries: assets.offerings.batteriesShelf,
  grids: assets.offerings.batteriesShelf,
};

export default function OfferingsCarousel() {
  const [active, setActive] = useState(1); // Batteries by default
  const slide = OFFERINGS.tabs[active];

  return (
    <section className="w-full py-16 lg:py-20">
      <div className="mx-auto flex max-w-page flex-col items-center px-6 text-center md:px-12">
        <Eyebrow className="justify-center">{OFFERINGS.eyebrow}</Eyebrow>
        <h2 className="mt-4 max-w-[760px] text-3xl font-medium leading-[1.15] tracking-tight text-navy sm:text-4xl lg:text-[54px]/[1.15]">
          {OFFERINGS.title}
        </h2>

        {/* Tabs — hover or click to swap the full-width image */}
        <div className="mt-8 inline-flex rounded-pill bg-white p-1 shadow-soft">
          {OFFERINGS.tabs.map((tab, i) => (
            <button
              key={tab.id}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onClick={() => setActive(i)}
              className={`rounded-pill px-6 py-2 text-sm font-medium transition-colors ${
                i === active ? "bg-brand text-white" : "text-brand hover:bg-brand/5"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Full-bleed image — spans the whole viewport width, no side gaps */}
      <div className="relative mt-10 h-[50vw] max-h-[720px] w-full overflow-hidden lg:h-[42vw]">
        <img
          key={slide.id}
          src={slideMedia[slide.id] ?? assets.offerings.batteriesShelf}
          alt={slide.title}
          className="absolute inset-0 h-full w-full animate-fadeIn object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 mx-auto max-w-page px-6 pb-10 md:px-12 lg:px-20 lg:pb-14">
          {/* Text-shadow keeps the copy legible now that the navy scrim is gone. */}
          <div className="flex max-w-[420px] flex-col gap-2 [text-shadow:0_1px_12px_rgba(0,17,100,0.55)]">
            <h3 className="text-2xl font-medium text-white lg:text-4xl">{slide.title}</h3>
            {slide.body && (
              <p className="text-sm leading-relaxed text-white/90 lg:text-base">{slide.body}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
