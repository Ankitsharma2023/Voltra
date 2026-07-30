import React from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { BLOG_POST_BY_SLUG, BLOG_POSTS } from "../../constants/blogPosts";
import { assets } from "../../constants/assets";
import Eyebrow from "../home/ui/Eyebrow";
import PillButton from "../home/ui/PillButton";

/** thumbnail/hero image key -> asset. */
function postImage(imageKey: string) {
  return (assets.blogPage as Record<string, string>)[imageKey] ?? assets.blogPage.featured;
}

/** Renders a single content block from a post's `blocks` array. */
function Block({ block }: { block: any }) {
  switch (block.t) {
    case "lead":
      return (
        <div className="my-2 rounded-2xl border-l-4 border-brand bg-brand/[0.06] p-6">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-strong">
            Quick answer
          </span>
          <p className="mt-2 text-lg leading-relaxed text-navy/80">{block.text}</p>
        </div>
      );
    case "h2":
      return (
        <h2 className="mt-12 text-2xl font-medium tracking-tight text-navy lg:text-[28px]">
          {block.text}
        </h2>
      );
    case "p":
      return <p className="text-[17px] leading-[1.75] text-navy/70">{block.text}</p>;
    case "ul":
      return (
        <ul className="flex flex-col gap-3">
          {block.items.map((item: string, i: number) => (
            <li key={i} className="flex gap-3 text-[17px] leading-[1.7] text-navy/70">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "table":
      return (
        <div className="overflow-x-auto rounded-2xl border border-navy/10">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="bg-navy/[0.04]">
                {block.head.map((h: string, i: number) => (
                  <th key={i} className="whitespace-nowrap px-4 py-3 font-semibold text-navy">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row: string[], r: number) => (
                <tr key={r} className="border-t border-navy/10">
                  {row.map((cell: string, c: number) => (
                    <td
                      key={c}
                      className={`px-4 py-3 align-top leading-relaxed ${
                        c === 0 ? "font-medium text-navy" : "text-navy/65"
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    default:
      return null;
  }
}

export default function BlogArticle() {
  const { slug } = useParams();
  const post = slug ? BLOG_POST_BY_SLUG[slug] : undefined;

  // Unknown slug → back to the blog index.
  if (!post) return <Navigate to="/blog" replace />;

  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <article className="w-full pt-28 lg:pt-36">
      {/* Header */}
      <header className="mx-auto max-w-[820px] px-6 md:px-12 lg:px-8">
        <Link
          to="/blog"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-navy/50 transition-colors hover:text-brand"
        >
          <ArrowLeft size={16} strokeWidth={2.2} />
          All articles
        </Link>

        <div className="mt-6 flex flex-col gap-5">
          <Eyebrow bar="left">{post.category}</Eyebrow>
          <h1 className="text-3xl font-medium leading-[1.15] tracking-tight text-navy sm:text-4xl lg:text-[44px]/[1.12]">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-navy/45">
            <span>{post.date}</span>
            <span className="h-1 w-1 rounded-full bg-navy/25" />
            <span>{post.readTime}</span>
          </div>
        </div>
      </header>

      {/* Hero image */}
      <div className="mx-auto mt-10 max-w-[980px] px-6 md:px-12 lg:px-8">
        <img
          src={postImage(post.imageKey)}
          alt={post.title}
          className="h-64 w-full rounded-3xl object-cover sm:h-80 lg:h-[420px]"
        />
      </div>

      {/* Body */}
      <div className="mx-auto mt-14 flex max-w-[760px] flex-col gap-5 px-6 md:px-12 lg:px-8">
        {post.blocks.map((block: any, i: number) => (
          <Block key={i} block={block} />
        ))}
      </div>

      {/* FAQs */}
      {post.faqs?.length > 0 && (
        <section className="mx-auto mt-16 max-w-[760px] px-6 md:px-12 lg:px-8">
          <h2 className="text-2xl font-medium tracking-tight text-navy lg:text-[28px]">
            Frequently asked questions
          </h2>
          <div className="mt-6 divide-y divide-navy/10 border-y border-navy/10">
            {post.faqs.map((faq: { q: string; a: string }, i: number) => (
              <details key={i} className="group py-5">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-[17px] font-medium text-navy">
                  {faq.q}
                  <ChevronRight
                    size={18}
                    className="mt-1 shrink-0 text-navy/40 transition-transform group-open:rotate-90"
                  />
                </summary>
                <p className="mt-3 text-[16px] leading-relaxed text-navy/65">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="mx-auto mt-16 max-w-[760px] px-6 md:px-12 lg:px-8">
        <div className="flex flex-col items-start gap-5 rounded-3xl bg-gradient-to-br from-royal to-navy-deep p-8 lg:p-10">
          <h3 className="max-w-[440px] text-2xl font-medium leading-tight text-white lg:text-[28px]">
            Not sure which Voltra system fits your needs?
          </h3>
          <p className="max-w-[460px] text-base leading-relaxed text-white/70">
            Talk to our team or use the Energy Advisor to size the right inverter and battery for
            your home or business.
          </p>
          <PillButton to="/energy-advisor" label="Open Energy Advisor" variant="solid" size="lg" iconPosition="left" />
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="mx-auto mt-20 max-w-content px-6 pb-24 md:px-12 lg:px-8">
          <h2 className="text-2xl font-medium tracking-tight text-navy">Keep reading</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {related.map((p) => (
              <Link key={p.slug} to={`/blog/${p.slug}`} className="group flex flex-col">
                <div className="overflow-hidden rounded-3xl">
                  <img
                    src={postImage(p.imageKey)}
                    alt={p.title}
                    className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <span className="mt-4 text-xs text-navy/40">{p.category} · {p.date}</span>
                <h3 className="mt-1 text-xl font-medium leading-snug text-navy group-hover:text-brand">
                  {p.title}
                </h3>
              </Link>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
