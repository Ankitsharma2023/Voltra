import React from "react";
import { MARQUEE_ITEMS } from "../../constants/site";

/**
 * Marquee — the navy ticker band under the hero.
 *
 * The track (one full cycle of all phrases) is rendered twice inside a single
 * flex row that scrolls left via the `marquee` animation. Because the second
 * copy is identical, translating the row by exactly half its width (-50%) makes
 * the loop seamless. A diamond separator sits before every phrase so spacing is
 * uniform across the seam between the two copies.
 */
function Track({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {MARQUEE_ITEMS.map((item, i) => (
        <span
          key={i}
          className="flex items-center whitespace-nowrap text-base font-medium tracking-[-0.02em] text-white"
        >
          <span aria-hidden className="mx-8 h-1.5 w-1.5 rotate-45 bg-white/40" />
          {item}
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <div className="w-full overflow-hidden bg-navy py-3.5">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] motion-reduce:animate-none">
        <Track />
        <Track hidden />
      </div>
    </div>
  );
}
