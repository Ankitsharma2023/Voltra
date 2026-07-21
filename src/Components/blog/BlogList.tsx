import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { BLOG_PAGE } from "../../constants/site";
import { assets } from "../../constants/assets";

/** imageKey (from constants) -> thumbnail asset. */
const thumbs: Record<string, string> = {
  thumb1: assets.blogPage.thumb1,
  thumb2: assets.blogPage.thumb2,
  thumb3: assets.blogPage.thumb3,
};

function PostCard({
  image,
  date,
  title,
  excerpt,
  tags,
}: {
  image: string;
  date: string;
  title: string;
  excerpt: string;
  tags: string[];
}) {
  return (
    <article className="group flex flex-col">
      <div className="overflow-hidden rounded-3xl">
        <img
          src={image}
          alt={title}
          className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 pt-5">
        <span className="text-xs text-navy/40">{date}</span>
        <h3 className="text-xl font-medium leading-snug text-navy">{title}</h3>
        <p className="line-clamp-3 text-sm leading-relaxed text-navy/55">{excerpt}</p>
        <div className="mt-auto flex flex-wrap gap-2 pt-3">
          {tags.map((tag) => (
            <span key={tag} className="rounded-full bg-navy/[0.06] px-3 py-1 text-xs font-medium text-navy/60">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

/**
 * BlogList — the "Explore Insights" grid of post cards with a View More link.
 */
export default function BlogList() {
  const { title, subtitle, cta, posts } = BLOG_PAGE.list;
  return (
    <section className="w-full py-20 lg:py-28">
      <div className="mx-auto max-w-content px-6 md:px-12 lg:px-8">
        <div className="mx-auto flex max-w-[560px] flex-col items-center gap-3 text-center">
          <h2 className="text-3xl font-medium tracking-tight text-navy lg:text-4xl">{title}</h2>
          <p className="text-base leading-relaxed text-navy/60">{subtitle}</p>
        </div>

        <div className="mt-14 grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              image={thumbs[post.imageKey]}
              date={post.date}
              title={post.title}
              excerpt={post.excerpt}
              tags={post.tags}
            />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            to={cta.to}
            className="inline-flex items-center gap-1 text-sm font-medium text-brand transition-all hover:gap-2"
          >
            {cta.label}
            <ChevronRight size={16} strokeWidth={2.2} />
          </Link>
        </div>
      </div>
    </section>
  );
}
