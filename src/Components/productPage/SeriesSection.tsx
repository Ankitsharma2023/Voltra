import React from "react";
import ProductCard, { Product } from "../home/ProductCard";
import Eyebrow from "../home/ui/Eyebrow";

export interface SeriesGroup {
  /** Sub-heading like "Single Phase · 3–8 kW". Omit for a single ungrouped grid. */
  label?: string;
  products: Product[];
}

/**
 * SeriesSection — a product-range section headed by a series title, with one or
 * more labelled sub-groups of cards beneath it (e.g. the Hybrid Inverters page
 * split into the Titan and Nexa series). Mirrors ProductSolutions' card grid.
 */
export default function SeriesSection({
  eyebrow,
  title,
  groups,
  tall = false,
}: {
  eyebrow?: string;
  title: string;
  groups: SeriesGroup[];
  tall?: boolean;
}) {
  return (
    <section className="w-full py-16 lg:py-20">
      <div className="mx-auto max-w-content px-6 md:px-12 lg:px-8">
        {eyebrow && (
          <Eyebrow bar="left" className="mb-4">
            {eyebrow}
          </Eyebrow>
        )}
        <h2 className="max-w-[760px] text-3xl font-medium leading-[1.15] tracking-tight text-navy sm:text-4xl lg:text-[44px]/[1.12]">
          {title}
        </h2>

        <div className="mt-12 flex flex-col gap-14">
          {groups.map((g, gi) => (
            <div key={g.label ?? gi}>
              {g.label && (
                <div className="mb-6 flex items-center gap-3">
                  <span className="h-px w-6 bg-brand" aria-hidden />
                  <span className="text-sm font-semibold uppercase tracking-[0.12em] text-brand">
                    {g.label}
                  </span>
                </div>
              )}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                {g.products.map((product, i) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    image={product.image ?? ""}
                    tall={tall}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
