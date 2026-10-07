import React from "react";
import { ANNOUNCEMENT } from "../../constants/site";

/**
 * AnnouncementBar — slim promo strip pinned above the navbar. The "Meet us at"
 * prefix is hidden on phones so the line fits on one row.
 */
export default function AnnouncementBar() {
  const { prefix, event, venue, dates } = ANNOUNCEMENT;
  return (
    <div className="w-full bg-brand text-white">
      <p className="mx-auto flex max-w-page flex-wrap items-center justify-center gap-x-2 gap-y-0.5 px-4 py-2 text-center text-[12px] font-medium leading-snug sm:text-sm">
        <span>
          <span className="hidden sm:inline">{prefix}</span>
          <span className="font-semibold">{event}</span>
          <span className="px-1.5 opacity-60">·</span>
          {venue}
        </span>
        <span className="inline-flex items-center gap-1 whitespace-nowrap">
          <span aria-hidden className="opacity-70">→</span>
          {dates}
        </span>
      </p>
    </div>
  );
}
