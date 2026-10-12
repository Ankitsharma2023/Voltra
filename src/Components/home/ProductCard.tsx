import React from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import PillButton from "./ui/PillButton";

/** Shape mirrors the product objects in constants/catalog.js. */
export interface Product {
  id: string;
  brand: string;
  name: string;
  badge?: string;
  /** Optional model number / sub-title shown under the name. */
  model?: string;
  capacities?: string;
  description?: string;
  /** Per-product photo; overrides the cycled `images` array in ProductSolutions. */
  image?: string;
  /** Benefit bullets: bold title + supporting detail. */
  features?: { title: string; detail: string }[];
  /** Datasheet rows, revealed under "Full specifications". */
  specs?: { label: string; value: string }[];
  /** Multi-config products (e.g. HVC 6/8/10 modules) — a toggle in the spec modal. */
  specVariants?: { label: string; specs: { label: string; value: string }[] }[];
  /** New/unreleased product — shows "Full specifications coming soon" in place of the table. */
  comingSoon?: boolean;
  primaryCta: { label: string; to: string };
  secondaryCta: { label: string; to: string };
}

/**
 * SpecModal — a full-screen overlay (portal to <body>) that slides/fades in over
 * the page and presents the product's complete specification table, plus its
 * name/capacity/benefits for context. Closes on Escape, backdrop click, or ×.
 */
