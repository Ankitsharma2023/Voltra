import React from "react";
import ProductSolutions from "./home/ProductSolutions";
import Eyebrow from "./home/ui/Eyebrow";
import { CATALOG } from "../constants/catalog";

/** Inverter renders are portrait, so those sections use the taller stage. */
const TALL_CATS = new Set(["single-phase", "three-phase", "three-phase-hv"]);
/** Group label shown above each section's title. */
const GROUP = (key: string) =>
  key.includes("phase") || key === "all-in-one" ? "Inverters & Backup" : "Energy Storage";

/**
 * Products — the "Our Products" catalogue page. Renders the full Voltra line-up
 * from the generated catalog (constants/catalog.js): eight category sections,
 * each with the shared product cards. The Navbar and SiteFooter render globally
 * in App.tsx.
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

      {/* Every category from the catalog, in order */}
      {CATALOG.map((cat) => (
        <ProductSolutions
          key={cat.key}
          eyebrow={GROUP(cat.key)}
          title={cat.title}
          subtitle={cat.subtitle}
          products={cat.products}
          tall={TALL_CATS.has(cat.key)}
        />
      ))}
    </div>
  );
}
