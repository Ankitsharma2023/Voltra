import React from "react";
import ProductPageHero from "./productPage/ProductPageHero";
import ProductSolutions from "./home/ProductSolutions";
import DarkFeatures from "./productPage/DarkFeatures";
import { HYBRID_PAGE } from "../constants/site";
import { assets } from "../constants/assets";

/**
 * HybridInverters — the Hybrid Inverters product page (Figma frame
 * "Hybrid Inverters", node 1:977). Built from the shared product-page
 * components; the dark-variant Navbar and Footer render globally in App.tsx.
 */
export default function HybridInverters() {
  return (
    <div className="flex w-full flex-col overflow-x-hidden">
      <ProductPageHero
        content={{ hero: HYBRID_PAGE.hero, why: HYBRID_PAGE.why }}
        heroImage={assets.hybridPage.heroInverter}
        imageAlt="Voltra hybrid inverter"
        backdropImage={assets.hybridPage.solarBackdrop}
      />
      <ProductSolutions
        eyebrow={HYBRID_PAGE.range.eyebrow}
        title={HYBRID_PAGE.range.title}
        products={HYBRID_PAGE.range.products}
        images={[assets.hybridPage.cardFront, assets.hybridPage.cardAngle]}
      />
      <DarkFeatures
        title={HYBRID_PAGE.features.title}
        subtitle={HYBRID_PAGE.features.subtitle}
        items={HYBRID_PAGE.features.items}
      />
    </div>
  );
}
