import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { NAV, FOOTER } from "../../constants/site";
import { assets } from "../../constants/assets";
import PillButton from "./ui/PillButton";

/**
 * Routes whose hero starts with a dark band, so the nav renders its own dark
 * gradient header + white content on them.
 *  - STANDALONE: the nav IS the rounded dark band (hero content is on light).
 *  - Non-standalone: the nav is a flat dark strip and the page's hero band
 *    continues the same gradient seamlessly below it.
 */
const DARK_HEADER_ROUTES = [
  "/about",
  "/hybrid-inverters",
  "/lithium-batteries",
  "/grid-scale-bess",
  "/blog",
];
const STANDALONE_DARK_ROUTES = ["/about", "/blog"];

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
  // The Figma logo SVGs are exported with width/height="100%" and
  // preserveAspectRatio="none", so they have NO intrinsic size — BOTH dimensions
  // must be pinned or they blow up to their natural render size. Sizes below
  // match the Figma lockup (mark 42×47.35, wordmark 87.73×18.36, tagline ~9.85px).
  return (
    <Link to="/" className="flex shrink-0 items-center gap-2" aria-label="Voltra home">
      <img
        src={dark ? assets.logo.footerMark : assets.logo.mark}
        alt=""
        width={41}
        height={46}
        className="h-[46px] w-[41px] shrink-0"
      />
      <span className="flex flex-col items-center gap-[3px]">
        <img
          src={dark ? assets.logo.footerWordmark : assets.logo.wordmark}
          alt="Voltra"
          width={86}
          height={18}
          className="h-[18px] w-[86px] shrink-0"
        />
        <span
          className={`whitespace-nowrap font-akshar text-[8.5px] font-medium uppercase leading-none tracking-[0.08em] ${
            dark ? "text-white/80" : "text-brand"
          }`}
        >
          {FOOTER.tagline}
        </span>
      </span>
    </Link>
  );
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
  const dark = DARK_HEADER_ROUTES.includes(pathname);
  const standalone = STANDALONE_DARK_ROUTES.includes(pathname);

  const linkCls = dark
    ? "flex items-center gap-1 text-sm text-white/80 transition-colors hover:text-white"
    : "flex items-center gap-1 text-sm text-black/60 transition-colors hover:text-brand";

  return (
    <header
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
        <Logo dark={dark} />

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

        {/* Mobile toggle */}
        <button
          className={`grid size-10 place-items-center rounded-full lg:hidden ${dark ? "text-white" : "text-navy"}`}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
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
