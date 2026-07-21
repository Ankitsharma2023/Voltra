/** @type {import('tailwindcss').Config} */
import {
  colors,
  gradients,
  fonts,
  fontSize,
  fontWeight,
  letterSpacing,
  radii,
  shadows,
  layout,
} from "./src/design/tokens.js";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // ---- Colors (semantic names map straight to the design tokens) ----
      colors: {
        brand: {
          DEFAULT: colors.brand,
          strong: colors.brandStrong,
          deep: colors.brandDeep,
          bright: colors.brandBright,
        },
        navy: {
          DEFAULT: colors.navy,
          deep: colors.navyDeep,
          ink: colors.navyInk,
        },
        royal: colors.royal,
        surface: {
          DEFAULT: colors.surface,
          muted: colors.surfaceMuted,
        },
      },

      // ---- Typography ----
      fontFamily: {
        sans: [fonts.sans],
        gilroy: [fonts.gilroy],
        akshar: [fonts.akshar],
      },
      fontSize: {
        hero: [fontSize.hero, { lineHeight: "1.1", letterSpacing: letterSpacing.tightest }],
        display: [fontSize.display, { lineHeight: "1.15", letterSpacing: letterSpacing.tight }],
        h3: [fontSize.h3, { lineHeight: "1.2" }],
        title: [fontSize.title, { lineHeight: "1.2" }],
        eyebrow: [fontSize.eyebrow, { letterSpacing: letterSpacing.eyebrow }],
      },
      fontWeight: {
        light: `${fontWeight.light}`,
        normal: `${fontWeight.regular}`,
        medium: `${fontWeight.medium}`,
        bold: `${fontWeight.bold}`,
      },
      letterSpacing: {
        tightest: letterSpacing.tightest,
        tight: letterSpacing.tight,
        eyebrow: letterSpacing.eyebrow,
        wide: letterSpacing.wide,
      },

      // ---- Radii / shadows ----
      borderRadius: {
        card: radii.card,
        pill: radii.pill,
        "pill-tight": radii.pillTight,
      },
      boxShadow: {
        card: shadows.card,
        soft: shadows.soft,
        glow: shadows.glow,
      },

      // ---- Gradients (reusable as bg-* utilities) ----
      backgroundImage: {
        "page-wash": gradients.page,
        "brand-diagonal": gradients.brandDiagonal,
        "image-scrim": gradients.imageScrim,
      },

      // ---- Layout ----
      maxWidth: {
        page: layout.maxWidth,
        content: layout.content,
      },

      // ---- Animation ----
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        // Seamless ticker: the track is duplicated, so shifting by exactly half
        // its width lands one copy precisely where the other began.
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 600ms ease-in-out",
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [],
};
