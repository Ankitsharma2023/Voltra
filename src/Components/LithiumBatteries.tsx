import React from "react";
import ProductPageHero from "./productPage/ProductPageHero";
import ProductSolutions from "./home/ProductSolutions";
import DarkFeatures from "./productPage/DarkFeatures";
import { LITHIUM_PAGE } from "../constants/site";
import { assets } from "../constants/assets";

/**
 * LithiumBatteries — the Lithium Batteries product page (Figma frame
 * "Lithium Batteries", node 1:1364). Shares the exact structure of the Hybrid
 * page, so it reuses the same product-page components with different content.
 */
export default function LithiumBatteries() {
  return (
    <div className="flex w-full flex-col overflow-x-hidden">
      <ProductPageHero
        content={{ hero: LITHIUM_PAGE.hero, why: LITHIUM_PAGE.why }}
        heroImage={assets.lithiumPage.heroBattery}
        imageAlt="Voltra LFP lithium battery"
        backdropImage={assets.lithiumPage.solarBackdrop}
      />
      <ProductSolutions
        eyebrow={LITHIUM_PAGE.range.eyebrow}
        title={LITHIUM_PAGE.range.title}
        products={LITHIUM_PAGE.range.products}
        images={[assets.lithiumPage.cardFront, assets.lithiumPage.cardAngle]}
      />
      <DarkFeatures
        title={LITHIUM_PAGE.features.title}
        subtitle={LITHIUM_PAGE.features.subtitle}
        items={LITHIUM_PAGE.features.items}
      />
    </div>
  );
}
