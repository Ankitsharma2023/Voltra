/**
 * ============================================================================
 *  SITE CONTENT — SINGLE SOURCE OF TRUTH
 * ============================================================================
 *  All copy (headings, paragraphs, product specs, stats, FAQ, footer…) plus the
 *  ROUTES map live here. Components are presentational and read from this file,
 *  so text/route edits happen in one place.
 *
 *  ROUTES preserve the EXISTING app's navigation targets. Per the brief, button
 *  interactions stay the same — e.g. every primary CTA ("Book a Consultation",
 *  "Order Now", "Contact Us") still points at the current contact route, and
 *  product links still point at the current products route.
 * ============================================================================
 */

/** Existing app routes — the only place URLs are hard-coded. */
export const ROUTES = {
  home: "/",
  products: "/products",
  about: "/about",
  contact: "/contact",
  technology: "/technology",
  hybridInverters: "/hybrid-inverters",
  lithiumBatteries: "/lithium-batteries",
  gridBess: "/grid-scale-bess",
  energyAdvisor: "/energy-advisor",
  blog: "/blog",
  islandMode: "/solutions/island-mode",
  hybridMode: "/solutions/hybrid-mode",
  microgridMode: "/solutions/microgrid-mode",
};

/** Top navigation. `to` values reuse existing routes. */
export const NAV = {
  links: [
    { label: "About", to: ROUTES.about },
    { label: "Hybrid Inverters", to: ROUTES.hybridInverters },
    { label: "Lithium Batteries", to: ROUTES.lithiumBatteries },
    { label: "BESS", to: ROUTES.gridBess },
    { label: "Energy Advisor", to: ROUTES.energyAdvisor },
    { label: "Blog", to: ROUTES.blog },
  ],
  // Same destination as the existing "BOOK A CALL" / "CONTACT US" buttons.
  secondaryCta: { label: "Book a Consultation", to: ROUTES.contact },
  // Same destination as the existing "PRODUCTS" / "View our products".
  primaryCta: { label: "Our Products", to: ROUTES.products },
};

export const HERO = {
  titleLines: ["Hybrid Inverters", "Lithium Batteries"],
  titleAccent: "Built for Bharat",
  subtitle:
    "Voltra makes India's most advanced solar hybrid systems — from rooftop homes to grid-scale BESS. Engineered locally. Trusted nationally.",
  primaryCta: { label: "Hybrid Inverters", to: ROUTES.hybridInverters },
  secondaryCta: { label: "Lithium Batteries", to: ROUTES.lithiumBatteries },
  warranty: ["10 YEARS OF POWER", "10 YEARS OF PEACE", "WARRANTY YOU CAN TRUST"],
  warrantyYears: "10",
};

/** Phrases cycled across the moving ticker ribbon under the hero. */
export const MARQUEE_ITEMS = [
  "#1 energy storage company",
  "Hybrid inverters, engineered smarter",
  "LiFePO4 batteries, built to outlast",
  "10-year warranty. Zero fine print",
  "Powering the future of energy",
];

export const ABOUT = {
  eyebrow: "About Voltra",
  title: "Shaping India's energy future with indigenized hybrid technology.",
  body:
    "Headquartered in Gurugram with a gigafactory in Bahadurgarh, Voltra Energy delivers hybrid solar inverters and Lithium Iron Phosphate (LFP) battery systems for homes, businesses and grid-scale renewable integration.",
  cta: { label: "Learn More", to: ROUTES.about },
};

/**
 * ============================================================================
 *  PRODUCT CATALOG — mirrors the product cards in the Figma "Voltra Website"
 *  file (Lithium Batteries + Hybrid Inverters frames). Names, specs and badges
 *  are taken from Figma; each product uses its official render exported from
 *  Figma into /public/voltra/products.
 *  Card shape: { id, brand, name, badge?, capacities, image, specs[],
 *  primaryCta, secondaryCta } (see ProductCard.tsx).
 * ============================================================================
 */
const CTA = {
  primaryCta: { label: "Order Now", to: ROUTES.contact },
  secondaryCta: { label: "View Brochure", to: ROUTES.products },
};
const PHOTO = "/voltra/products/";

