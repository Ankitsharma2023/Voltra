/**
 * ============================================================================
 *  IMAGE ASSETS — SINGLE SOURCE OF TRUTH
 * ============================================================================
 *  Every image used by the site is referenced through a named constant in this
 *  one file. All values are root-relative paths into `public/` — nothing here
 *  points at a remote host any more, so nothing can expire.
 *
 *  History: these used to be temporary `figma.com/api/mcp/asset/<uuid>` render
 *  links, which expire ~7 days after export. They had all gone 404, which is
 *  why the site rendered with broken images. The artwork was re-exported from
 *  the Voltra Website Figma file (key l9sKNeCEelvC2ZB9xPGvnR) and committed
 *  under `public/voltra/`.
 *
 *  To swap in new artwork, drop the file in `public/voltra/` and change the
 *  value here — you should NOT need to touch any component.
 *
 *  Purely decorative marks (arrows, chevrons, dividers) are NOT stored here —
 *  they are drawn with `lucide-react` icons in the components instead.
 * ============================================================================
 */

export const assets = {
  // ---- Brand ----
  // TODO: the logo is a *vector* in Figma, so it never appears in the file's
  // raster fills and could not be re-exported with the rest of the artwork.
  // `/icon.svg` is the bolt mark and is used for both nav + footer (recolour
  // with CSS `filter`/`currentColor` rather than shipping two bitmaps). The
  // wordmark still needs a proper SVG export — see note at the bottom.
  logo: {
    mark: "/icon.svg",
    wordmark: "/icon.svg",
    footerMark: "/icon.svg",
    footerWordmark: "/icon.svg",
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
    unitFront: "/voltra/product-unit-front.png", // transparent cutout, 1402x1122
    unitAngle: "/voltra/product-unit-angle.png", // 3/4 view on blue podium, 509x512
    // Same front render but on a solid white podium — use where the card sits
    // on a coloured panel and the cutout would look like it's floating.
    unitFrontWhite: "/voltra/product-unit-front-white.png",
  },

  // ---- "Storage that scales" carousel ----
  offerings: {
    // NOTE: only a 336x192 source exists in Figma — it will soften if scaled up.
    batteriesShelf: "/voltra/offerings-batteries-shelf.png",
  },

  // ---- Why Voltra feature cards ----
  why: {
    background: "/voltra/factory-line.jpg", // blue-lit battery production line
    safety: "/voltra/why-safety.png", // exploded LFP pack, 1536x1024
    efficiency: "/voltra/wind-solar-farm.png", // solar + wind at sunset, 1536x1024
    cycles: "/voltra/why-cycles.png", // infinity loop + cell, 1536x1024
    // NOTE: gridReady + madeInIndia only exist at 384x256 in Figma.
    gridReady: "/voltra/why-grid-ready.png", // India network map
    madeInIndia: "/voltra/why-made-in-india.png", // lion hologram + factory
    smartOandM: "/voltra/why-smart-om.png", // app dashboard + cloud, 1536x1024
  },

  // ---- Mission / "Our Story" floating tiles ----
  mission: {
    cityNight: "/voltra/mission-city-night.png", // waterfront at dusk, 2944x1648
    // TODO: no "village" tile exists in the Figma file — reusing the rooftop
    // solar village photo already in the repo until the real art lands.
    village: "/blog/post-1.jpg",
    factory: "/voltra/factory-line.jpg",
    skyline: "/voltra/mission-skyline.png", // turbines + skyline, 2944x1648
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
    headerTexture: "/voltra/factory-line.jpg",
    // Interior room with wall-mounted inverter + battery (mission section).
    missionUnits: "/voltra/about-mission-units.jpg", // 1920x1080
    // Wind + solar farm (featured "who we serve" vertical image).
    serveImage: "/voltra/wind-solar-farm.png", // 1536x1024
  },

  // ---- Hybrid Inverters page ----
  hybridPage: {
    // Hybrid inverter unit on a lit stand (hero, left).
    heroInverter: "/voltra/hybrid-hero-inverter.png", // 1024x1536
    // Product-range cards. Figma only ships one inverter angle, so the card
    // reuses the hero render; NOTE the 256x384 variant is low-res.
    cardFront: "/voltra/hybrid-card-front.png",
    cardAngle: "/voltra/hybrid-hero-inverter.png",
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
    cardFront: "/voltra/product-unit-front-white.png", // 1402x1122
    cardAngle: "/voltra/product-unit-angle.png", // 509x512
    // Faint solar-panel photo (Figma node 1:1443) — sits behind the intro/why
    // area as a backdrop. Shared local copy; regenerate if the art changes.
    solarBackdrop: "/solar-backdrop.png",
  },

  // ---- Grid-Scale BESS page ----
  bessPage: {
    // Liquid-cooled BESS cabinet render (hero, left) — transparent cutout.
    heroCabinet: "/voltra/bess-hero-cabinet.png", // 1402x1122
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
