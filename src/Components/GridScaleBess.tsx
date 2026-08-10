import React from "react";
import ProductPageHero from "./productPage/ProductPageHero";
import ProductSolutions from "./home/ProductSolutions";
import DarkFeatures from "./productPage/DarkFeatures";
import { BESS_PAGE, HIGH_VOLTAGE_PRODUCTS } from "../constants/site";
import { assets } from "../constants/assets";

/**
 * GridScaleBess — the Grid-Scale BESS page (Figma frame "Grid-Scale BESS",
 * node 1:1751): shared hero + why block, the High Voltage Range product row,
 * then the dark features panel.
 */
export default function GridScaleBess() {
  return (
    <div className="flex w-full flex-col overflow-x-hidden">
      <ProductPageHero
        content={{ hero: BESS_PAGE.hero, why: BESS_PAGE.why }}
        heroImage={assets.bessPage.heroCabinet}
        imageAlt="Voltra VOLT-LINK grid-scale BESS cabinet"
      />
      <ProductSolutions
        eyebrow="Product range"
        title="High Voltage Range Products"
        products={HIGH_VOLTAGE_PRODUCTS.products}
        tall
      />
      <DarkFeatures
        title={BESS_PAGE.features.title}
        subtitle={BESS_PAGE.features.subtitle}
        items={BESS_PAGE.features.items}
      />
    </div>
  );
}
