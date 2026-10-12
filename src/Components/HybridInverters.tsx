import React from "react";
import ProductPageHero from "./productPage/ProductPageHero";
import SeriesSection from "./productPage/SeriesSection";
import DarkFeatures from "./productPage/DarkFeatures";
import { HYBRID_PAGE, TITAN_SERIES, NEXA_SERIES } from "../constants/site";
import { assets } from "../constants/assets";

/**
 * HybridInverters — the Hybrid Inverters product page (Figma frame
 * "Hybrid Inverters", node 1:977). The product range is split into the two
 * series: Titan (single-phase, three-phase, high-voltage) and Nexa (IP54).
 * The dark-variant Navbar and Footer render globally in App.tsx.
 */
export default function HybridInverters() {
  return (
    <div className="flex w-full flex-col overflow-x-hidden">
      <ProductPageHero
        content={{ hero: HYBRID_PAGE.hero, why: HYBRID_PAGE.why }}
        heroImage={assets.hybridPage.heroInverter}
        imageAlt="Voltra hybrid inverter"
      />
      <SeriesSection
        eyebrow={TITAN_SERIES.eyebrow}
        title={TITAN_SERIES.title}
        groups={TITAN_SERIES.groups}
        tall
      />
      <SeriesSection
        title={NEXA_SERIES.title}
        groups={[{ products: NEXA_SERIES.products }]}
        tall
      />
      <DarkFeatures
        title={HYBRID_PAGE.features.title}
        subtitle={HYBRID_PAGE.features.subtitle}
        items={HYBRID_PAGE.features.items}
      />
    </div>
  );
}