// ---- Batteries (Figma "Lithium Batteries" product range) ----
export const RESIDENTIAL_BATTERIES = [
  {
    id: "lvw-16s-ultra", brand: "VOLT", name: "LVW 16S", badge: "IP65", capacities: "5.12 | 10.24 | 20.48 | 40.96 kWh",
    image: "/voltra/product-unit-front.png",
    specs: [
      { label: "Cell Type", value: "LFP" },
      { label: "Available Energy", value: "5.12 kWh" },
      { label: "Max. Output Power", value: "5 kW" },
      { label: "Charge–Discharge Efficiency", value: "≥ 97%" },
    ], ...CTA,
  },
  {
    id: "lvw-16s", brand: "VOLT", name: "LVW 16S", badge: "IP65", capacities: "5.12 kWh",
    image: `${PHOTO}lvw-16s.jpg`,
    specs: [
      { label: "Cell Type", value: "LFP" },
      { label: "Available Energy", value: "5.12 kWh" },
      { label: "Max. Output Power", value: "1.2 kW" },
      { label: "Charge–Discharge Efficiency", value: "≥ 97%" },
    ], ...CTA,
  },
  {
    id: "lvw-4s-pro", brand: "VOLT", name: "LVW 4S PRO", badge: "PRO", capacities: "2.56 kWh",
    image: `${PHOTO}lvw-4s-pro.jpg`,
    specs: [
      { label: "Cell Type", value: "LFP" },
      { label: "Available Energy", value: "2.56 kWh" },
      { label: "Max. Output Power", value: "2.7 kW" },
      { label: "Charge–Discharge Efficiency", value: "≥ 97%" },
    ], ...CTA,
  },
  {
    id: "lvw-8s", brand: "VOLT", name: "LVW 8S", capacities: "2.56 kWh",
    image: `${PHOTO}lvw-8s.jpg`,
    specs: [
      { label: "Cell Type", value: "LFP" },
      { label: "Available Energy", value: "2.56 kWh" },
      { label: "Max. Output Power", value: "2.4 kW" },
      { label: "Charge–Discharge Efficiency", value: "≥ 97%" },
    ], ...CTA,
  },
  {
    id: "lvw-8s-pro", brand: "VOLT", name: "LVW 8S PRO", badge: "PRO", capacities: "5.12 kWh",
    image: `${PHOTO}lvw-8s-pro.jpg`,
    specs: [
      { label: "Cell Type", value: "LFP" },
      { label: "Available Energy", value: "5.12 kWh" },
      { label: "Max. Output Power", value: "3.6 kW" },
      { label: "Charge–Discharge Efficiency", value: "≥ 97%" },
    ], ...CTA,
  },
  {
    id: "lv200", brand: "VOLT", name: "LV200", capacities: "10.24 kWh",
    image: `${PHOTO}lv200.jpg`,
    specs: [
      { label: "Cell Type", value: "LFP" },
      { label: "Available Energy", value: "10.24 kWh" },
      { label: "Max. Output Power", value: "10 kW" },
      { label: "Charge–Discharge Efficiency", value: "≥ 97%" },
    ], ...CTA,
  },
  {
    id: "lv314", brand: "VOLT", name: "LV314", capacities: "16.07 kWh",
    image: `${PHOTO}lv314.jpg`,
    specs: [
      { label: "Cell Type", value: "LFP" },
      { label: "Available Energy", value: "16.07 kWh" },
      { label: "Max. Output Power", value: "9.72 kW" },
      { label: "Charge–Discharge Efficiency", value: "≥ 97%" },
    ], ...CTA,
  },
  {
    id: "lvw-4s", brand: "VOLT", name: "LVW 4S", capacities: "2.56 kWh",
    image: `${PHOTO}lvw-4s.jpg`,
    specs: [
      { label: "Cell Type", value: "LFP" },
      { label: "Available Energy", value: "2.56 kWh" },
      { label: "Max. Output Power", value: "2.4 kW" },
      { label: "Charge–Discharge Efficiency", value: "≥ 97%" },
    ], ...CTA,
  },
  {
    id: "fusion-1600", brand: "VOLT", name: "FUSION 1600", badge: "PORTABLE", capacities: "1280 Wh",
    image: `${PHOTO}fusion-1600.jpg`,
    specs: [
      { label: "Cell Type", value: "LFP" },
      { label: "Available Energy", value: "1280 Wh" },
      { label: "Apparent Power", value: "1250 VA" },
      { label: "Charge–Discharge Efficiency", value: "≥ 97%" },
    ], ...CTA,
  },
];

// ---- Hybrid Inverters (Figma "Hybrid Inverters" product range) ----
export const HYBRID_INVERTERS = [
  {
    id: "hi-single-3kw", brand: "VOLT", name: "Single Phase HI", badge: "IP66", capacities: "3 kW · Single Phase",
    image: `${PHOTO}hi-single-3kw.jpg`,
    specs: [
      { label: "Rated AC Output Power", value: "3 kW" },
      { label: "Maximum Efficiency", value: "97.6%" },
      { label: "Maximum PV Input Power", value: "4.8 kW" },
      { label: "Battery Voltage Range", value: "220 / 230 V" },
    ], ...CTA,
  },
  {
    id: "hi-single-k1p", brand: "VOLT", name: "Single Phase HI", badge: "K1P", capacities: "0304 | 3.605 | 0506 | 0608 | 0810 | 1012",
    image: `${PHOTO}hi-single-k1p.jpg`,
    specs: [
      { label: "Rated AC Output Power", value: "3 – 10 kW" },
      { label: "Maximum Efficiency", value: "97.6%" },
      { label: "Maximum PV Input Power", value: "4.8 – 16 kW" },
      { label: "Battery Voltage Range", value: "40 – 60 V" },
    ], ...CTA,
  },
  {
    id: "hi-three-k3p", brand: "VOLT", name: "Three Phase HI", badge: "K3P", capacities: "0506 | 0608 | 0810 | 1012 | 1215 | 1520 | 2025",
    image: `${PHOTO}hi-three-k3p.jpg`,
    specs: [
      { label: "Rated AC Output Power", value: "5 – 20 kW" },
      { label: "Maximum Efficiency", value: "97.6%" },
      { label: "Maximum PV Input Power", value: "7.5 – 32 kW" },
      { label: "Battery Voltage Range", value: "40 – 60 V" },
    ], ...CTA,
  },
  {
    id: "hi-lvw16s", brand: "VOLT", name: "LVW 16S PRO", badge: "K1P", capacities: "0304 | 3.605 | 0506 | 0608 | 0810 | 1012",
    image: `${PHOTO}hi-lvw16s.jpg`,
    specs: [
      { label: "Rated AC Output Power", value: "3 – 10 kW" },
      { label: "Maximum Efficiency", value: "97.6%" },
      { label: "Maximum PV Input Power", value: "4.8 – 16 kW" },
      { label: "Battery Voltage Range", value: "40 – 60 V" },
    ], ...CTA,
  },
];

