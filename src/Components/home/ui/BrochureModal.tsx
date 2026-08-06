import React, { useEffect } from "react";
import { X, Download } from "lucide-react";

const BROCHURE_URL = "/voltra-brochure.pdf";

/**
 * BrochureModal — a full-screen overlay that previews the Voltra brochure PDF
 * on top of the site (no navigation away). Closes on the ✕, the backdrop, or
 * Escape; locks body scroll while open.
 */
export default function BrochureModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col bg-navy-deep/80 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Voltra brochure"
    >
      {/* Toolbar */}
      <div
        className="flex items-center justify-between gap-4 px-4 py-3 md:px-8"
        onClick={(e) => e.stopPropagation()}
      >
        <span className="text-sm font-medium text-white/90">Voltra — Product Brochure</span>
        <div className="flex items-center gap-2">
          <a
            href={BROCHURE_URL}
            download
            className="inline-flex items-center gap-2 rounded-pill bg-white/10 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/20"
          >
            <Download size={16} strokeWidth={2.2} />
            Download
          </a>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close brochure"
            className="grid size-10 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <X size={20} strokeWidth={2.2} />
          </button>
        </div>
      </div>

      {/* PDF viewer */}
      <div className="flex-1 px-2 pb-4 md:px-8 md:pb-8" onClick={(e) => e.stopPropagation()}>
        <iframe
          src={`${BROCHURE_URL}#view=FitH`}
          title="Voltra brochure"
          className="h-full w-full rounded-xl border-0 bg-white shadow-2xl"
        />
      </div>
    </div>
  );
}
