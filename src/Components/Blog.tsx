import React from "react";
import BlogHero from "./blog/BlogHero";
import BlogList from "./blog/BlogList";

/**
 * Blog — the Blog page (Figma frame "Blog", node 1:815): a centered intro +
 * featured article, then the post grid. Navbar (standalone dark variant) and
 * Footer render globally in App.tsx.
 */
export default function Blog() {
  return (
    <div className="flex w-full flex-col overflow-x-hidden">
      <BlogHero />
      <BlogList />
    </div>
  );
}
