/**
 * ============================================================================
 *  IMAGE ASSETS — SINGLE SOURCE OF TRUTH  (TEMPORARY PLACEHOLDER LINKS)
 * ============================================================================
 *  Every image used by the landing page is referenced through a named constant
 *  in this one file. Today each points at a TEMPORARY Figma-hosted render of
 *  the design so the page looks pixel-correct out of the box.
 *
 *  ⚠️  These Figma URLs are short-lived (they expire ~7 days after export).
 *      When you drop the real artwork into the repo, replace the value here —
 *      you should NOT need to touch any component. Two easy options:
 *
 *      1) Put files in `public/voltra/` and use a root-relative string:
 *             hero: { productHero: "/voltra/hero-founder-products.png", ... }
 *
 *      2) Put files in `src/assets/…` and swap to imports at the top:
 *             import productHero from "../assets/hero-founder-products.png";
 *             ...
 *             hero: { productHero, ... }
 *
 *  Purely decorative marks (arrows, chevrons, dividers) are NOT stored here —
 *  they are drawn with `lucide-react` icons in the components instead.
 * ============================================================================
 */

const FIGMA = "https://www.figma.com/api/mcp/asset";

export const assets = {
  // ---- Brand ----
  logo: {
    // White logo lockup used on light nav + dark footer (mark + wordmark).
    mark: `${FIGMA}/9d61a83e-b0b0-4520-9731-db977907a5e4`,
    wordmark: `${FIGMA}/3373570f-055f-47cd-9cab-abdf771874d6`,
    footerMark: `${FIGMA}/8c3c1835-ed30-4506-8e59-00ff6a439d50`,
    footerWordmark: `${FIGMA}/d0ac1ee0-e658-43e4-aa9e-962e1d67f380`,
  },

  // ---- Hero ----
  hero: {
    // Single flattened composite of Figma "image 186" (node 1:138): founder +
    // battery + inverter on the podium, India-map glow and the wind/solar/homes
    // landscape — pre-composited from the 3 Figma layers so it lines up exactly.
    // Lives in /public; regenerate from the layer PNGs if the art changes.
    composite: "/hero-composite.png",
    // Full warranty badge (shield + gradient plate + text) as one pixel-perfect
    // image — the exact Figma render of node 1:131.
    warrantyBadge: "/warranty-badge.png",
  },

  // ---- About section ----
  about: {
    // Wind turbines + solar farm + waterfront. Local copy of the Figma render;
    // the stripe + right-fade "dissolve" mask is applied in CSS (AboutSection).
    windSolar: "/about-windsolar.png",
  },

  // ---- Product cards (shared by Battery + Inverter solutions) ----
  products: {
    // Two angles of the VOLT LVW 16S render.
    unitFront: `${FIGMA}/d8a20183-e475-4869-af24-81c1989217ce`,
    unitAngle: `${FIGMA}/2e3846b1-2222-4eec-8265-0829ffb911e5`,
  },

  // ---- "Storage that scales" carousel ----
  offerings: {
    batteriesShelf: `${FIGMA}/d4ef2bc3-fe36-4181-b697-4cc227de3ba9`,
  },

  // ---- Why Voltra feature cards ----
  why: {
    background: `${FIGMA}/e3182e0c-157e-4f0c-8f07-8cb09a6a2484`, // blue factory backdrop
    safety: `${FIGMA}/4902e739-7408-4cea-9d47-2d05cc01fd62`,
    efficiency: `${FIGMA}/9dc2d2f5-9284-49be-aff2-3df53809fbaa`,
    cycles: `${FIGMA}/e4a21333-61c8-4f60-b672-3cec23c56040`,
    gridReady: `${FIGMA}/bf72c049-131d-4732-8cca-c812d41cf82d`,
    madeInIndia: `${FIGMA}/858bd554-981a-43d1-a27a-8ed5904fec19`,
    smartOandM: `${FIGMA}/ceda6bb3-a4d3-4497-af4a-d57b1c98bb3e`,
  },

  // ---- Mission / "Our Story" floating tiles ----
  mission: {
    cityNight: `${FIGMA}/524760a5-23ae-462d-8475-ce54d9c05bfd`,
    village: `${FIGMA}/9db10298-0d1d-4dfe-9c04-a8a886e9344d`,
    factory: `${FIGMA}/9f63fe55-8ae0-41d1-bec1-de0d932f9ac6`,
    skyline: `${FIGMA}/a67002d8-d1ca-478c-bf5e-198f4843e486`,
  },

  // ---- Gigafactory ----
  gigafactory: {
    // Animated robotic-assembly clip (Figma node 1:510) — looped in the footer.
    illustrationVideo: "/gigafactory.mp4",
    // Static poster / fallback (shown until the video loads or if it fails).
    illustration: "/gigafactory.png",
  },

  // ---- Footer ----
  footer: {
    // Tight cut-out of just the founder (marks/products/watermark removed).
    founder: "/footer-founder.png",
  },

  // ---- About page ----
  aboutPage: {
    // Faint factory texture behind the dark nav band.
    headerTexture: `${FIGMA}/bd76ebb9-f4dc-485c-afa2-addeeb31fd40`,
    // Interior room with wall-mounted inverter + battery (mission section).
    missionUnits: `${FIGMA}/c245cca5-ac5d-404b-9f48-85a84799a99f`,
    // Wind + solar farm (featured "who we serve" vertical image).
    serveImage: `${FIGMA}/4175db5d-074f-46aa-a858-9c3fc610cf64`,
  },

  // ---- Hybrid Inverters page ----
  hybridPage: {
    // Hybrid inverter unit on a lit stand (hero, left).
    heroInverter: `${FIGMA}/b486c052-6453-49c9-a197-4c19a440ee70`,
    // Two angles of the inverter render for the product-range cards.
    cardFront: `${FIGMA}/84a27f76-17bd-47e5-b106-e2ca777aa5d7`,
    cardAngle: `${FIGMA}/1dd45643-f1af-4d71-9d85-4843089067d1`,
    // Faint solar-panel photo (Figma node 1:1056) behind the intro/why area —
    // the same shared backdrop art the Lithium page uses.
    solarBackdrop: "/solar-backdrop.png",
  },

  // ---- Lithium Batteries page ----
  lithiumPage: {
    // LFP battery (LVW 16 S) on a podium — transparent cutout (Figma node
    // 1:1444). Local copy so it doesn't expire like the Figma render links.
    heroBattery: "/lithium-battery.png",
    // Two angles of the battery render for the product-range cards.
    cardFront: `${FIGMA}/1d22df71-5eb3-4ee2-8196-3d0cfbfbeb85`,
    cardAngle: `${FIGMA}/1444a469-4c0a-4e25-a99a-c0d265dee66a`,
    // Faint solar-panel photo (Figma node 1:1443) — sits behind the intro/why
    // area as a backdrop. Shared local copy; regenerate if the art changes.
    solarBackdrop: "/solar-backdrop.png",
  },

  // ---- Grid-Scale BESS page ----
  bessPage: {
    // Liquid-cooled BESS cabinet render (hero, left).
    heroCabinet: `${FIGMA}/30b44be6-6e4b-40df-a803-999ce7dec7c8`,
    // Same faded blue solar-panel floor the Hybrid/Lithium heroes use.
    solarBackdrop: "/solar-backdrop.png",
  },

  // ---- Blog page ----
  // Local copies (the Figma post thumbnails are blank placeholders, so these are
  // topic-relevant Voltra photos). Featured = solar farm at dusk.
  blogPage: {
    featured: "/blog/featured.jpg",
    thumb1: "/blog/post-1.jpg", // rooftop solar village → home-battery article
    thumb2: "/blog/post-2.jpg", // wind + solar farm → hybrid/off-grid article
    thumb3: "/blog/post-3.jpg", // battery factory → grid-scale BESS article
  },
};

export default assets;
