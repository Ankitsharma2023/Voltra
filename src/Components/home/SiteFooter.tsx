import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import { FOOTER } from "../../constants/site";
import { assets } from "../../constants/assets";

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
  return (
    <footer className="w-full">
      {/* Factory illustration band — looping muted video (poster = static PNG) */}
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
          {/* Row 1: brand lockup + contact */}
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <img src={assets.logo.footerMark} alt="" width={41} height={46} className="h-[46px] w-[41px] shrink-0" />
                <span className="flex flex-col items-center gap-[3px]">
                  <img src={assets.logo.footerWordmark} alt="Voltra" width={86} height={18} className="h-[18px] w-[86px] shrink-0" />
                  <span className="whitespace-nowrap font-akshar text-[8.5px] font-medium uppercase leading-none tracking-[0.08em] text-white/80">
                    {FOOTER.tagline}
                  </span>
                </span>
              </div>
              <p className="text-sm text-white/60">{FOOTER.company}</p>
            </div>

            <div className="flex flex-col gap-6 sm:flex-row sm:gap-12 lg:pt-1">
              <div className="flex items-start gap-2 text-sm text-white/70">
                <MapPin size={18} className="mt-0.5 shrink-0 text-white/60" />
                <address className="not-italic leading-relaxed">
                  {FOOTER.address.map((line) => (
                    <span key={line} className="block">{line}</span>
                  ))}
                </address>
              </div>
              <a href={`tel:${FOOTER.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 text-sm text-white/70 hover:text-white">
                <Phone size={18} className="shrink-0 text-white/60" />
                {FOOTER.phone}
              </a>
              <a href={`mailto:${FOOTER.email}`} className="flex items-center gap-2 text-sm text-white/70 hover:text-white">
                <Mail size={18} className="shrink-0 text-white/60" />
                {FOOTER.email}
              </a>
            </div>
          </div>

          {/* Row 2: link columns */}
          <div className="mt-14 grid max-w-[820px] grid-cols-2 gap-8 sm:grid-cols-4">
            {FOOTER.columns.map((col) => (
              <div key={col.title} className="flex flex-col gap-3">
                <h4 className="text-base font-medium text-white">{col.title}</h4>
                {col.links.map((link) => (
                  <FooterLink key={link.label} to={link.to}>{link.label}</FooterLink>
                ))}
              </div>
            ))}
          </div>

          {/* Divider + copyright */}
          <div className="mt-12 max-w-[820px] border-t border-white/15 pt-6">
            <p className="text-sm text-white/50">{FOOTER.copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
