import React from "react";
import { Link, useLocation } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import { FOOTER } from "../../constants/site";
import { assets } from "../../constants/assets";
import BrandLockup from "./ui/BrandLockup";

function FooterLink({ to, children }: { to: string; children: React.ReactNode }) {
  const cls = "text-sm text-white/60 transition-colors hover:text-white";
  if (to.startsWith("/")) return <Link to={to} className={cls}>{children}</Link>;
  return <a href={to} className={cls}>{children}</a>;
}

/**
 * SiteFooter — matches Figma node 1:527: a full-bleed factory illustration band
 * over a solid navy footer with the brand lockup + company, a contact row,
 * four link columns, a divider + copyright, and the founder portrait bleeding
 * off the right edge (desktop only).
 */
export default function SiteFooter() {
  // The factory illustration band only belongs on the home page; every other
  // route shows the dark footer without it.
  const isHome = useLocation().pathname === "/";

  return (
    <footer className="w-full">
      {/* Factory illustration band — looping muted video (poster = static PNG).
          The clip's baked-in background is a hair cooler than pure white, so the
          band sits on white and a white→transparent gradient over the (empty) top
          half dissolves the seam with the heading section above. */}
      {isHome && (
        <div className="relative w-full bg-white">
          <video
            className="block w-full select-none"
            src={assets.gigafactory.illustrationVideo}
            poster={assets.gigafactory.illustration}
            autoPlay
            loop
            muted
            playsInline
            aria-label="Voltra gigafactory robotic assembly line"
          />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white to-transparent" />
        </div>
      )}

      {/* Dark footer */}
      <div className="relative w-full overflow-hidden bg-navy-deep">
        {/* Founder — enlarged and anchored from the top so the footer's bottom
            edge cuts him at ~waist (only the top half shows). */}
        <img
          src={assets.footer.founder}
          alt=""
          className="pointer-events-none absolute right-6 top-10 hidden h-[900px] w-auto max-w-none select-none object-contain object-top lg:block xl:right-16"
        />

        <div className="relative z-10 mx-auto max-w-page px-6 py-16 md:px-12 lg:min-h-[500px] lg:px-20">
          {/* Row 1: brand lockup + company */}
          <div className="flex flex-col gap-3">
            {/* Footer is always navy, so the lockup is always the white one. */}
            <BrandLockup onDark />
            <p className="text-sm text-white/60">{FOOTER.company}</p>
          </div>

          {/* Row 2: three nav columns + a contact column */}
          <div className="mt-14 grid max-w-[900px] grid-cols-2 gap-8 sm:grid-cols-4">
            {FOOTER.columns.map((col) => (
              <div key={col.title} className="flex flex-col gap-3">
                <h4 className="text-base font-medium text-white">{col.title}</h4>
                {col.links.map((link) => (
                  <FooterLink key={link.label} to={link.to}>{link.label}</FooterLink>
                ))}
              </div>
            ))}

            {/* Contact column (replaces the old Solutions slot). */}
            <div className="flex flex-col gap-3">
              <h4 className="text-base font-medium text-white">CONTACT</h4>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(FOOTER.address.join(", "))}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-sm text-white/60 transition-colors hover:text-white"
              >
                <MapPin size={16} className="mt-0.5 shrink-0 text-white/50" />
                <address className="not-italic leading-relaxed">
                  {FOOTER.address.map((line) => (
                    <span key={line} className="block">{line}</span>
                  ))}
                </address>
              </a>
              <a
                href={`tel:${FOOTER.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
              >
                <Phone size={16} className="shrink-0 text-white/50" />
                {FOOTER.phone}
              </a>
              <a
                href={`mailto:${FOOTER.email}`}
                className="flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
              >
                <Mail size={16} className="shrink-0 text-white/50" />
                {FOOTER.email}
              </a>
            </div>
          </div>

          {/* Divider + copyright */}
          <div className="mt-12 max-w-[900px] border-t border-white/15 pt-6">
            <p className="text-sm text-white/50">{FOOTER.copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
