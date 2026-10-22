import os, datetime
from xml.sax.saxutils import escape

BASE = "https://www.rio-perlas.com"
TODAY = datetime.date.today().isoformat()

PAGES = [
    ("es", "/", 1.0, "weekly"),
    ("es", "/resort", 0.9, "monthly"),
    ("es", "/aguas-termales", 0.9, "monthly"),
    ("es", "/habitaciones", 0.9, "monthly"),
    ("es", "/spa", 0.8, "monthly"),
    ("es", "/gastronomia", 0.8, "monthly"),
    ("es", "/experiencias", 0.8, "monthly"),
    ("es", "/eventos", 0.8, "monthly"),
    ("es", "/pase-diario", 0.8, "monthly"),
    ("es", "/galeria", 0.7, "monthly"),
    ("es", "/ubicacion", 0.8, "monthly"),
    ("es", "/privacidad", 0.3, "yearly"),
    ("en", "/", 1.0, "weekly"),
    ("en", "/resort", 0.9, "monthly"),
    ("en", "/thermal-waters", 0.9, "monthly"),
    ("en", "/rooms", 0.9, "monthly"),
    ("en", "/spa", 0.8, "monthly"),
    ("en", "/dining", 0.8, "monthly"),
    ("en", "/experiences", 0.8, "monthly"),
    ("en", "/events", 0.8, "monthly"),
    ("en", "/day-pass", 0.8, "monthly"),
    ("en", "/gallery", 0.7, "monthly"),
    ("en", "/location", 0.8, "monthly"),
    ("en", "/privacy", 0.3, "yearly"),
]

SLUGS = [
    "standard-room",
    "superior-room",
    "river-sound-suite",
    "wood-cabin",
    "mountain-view-suite",
    "honeymoon-suite",
    "master-suite",
    "presidential-suite",
]

for lang in ("es", "en"):
    for slug in SLUGS:
        PAGES.append((lang, ("/habitaciones/" if lang == "es" else "/rooms/") + slug, 0.6, "monthly"))

out = ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">']
for lang, path, priority, freq in PAGES:
    other = "en" if lang == "es" else "es"
    es_path = path if lang == "es" else path.replace("/rooms/", "/habitaciones/")
    en_path = path if lang == "en" else path.replace("/habitaciones/", "/rooms/")
    url = f"{BASE}/{lang}{path}"
    out.append("  <url>")
    out.append(f"    <loc>{escape(url)}</loc>")
    out.append(f"    <lastmod>{TODAY}</lastmod>")
    out.append(f"    <changefreq>{freq}</changefreq>")
    out.append(f"    <priority>{priority}</priority>")
    out.append(f'    <xhtml:link rel="alternate" hreflang="es" href="{BASE}/es{es_path}" />')
    out.append(f'    <xhtml:link rel="alternate" hreflang="en" href="{BASE}/en{en_path}" />')
    out.append(f'    <xhtml:link rel="alternate" hreflang="x-default" href="{BASE}/es{es_path}" />')
    out.append("  </url>")
out.append("</urlset>")

path = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "public", "sitemap.xml")
with open(path, "w", encoding="utf-8") as f:
    f.write("\n".join(out) + "\n")
print("wrote", path, len(PAGES), "urls")