// ---- Home page product rows ----
// These mirror the Figma landing frame exactly: three rows with the designer's
// finalised product placement (Battery Solutions, Inverter Solutions, High
// Voltage Range).
export const BATTERY_SOLUTIONS = {
  title: "Our Battery Solutions for your home",
  products: [
    {
      id: "home-lvw-16s-ultra", brand: "VOLT", name: "LVW 16S Ultra", badge: "IP65",
      capacities: "5.12 | 10.24 | 20.48 | 40.96 kWh", image: "/voltra/product-unit-front.png",
      specs: [
        { label: "Cell Type", value: "LFP" },
        { label: "Available Energy", value: "5.12 kWh" },
        { label: "Max. Output Power", value: "5 kW" },
        { label: "Charge–Discharge Efficiency", value: "≥ 97%" },
      ], ...CTA,
    },
    {
      id: "home-lvw-4s-pro", brand: "VOLT", name: "LVW 4S", badge: "PRO", capacities: "5.12 kWh",
      image: `${PHOTO}lvw-4s-pro.jpg`,
      specs: [
        { label: "Cell Type", value: "LFP" },
        { label: "Available Energy", value: "5.12 kWh" },
        { label: "Max. Output Power", value: "1.2 kW" },
        { label: "Charge–Discharge Efficiency", value: "≥ 97%" },
      ], ...CTA,
    },
    {
      id: "home-lvw-4s", brand: "VOLT", name: "LVW 4S", capacities: "2.56 kWh",
      image: `${PHOTO}lvw-4s-2p56.jpg`,
      specs: [
        { label: "Cell Type", value: "LFP" },
        { label: "Available Energy", value: "2.56 kWh" },
        { label: "Max. Output Power", value: "2.7 kW" },
        { label: "Charge–Discharge Efficiency", value: "≥ 97%" },
      ], ...CTA,
    },
  ],
};

export const INVERTER_SOLUTIONS = {
  title: "Our Inverter Solutions for your home",
  products: [
    {
      id: "home-hi-single", brand: "VOLT", name: "Single Phase HI", badge: "K1P",
      capacities: "0304 | 3.605 | 0506 | 0608 | 0810 | 1012", image: `${PHOTO}hi-single-3kw.jpg`,
      specs: [
        { label: "Rated AC Output Power", value: "3 – 10 kW" },
        { label: "Maximum Efficiency", value: "97.6%" },
        { label: "Maximum PV Input Power", value: "4.8 – 16 kW" },
        { label: "Battery Voltage Range", value: "40 – 60 V" },
      ], ...CTA,
    },
    {
      id: "home-fusion-1600", brand: "VOLT", name: "FUSION 1600", capacities: "1280 Wh",
      image: `${PHOTO}fusion-1600.jpg`,
      specs: [
        { label: "Cell Type", value: "LFP" },
        { label: "Available Energy", value: "1280 Wh" },
        { label: "Apparent Power", value: "1250 VA" },
        { label: "Charge–Discharge Efficiency", value: "≥ 97%" },
      ], ...CTA,
    },
    {
      id: "home-hi-three", brand: "VOLT", name: "Three Phase HI", badge: "K3P",
      capacities: "0506 | 0608 | 0810 | 1012 | 1215 | 1520 | 2025", image: `${PHOTO}hi-three-k3p.jpg`,
      specs: [
        { label: "Rated AC Output Power", value: "5 – 20 kW" },
        { label: "Maximum Efficiency", value: "97.6%" },
        { label: "Maximum PV Input Power", value: "7.5 – 32 kW" },
        { label: "Battery Voltage Range", value: "40 – 60 V" },
      ], ...CTA,
    },
  ],
};

// High Voltage Range — name + render only (no spec table in the Figma cards).
export const HIGH_VOLTAGE_PRODUCTS = {
  title: "Our High Voltage Range Products",
  products: [
    { id: "home-hvc", brand: "VOLT", name: "HVC", image: `${PHOTO}hvc.jpg`, specs: [], ...CTA },
    { id: "home-stackable-racks", brand: "VOLT", name: "Stackable Racks", image: `${PHOTO}stackable-racks.jpg`, specs: [], ...CTA },
    { id: "home-link-air", brand: "VOLT", name: "Link Air", image: `${PHOTO}link-air.jpg`, specs: [], ...CTA },
  ],
};

export const OFFERINGS = {
  eyebrow: "Our offerings",
  title: "Storage that scales — from one home to a national grid.",
  // Tabs switch the featured card. Batteries copy is from the design; the
  // others are parallel placeholders — edit freely.
  tabs: [
    {
      id: "inverters",
      label: "Inverters",
      title: "Hybrid Inverters",
      body:
        "Single- and three-phase hybrid inverters with seamless grid, solar and generator switching for homes and C&I sites.",
    },
    {
      id: "batteries",
      label: "Batteries",
      title: "Lithium-ion Batteries",
      body:
        "Safe LFP wall-mount and stackable batteries from 1.25 kWh — 8,000+ cycles, 15-year design life, smart BMS.",
    },
    {
      id: "grids",
      label: "Grids",
      title: "Grid-Scale BESS",
      body:
        "Containerized megawatt-hour systems for utility renewable integration, peak shaving and firm-power delivery.",
    },
  ],
};

