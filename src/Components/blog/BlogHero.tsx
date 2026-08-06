import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { BLOG_PAGE } from "../../constants/site";
import { assets } from "../../constants/assets";
import Eyebrow from "../home/ui/Eyebrow";

/** Small "Read article →" style text link (internal or external). */
function TextLink({ to, label }: { to: string; label: string }) {
  const cls = "inline-flex items-center gap-1 text-sm font-medium text-brand hover:gap-2 transition-all";
  const inner = (
    <>
      {label}
      <ChevronRight size={16} strokeWidth={2.2} />
    </>
  );
  return to.startsWith("/") ? (
    <Link to={to} className={cls}>{inner}</Link>
  ) : (
    <a href={to} className={cls}>{inner}</a>
  );
}

/**
 * BlogHero — a centered blog intro (with faint rings, echoing the About hero)
 * sitting below the standalone dark nav band, followed by a featured article
 * split: copy on the left, image on the right.
 */
export default function BlogHero() {
  const { hero, featured } = BLOG_PAGE;
  return (
    <section className="relative overflow-hidden pb-14 pt-24 lg:pt-36">
      {/* Rings — pulled up so their arcs frame the content from above/behind
          instead of cutting through the "Voltra Blog" eyebrow. */}
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2">
        <div className="absolute left-1/2 top-[-72px] aspect-square w-[1100px] -translate-x-1/2 rounded-full border border-brand/10" />
        <div className="absolute left-1/2 top-[-24px] aspect-square w-[880px] -translate-x-1/2 rounded-full border border-brand/10" />
      </div>

      {/* Intro */}
      <div className="relative mx-auto flex max-w-[820px] flex-col items-center gap-6 px-6 text-center">
        <Eyebrow className="justify-center">{hero.eyebrow}</Eyebrow>
        <h1 className="max-w-[640px] text-4xl font-medium leading-[1.15] tracking-tight text-navy sm:text-5xl lg:text-[54px]/[1.15]">
          {hero.title}
        </h1>
        <p className="max-w-[620px] text-base leading-relaxed text-navy/60">{hero.subtitle}</p>
      </div>

      {/* Featured article */}
      <div className="relative mx-auto mt-20 grid max-w-page items-center gap-10 px-6 md:px-12 lg:mt-24 lg:grid-cols-2 lg:px-20">
        <div className="flex flex-col items-start gap-5">
          <Eyebrow bar="left">{featured.eyebrow}</Eyebrow>
          <h2 className="max-w-[440px] text-3xl font-medium leading-[1.15] tracking-tight text-navy lg:text-[40px]/[1.15]">
            {featured.title}
          </h2>
          <p className="max-w-[460px] text-base leading-relaxed text-navy/60">{featured.body}</p>
          <TextLink to={featured.cta.to} label={featured.cta.label} />
        </div>
        <img
          src={assets.blogPage.featured}
          alt={featured.title}
          className="h-56 w-full rounded-2xl object-cover sm:h-72 lg:h-[300px]"
        />
      </div>
    </section>
  );
}
