import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { NAV } from "../../constants/site";
import { assets } from "../../constants/assets";
import PillButton from "./ui/PillButton";
import BrandLockup from "./ui/BrandLockup";

/**
 * Routes whose hero starts with a dark band, so the nav renders its own dark
 * gradient header + white content on them.
 *  - STANDALONE: the nav IS the rounded dark band (hero content is on light).
 *  - Non-standalone: the nav is a flat dark strip and the page's hero band
 *    continues the same gradient seamlessly below it.
 */
const DARK_HEADER_ROUTES = [
  "/about",
  "/products",
  "/hybrid-inverters",
  "/lithium-batteries",
  "/grid-scale-bess",
  "/blog",
  "/energy-advisor",
  "/contact",
];
const STANDALONE_DARK_ROUTES = ["/about", "/blog", "/energy-advisor", "/contact"];

/** Renders an internal (<Link>) or external (<a>) nav link consistently. */
function NavLink({
  to,
  children,
  className = "",
  onClick,
}: {
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  if (to.startsWith("/"))
    return <Link to={to} className={className} onClick={onClick}>{children}</Link>;
  return <a href={to} className={className} onClick={onClick}>{children}</a>;
}

function Logo({ dark }: { dark: boolean }) {
  // `dark` means the nav is sitting on the blue hero band, so the lockup needs
  // its white colourway — the blue one would vanish against it.
  return <BrandLockup onDark={dark} />;
}

/** White "Our Products" pill (blue text) used on dark headers. */
function DarkPrimaryCta({ to, label }: { to: string; label: string }) {
  return (
    <Link to={to} className="inline-flex">
      <span className="inline-flex h-9 items-center gap-2 rounded-pill bg-white pl-4 pr-1.5 text-sm font-medium text-brand-strong transition-transform hover:-translate-y-0.5">
        {label}
        <span className="grid size-6 place-items-center rounded-full bg-brand text-white">
          <ArrowRight size={13} strokeWidth={2.2} />
        </span>
      </span>
    </Link>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const headerRef = useRef<HTMLElement>(null);

  // Close the mobile menu on outside click / Escape while it's open.
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent | TouchEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("touchstart", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("touchstart", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // Close the menu whenever the route changes (e.g. a CTA navigates away).
  useEffect(() => setOpen(false), [pathname]);

  // Individual blog articles (/blog/:slug) share the blog index's standalone
  // dark header treatment.
  const isBlogArticle = pathname.startsWith("/blog/");
  const dark = DARK_HEADER_ROUTES.includes(pathname) || isBlogArticle;
  const standalone = STANDALONE_DARK_ROUTES.includes(pathname) || isBlogArticle;

  const linkCls = dark
    ? "flex items-center gap-1 text-sm text-white/80 transition-colors hover:text-white"
    : "flex items-center gap-1 text-sm text-black/60 transition-colors hover:text-brand";

  return (
    <header
      ref={headerRef}
      className={`relative z-40 w-full overflow-hidden ${
        dark
          ? `bg-gradient-to-r from-royal to-navy-deep ${standalone ? "rounded-b-[40px] pb-16" : ""}`
          : "bg-transparent"
      }`}
    >
      {/* Faint factory texture on the dark band */}
      {dark && (
        <img
          src={assets.aboutPage.headerTexture}
          alt=""
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-10"
        />
      )}

      <nav className="relative mx-auto flex max-w-page items-center justify-between px-6 py-5 md:px-12 lg:px-20 lg:py-6">
        {/* Left: mobile hamburger (left of the logo) + logo */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            className={`grid size-10 place-items-center rounded-full lg:hidden ${dark ? "text-white" : "text-navy"}`}
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
          <Logo dark={dark} />
        </div>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 lg:flex">
          {NAV.links.map((link) => (
            <li key={link.label}>
              <NavLink to={link.to} className={linkCls}>
                {link.label}
                {link.hasCaret && <ChevronDown size={14} className="mt-0.5" />}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-4 lg:flex">
          {dark ? (
            <>
              <Link
                to={NAV.secondaryCta.to}
                className="inline-flex h-9 items-center rounded-pill border border-white px-4 text-sm font-medium text-white transition-colors hover:bg-white/10"
              >
                {NAV.secondaryCta.label}
              </Link>
              <DarkPrimaryCta to={NAV.primaryCta.to} label={NAV.primaryCta.label} />
            </>
          ) : (
            <>
              <PillButton to={NAV.secondaryCta.to} label={NAV.secondaryCta.label} variant="outline" size="sm" icon="none" />
              <PillButton to={NAV.primaryCta.to} label={NAV.primaryCta.label} variant="solid" size="sm" />
            </>
          )}
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="relative border-t border-navy/10 bg-white/95 px-6 py-4 backdrop-blur lg:hidden">
          <ul className="flex flex-col gap-1">
            {NAV.links.map((link) => (
              <li key={link.label}>
                <NavLink
                  to={link.to}
                  className="block py-2 text-base text-navy/70"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-3">
            <PillButton to={NAV.secondaryCta.to} label={NAV.secondaryCta.label} variant="outline" size="md" icon="none" />
            <PillButton to={NAV.primaryCta.to} label={NAV.primaryCta.label} variant="solid" size="md" />
          </div>
        </div>
      )}
    </header>
  );
}
