import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../../../constants/assets";

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
/**
 * `size` scales the mark. "md" is the original footer size; "lg" is the larger
 * navbar treatment.
 */
const SIZES = {
  md: { img: "h-[42px]" },
  lg: { img: "h-[56px]" },
} as const;

export default function BrandLockup({
  onDark,
  size = "md",
  className = "",
}: {
  onDark: boolean;
  size?: keyof typeof SIZES;
  className?: string;
}) {
  const s = SIZES[size];
  return (
    <Link to="/" aria-label="Voltra home" className={`flex w-fit shrink-0 items-center ${className}`}>
      <img
        src={onDark ? assets.logo.lockupOnDark : assets.logo.lockup}
        alt="Voltra"
        width={130}
        height={46}
        className={`${s.img} w-auto shrink-0 select-none`}
      />
    </Link>
  );
}
