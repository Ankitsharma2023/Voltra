import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowDown } from "lucide-react";

/**
 * PillButton — the one button primitive for the redesigned site.
 *
 * Interaction (per design): buttons rest TRANSPARENT with a blue outline. The
 * solid variant shows its circular arrow badge at the LEFT; on hover the brand
 * blue swipes in from the left, the label turns white, and the arrow badge
 * slides to the RIGHT end. The outline variant shares the same blue fill-swipe.
 *
 * `iconPosition` is retained for API compatibility but no longer affects the
 * solid layout (the arrow always starts left and animates right).
 *
 * Navigation targets come from constants/site.js. Internal paths route via
 * <Link>; "#"/external fall back to <a>.
 */

type Variant = "solid" | "outline";
type Size = "sm" | "md" | "lg";
type IconKind = "arrow" | "download" | "none";

interface PillButtonProps {
  to: string;
  label: string;
  variant?: Variant;
  size?: Size;
  icon?: IconKind;
  iconPosition?: "left" | "right";
  className?: string;
}

interface SizeCfg {
  h: string;
  text: string;
  badge: string;
  icon: number;
  labelDefault: string;
  labelHover: string;
  badgeDefault: string;
  badgeHover: string;
  outlinePad: string;
}

const cfg: Record<Size, SizeCfg> = {
  sm: {
    h: "h-9", text: "text-sm", badge: "size-7", icon: 14,
    labelDefault: "pl-9 pr-4", labelHover: "group-hover:pl-4 group-hover:pr-9",
    badgeDefault: "left-1", badgeHover: "group-hover:left-[calc(100%-2rem)]",
    outlinePad: "px-4",
  },
  md: {
    h: "h-11", text: "text-base", badge: "size-8", icon: 16,
    labelDefault: "pl-11 pr-5", labelHover: "group-hover:pl-5 group-hover:pr-11",
    badgeDefault: "left-1.5", badgeHover: "group-hover:left-[calc(100%-2.375rem)]",
    outlinePad: "px-5",
  },
  lg: {
    h: "h-14", text: "text-lg", badge: "size-10", icon: 18,
    labelDefault: "pl-[4.5rem] pr-8", labelHover: "group-hover:pl-8 group-hover:pr-[4.5rem]",
    badgeDefault: "left-2", badgeHover: "group-hover:left-[calc(100%-3rem)]",
    outlinePad: "px-8",
  },
};

/** Brand blue that wipes in from the left on hover. */
function SwipeFill() {
  return (
    <span
      aria-hidden
      className="absolute inset-0 origin-left scale-x-0 bg-brand transition-transform duration-300 ease-out group-hover:scale-x-100"
    />
  );
}

export default function PillButton({
  to,
  label,
  variant = "solid",
  size = "md",
  icon = "arrow",
  className = "",
}: PillButtonProps) {
  const s = cfg[size];

  let inner: React.ReactNode;
  if (variant === "solid") {
    inner = (
      <span
        className={`group relative inline-flex ${s.h} items-center overflow-hidden rounded-pill border border-brand ${s.text} font-medium text-brand transition-colors duration-300 hover:text-white`}
      >
        <SwipeFill />
        {/* Arrow badge: starts left, slides to the right on hover */}
        <span
          aria-hidden
          className={`absolute top-1/2 z-10 grid -translate-y-1/2 place-items-center rounded-full ${s.badge} ${s.badgeDefault} bg-navy text-white transition-all duration-300 ease-out ${s.badgeHover} group-hover:bg-white group-hover:text-brand`}
        >
          <ArrowRight size={s.icon} strokeWidth={2.2} />
        </span>
        <span className={`relative z-10 whitespace-nowrap ${s.labelDefault} ${s.labelHover} transition-[padding] duration-300 ease-out`}>
          {label}
        </span>
      </span>
    );
  } else {
    const trailing =
      icon === "download" ? (
        <ArrowDown size={s.icon} strokeWidth={2.2} className="ml-2" />
      ) : icon === "arrow" ? (
        <ArrowRight size={s.icon} strokeWidth={2.2} className="ml-2" />
      ) : null;
    inner = (
      <span
        className={`group relative inline-flex ${s.h} items-center overflow-hidden rounded-pill border border-brand ${s.outlinePad} ${s.text} font-medium text-brand transition-colors duration-300 hover:text-white`}
      >
        <SwipeFill />
        <span className="relative z-10 inline-flex items-center whitespace-nowrap">
          {label}
          {trailing}
        </span>
      </span>
    );
  }

  const isInternal = to.startsWith("/");
  if (isInternal) {
    return (
      <Link to={to} className={`inline-flex ${className}`}>
        {inner}
      </Link>
    );
  }
  return (
    <a href={to} className={`inline-flex ${className}`}>
      {inner}
    </a>
  );
}
