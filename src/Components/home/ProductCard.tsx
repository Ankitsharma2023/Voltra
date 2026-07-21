import React from "react";
import PillButton from "./ui/PillButton";

/** Shape mirrors the product objects in constants/site.js. */
export interface Product {
  id: string;
  brand: string;
  name: string;
  badge?: string;
  capacities: string;
  description?: string;
  specs: { label: string; value: string }[];
  primaryCta: { label: string; to: string };
  secondaryCta: { label: string; to: string };
}

/**
 * ProductCard — used by both the Battery and Inverter solution rows. Product
 * render sits on a soft blue stage; specs + CTAs sit on white below.
 */
export default function ProductCard({ product, image }: { product: Product; image: string }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-card bg-white shadow-card">
      {/* Product stage */}
      <div className="relative aspect-[4/3] w-full bg-gradient-to-b from-[#cddaf3] to-[#eef3fb]">
        <img
          src={image}
          alt={`${product.brand} ${product.name}`}
          className="absolute inset-0 h-full w-full object-contain p-4"
        />
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-5 p-6">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <h3 className="text-2xl text-navy lg:text-[28px]">
              <span className="font-bold">{product.brand}</span>{" "}
              <span className="font-normal">{product.name}</span>
            </h3>
            {product.badge && (
              <span className="rounded-full bg-brand/10 px-2.5 py-0.5 text-xs font-bold uppercase text-brand">
                {product.badge}
              </span>
            )}
          </div>
          <p className="text-sm text-navy/50">{product.capacities}</p>
          {product.description && (
            <p className="mt-1 text-sm leading-relaxed text-navy/60">{product.description}</p>
          )}
        </div>

        <div className="h-px w-full bg-navy/10" />

        <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2.5">
          {product.specs.map((spec) => (
            <React.Fragment key={spec.label}>
              <dt className="text-sm text-navy/50">{spec.label}</dt>
              <dd className="text-sm font-medium text-navy">{spec.value}</dd>
            </React.Fragment>
          ))}
        </dl>

        <div className="mt-auto flex flex-wrap items-center gap-3 pt-1">
          <PillButton to={product.primaryCta.to} label={product.primaryCta.label} variant="solid" size="sm" />
          <PillButton
            to={product.secondaryCta.to}
            label={product.secondaryCta.label}
            variant="outline"
            size="sm"
            icon="download"
          />
        </div>
      </div>
    </article>
  );
}
