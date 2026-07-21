import React from "react";
import { WHY_VOLTRA } from "../../constants/site";
import { assets } from "../../constants/assets";
import Eyebrow from "./ui/Eyebrow";

/** Feature id -> image, kept next to the section that uses it. */
const featureImages: Record<string, string> = {
  safety: assets.why.safety,
  efficiency: assets.why.efficiency,
  cycles: assets.why.cycles,
  gridReady: assets.why.gridReady,
  madeInIndia: assets.why.madeInIndia,
  smartOandM: assets.why.smartOandM,
};

function FeatureCard({
  title,
  body,
  image,
}: {
  title: string;
  body: string;
  image?: string;
}) {
  return (
    <div className="relative min-h-[232px] overflow-hidden rounded-[22px] bg-gradient-to-br from-white to-[#e7ecfb] p-8 shadow-[0_14px_36px_-16px_rgba(3,10,97,0.4)] backdrop-blur-sm">
      <div className="relative z-10 max-w-[56%]">
        <h3 className="text-[26px] font-medium leading-tight text-navy">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-navy/55">{body}</p>
      </div>
      {image && (
        <img
          src={image}
          alt=""
          className="pointer-events-none absolute bottom-0 right-0 h-[86%] w-[54%] object-contain object-right-bottom"
        />
      )}
    </div>
  );
}

export default function WhyVoltra() {
  return (
    <section className="relative w-full overflow-hidden bg-royal pb-16 pt-20 lg:pb-24 lg:pt-32">
      {/* Faint factory backdrop (Figma uses ~11% opacity, no blend) */}
      <img
        src={assets.why.background}
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.13]"
      />
      <div className="relative mx-auto max-w-page px-6 md:px-12 lg:px-20">
        <Eyebrow bar="left" tone="onDark">{WHY_VOLTRA.eyebrow}</Eyebrow>
        <h2 className="mt-5 max-w-[720px] text-3xl font-medium leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-[54px]/[1.15]">
          {WHY_VOLTRA.title}
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {WHY_VOLTRA.features.map((f) => (
            <FeatureCard key={f.id} title={f.title} body={f.body} image={featureImages[f.id]} />
          ))}
        </div>
      </div>
    </section>
  );
}
