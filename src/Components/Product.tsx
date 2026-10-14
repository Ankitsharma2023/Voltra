import React from "react";
import ProductSolutions from "./home/ProductSolutions";
import Eyebrow from "./home/ui/Eyebrow";
import { ALL_INVERTERS, RESIDENTIAL_BATTERIES, HIGH_VOLTAGE_PRODUCTS } from "../constants/site";

const JUMP = [
  { label: "Inverters", id: "inverters" },
  { label: "Batteries", id: "batteries" },
  { label: "BESS", id: "bess" },
];

/** Three buttons that jump straight to each product section. */
function JumpNav() {
  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <div className="flex flex-wrap gap-3">
      {JUMP.map((j) => (
        <button
          key={j.id}
          type="button"
          onClick={() => go(j.id)}
          className="inline-flex h-11 items-center rounded-pill bg-white px-6 text-sm font-medium text-brand-strong shadow-soft transition-transform hover:-translate-y-0.5"
        >
          {j.label}
        </button>
      ))}
    </div>
  );
}

/**
 * Products — the "Our Products" catalogue page. Three flat sections, no internal
 * sub-grouping: every hybrid inverter, every lithium battery (ascending), and
 * the BESS range. A "Browse products" dropdown jumps to each section. Navbar and
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
                inverters to the high-voltage BESS range.
              </p>
              <JumpNav />
            </div>
          </div>
        </div>
      </section>

      {/* Inverters */}
      <ProductSolutions
        id="inverters"
        eyebrow="Inverters"
        title="Hybrid Inverters · 3 kW to 80 kW"
        products={ALL_INVERTERS}
        tall
      />

      {/* Batteries */}
      <ProductSolutions
        id="batteries"
        eyebrow="Batteries"
        title="LiFePO4 Lithium Batteries · 1.28 KWH to 256 KWH"
        products={RESIDENTIAL_BATTERIES}
      />

      {/* BESS */}
      <ProductSolutions
        id="bess"
        eyebrow="Energy Storage"
        title={HIGH_VOLTAGE_PRODUCTS.title}
        products={HIGH_VOLTAGE_PRODUCTS.products}
      />
    </div>
  );
}
