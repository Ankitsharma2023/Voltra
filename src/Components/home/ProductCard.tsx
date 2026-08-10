import React, { useState } from "react";
import PillButton from "./ui/PillButton";
import BrochureModal from "./ui/BrochureModal";

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
  specs?: { label: string; value: string }[];
  primaryCta: { label: string; to: string };
  secondaryCta: { label: string; to: string };
}

/**
 * ProductCard — used by both the Battery and Inverter solution rows. Product
 * render sits on a soft blue stage; specs + CTAs sit on white below.
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
  const [brochureOpen, setBrochureOpen] = useState(false);

  return (
    <article className="flex flex-col overflow-hidden rounded-card bg-white shadow-card">
      {/* Product stage — square for batteries, taller for portrait inverters */}
      <div className={`relative w-full bg-gradient-to-b from-[#cddaf3] to-[#eef3fb] ${tall ? "aspect-[4/5]" : "aspect-square"}`}>
        <img
          src={image}
          alt={`${product.brand} ${product.name}`}
          className="absolute inset-0 h-full w-full object-contain"
        />
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-5 p-6">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <h3 className="min-w-0 flex-1 truncate whitespace-nowrap text-lg leading-tight text-navy sm:text-xl lg:text-[22px]">
              <span className="font-bold">{product.brand}</span>{" "}
              <span className="font-normal">{product.name}</span>
            </h3>
            {product.badge && (
              <span className="shrink-0 whitespace-nowrap rounded-full bg-brand px-2.5 py-0.5 text-xs font-bold uppercase text-white">
                {product.badge}
              </span>
            )}
          </div>
          {product.capacities && <p className="text-sm text-navy/50">{product.capacities}</p>}
          {product.description && (
            <p className="mt-1 text-sm leading-relaxed text-navy/60">{product.description}</p>
          )}
        </div>

        {product.specs?.length > 0 && (
          <>
            <div className="h-px w-full bg-navy/10" />
            <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2.5">
              {product.specs.map((spec) => (
                <React.Fragment key={spec.label}>
                  <dt className="text-sm text-navy/50">{spec.label}</dt>
                  <dd className="text-sm font-medium text-navy">{spec.value}</dd>
                </React.Fragment>
              ))}
            </dl>
          </>
        )}

        <div className="mt-auto flex flex-wrap items-center gap-3 pt-1">
          <PillButton to={product.primaryCta.to} label={product.primaryCta.label} variant="solid" size="sm" />
          <PillButton
            label={product.secondaryCta.label}
            variant="outline"
            size="sm"
            icon="download"
            onClick={() => setBrochureOpen(true)}
          />
        </div>
      </div>

      <BrochureModal open={brochureOpen} onClose={() => setBrochureOpen(false)} />
    </article>
  );
}
