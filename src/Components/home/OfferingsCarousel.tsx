import React, { useState } from "react";
import { OFFERINGS } from "../../constants/site";
import { assets } from "../../constants/assets";
import Eyebrow from "./ui/Eyebrow";

/**
 * OfferingsCarousel — "Storage that scales". A 3-slide filmstrip
 * (Inverters · Batteries · Grids). Hovering or clicking a tab (or a slide)
 * slides that slide to the centre; the others fan out to their natural side:
 *   - Inverters (first)  -> centred, the other two peek on the RIGHT
 *   - Batteries (middle) -> centred, one peek each side
 *   - Grids (last)       -> centred, the other two peek on the LEFT
 *
 * The track is centred on the middle slide by default (translateX(-50%)); we
 * then shift it by (1 - active) slide-steps so the active slide lands centre.
 *
 * Each slide currently renders an image; swap an entry in `slideMedia` for a
 * <video> later (the structure is ready for it).
 */

// Per-slide media. All use the same shelf image for now — replace per tab id
// (or drop in videos) when the distinct assets are ready.
const slideMedia: Record<string, string> = {
  inverters: assets.offerings.batteriesShelf,
  batteries: assets.offerings.batteriesShelf,
  grids: assets.offerings.batteriesShelf,
};

export default function OfferingsCarousel() {
  const [active, setActive] = useState(1); // Batteries centred by default

  return (
    <section className="w-full overflow-hidden py-16 lg:py-20">
      <div className="mx-auto flex max-w-page flex-col items-center px-6 text-center md:px-12">
        <Eyebrow className="justify-center">{OFFERINGS.eyebrow}</Eyebrow>
        <h2 className="mt-4 max-w-[760px] text-3xl font-medium leading-[1.15] tracking-tight text-navy sm:text-4xl lg:text-[54px]/[1.15]">
          {OFFERINGS.title}
        </h2>

        {/* Tabs — hover or click to bring a slide to the centre */}
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

      {/* Filmstrip */}
      <div
        className="relative mt-10 w-full overflow-hidden [--cw:86vw] [--gap:24px] sm:[--cw:66vw] lg:[--cw:760px]"
        style={{ height: "calc(var(--cw) * 0.625)" }}
      >
        <div
          className="absolute left-1/2 top-0 flex items-center gap-[var(--gap)] transition-transform duration-500 ease-out"
          style={
            {
              "--n": 1 - active,
              transform: "translateX(calc(-50% + var(--n) * (var(--cw) + var(--gap))))",
            } as React.CSSProperties
          }
        >
          {OFFERINGS.tabs.map((slide, i) => {
            const isActive = i === active;
            return (
              <button
                key={slide.id}
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(i)}
                aria-label={slide.title}
                className={`relative aspect-[16/10] w-[var(--cw)] shrink-0 overflow-hidden rounded-card text-left transition-all duration-500 ${
                  isActive ? "scale-100 opacity-100" : "scale-95 opacity-40"
                }`}
              >
                <img
                  src={slideMedia[slide.id] ?? assets.offerings.batteriesShelf}
                  alt={slide.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-image-scrim" />
                {isActive && (
                  <div className="absolute bottom-0 left-0 flex max-w-[380px] flex-col gap-2 p-6 lg:p-8">
                    <h3 className="text-2xl font-medium text-white lg:text-3xl">{slide.title}</h3>
                    {slide.body && <p className="text-sm leading-relaxed text-white/80">{slide.body}</p>}
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
