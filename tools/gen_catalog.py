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


import os as _os
BAT_CATS={'wall','floor-stack','all-in-one'}
INV_CATS={'single-phase','three-phase','three-phase-hv'}
HV_MAP={'volt-link':'home-hv-1','volt-link-air':'home-hv-3','volt-hvc':'home-hv-2'}
def figma_image(key, pid):
    """Prefer the clean Figma render for this product; fall back to None."""
    if key in BAT_CATS and _os.path.exists(f'public/voltra/figma/bat-{pid}.png'):
        return f'/voltra/figma/bat-{pid}.png'
    if key in INV_CATS:
        base='nexa' if pid=='nexa-4kw' else pid
        if _os.path.exists(f'public/voltra/figma/inv-{base}.png'):
            return f'/voltra/figma/inv-{base}.png'
    if pid in HV_MAP:
        return f'/voltra/figma/{HV_MAP[pid]}.png'
    return None

# ---- Authoritative spec sheet (Voltra_Product_Specs.html) -------------------
# Product-card spec tables are sourced from this master sheet (shared by Sachin)
# instead of the reference scrape. Each catalog product maps to one series +
# column in the sheet's `D` data object.
SPEC_HTML = "Voltra_Product_Specs.html"
# Display-name overrides (by catalog id) where the marketing name differs from
# the scraped name. BADGE_OVERRIDE "" clears a badge (e.g. when the variant is
# spelled out in the name instead of shown as a corner chip).
NAME_OVERRIDE = {
    "volt-lvw-16s-ip65": "LVW 16S Ultra",
    "volt-lvw-4s-pro": "LVW 4S Pro",
    "volt-lvw-8s-pro": "LVW 8S Pro",
}
BADGE_OVERRIDE = {
    "volt-lvw-4s-pro": "",
    "volt-lvw-8s-pro": "",
}
SPEC_MAP = {
    "volt-link": ("link", 0), "volt-link-air": ("linkair", 0), "volt-hvc": ("hvc", 0),
    "volt-lv314": ("lv314", 0), "volt-lv200": ("lv200", 0), "volt-lvs": ("lvs", 0),
    "lv-50": ("lv50", 0), "volt-fusion-1600": ("fusion", 0),
    "volt-lvw-16s-ip65": ("lvw16", 0), "volt-lvw-8s-pro": ("lvw8p", 0),
    "volt-lvw-8s": ("lvw8", 0), "volt-lvw-4s-pro": ("lvw4p", 0), "volt-lvw-4s": ("lvw4", 0),
    "nexa-4kw": ("nexa", 0),
    "volt-3kw1": ("t1", 0), "volt-5kw1": ("t1", 1), "volt-6kw1": ("t1", 2), "volt-8kw1": ("t1", 3),
    "volt-8kw3": ("t3", 0), "volt-10kw3": ("t3", 1), "volt-12kw3": ("t3", 2),
    "volt-15kw3": ("t3", 3), "volt-20kw3": ("t3", 4),
    "volt-30kw3": ("thv", 0), "volt-40kw3": ("thv", 1), "volt-50kw3": ("thv", 2),
    "volt-60kw3": ("thv", 3), "volt-80kw3": ("thv", 4),
}

def _extract_D(text):
    """Pull the `var D={...}` object out of the spec sheet and parse it as JSON."""
    i = text.find("var D=")
    if i < 0:
        return None
    j = text.find("{", i)
    depth = 0; in_str = False; esc_ = False
    for k in range(j, len(text)):
        ch = text[k]
        if in_str:
            if esc_: esc_ = False
            elif ch == "\\": esc_ = True
            elif ch == '"': in_str = False
        elif ch == '"': in_str = True
        elif ch == "{": depth += 1
        elif ch == "}":
            depth -= 1
            if depth == 0:
                return json.loads(text[j:k + 1])
    return None

def _flatten(series, col):
    """Flatten one series+column into [{label, value}]; array values index by
    column, scalars apply to all. Labels that repeat across groups are prefixed
    with the group name so each row stays unique and readable."""
    counts = {}
    for group in series.get("groups", []):
        for row in group[1]:
            counts[row[0]] = counts.get(row[0], 0) + 1
    out = []
    for group in series.get("groups", []):
        gname = group[0]
        for row in group[1]:
            label, val = row[0], row[1]
            v = (val[col] if col < len(val) else val[-1]) if isinstance(val, list) else val
            lab = f"{gname} — {label}" if counts.get(label, 0) > 1 else label
            out.append({"label": lab, "value": str(v)})
    return out

