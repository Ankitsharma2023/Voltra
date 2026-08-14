import React from "react";
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
  return (
    <article className="flex flex-col overflow-hidden rounded-card bg-white shadow-card">
      {/* Product stage — square for batteries, taller for portrait inverters */}
      <div className={`relative w-full bg-gradient-to-b from-[#cddaf3] to-[#eef3fb] ${tall ? "aspect-[4/5]" : "aspect-square"}`}>
        <img
          src={image}
          alt={`${product.brand} ${product.name}`}
          className="absolute inset-0 h-full w-full object-contain"
        />
        {product.badge && (
          <span className="absolute left-3 top-3 z-10 whitespace-nowrap rounded-full bg-brand px-2.5 py-0.5 text-[10px] font-bold uppercase text-white sm:text-xs">
            {product.badge}
          </span>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-3.5 p-4 sm:gap-5 sm:p-6">
        <div className="flex flex-col gap-1">
          <h3 className="line-clamp-2 text-base leading-tight text-navy sm:text-xl lg:text-[22px]">
            <span className="font-bold">{product.brand}</span>
            <span className="font-normal">-{product.name}</span>
          </h3>
          {product.capacities && <p className="text-xs text-navy/50 sm:text-sm">{product.capacities}</p>}
          {product.description && (
            <p className="mt-1 text-xs leading-relaxed text-navy/60 sm:text-sm">{product.description}</p>
          )}
        </div>

        {product.specs?.length > 0 && (
          <>
            <div className="h-px w-full bg-navy/10" />
            <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 sm:gap-x-6 sm:gap-y-2.5">
              {product.specs.map((spec) => (
                <React.Fragment key={spec.label}>
                  <dt className="text-xs text-navy/50 sm:text-sm">{spec.label}</dt>
                  <dd className="whitespace-nowrap text-xs font-medium text-navy sm:text-sm">{spec.value}</dd>
                </React.Fragment>
              ))}
            </dl>
          </>
        )}

        <div className="mt-auto flex flex-col gap-2 pt-1">
          <PillButton
            to={product.primaryCta.to}
            label={product.primaryCta.label}
            variant="solid"
            size="sm"
            block
            textClass="text-xs sm:text-sm"
          />
          <PillButton
            to={product.secondaryCta.to}
            label={product.secondaryCta.label}
            variant="outline"
            size="sm"
            icon="download"
            block
            textClass="text-xs sm:text-sm"
          />
        </div>
      </div>
    </article>
  );
}