export const WHY_VOLTRA = {
  eyebrow: "Why Voltra",
  title: "Engineered for performance, built for India's climate.",
  features: [
    {
      id: "safety",
      title: "Safety-first LFP",
      body:
        "Lithium Iron Phosphate chemistry with multi-layer BMS, NOVEC1230 fire protection and IP55/65 ratings.",
    },
    {
      id: "efficiency",
      title: "94% Efficiency",
      body:
        "Optimized cell-to-pack design delivers industry-leading round-trip efficiency with 95% depth of discharge.",
    },
    {
      id: "cycles",
      title: "8,000+ Cycles",
      body:
        "15-year design lifespan keeps your investment producing decades into the future.",
    },
    {
      id: "gridReady",
      title: "Grid-Ready",
      body:
        "Compatible with 20+ inverter brands. From residential solar to utility renewable integration.",
    },
    {
      id: "madeInIndia",
      title: "Made in India",
      body:
        "Indigenized manufacturing at our Bahadurgarh gigafactory — AI-driven QC and robotic assembly.",
    },
    {
      id: "smartOandM",
      title: "Smart O&M",
      body:
        "Cloud and app-based monitoring, predictive diagnostics and remote service across every install.",
    },
  ],
};

export const MISSION = {
  titleLead: "Powering India's net-zero transition.",
  titleRest:
    " Voltra exists to make clean, reliable and affordable energy a default — not a privilege — for every Indian home, business and grid.",
  stats: [
    { value: "3.2 M T", label: "CO₂ avoided / GWh deployed" },
    { value: "10,000+", label: "Homes powered by 2027" },
    { value: "1,200+", label: "Direct jobs at full ramp" },
    { value: "500 GW", label: "India's 2030 renewables target" },
  ],
  cta: { label: "Our Story", to: ROUTES.about },
};

export const FAQ_CTA = {
  title: "Let's power a better tomorrow, together.",
  body: "Join the Voltra network of installers, distributors and EPC partners.",
  cta: { label: "Contact Us", to: ROUTES.contact },
  items: [
    {
      q: "What is a Battery Energy Storage System (BESS)?",
      a: "A Battery Energy Storage System (BESS) stores energy for later use — capturing power when it is cheap or abundant (e.g. from rooftop solar) and delivering it during peak demand or outages.",
    },
    {
      q: "How does a BESS work?",
      a: "A BESS converts electrical energy into chemical energy stored in battery cells, then converts it back to electricity on demand. A power conversion system and smart controls manage charge and discharge cycles.",
    },
    {
      q: "What are the benefits of using a BESS?",
      a: "Lower energy bills, backup during outages, grid stability, peak-demand reduction, higher renewable self-consumption and a smaller carbon footprint.",
    },
    {
      q: "What types of batteries are used in a BESS?",
      a: "Voltra uses Lithium Iron Phosphate (LFP) chemistry for its safety, long cycle life and thermal stability in India's climate.",
    },
    {
      q: "How long does a typical BESS last?",
      a: "Voltra systems are engineered for 8,000+ cycles and a 15–20 year design life with low degradation.",
    },
  ],
};

export const GIGAFACTORY = {
  eyebrow: "The Voltra Gigafactory",
  title: ["Intelligent manufacturing.", "Uncompromising quality."],
  body:
    "Robotic assembly, in-house cell grading and full traceability — every Voltra battery and inverter is built with the discipline of a world-class production system.",
  cta: { label: "Explore more", to: ROUTES.technology },
};

/**
 * ============================================================================
 *  ABOUT PAGE (Figma frame "About", node 1:612)
 * ============================================================================
 */
export const ABOUT_PAGE = {
  hero: {
    eyebrow: "About Voltra",
    title: "Energy reliability, made in India",
    body:
      "Voltra Energy is building the BESS infrastructure that India's renewable transition depends on — from residential rooftops to gigawatt-scale grids.",
    cta: { label: "Learn More", to: ROUTES.products },
  },
  stats: [
    { value: "15+", label: "States across India" },
    { value: "8,000+", label: "Cycle life @ 25°C" },
    { value: "1,672 kWh", label: "Max single-cabinet capacity" },
    { value: "15 yrs", label: "Design lifespan" },
  ],
  mission: {
    eyebrow: "Our mission",
    title: "India's most advanced lithium battery",
    body:
      "Voltra Energy is an Indian Battery Energy Storage System company at the intersection of advanced technology and renewable energy infrastructure. Headquartered in Gurugram and manufacturing in Bahadurgarh, Haryana, we build indigenized storage solutions for a rapidly electrifying India.",
  },
  serve: {
    eyebrow: "Who we serve",
    title: "Three verticals. One mission.",
    // Stepper: each vertical has a label + featured image + description.
    // `imageKey` maps to assets in the WhoWeServe component.
    verticals: [
      {
        id: "residential",
        label: "Residential",
        imageKey: "residential",
        description: "Homes, villas and housing societies going solar with reliable backup.",
      },
      {
        id: "commercial",
        label: "Commercial & Industrial",
        imageKey: "commercial",
        description: "Factories, warehouses, farms, SMEs and commercial properties.",
      },
      {
        id: "utility",
        label: "Utility / Grid-Scale",
        imageKey: "utility",
        description: "Grid operators and IPPs firming renewables at megawatt-hour scale.",
      },
    ],
  },
};

