import React from "react";
import { MARQUEE_TEXT } from "../../constants/site";

/**
 * Marquee — the navy ticker band under the hero.
 *
 * The track is rendered twice inside a single flex row and the row scrolls left
 * via the `marquee` animation. Because the second copy is identical, translating
 * the row by exactly half its width (-50%) makes the loop seamless. Per-item
 * right padding (rather than a container gap) keeps the spacing uniform across
 * the seam between the two copies.
 */
function Track({ hidden = false }: { hidden?: boolean }) {
  const items = Array.from({ length: 8 });
  return (
    <div className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((_, i) => (
        <span
          key={i}
          className="pr-[120px] text-base font-medium tracking-[-0.02em] text-white"
        >
          {MARQUEE_TEXT}
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <div className="w-full overflow-hidden bg-navy py-3.5">
      <div className="flex w-max animate-marquee pl-12 hover:[animation-play-state:paused] motion-reduce:animate-none">
        <Track />
        <Track hidden />
      </div>
    </div>
  );
}
