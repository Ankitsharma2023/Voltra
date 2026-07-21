import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop — resets the scroll position to the top of the page whenever the
 * route changes. Without it, clicking a footer/nav link while scrolled down
 * (e.g. from the footer) leaves the newly-loaded page at the same scroll
 * offset, so navigation appears to do nothing. Renders nothing.
 */
export default function ScrollToTop() {
  const { pathname, search } = useLocation();
  useEffect(() => {
    // `overflow-x: hidden` on <body> (index.css) makes <body> the scroll
    // container instead of the document element, so window.scrollTo alone
    // doesn't move it — reset every possible scroller to be safe.
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname, search]);
  return null;
}