/**
 * ============================================================================
 *  HYBRID INVERTERS PAGE (Figma frame "Hybrid Inverters", node 1:977)
 * ============================================================================
 */
export const HYBRID_PAGE = {
  hero: {
    eyebrow: "Hybrid Inverters",
    title: "One box. Solar, battery and grid — perfectly orchestrated.",
    subtitle:
      "Voltra hybrid inverters intelligently route power between your solar panels, Li-ion battery and the grid — 24×7.",
  },
  why: {
    eyebrow: "Why Voltra Hybrid",
    title: "Built for Indian grids and Indian climates.",
    body:
      "Wide input voltage, surge protection, dust-sealed enclosures and a smart BMS handshake make Voltra hybrid inverters the most reliable choice for Tier-1 to Tier-4 cities.",
    chips: [
      { label: "Battery-ready" },
      { label: "Single-phase" },
      { label: "3 – 6 kW", active: true },
      { label: "IP66 outdoor" },
      { label: "App monitoring" },
      { label: "On-grid + Off-grid" },
    ],
  },
  range: {
    eyebrow: "Product range",
    title: "Sized for every load.",
    products: HYBRID_INVERTERS,
  },
  features: {
    title: "Engineered for the way India uses energy.",
    subtitle:
      "Every Voltra hybrid inverter is designed around India's grid realities — from voltage swings to monsoon heat — so your power stays clean, safe and always on.",
    // `icon` maps to the exact Figma feature icons in DarkFeatures (node 1:1265).
    items: [
      { icon: "guarantee", title: "Solar-First", body: "Smart MPPTs maximize PV harvest across partial shade & monsoon clouds." },
      { icon: "document", title: "Seamless Backup", body: "Sub-10 ms transfer keeps lights and appliances running through grid outages." },
      { icon: "pin", title: "Peak Shaving", body: "Time-of-day algorithms cut commercial demand charges automatically." },
      { icon: "badge-24h", title: "Cloud + App", body: "Live monitoring, alerts and remote firmware updates from the Voltra app." },
      { icon: "calendar", title: "98% Efficiency", body: "European-design topology delivers premium round-trip efficiency." },
      { icon: "chat", title: "Grid-Code Compliant", body: "CEA / IEC 61727 / 62116 certified for safe grid interconnection in India." },
    ],
  },
};

/**
 * ============================================================================
 *  LITHIUM BATTERIES PAGE (Figma frame "Lithium Batteries", node 1:1364)
 * ============================================================================
 */
export const LITHIUM_PAGE = {
  hero: {
    eyebrow: "Li-ion Batteries",
    title: "Safe, long-life LFP storage for every Indian home and business.",
    subtitle:
      "From 1.28 kWh portable units to 40 kWh stackable towers — Voltra Li-ion batteries store solar by day and power your loads by night.",
  },
  why: {
    eyebrow: "Why LFP",
    title: "The safest Li-ion chemistry, engineered for India.",
    body:
      "Lithium Iron Phosphate (LFP) is the chemistry of choice for stationary energy storage worldwide. Thermally stable, non-flammable and far longer-lived than NMC — perfect for the Indian climate.",
    chips: [
      { label: "Non-flammable" },
      { label: "12.8 – 51.2 V" },
      { label: "1.28 – 40.96 kWh", active: true },
      { label: "IP65 outdoor" },
      { label: "App monitoring" },
      { label: "Stackable" },
    ],
  },
  range: {
    eyebrow: "Product range",
    title: "Modular capacity from 1.28 kWh to 40 kWh.",
    products: RESIDENTIAL_BATTERIES,
  },
  features: {
    title: "Designed for safety. Built to last.",
    subtitle:
      "Every Voltra battery pairs LFP chemistry with a multi-layer BMS and rugged enclosures — engineered to run safely for 15+ years in India's climate.",
    items: [
      { icon: "flame", title: "Non-flammable LFP", body: "Lithium Iron Phosphate stays thermally stable — no thermal runaway, even in Indian heat." },
      { icon: "battery-charging", title: "8,000+ Cycles", body: "A 15-year design life with 8,000+ deep cycles at 25°C." },
      { icon: "cpu", title: "Smart BMS", body: "Multi-layer BMS balances every cell and guards against over/under-voltage." },
      { icon: "layers", title: "Stackable", body: "Modular towers scale from 2.5 kWh to 40 kWh as your needs grow." },
      { icon: "cloud", title: "Cloud + App", body: "Live monitoring, alerts and remote firmware updates from the Voltra app." },
      { icon: "badge-check", title: "Certified Safe", body: "IEC 62619 / UL 1973 tested with IP65 outdoor-rated enclosures." },
    ],
  },
};

/**
 * ============================================================================
 *  GRID-SCALE BESS PAGE (Figma frame "Grid-Scale BESS", node 1:1751)
 * ============================================================================
 */
