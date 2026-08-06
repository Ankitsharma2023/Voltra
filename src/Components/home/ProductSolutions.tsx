import React from "react";
import ProductCard, { Product } from "./ProductCard";
import { assets } from "../../constants/assets";
import Eyebrow from "./ui/Eyebrow";

/**
 * ProductSolutions — the "Our Battery/Inverter Solutions" rows and the Hybrid
 * "Product range" grid. One component drives all three; only the title, product
 * list and card images differ. Images cycle across the cards.
 */
const defaultImages = [assets.products.unitFront, assets.products.unitAngle, assets.products.unitAngle];

export default function ProductSolutions({
  title,
  products,
  eyebrow,
  images = defaultImages,
  tall = false,
}: {
  title: string;
  products: Product[];
  eyebrow?: string;
  images?: string[];
  /** Use a taller product stage (for portrait inverter renders). */
  tall?: boolean;
}) {
  return (
    <section className="w-full py-16 lg:py-20">
      <div className="mx-auto max-w-content px-6 md:px-12 lg:px-8">
        {eyebrow && <Eyebrow bar="left" className="mb-4">{eyebrow}</Eyebrow>}
        <h2 className="mb-10 max-w-[800px] text-3xl font-medium leading-[1.15] tracking-tight text-navy/80 sm:text-4xl lg:text-[54px]/[1.15]">
          {title}
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} image={product.image ?? images[i % images.length]} tall={tall} />
          ))}
        </div>
      </div>
    </section>
  );
}
