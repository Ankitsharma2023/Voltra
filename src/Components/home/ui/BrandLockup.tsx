import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../../../constants/assets";
import { FOOTER } from "../../../constants/site";

/**
 * BrandLockup — the Voltra mark + wordmark + tagline, used by both the navbar
 * and the footer (previously duplicated in each).
 *
 * `onDark` selects the colourway. This tracks the SURFACE the lockup sits on,
 * not the page: the navbar is transparent, so it turns dark whenever it sits
 * over the blue hero band, and the lockup has to follow or it renders blue on
 * blue and disappears.
 *
 * The artwork is a combined bolt+wordmark lockup, so the tagline is indented to
 * line up under the wordmark rather than the bolt.
 */
export default function BrandLockup({
  onDark,
  className = "",
}: {
  onDark: boolean;
  className?: string;
}) {
  return (
    <Link
      to="/"
      aria-label="Voltra home"
      className={`flex shrink-0 flex-col gap-[3px] ${className}`}
    >
      <img
        src={onDark ? assets.logo.lockupOnDark : assets.logo.lockup}
        alt="Voltra"
        width={130}
        height={46}
        className="h-[42px] w-auto shrink-0 select-none self-start"
      />
      <span
        className={`whitespace-nowrap pl-[34%] font-akshar text-[8.5px] font-medium uppercase leading-none tracking-[0.08em] ${
          onDark ? "text-white/80" : "text-brand"
        }`}
      >
        {FOOTER.tagline}
      </span>
    </Link>
  );
}
