import json, re

data = json.load(open('tools/ref-products.json'))['products']

# section string -> category key/meta
CATS = [
  ("Containerized & Cabinet BESS", "containerized", "Containerized & Cabinet BESS",
   "Factory-integrated, liquid-cooled battery systems for commercial and utility-scale projects."),
  ("High-Voltage Modular Rack", "hv-rack", "High-Voltage Modular Rack",
   "Stackable high-voltage battery racks that scale to match your site."),
  ("Floor-Standing & Stackable Systems", "floor-stack", "Floor-Standing & Stackable Systems",
   "High-capacity floor and stackable storage for homes and small commercial sites."),
  ("Wall-Mounted Home Systems", "wall", "Wall-Mounted Home Systems",
   "Compact, wall-hung LiFePO₄ batteries designed for easy installation and rooftop-solar integration."),
  ("All-in-One Backup", "all-in-one", "All-in-One Backup",
   "Portable, all-in-one power stations for backup and off-grid use."),
  ("Single-Phase Hybrid Inverters", "single-phase", "Single-Phase Hybrid Inverters",
   "Single-phase solar hybrid inverters for homes and light commercial loads."),
  ("Three-Phase Hybrid Inverters", "three-phase", "Three-Phase Hybrid Inverters",
   "Three-phase solar hybrid inverters for larger homes and commercial sites."),
  ("Three-Phase High-Voltage Hybrid Inverters", "three-phase-hv", "Three-Phase High-Voltage Hybrid Inverters",
   "High-voltage three-phase hybrid inverters for commercial and industrial scale."),
]
sec2key = {s: k for (s, k, t, sub) in CATS}

P = "/voltra/products/"
# image map by (name, badge) or name
def image_for(name, badge):
    n = name.upper()
    m = {
      "VOLT-LINK": "/voltra/bess-hero-cabinet.png",
      "VOLT-LINK AIR": P+"link-air.jpg",
      "VOLT-HVC": P+"hvc.jpg",
      "VOLT-LV314": P+"lv314.jpg",
      "VOLT-LV200": P+"lv200.jpg",
      "VOLT-LVS": P+"stackable-racks.jpg",
      "VOLT-LVW 16S": P+"lvw-16s.jpg",
      "VOLT FUSION 1600": P+"fusion-1600.jpg",
      "VOLT-3KW1": P+"hi-single-3kw.jpg",
    }
    if n in m: return m[n]
    if n == "VOLT-LVW 8S" and badge == "PRO": return P+"lvw-8s-pro.jpg"
    if n == "VOLT-LVW 8S": return P+"lvw-8s.jpg"
    if n == "VOLT-LVW 4S" and badge == "PRO": return P+"lvw-4s-pro.jpg"
    if n == "VOLT-LVW 4S": return P+"lvw-4s.jpg"
    if re.match(r"VOLT-\dKW1", n) or re.match(r"VOLT-[0-9]+KW1", n): return P+"hi-single-k1p.jpg"
    if re.match(r"VOLT-[0-9]+KW3", n): return P+"hi-three-k3p.jpg"
    return P+"lvw-16s.jpg"  # safe fallback

def slug(name, badge):
    s = re.sub(r'[^a-z0-9]+', '-', (name+' '+badge).lower()).strip('-')
    return s

# strip leading brand from scraped name -> model name (card prepends "VOLT-")
def model(name):
    n = re.sub(r'^VOLT[-\s]+', '', name).strip()
    return n

def esc(s):
    return s.replace('\\', '\\\\').replace('"', '\\"')

# group
groups = {}
for p in data:
    key = sec2key.get(p['section'])
    if not key: continue
    groups.setdefault(key, []).append(p)

def emit_product(p):
    name = model(p['name'])
    badge = p['badge']
    lines = []
    lines.append("    {")
    lines.append(f'      id: "{slug(p["name"], badge)}", brand: "VOLT", name: "{esc(name)}",')
    if badge: lines.append(f'      badge: "{esc(badge)}",')
    lines.append(f'      capacities: "{esc(p["capacity"])}", image: "{image_for(p["name"], badge)}",')
    lines.append(f'      description: "{esc(p["desc"])}",')
    # features
    lines.append("      features: [")
    for f in p['features']:
        if not f['title'] and not f['detail']: continue
        lines.append(f'        {{ title: "{esc(f["title"])}", detail: "{esc(f["detail"])}" }},')
    lines.append("      ],")
    # specs
    lines.append("      specs: [")
    for s in p['specs']:
        lines.append(f'        {{ label: "{esc(s["label"])}", value: "{esc(s["value"])}" }},')
    lines.append("      ],")
    lines.append("      ...CTA,")
    lines.append("    },")
    return "\n".join(lines)

out = []
out.append("// AUTO-GENERATED product catalog.")
out.append("// Source: the reference Voltra catalog (smooth-site-builder-69.lovable.app).")
out.append("// Real product names, capacities, descriptions, benefit features and full")
out.append("// specification tables scraped from that site; images mapped to our own")
out.append("// product renders in /public/voltra. Regenerate with tools/gen_catalog if the")
out.append("// reference changes. Card shape is consumed by ProductCard.tsx.")
out.append("")
out.append('const CTA = {')
out.append('  primaryCta: { label: "Order Now", to: "/contact" },')
out.append('  secondaryCta: { label: "Full Specification", to: "/contact?brochure=1" },')
out.append('};')
out.append("")
out.append("export const CATALOG = [")
for (sec, key, title, sub) in CATS:
    prods = groups.get(key, [])
    if not prods: continue
    out.append("  {")
    out.append(f'    key: "{key}",')
    out.append(f'    title: "{esc(title)}",')
    out.append(f'    subtitle: "{esc(sub)}",')
    out.append("    products: [")
    for p in prods:
        out.append(emit_product(p))
    out.append("    ],")
    out.append("  },")
out.append("];")
out.append("")
out.append("// Flat helpers")
out.append("export const ALL_PRODUCTS = CATALOG.flatMap((c) => c.products);")
out.append("export const catByKey = (key) => CATALOG.find((c) => c.key === key) || { products: [] };")
out.append("export const productsByKey = (key) => catByKey(key).products;")
out.append("")

open('src/constants/catalog.js', 'w').write("\n".join(out))
print("wrote src/constants/catalog.js")
print("categories:", [k for (_,k,_,_) in CATS if groups.get(k)])
print("total products:", sum(len(groups.get(k,[])) for (_,k,_,_) in CATS))
