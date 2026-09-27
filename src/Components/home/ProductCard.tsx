import React from "react";
import PillButton from "./ui/PillButton";

/** Shape mirrors the product objects in constants/catalog.js. */
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
  /** Datasheet rows, revealed under "Full specifications". */
  specs?: { label: string; value: string }[];
  primaryCta: { label: string; to: string };
  secondaryCta: { label: string; to: string };
}

/**
 * ProductCard — mirrors the reference catalog card (product render, name +
 * capacity pill, short description, benefit features, and an expandable
 * "Full specifications" table) but in the Voltra type/colour system.
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

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-card border border-navy/10 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Product stage — square for batteries, taller for portrait inverters */}
      <div className={`relative w-full border-b border-navy/10 bg-gradient-to-b from-[#cddaf3] to-[#eef3fb] ${tall ? "aspect-[4/5]" : "aspect-square"}`}>
        <img
          src={image}
          alt={`${product.brand} ${product.name}`}
          className="absolute inset-0 h-full w-full object-contain"
        />
        <span className="absolute bottom-3 left-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-navy/40">
          Voltra Energy
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-4 p-5 sm:p-6">
        {/* Name + inline badge + capacity pill */}
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

        {/* Full specifications — native expandable table, or a link when empty */}
        {hasSpecs ? (
          <details className="group/specs mt-auto border-t border-navy/10 pt-1">
            <summary className="flex cursor-pointer list-none items-center justify-between py-1.5 text-xs font-bold text-brand sm:text-[13px]">
              Full specifications
              <span className="text-lg font-normal leading-none transition-transform duration-300 group-open/specs:rotate-45">
                +
              </span>
            </summary>
            <dl className="mt-1">
              {specs.map((s) => (
                <div
                  key={s.label}
                  className="flex items-start justify-between gap-3 border-b border-navy/10 py-1.5 last:border-0"
                >
                  <dt className="text-xs text-navy/55 sm:text-[12.5px]">{s.label}</dt>
                  <dd className="text-right text-xs font-medium text-navy sm:text-[12.5px]">{s.value}</dd>
                </div>
              ))}
            </dl>
          </details>
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
    </article>
  );
}