export const BESS_PAGE = {
  hero: {
    eyebrow: "Grid-Scale BESS",
    title: "Storage that the Indian grid can rely on.",
    subtitle:
      "Voltra BESS platforms deliver dispatchable energy for IPPs, DISCOMs, industrial parks and renewable developers — built on the safest LFP chemistry and engineered in India.",
  },
  why: {
    eyebrow: "VOLT-LINK platform",
    title: "418 · 836 · 1,254 · 1,672 kWh — one modular platform.",
    body:
      "Liquid-cooled prismatic LFP cells, 200 kW rated power per cabinet and parallel scalability to multi-MWh farms. A 1.7 m² footprint makes deployment compact even at substation scale.",
    chips: [
      { label: "Liquid-cooled" },
      { label: "200 kW / cabinet" },
      { label: "MWh-scalable", active: true },
      { label: "IP55 outdoor" },
      { label: "Cloud SCADA" },
      { label: "Grid-code ready" },
    ],
  },
  features: {
    title: "From frequency regulation to renewable firming.",
    subtitle:
      "One platform covers the full stack of grid services — so utilities and developers can stack revenue while keeping the network stable.",
    items: [
      { icon: "gauge", title: "Frequency Regulation", body: "Millisecond response injects or absorbs power to hold grid frequency within band." },
      { icon: "sun", title: "Renewable Firming", body: "Smooths solar and wind ramps so intermittent generation becomes dispatchable." },
      { icon: "trending-down", title: "Peak Shaving", body: "Shifts energy from off-peak to peak, cutting demand charges and network stress." },
      { icon: "zap", title: "Black Start", body: "Restarts a de-energised grid or micro-grid without external power." },
      { icon: "cloud", title: "Cloud SCADA", body: "Remote dispatch, telemetry and analytics with utility-grade cybersecurity." },
      { icon: "shield-check", title: "Grid-Code Compliant", body: "CEA / IEC 62933 certified for safe interconnection at substation scale." },
    ],
  },
};

/**
 * ============================================================================
 *  BLOG PAGE (Figma frame "Blog", node 1:815)
 * ============================================================================
 *  Figma copy was placeholder home-improvement text; replaced with Voltra-
 *  relevant posts. Dates are static strings (no runtime clock).
 */
export const BLOG_PAGE = {
  hero: {
    eyebrow: "Voltra Blog",
    title: "Storage, solar & the Indian energy transition.",
    subtitle:
      "Field notes, technical deep-dives and economic analyses from the team building India's battery infrastructure.",
    cta: { label: "Learn More", to: ROUTES.blog },
  },
  featured: {
    eyebrow: "Featured · Inverters",
    title: "IP21 vs IP65 vs IP66 — Which Inverter Protection Rating Does Your Home Actually Need?",
    body:
      "That little IP code on the spec sheet decides whether your inverter survives five monsoons or fails in the first one. Here's what IP21, IP65 and IP66 really mean for Indian conditions.",
    cta: { label: "Read article", to: "/blog/inverter-ip-rating-ip21-ip65-ip66" },
  },
  list: {
    title: "Explore Insights in Our Blog",
    subtitle: "Field notes and deep-dives on storage, solar and the grid. Explore, learn and get inspired.",
    cta: { label: "View More", to: ROUTES.blog },
    posts: [
      {
        id: "post-sizing",
        slug: "inverter-battery-sizing-guide",
        imageKey: "thumb1",
        date: "02 Jun 2026",
        title: "Inverter and Battery Sizing Guide — Choosing the Right kW and kWh",
        excerpt:
          "The most common mistake in backup power planning isn't the brand — it's the size. Here's the actual math to size a hybrid inverter and battery with confidence.",
        tags: ["Sizing", "Residential", "How-to"],
      },
      {
        id: "post-bess-dg",
        slug: "bess-vs-diesel-generator",
        imageKey: "thumb2",
        date: "20 May 2026",
        title: "BESS as an Alternative to Diesel Generators — Why Businesses Are Switching",
        excerpt:
          "Rising diesel prices, tighter pollution norms and cheaper lithium storage have made battery storage a genuinely competitive alternative to the diesel generator.",
        tags: ["BESS", "Commercial", "Economics"],
      },
      {
        id: "post-himachal",
        slug: "bess-himachal-grid-case-study",
        imageKey: "thumb3",
        date: "06 May 2026",
        title: "BESS Powering Himachal's Grids — A Case Study in Hilly-Terrain Resilience",
        excerpt:
          "Hilly terrain, dispersed populations and seasonal grid stress make Himachal an ideal candidate for storage. A look at a 700kW / 1,254kWh Voltra deployment.",
        tags: ["BESS", "Grid", "Case Study"],
      },
    ],
  },
};

export const FOOTER = {
  company: "Voltra Technologies Pvt. Ltd.",
  tagline: "The Future of Energy",
  address: ["3rd Floor, Orchid Center", "Golf Course Road", "Sector-53", "Gurugram, India"],
  phone: "+91 99929 29203",
  email: "info@voltra.in",
  columns: [
    {
      title: "HOME",
      links: [
        { label: "About Voltra", to: ROUTES.about },
        { label: "Our Products", to: ROUTES.products },
        { label: "The Voltra Edge", to: ROUTES.technology },
        { label: "Common Queries", to: ROUTES.contact },
      ],
    },
    {
      title: "PRODUCTS",
      links: [
        { label: "Residential ESS", to: `${ROUTES.products}?category=residential` },
        { label: "Utilities", to: `${ROUTES.products}?category=utility` },
        { label: "C&I", to: `${ROUTES.products}?category=ci` },
      ],
    },
    {
      title: "SOLUTIONS",
      links: [
        { label: "Island", to: ROUTES.islandMode },
        { label: "Hybrid", to: ROUTES.hybridMode },
        { label: "Microgrid", to: ROUTES.microgridMode },
      ],
    },
    {
      title: "TECHNOLOGY",
      links: [{ label: "The Voltra Edge", to: ROUTES.technology }],
    },
  ],
  copyright: "© 2026 Voltra Technologies Pvt. Ltd. All rights reserved.",
};

