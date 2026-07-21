import React from "react";
import { assets } from "../../constants/assets";
import Eyebrow from "../home/ui/Eyebrow";

/**
 * ProductPageHero — the shared hero used by every product-category page
 * (Hybrid Inverters, Lithium Batteries, …). A dark gradient headline band that
 * continues the flat dark nav above it, followed by a centered intro line and
 * the light "Why …" block: product image on the left, right-aligned copy +
 * capability chips on the right.
 *
 * The hero subtitle deliberately lives *below* the dark band (not merged into
 * it), sitting on the light page — over an optional faint backdrop image.
 *
 * All copy comes from the page's constants object; only content, heroImage and
 * the optional backdrop differ between pages.
 */
export interface ProductHeroContent {
  hero: { eyebrow: string; title: string; subtitle: string };
  why: {
    eyebrow: string;
    title: string;
    body: string;
    chips: { label: string; active?: boolean }[];
  };
}

export default function ProductPageHero({
  content,
  heroImage,
  imageAlt,
  backdropImage,
}: {
  content: ProductHeroContent;
  heroImage: string;
  imageAlt: string;
  /** Optional faint photo behind the intro/why area (e.g. Lithium solar grid). */
  backdropImage?: string;
}) {
  const { hero, why } = content;
  return (
    <section className="w-full">
      {/* Dark band — merges seamlessly with the flat dark nav above */}
      <div className="relative overflow-hidden rounded-b-[48px] bg-gradient-to-r from-royal to-navy-deep">
        <img
          src={assets.aboutPage.headerTexture}
          alt=""
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-10"
        />
        <div className="relative mx-auto max-w-page px-6 pb-24 pt-6 md:px-12 lg:px-20 lg:pb-32">
          <div className="flex max-w-[760px] flex-col gap-6">
            <Eyebrow bar="left" tone="onDark">{hero.eyebrow}</Eyebrow>
            <h1 className="text-3xl font-medium leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-[54px]/[1.15]">
              {hero.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Intro + Why block, over an optional faint backdrop.
          NOTE: do NOT add `isolate` here — the backdrop's color-burn must blend
          with the light page behind it to read blue (isolating it turns it grey).
          Layer order is handled by z-index: backdrop z-0 (back), product z-10 (front). */}
      <div className="relative overflow-hidden">
        {backdropImage && (
          // Faint blue solar-panel backdrop (Figma node 1:1830): a soft "floor"
          // that sits BELOW / behind the inverter. `color-burn` drops the photo's
          // white haze and keeps only the airy blue grid. A RADIAL mask centered
          // under the product makes the blue strongest at the base and dissolve
          // in every direction — so there are no rectangular/sharp edges and it
          // never reaches the right-side copy + chips.
          <img
            src={backdropImage}
            alt=""
            aria-hidden
            style={{
              mixBlendMode: "color-burn",
              WebkitMaskImage: "radial-gradient(70% 80% at 35% 100%, #000 15%, transparent 72%)",
              maskImage: "radial-gradient(70% 80% at 35% 100%, #000 15%, transparent 72%)",
            }}
            className="pointer-events-none absolute bottom-0 left-0 z-0 h-[56%] w-[52%] select-none object-cover object-bottom opacity-80"
          />
        )}

        {/* Intro line — separated from the dark banner, centered on the light page */}
        <div className="relative mx-auto max-w-page px-6 pt-14 md:px-12 lg:px-20">
          <p className="mx-auto max-w-[680px] text-center text-lg leading-relaxed text-navy/60">
            {hero.subtitle}
          </p>
        </div>

        {/* Why … block (kept above the backdrop so the inverter sits IN the solar) */}
        <div className="relative z-10 mx-auto grid max-w-page items-center gap-10 px-6 pb-8 pt-12 md:px-12 lg:grid-cols-2 lg:px-20 lg:pt-16">
          <div className="flex justify-center lg:justify-start">
            <img src={heroImage} alt={imageAlt} className="h-[360px] w-auto object-contain lg:h-[460px]" />
          </div>
          <div className="flex flex-col items-start gap-6 lg:items-end lg:text-right">
            <Eyebrow bar="right">{why.eyebrow}</Eyebrow>
            <h2 className="max-w-[560px] text-3xl font-medium leading-[1.15] tracking-tight text-navy sm:text-4xl lg:text-[54px]/[1.15]">
              {why.title}
            </h2>
            <p className="max-w-[500px] text-base leading-relaxed text-navy/60">{why.body}</p>
            <div className="flex flex-wrap justify-start gap-3 lg:justify-end">
              {why.chips.map((chip) => (
                <span
                  key={chip.label}
                  className="inline-flex cursor-pointer items-center rounded-pill border border-brand px-4 py-2 text-base font-medium text-brand transition-colors duration-200 hover:bg-brand-strong hover:text-white"
                >
                  {chip.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
