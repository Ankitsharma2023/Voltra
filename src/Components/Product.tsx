import React from "react";
import ProductSolutions from "./home/ProductSolutions";
import Eyebrow from "./home/ui/Eyebrow";
import { RESIDENTIAL_BATTERIES, HYBRID_INVERTERS, HIGH_VOLTAGE_PRODUCTS } from "../constants/site";

/**
 * Products — the "Our Products" catalogue page. Lists the full Voltra line-up
 * (residential batteries + hybrid inverters) using the shared product cards.
 *
 * NOTE: category/use-case filtering is not designed yet (pending the designer),
 * so for now every product is listed under its category section. The Navbar and
 * SiteFooter render globally in App.tsx.
 */
export default function Products() {
  return (
    <div className="flex w-full flex-col overflow-x-hidden">
      {/* Hero band — continues the flat dark nav above it */}
      <section className="w-full">
        <div className="relative overflow-hidden rounded-b-[48px] bg-gradient-to-r from-royal to-navy-deep">
          <div className="relative mx-auto max-w-page px-6 pb-24 pt-28 md:px-12 lg:px-20 lg:pb-28 lg:pt-32">
            <div className="flex max-w-[760px] flex-col gap-6">
              <Eyebrow bar="left" tone="onDark">Product Catalogue</Eyebrow>
              <h1 className="text-3xl font-medium leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-[54px]/[1.15]">
                Every Voltra product, in one place.
              </h1>
              <p className="max-w-[620px] text-base leading-relaxed text-white/70">
                Browse the full Voltra line-up — from residential LFP batteries and hybrid
                inverters to the high-voltage BESS range. Category and use-case filters are on the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* All batteries */}
      <ProductSolutions
        eyebrow="Residential Energy Storage"
        title="Batteries"
        products={RESIDENTIAL_BATTERIES}
      />

      {/* All hybrid inverters */}
      <ProductSolutions
        eyebrow="Hybrid Inverters"
        title="Inverters"
        products={HYBRID_INVERTERS}
        tall
      />

      {/* High voltage range (HVC, Stackable Racks, Link Air) */}
      <ProductSolutions
        eyebrow="High-Capacity & BESS"
        title="High Voltage Range"
        products={HIGH_VOLTAGE_PRODUCTS.products}
        tall
      />
    </div>
  );
}
