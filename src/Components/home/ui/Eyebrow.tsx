import React from "react";

/**
 * Eyebrow — the small uppercase, wide-tracked kicker above section headings.
 * `bar` places the accent rule on the left, right, or omits it, matching the
 * different section treatments in the Figma.
 */
export default function Eyebrow({
  children,
  bar = "none",
  className = "",
  tone = "brand",
}: {
  children: React.ReactNode;
  bar?: "left" | "right" | "none";
  className?: string;
  tone?: "brand" | "onDark";
}) {
  const color = tone === "onDark" ? "text-white" : "text-brand-strong";
  const rule = tone === "onDark" ? "bg-white" : "bg-brand-strong";
  const Rule = <span className={`h-4 w-0.5 shrink-0 ${rule}`} aria-hidden />;
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {bar === "left" && Rule}
      <span
        className={`font-bold uppercase leading-none ${color}`}
        style={{ fontSize: "14px", letterSpacing: "0.32em" }}
      >
        {children}
      </span>
      {bar === "right" && Rule}
    </div>
  );
}