# Products that represent a whole multi-module family — their spec modal gets a
# toggle (one tab per column) instead of a single table.
VARIANT_IDS = {"volt-hvc", "volt-lvs"}

HTML_SPECS = {}
HTML_VARIANTS = {}
if _os.path.exists(SPEC_HTML):
    _D = _extract_D(open(SPEC_HTML, encoding="utf-8").read())
    if _D:
        for _cid, (_key, _col) in SPEC_MAP.items():
            if _key not in _D:
                continue
            _series = _D[_key]
            if _cid in VARIANT_IDS and _series.get("cols"):
                HTML_VARIANTS[_cid] = [
                    {"label": _lbl, "specs": _flatten(_series, _i)}
                    for _i, _lbl in enumerate(_series["cols"])
                ]
                HTML_SPECS[_cid] = HTML_VARIANTS[_cid][0]["specs"]
            else:
                HTML_SPECS[_cid] = _flatten(_series, _col)
print("spec-sheet products mapped:", len(HTML_SPECS), "| variant products:", len(HTML_VARIANTS))


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

def emit_product(p, key):
    name = model(p['name'])
    badge = p['badge']
    pid = slug(p["name"], badge)
    name = NAME_OVERRIDE.get(pid, name)
    badge = BADGE_OVERRIDE.get(pid, badge)
    img = figma_image(key, pid) or image_for(p["name"], badge)
    lines = []
    lines.append("    {")
    lines.append(f'      id: "{pid}", brand: "VOLT", name: "{esc(name)}",')
    if badge: lines.append(f'      badge: "{esc(badge)}",')
    lines.append(f'      capacities: "{esc(p["capacity"])}", image: "{img}",')
    lines.append(f'      description: "{esc(p["desc"])}",')
    # features
    lines.append("      features: [")
    for f in p['features']:
        if not f['title'] and not f['detail']: continue
        lines.append(f'        {{ title: "{esc(f["title"])}", detail: "{esc(f["detail"])}" }},')
    lines.append("      ],")
    # specs — prefer the authoritative spec sheet, else the scraped specs
    lines.append("      specs: [")
    for s in (HTML_SPECS.get(pid) or p['specs']):
        lines.append(f'        {{ label: "{esc(s["label"])}", value: "{esc(str(s["value"]))}" }},')
    lines.append("      ],")
    # spec variants — module toggle for multi-module families
    variants = HTML_VARIANTS.get(pid)
    if variants:
        lines.append("      specVariants: [")
        for v in variants:
            lines.append("        {")
            lines.append(f'          label: "{esc(v["label"])}",')
            lines.append("          specs: [")
            for s in v["specs"]:
                lines.append(f'            {{ label: "{esc(s["label"])}", value: "{esc(str(s["value"]))}" }},')
            lines.append("          ],")
            lines.append("        },")
        lines.append("      ],")
    lines.append("      ...CTA,")
    lines.append("    },")
    return "\n".join(lines)

# ---- Extra products supplied directly (Sachin's voltra-product-cards.html) ----
EXTRAS = json.load(open('tools/new-products.json'))
# placement by "<brand> <name>" -> category key
PLACE = { 'NEXA 4KW': 'single-phase', 'LV 50': 'wall' }

def emit_extra(e, key):
    name = e['name']
    cap = e['badges'][0] if e['badges'] else ''
    badge = e['badges'][1] if len(e['badges']) > 1 else ''
    pid = slug(e["brand"] + " " + name, "")
    img = figma_image(key, pid) or e["image"]
    lines = ["    {"]
    lines.append(f'      id: "{slug(e["brand"]+" "+name, "")}", brand: "{esc(e["brand"])}", name: "{esc(name)}",')
    if badge: lines.append(f'      badge: "{esc(badge)}",')
    if e.get('model'): lines.append(f'      model: "{esc(e["model"])}",')
    lines.append(f'      capacities: "{esc(cap)}", image: "{img}",')
    lines.append(f'      description: "{esc(e["desc"])}",')
    lines.append("      features: [")
    for ft in e['features']:
        lines.append(f'        {{ title: "{esc(ft["title"])}", detail: "{esc(ft["detail"])}" }},')
    lines.append("      ],")
    lines.append("      specs: [")
    for s in (HTML_SPECS.get(pid) or e['specs']):
        lines.append(f'        {{ label: "{esc(s["label"])}", value: "{esc(str(s["value"]))}" }},')
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
    for e in EXTRAS:
        if PLACE.get(e["brand"] + " " + e["name"]) == key:
            out.append(emit_extra(e, key))
    for p in prods:
        out.append(emit_product(p, key))
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
