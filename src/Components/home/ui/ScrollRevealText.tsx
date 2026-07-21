import React, { useEffect, useRef, useState } from "react";

/**
 * ScrollRevealText — text that darkens word-by-word as the reader scrolls it up
 * through the viewport. We map the element's position within a scroll "window"
 * (from 90% down the viewport up to 45%) onto 0→1 progress, then light up word i
 * once progress passes i/N, interpolating each word's navy opacity from faint
 * (0.15) to full (1).
 *
 * The page doesn't scroll on `window` (see #root height in App.css), so we don't
 * listen for scroll events — an IntersectionObserver starts a rAF loop that
 * re-measures the element every frame while it's on screen, which works no
 * matter which element actually scrolls.
 */
export default function ScrollRevealText({
  text,
  as: Tag = "p",
  className = "",
  maxOpacity = 1,
}: {
  text: string;
  as?: "p" | "h2" | "h3";
  className?: string;
  /** Navy opacity of a fully-revealed word (1 = full strength). Lower it to
   *  make the final "bold" state lighter for long, line-filling paragraphs. */
  maxOpacity?: number;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0);
  const words = text.trim().split(/\s+/);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    let running = false;
    const measure = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh * 0.9; // begin revealing when the text sits this low
      const end = vh * 0.45; // fully revealed once it rises to here
      const p = (start - rect.top) / (start - end);
      setProgress(Math.min(1, Math.max(0, p)));
    };
    const loop = () => {
      measure();
      if (running) raf = requestAnimationFrame(loop);
    };
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !running) {
          running = true;
          loop();
        } else if (!entry.isIntersecting && running) {
          running = false;
          cancelAnimationFrame(raf);
          measure(); // settle the final state once it leaves view
        }
      },
      { threshold: 0 },
    );
    io.observe(el);
    return () => {
      running = false;
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, []);

  return (
    <Tag ref={ref as React.Ref<any>} className={className}>
      {words.map((word, i) => {
        const wordProgress = Math.min(1, Math.max(0, progress * words.length - i));
        const opacity = 0.15 + (maxOpacity - 0.15) * wordProgress;
        return (
          <span key={i} style={{ color: `rgba(0,17,100,${opacity})`, transition: "color 150ms linear" }}>
            {word}
            {i < words.length - 1 ? " " : ""}
          </span>
        );
      })}
    </Tag>
  );
}
