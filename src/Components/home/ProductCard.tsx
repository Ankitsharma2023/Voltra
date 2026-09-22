import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import PillButton from "./ui/PillButton";

/** Shape mirrors the product objects in constants/site.js. */
export interface Product {
  id: string;
  brand: string;
  name: string;
  badge?: string;
  capacities?: string;
  description?: string;
  /** Per-product photo; overrides the cycled `images` array in ProductSolutions. */
  image?: string;
  /** Benefit bullets: bold title + supporting detail. */
  features?: { title: string; detail: string }[];
  /** Detailed datasheet rows, revealed under "Full Specification". */
  specs?: { label: string; value: string }[];
  primaryCta: { label: string; to: string };
  secondaryCta: { label: string; to: string };
}

/**
 * ProductCard — product render on a soft blue stage, then name + capacity,
 * a short description, three benefit features, and an expandable
 * "Full Specification" table that reveals the full datasheet rows.
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
  const [open, setOpen] = useState(false);
  const specs = product.specs ?? [];
  const hasSpecs = specs.length > 0;

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-card bg-white shadow-card">
      {/* Product stage — square for batteries, taller for portrait inverters */}
      <div className={`relative w-full bg-gradient-to-b from-[#cddaf3] to-[#eef3fb] ${tall ? "aspect-[4/5]" : "aspect-square"}`}>
        <img
          src={image}
          alt={`${product.brand} ${product.name}`}
          className="absolute inset-0 h-full w-full object-contain"
        />
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-4 p-5 sm:p-6">
        {/* Name + inline badge */}
        <div>
          <h3 className="text-lg leading-tight text-navy sm:text-xl lg:text-[22px]">
            <span className="font-bold">{product.brand}</span>
            <span className="font-normal">-{product.name}</span>
            {product.badge && (
              <span className="ml-2 align-middle text-xs font-semibold uppercase tracking-wide text-brand">
                {product.badge}
              </span>
            )}
          </h3>
          {product.capacities && (
            <p className="mt-1.5 text-xs text-navy/50 sm:text-sm">{product.capacities}</p>
          )}
        </div>

        {/* Description */}
        {product.description && (
          <>
            <div className="h-px w-full bg-navy/10" />
            <p className="text-xs leading-relaxed text-navy/60 sm:text-[13px]">{product.description}</p>
          </>
        )}

        {/* Benefit features */}
        {product.features && product.features.length > 0 && (
          <ul className="flex flex-col gap-3">
            {product.features.map((f) => (
              <li key={f.title}>
                <p className="text-xs font-semibold text-navy sm:text-sm">{f.title}</p>
                <p className="text-xs leading-snug text-navy/55 sm:text-[13px]">{f.detail}</p>
              </li>
            ))}
          </ul>
        )}

        {/* Full Specification — expandable table, or a link when we have no rows */}
        <div className="mt-auto pt-1">
          <div className="h-px w-full bg-navy/10" />
          {hasSpecs ? (
            <>
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                className="mt-3 flex w-full items-center justify-between gap-2 whitespace-nowrap rounded-pill border border-brand px-3 py-2.5 text-xs font-semibold text-brand transition-colors hover:bg-brand hover:text-white sm:px-4 sm:text-sm"
              >
                <span>
                  <span className="sm:hidden">Specs</span>
                  <span className="hidden sm:inline">Full Specification</span>
                </span>
                <ChevronDown size={16} className={`shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
              </button>
              {open && (
                <dl className="mt-3">
                  {specs.map((s) => (
                    <div
                      key={s.label}
                      className="flex items-start justify-between gap-3 border-b border-navy/10 py-2 last:border-0"
                    >
                      <dt className="text-xs text-navy/55 sm:text-[13px]">{s.label}</dt>
                      <dd className="text-right text-xs font-medium text-navy sm:text-[13px]">{s.value}</dd>
                    </div>
                  ))}
                </dl>
              )}
            </>
          ) : (
            <PillButton
              to={product.secondaryCta.to}
              label={
                <>
                  <span className="sm:hidden">Specs</span>
                  <span className="hidden sm:inline">Full Specification</span>
                </>
              }
              variant="outline"
              size="sm"
              icon="download"
              block
              textClass="text-xs sm:text-sm"
              className="mt-3"
            />
          )}
        </div>
      </div>
    </article>
  );
}
