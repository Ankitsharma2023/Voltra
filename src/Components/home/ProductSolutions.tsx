import React from "react";
import ProductCard, { Product } from "./ProductCard";
import { assets } from "../../constants/assets";
import Eyebrow from "./ui/Eyebrow";
import PillButton from "./ui/PillButton";

/**
 * ProductSolutions — the "Our Battery/Inverter Solutions" rows and the Hybrid
 * "Product range" grid. One component drives all three; only the title, product
 * list and card images differ. Images cycle across the cards.
 */
const defaultImages = [assets.products.unitFront, assets.products.unitAngle, assets.products.unitAngle];

export default function ProductSolutions({
  title,
  subtitle,
  products,
  eyebrow,
  images = defaultImages,
  tall = false,
  cta,
  id,
}: {
  title: string;
  subtitle?: string;
  products: Product[];
  eyebrow?: string;
  images?: string[];
  /** Use a taller product stage (for portrait inverter renders). */
  tall?: boolean;
  /** Optional centred "View More …" link shown under the grid. */
  cta?: { label: string; to: string };
  /** Anchor id for in-page jump navigation. */
  id?: string;
}) {
  return (
    <section id={id} className="w-full scroll-mt-28 py-16 lg:py-20">
      <div className="mx-auto max-w-content px-6 md:px-12 lg:px-8">
        {eyebrow && <Eyebrow bar="left" className="mb-4">{eyebrow}</Eyebrow>}
        <h2 className="text-3xl font-medium leading-[1.15] tracking-tight text-navy/80 sm:text-4xl lg:whitespace-nowrap lg:text-[40px]/[1.15]">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-4 max-w-[720px] text-base leading-relaxed text-navy/55">{subtitle}</p>
        )}
        <div className="mb-10" />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} image={product.image ?? images[i % images.length]} tall={tall} />
          ))}
        </div>
        {cta && (
          <div className="mt-12 flex justify-center">
            <PillButton to={cta.to} label={cta.label} variant="outline" size="md" icon="arrow" />
          </div>
        )}
      </div>
    </section>
  );
}