/**
 * Energy Advisor page (Figma frame "Energy Advisor", node 62:331).
 *
 * Three tools on one page: a guided system configurator, a live load
 * calculator, and a product spec hub. Only copy + data live here; all the
 * arithmetic is done in the components so the numbers stay honest.
 */
export const ENERGY_ADVISOR = {
  hero: {
    eyebrow: "Energy Advisor",
    title: "Build Your Perfect Energy System",
    subtitle:
      "A smart configurator, live load calculator and full product hub — all in one place.",
    cta: { label: "Run Simulation", to: "#configurator" },
  },

  /** Step-by-step configurator. Each step renders one or more choice groups. */
  configurator: {
    steps: [
      {
        title: "Tell us about the site",
        groups: [
          {
            id: "use",
            label: "Specify Use",
            layout: "grid",
            options: [
              { value: "home", label: "Home/Apartment" },
              { value: "shop", label: "Shop/Office" },
              { value: "factory", label: "Factory / Industrial" },
              { value: "epc", label: "Solar Developer / EPC" },
            ],
          },
          {
            id: "rooms",
            label: "Number of Rooms",
            layout: "pills",
            options: [2, 3, 4, 5, 6, 7, 8].map((n) => ({
              value: String(n),
              label: String(n),
            })),
          },
          {
            id: "backup",
            label: "Back Up Needed",
            layout: "row",
            options: [
              { value: "1", label: "1 Hr" },
              { value: "2", label: "2 Hr" },
              { value: "3", label: "3 Hr" },
              { value: "4", label: "4 Hr" },
            ],
          },
          {
            id: "bill",
            label: "Monthly electricity bill",
            layout: "row",
            options: [
              { value: "1000", label: "<1K" },
              { value: "1500", label: "1K-2K" },
              { value: "2500", label: "2K-3K" },
              { value: "3500", label: "3K-4K" },
            ],
          },
        ],
      },
      {
        title: "What do you already have?",
        groups: [
          {
            id: "solar",
            label: "Existing Solar",
            layout: "row",
            options: [
              { value: "none", label: "None" },
              { value: "1-3", label: "1-3 kW" },
              { value: "3-5", label: "3-5 kW" },
              { value: "5+", label: "5 kW+" },
            ],
          },
          {
            id: "grid",
            label: "Grid Reliability",
            layout: "row",
            options: [
              { value: "stable", label: "Stable" },
              { value: "occasional", label: "Occasional cuts" },
              { value: "frequent", label: "Frequent cuts" },
              { value: "offgrid", label: "Off-grid" },
            ],
          },
          {
            id: "priority",
            label: "What matters most?",
            layout: "grid",
            options: [
              { value: "savings", label: "Lower my bill" },
              { value: "backup", label: "Never lose power" },
              { value: "green", label: "Go fully green" },
              { value: "scale", label: "Room to expand" },
            ],
          },
        ],
      },
      {
        title: "Your recommended system",
        groups: [],
      },
    ],
  },

  calculator: {
    eyebrow: "DIY Tool",
    title: "Live Load Calculator",
    subtitle:
      "Know exactly what size system you need. Add your appliances manually.",
    columns: ["Appliance", "Watts", "Qty", "Hrs/day"],
    /** Starting rows — mirrors the Figma mock. */
    defaultRows: [
      { name: "LED Bulb", watts: 70, qty: 4, hours: 8 },
      { name: "Ceiling Fan", watts: 75, qty: 4, hours: 10 },
      { name: "Refrigerator", watts: 200, qty: 1, hours: 24 },
      { name: "Television", watts: 120, qty: 1, hours: 5 },
    ],
    /** Picker for the "add appliance" control. */
    presets: [
      { name: "LED Bulb", watts: 70, qty: 1, hours: 8 },
      { name: "Ceiling Fan", watts: 75, qty: 1, hours: 10 },
      { name: "Refrigerator", watts: 200, qty: 1, hours: 24 },
      { name: "Television", watts: 120, qty: 1, hours: 5 },
      { name: "Air Conditioner", watts: 1500, qty: 1, hours: 6 },
      { name: "Washing Machine", watts: 500, qty: 1, hours: 1 },
      { name: "Water Pump", watts: 750, qty: 1, hours: 2 },
      { name: "Microwave", watts: 1200, qty: 1, hours: 1 },
      { name: "Laptop", watts: 65, qty: 1, hours: 8 },
      { name: "Router", watts: 12, qty: 1, hours: 24 },
    ],
    backupOptions: [4, 6, 8],
    defaultTariff: 10,
  },

  productHub: {
    eyebrow: "Product Hub",
    title: "Understand Every Product",
    subtitle:
      "Deep-dive into Voltra's full range — expand a section to see specs, models and when to choose each system.",
    tabs: [
      {
        id: "inverters",
        label: "Inverters",
        title: "Hybrid Inverters",
        series: "VI Series | 3-50KW",
        body: [
          "A hybrid inverter is the brain of your solar-plus-storage system. It uses Maximum Power Point Tracking (MPPT) to extract peak energy from your solar panels — continuously adjusting voltage and current to match panel conditions hundreds of times per second.",
          "Unlike a basic string inverter, it intelligently routes power between solar, battery and grid in milliseconds — charging the battery when solar is abundant, switching to battery during cuts, and exporting surplus when allowed.",
        ],
        cta: { label: "Explore Inverters", to: ROUTES.hybridInverters },
        columns: ["Model", "Phase", "kW", "MPPT", "Eff.", "Best For"],
        rows: [
          ["VI-3K", "Single", "3 kW", "2", "97.6%", "Small home"],
          ["VI-5K", "Single", "5 kW", "2", "97.8%", "Family home"],
          ["VI-8K", "Single", "8 kW", "2", "98.0%", "Large home"],
          ["VI-15K", "Three", "15 kW", "3", "98.2%", "Shop / office"],
          ["VI-50K", "Three", "50 kW", "4", "98.4%", "Industrial"],
        ],
      },
      {
        id: "battery",
        label: "Battery",
        title: "Lithium Batteries",
        series: "LVW Series | 5-30KWH",
        body: [
          "Voltra packs use LiFePO₄ (lithium iron phosphate) cells — the safest lithium chemistry available. They tolerate high temperatures without thermal runaway, and hold over 80% of their original capacity after 6,000 full cycles.",
          "Every pack ships with a smart BMS that balances cells, tracks state-of-charge to within 2%, and reports live health over Bluetooth — so you know exactly what your storage is doing.",
        ],
        cta: { label: "Explore Batteries", to: ROUTES.lithiumBatteries },
        columns: ["Model", "Voltage", "kWh", "Cycles", "DoD", "Best For"],
        rows: [
          ["LVW-5S", "51.2 V", "5.1 kWh", "6000+", "95%", "Small home"],
          ["LVW-10S", "51.2 V", "10.2 kWh", "6000+", "95%", "Family home"],
          ["LVW-16S", "51.2 V", "16.4 kWh", "6000+", "95%", "Large home"],
          ["LVW-20S", "102 V", "20.5 kWh", "6000+", "95%", "Shop / office"],
          ["LVW-30S", "102 V", "30.7 kWh", "6000+", "95%", "Light industry"],
        ],
      },
      {
        id: "grids",
        label: "Grids",
        title: "Grid-Scale BESS",
        series: "VG Series | 100KWH-2MWH",
        body: [
          "Grid-scale Battery Energy Storage Systems store surplus renewable generation and release it when demand peaks — smoothing the duck curve and cutting reliance on diesel peaker plants.",
          "Voltra cabinets are liquid-cooled for even cell temperatures, ship pre-integrated with PCS and fire suppression, and scale in parallel from a single 100 kWh unit to multi-megawatt farms.",
        ],
        cta: { label: "Explore BESS", to: ROUTES.gridBess },
        columns: ["Model", "Capacity", "PCS", "Cooling", "Cycles", "Best For"],
        rows: [
          ["VG-100", "100 kWh", "50 kW", "Liquid", "8000+", "C&I peak shaving"],
          ["VG-250", "250 kWh", "125 kW", "Liquid", "8000+", "Factory backup"],
          ["VG-500", "500 kWh", "250 kW", "Liquid", "8000+", "Microgrid"],
          ["VG-1M", "1 MWh", "500 kW", "Liquid", "8000+", "Utility firming"],
          ["VG-2M", "2 MWh", "1 MW", "Liquid", "8000+", "Solar farm"],
        ],
      },
    ],
  },
};

