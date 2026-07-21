import React from "react";

/**
 * ConcentricRings — the faint expanding arcs behind centred hero copy
 * (Energy Advisor node 62:331, Contact node 62:161).
 *
 * Drawn as nested bordered circles rather than an exported image so they stay
 * crisp at any width and cost nothing to download. They deliberately overflow
 * their section, so the parent must clip (`overflow-hidden`).
 */
export default function ConcentricRings({
  sizes = [520, 760, 1000],
  className = "",
}: {
  /** Diameters in px, small to large. */
  sizes?: number[];
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${className}`}
    >
      {sizes.map((size) => (
        <div
          key={size}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-navy/[0.07]"
          style={{ width: size, height: size }}
        />
      ))}
    </div>
  );
}
