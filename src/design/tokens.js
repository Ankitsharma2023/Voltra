/**
 * ============================================================================
 *  VOLTRA DESIGN SYSTEM — SINGLE SOURCE OF TRUTH
 * ============================================================================
 *  Every color, gradient, font, size, radius, shadow and spacing value used by
 *  the redesigned landing page lives here. It is consumed in two ways:
 *
 *   1. `tailwind.config.js` imports this file and maps these tokens onto
 *      Tailwind's theme, so components can use utilities like
 *      `text-navy`, `bg-brand`, `rounded-card`, `shadow-card`, `font-sans`, etc.
 *
 *   2. Components import it directly (`import { tokens } from "../../design/tokens"`)
 *      for values that don't map cleanly to a utility class — mainly the
 *      multi-stop gradients used as inline `style={{ background: ... }}`.
 *
 *  To re-theme the whole site, edit values here — nowhere else.
 *  (Plain JS, not TS, because tailwind.config.js is loaded by Node/PostCSS
 *   and can only import a JS module.)
 * ============================================================================
 */

/** Brand + neutral palette extracted from the Figma "Landing Page" frame. */
export const colors = {
  // Primary actions, links, accents
  brand: "#3658ff",
  brandStrong: "#0c33f2", // eyebrow labels + secondary accents
  brandDeep: "#0f28c8", // gradient end / pressed
  brandBright: "#3b6eff", // gradient start

  // Text / dark surfaces (navy family)
  navy: "#001164", // primary headings + body text
  navyDeep: "#000f66", // footer background
  navyInk: "#030a61", // darkest ink

  // Large solid section background (Why Voltra)
  royal: "#384cff",

  // Surfaces
  white: "#ffffff",
  surface: "#f4f7fe", // soft card / panel tint
  surfaceMuted: "#eef3fb",

  // Lines & overlays (kept as rgba so opacity is baked in)
  border: "rgba(3,10,97,0.2)",
  overlayStrong: "rgba(0,17,100,0.7)",
  overlaySoft: "rgba(0,17,100,0.4)",
  shadow: "rgba(0,0,0,0.1)",
};

/**
 * Text-color opacity tiers. The design draws headings/body from the same navy
 * ink at different opacities rather than separate greys.
 */
export const textTiers = {
  heading: "#001164", // full strength
  headingSoft: "rgba(0,17,100,0.8)",
  body: "rgba(0,17,100,0.6)",
  onDark: "#ffffff",
  onDarkSoft: "rgba(255,255,255,0.7)",
};

/** Multi-stop gradients — used as inline styles where Tailwind can't express them. */
export const gradients = {
  // The page canvas: a subtle left-to-right cool wash.
  page:
    "linear-gradient(270deg, #bed2f2 0%, #eaf0fa 38.95%, #eef3fb 63.12%, #eff3fb 100%)",
  // Hero warranty badge + primary emphasis chips.
  brandDiagonal: "linear-gradient(90deg, #3b6eff 0%, #0f28c8 100%)",
  // Dark image scrims for text-over-photo cards.
  imageScrim:
    "linear-gradient(180deg, rgba(0,17,100,0) 0%, rgba(0,17,100,0.7) 100%)",
};

/** Typography. Helvetica Neue is the primary face in the Figma file. */
export const fonts = {
  sans: [
    "'Helvetica Neue'",
    "Helvetica",
    "Arial",
    "system-ui",
    "sans-serif",
  ].join(", "),
  // Retained from the existing project (logo lockup / legacy copy).
  akshar: ["Akshar", "sans-serif"].join(", "),
  gilroy: ["Gilroy", "sans-serif"].join(", "),
};

/**
 * Type scale (px). Names describe role, values are the desktop sizes from Figma.
 * Components apply responsive down-scaling with Tailwind's `clamp`/breakpoints.
 */
export const fontSize = {
  hero: "64px", // hero H1
  display: "54px", // section headings
  h3: "32px", // card / feature titles
  title: "28px",
  lg: "20px",
  base: "16px",
  sm: "14px",
  xs: "12px",
  eyebrow: "16px", // uppercase, wide tracking
};

export const fontWeight = {
  light: 300,
  regular: 400,
  medium: 500,
  bold: 700,
};

export const letterSpacing = {
  tightest: "-1.28px", // hero
  tight: "-1.08px", // display headings
  snug: "-0.32px",
  normal: "0px",
  wide: "0.64px",
  eyebrow: "5.12px", // uppercase eyebrows
};

export const radii = {
  none: "0px",
  card: "12px",
  pill: "54px",
  pillTight: "39px",
  full: "9999px",
};

export const shadows = {
  card: "0px 0px 20px 0px rgba(0,0,0,0.1)",
  soft: "0px 2px 8px 0px rgba(0,0,0,0.08)",
  glow: "0px 2px 8px 0px #ffffff",
};

/** Layout rhythm. `page` is the max content width; `gutter` the side padding. */
export const layout = {
  maxWidth: "1392px",
  content: "1230px",
  gutter: "80px",
  gutterMobile: "24px",
};

export const spacing = {
  section: "96px", // vertical space between major sections
  block: "40px",
  stack: "32px",
  gap: "16px",
};

export const tokens = {
  colors,
  textTiers,
  gradients,
  fonts,
  fontSize,
  fontWeight,
  letterSpacing,
  radii,
  shadows,
  layout,
  spacing,
};

export default tokens;