function SpecModal({
  product,
  image,
  open,
  onClose,
}: {
  product: Product;
  image: string;
  open: boolean;
  onClose: () => void;
}) {
  // Keep the node mounted through the exit animation, and drive the enter/exit
  // transition with a `show` flag toggled one frame after mount.
  const [mounted, setMounted] = React.useState(open);
  const [show, setShow] = React.useState(false);
  const variants = product.specVariants;
  const [vi, setVi] = React.useState(0);

  React.useEffect(() => {
    if (open) {
      setMounted(true);
      const id = requestAnimationFrame(() => setShow(true));
      return () => cancelAnimationFrame(id);
    }
    setShow(false);
    const t = setTimeout(() => setMounted(false), 300);
    return () => clearTimeout(t);
  }, [open]);

  // Lock body scroll + wire Escape while the modal is open.
  React.useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!mounted) return null;

  const specs = variants ? variants[vi].specs : product.specs ?? [];

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={`${product.brand}-${product.name} full specifications`}
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-navy/60 backdrop-blur-sm transition-opacity duration-300 ${
          show ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Panel — slides up on phones, scales in on larger screens */}
      <div
        className={`relative flex max-h-[90vh] w-full max-w-xl flex-col overflow-hidden rounded-t-card bg-white shadow-2xl transition-all duration-300 ease-out sm:rounded-card ${
          show ? "translate-y-0 opacity-100 sm:scale-100" : "translate-y-8 opacity-0 sm:translate-y-0 sm:scale-95"
        }`}
      >
        {/* Header */}
        <div className="flex items-start gap-4 border-b border-navy/10 p-5 sm:p-6">
          <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl border border-navy/10 bg-gradient-to-b from-[#cddaf3] to-[#eef3fb]">
            <img src={image} alt="" className="absolute inset-0 h-full w-full object-contain p-1" />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="text-lg leading-tight text-navy sm:text-xl">
              <span className="font-bold">{product.brand}</span>
              <span className="font-normal">-{product.name}</span>
              {variants && <span className="font-normal text-navy/50"> · {variants[vi].label}</span>}
              {product.badge && (
                <span className="ml-2 align-middle text-xs font-semibold uppercase tracking-wide text-brand">
                  {product.badge}
                </span>
              )}
            </h3>
            {product.capacities && (
              <span className="mt-1.5 inline-block rounded bg-brand px-2.5 py-1 text-[11.5px] font-bold tracking-wide text-white">
                {product.capacities}
              </span>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close specifications"
            className="grid size-9 shrink-0 place-items-center rounded-full text-navy/50 transition-colors hover:bg-navy/5 hover:text-navy"
          >
            <X size={18} strokeWidth={2.2} />
          </button>
        </div>

        {/* Scrollable body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6">
          {variants && variants.length > 1 && (
            <div className="mb-5 flex flex-wrap gap-2">
              {variants.map((v, i) => (
                <button
                  key={v.label}
                  type="button"
                  onClick={() => setVi(i)}
                  aria-pressed={i === vi}
                  className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                    i === vi
                      ? "border-brand bg-brand text-white"
                      : "border-navy/20 text-navy/70 hover:border-navy/40"
                  }`}
                >
                  {v.label}
                </button>
              ))}
            </div>
          )}
          {product.description && (
            <p className="mb-5 text-[13px] leading-relaxed text-navy/55">{product.description}</p>
          )}
          <h4 className="mb-2 text-xs font-bold uppercase tracking-[0.15em] text-navy/40">
            Full specifications
          </h4>
          <dl>
            {specs.map((s) => (
              <div
                key={s.label}
                className="flex items-start justify-between gap-4 border-b border-navy/10 py-2.5 last:border-0"
              >
                <dt className="text-[13px] text-navy/55">{s.label}</dt>
                <dd className="text-right text-[13px] font-medium text-navy">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Footer CTA */}
        <div className="border-t border-navy/10 p-4 sm:p-5">
          <PillButton
            to={product.primaryCta.to}
            label={product.primaryCta.label}
            variant="solid"
            size="md"
            block
          />
        </div>
      </div>
    </div>,
    document.body
  );
}

/**
 * ProductCard — mirrors the reference catalog card (product render, name +
 * capacity pill, short description, benefit features, and a "Full
 * specifications" action that opens a full-screen modal) in the Voltra
 * type/colour system.
 */
export default function ProductCard({
  product,
  image,
  tall = false,
}: {
  product: Product;
  image: string;
  /** Inverter renders are portrait — a taller stage lets them fill the card. */
  tall?: boolean;
}) {
  const specs = product.specs ?? [];
  const hasSpecs = specs.length > 0;
  const [specsOpen, setSpecsOpen] = React.useState(false);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-card border border-navy/10 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Product stage — square for batteries, taller for portrait inverters */}
      <div className={`relative w-full border-b border-navy/10 bg-gradient-to-b from-[#cddaf3] to-[#eef3fb] ${tall ? "aspect-[4/5]" : "aspect-square"}`}>
        <img
          src={image}
          alt={`${product.brand} ${product.name}`}
          className="absolute inset-0 h-full w-full object-contain"
        />
        {product.badge && (
          <span className="absolute right-3 top-3 rounded-md bg-navy px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-white shadow-sm">
            {product.badge}
          </span>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-4 p-5 sm:p-6">
        {/* Name + inline badge + capacity pill */}
        <div>
          <h3 className="text-lg leading-tight text-navy sm:text-xl lg:text-[22px]">
            <span className="font-bold">{product.brand}</span>
            <span className="font-normal">-{product.name}</span>
          </h3>
          {product.model && (
            <p className="mt-1 text-[11px] uppercase tracking-wide text-navy/40 sm:text-xs">{product.model}</p>
          )}
          {product.capacities && (
            <span className="mt-2 inline-block rounded bg-brand px-2.5 py-1 text-[11.5px] font-bold tracking-wide text-white">
              {product.capacities}
            </span>
          )}
        </div>

        {/* Description */}
        {product.description && (
          <p className="text-xs leading-relaxed text-navy/55 sm:text-[13px]">{product.description}</p>
        )}

        {/* Benefit features */}
        {product.features && product.features.length > 0 && (
          <ul className="flex flex-col gap-2">
            {product.features.map((f) => (
              <li key={f.title} className="flex gap-2.5 text-xs leading-snug sm:text-[13px]">
                <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-[1px] bg-brand" aria-hidden />
                <span className="text-navy/55">
                  <strong className="font-semibold text-navy">{f.title}</strong>
                  {f.detail && <> — {f.detail}</>}
                </span>
              </li>
            ))}
          </ul>
        )}

        {/* Full specifications — modal when available, "coming soon" for new
            products, else a link to request the datasheet */}
        {hasSpecs ? (
          <button
            type="button"
            onClick={() => setSpecsOpen(true)}
            aria-haspopup="dialog"
            className="mt-auto flex w-full items-center justify-between border-t border-navy/10 pt-2.5 text-xs font-bold text-brand transition-colors hover:text-brand/80 sm:text-[13px]"
          >
            Full specifications
            <span className="text-lg font-normal leading-none" aria-hidden>
              +
            </span>
          </button>
        ) : product.comingSoon ? (
          <div className="mt-auto border-t border-navy/10 pt-2.5 text-xs font-bold text-brand sm:text-[13px]">
            Full specifications coming soon
          </div>
        ) : (
          <div className="mt-auto pt-1">
            <PillButton
              to={product.secondaryCta.to}
              label="Full Specification"
              variant="outline"
              size="sm"
              icon="download"
              block
              textClass="text-xs sm:text-sm"
            />
          </div>
        )}
      </div>

      {hasSpecs && (
        <SpecModal product={product} image={image} open={specsOpen} onClose={() => setSpecsOpen(false)} />
      )}
    </article>
  );
}
