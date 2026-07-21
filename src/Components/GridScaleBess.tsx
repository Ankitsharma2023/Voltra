import React from "react";
import ProductPageHero from "./productPage/ProductPageHero";
import DarkFeatures from "./productPage/DarkFeatures";
import { BESS_PAGE } from "../constants/site";
import { assets } from "../constants/assets";

/**
 * GridScaleBess — the Grid-Scale BESS page (Figma frame "Grid-Scale BESS",
 * node 1:1751). Same template as the other product pages but without a product
 * range, so it's just the shared hero + dark features panel.
 */
export default function GridScaleBess() {
  return (
    <div className="flex w-full flex-col overflow-x-hidden">
      <ProductPageHero
        content={{ hero: BESS_PAGE.hero, why: BESS_PAGE.why }}
        heroImage={assets.bessPage.heroCabinet}
        imageAlt="Voltra VOLT-LINK grid-scale BESS cabinet"
      />
      <DarkFeatures
        title={BESS_PAGE.features.title}
        subtitle={BESS_PAGE.features.subtitle}
        items={BESS_PAGE.features.items}
      />
    </div>
  );
}