/**
 * Contact page (Figma frame "Contact", node 62:161).
 *
 * NOTE: `endpoint` and `fieldMap` describe the EXISTING Google Apps Script
 * integration that already backs this form. The script reads four parameters —
 * name, contact, email, query — so the form maps its richer field set onto
 * those before submitting. Renaming them will break the live sheet.
 */
export const CONTACT_PAGE = {
  hero: {
    eyebrow: "Contact Voltra",
    title: "Let's power a better tomorrow, together.",
    subtitle:
      "Reach out for partnerships, project quotes or technical questions — our team responds within one business day.",
    cta: { label: "Contact Us", to: "#contact-form" },
  },
  form: {
    title: "Send us a message",
    subtitle: "Tell us about your project or partnership interest.",
    submitLabel: "Send Message",
    sendingLabel: "Sending…",
    successMessage: "Thanks — we've got your message and will reply within one business day.",
    errorMessage: "Something went wrong. Please email info@voltra.in and we'll pick it up.",
    interests: [
      "Residential Battery",
      "Residential BESS",
      "Hybrid Inverter",
      "Grid-Scale BESS",
      "Utilities / C&I",
      "Partnership / Distribution",
      "Technical Support",
      "Something else",
    ],
    endpoint:
      "https://script.google.com/macros/s/AKfycbz6K1XoONkeCa7eMFUIb42hQ8xwx9zzbMORm1lVWCC78oMR0f-RggG3A0ERclzGCOL5/exec",
  },
};
