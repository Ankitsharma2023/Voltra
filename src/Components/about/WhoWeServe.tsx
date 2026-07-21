import React, { useEffect, useState } from "react";
import { ABOUT_PAGE } from "../../constants/site";
import { assets } from "../../constants/assets";
import Eyebrow from "../home/ui/Eyebrow";

/** imageKey (from constants) -> asset. */
const serveImages: Record<string, string> = {
  residential: assets.mission.village,
  commercial: assets.aboutPage.serveImage,
  utility: assets.mission.skyline,
};

/**
 * WhoWeServe — a three-step "verticals" selector. Clicking a step swaps the
 * featured image + description above the stepper. Step transition is functional;
 * motion is deferred.
 */
export default function WhoWeServe() {
  const { eyebrow, title, verticals } = ABOUT_PAGE.serve;
  const [active, setActive] = useState(0);
  const current = verticals[active];

  // Auto-advance the active vertical every 2 seconds so the connecting line
  // travels smoothly from one dot to the next in a loop, swapping the featured
  // image + description in sync. Keying the timer on `active` means a manual
  // click also resets the cadence.
  useEffect(() => {
    const id = setTimeout(
      () => setActive((a) => (a + 1) % verticals.length),
      2000
    );
    return () => clearTimeout(id);
  }, [active, verticals.length]);

  const progress =
    verticals.length > 1 ? (active / (verticals.length - 1)) * 100 : 0;

  return (
    <section className="w-full py-16 lg:py-24">
      <div className="mx-auto max-w-page px-6 md:px-12 lg:px-20">
        <div className="flex flex-col gap-4">
          <Eyebrow bar="left">{eyebrow}</Eyebrow>
          <h2 className="text-3xl font-medium leading-[1.15] tracking-tight text-navy sm:text-4xl lg:text-[54px]/[1.15]">
            {title}
          </h2>
        </div>

        {/* Featured vertical */}
        <div className="mt-14 flex flex-col items-center gap-8 lg:flex-row lg:gap-14">
          <img
            key={current.id}
            src={serveImages[current.imageKey]}
            alt={current.label}
            className="h-52 w-full max-w-[320px] shrink-0 animate-fadeIn rounded-2xl border-4 border-brand object-cover"
          />
          <p className="max-w-[600px] text-2xl font-medium leading-snug text-navy/80 lg:text-[34px]/[1.15]">
            {current.description}
          </p>
        </div>

        {/* Stepper */}
        <div className="mx-auto mt-16 max-w-[760px]">
          <div className="relative flex items-center justify-between">
            {/* Connecting line (track) */}
            <span className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-navy/15" aria-hidden />
            {/* Animated progress line — travels dot → dot every second */}
            <span
              className="absolute left-0 top-1/2 h-0.5 -translate-y-1/2 rounded-full bg-brand transition-[width] duration-700 ease-in-out"
              style={{ width: `${progress}%` }}
              aria-hidden
            />
            {verticals.map((v, i) => {
              const isActive = i === active;
              return (
                <button
                  key={v.id}
                  onClick={() => setActive(i)}
                  className="relative grid place-items-center"
                  aria-label={v.label}
                  aria-current={isActive}
                >
                  {isActive && <span className="absolute size-6 rounded-full bg-brand/20" />}
                  <span className={`relative rounded-full transition-all ${isActive ? "size-3.5 bg-brand" : "size-3 bg-brand/40"}`} />
                </button>
              );
            })}
          </div>
          <div className="mt-4 flex items-start justify-between">
            {verticals.map((v, i) => (
              <button
                key={v.id}
                onClick={() => setActive(i)}
                className={`w-1/3 px-2 text-center text-xl font-normal transition-colors first:text-left last:text-right sm:text-2xl ${
                  i === active ? "text-navy" : "text-navy/20"
                }`}
              >
                {v.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
