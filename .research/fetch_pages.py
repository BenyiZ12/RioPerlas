import os, re, urllib.request, urllib.error

OUT = r"C:\Users\USUARIO\Desktop\Rio Perlas\.research\html"
os.makedirs(OUT, exist_ok=True)

PAGES = [
 ("home-es", "https://www.rio-perlas.com/es/", 20171009052321),
 ("home-en", "http://www.rio-perlas.com/en/", 20171011060418),
 ("habitaciones", "http://www.rio-perlas.com/es/habitaciones", 20171016111439),
 ("habitaciones2", "https://rio-perlas.com/es/habitaciones", 20230530100000),
 ("superior", "https://rio-perlas.com/es/superior-room", 20240527042949),
 ("honeymoon", "https://rio-perlas.com/es/honeymoon-suite", 20230530141236),
 ("presidential", "https://www.rio-perlas.com/es/presidential-suite", 20221128152352),
 ("spa", "http://www.rio-perlas.com/es/recorrido/tratamientos-de-spa", 20171016111520),
 ("restaurante", "http://www.rio-perlas.com/es/recorrido/restaurante", 20171016111504),
 ("eventos", "http://www.rio-perlas.com/es/recorrido/bodas-y-eventos", 20171016111454),
 ("daypass", "http://www.rio-perlas.com/es/recorrido/day-pass", 20171016111459),
 ("senderismo", "http://www.rio-perlas.com/es/recorrido/senderismo-en-rio-perlas", 20171016111510),
 ("sobre-nosotros", "http://www.rio-perlas.com/es/recorrido/sobre-nosotros", 20171016111515),
 ("ubicacion", "http://www.rio-perlas.com/es/recorrido/ubicacion", 20171016111529),
 ("pura-pora", "http://www.rio-perlas.com/es/pura-pora", 20171016111450),
 ("contacto", "http://www.rio-perlas.com/es/contacto", 20171015030637),
 ("disponibilidad", "http://www.rio-perlas.com/es/disponibilidad", 20171016111434),
 ("galeria", "http://www.rio-perlas.com/es/galeria", 20171016111601),
 ("hotel", "http://www.rio-perlas.com/es/hotel", 20171015024028),
 ("pura-pora-en", "http://rio-perlas.com/en/pura-pora", 20171215234144),
 ("spa-en", "http://rio-perlas.com/en/overview/spa-treatments", 20171215234124),
 ("dining-en", "http://rio-perlas.com/en/overview/dining", 20171215234139),
 ("weddings-en", "http://www.rio-perlas.com/en/overview/weddings-and-events", 20171216075806),
 ("location-en", "http://rio-perlas.com/en/overview/location-area", 20171215234119),
 ("about-en", "http://rio-perlas.com/en/overview/about-us", 20171215234051),
 ("daypass-en", "http://rio-perlas.com/en/overview/day-pass", 20171215234113),
 ("hiking-en", "http://rio-perlas.com/en/overview/hiking-tour-in-rio-perlas", 20171215234254),
 ("contact-en", "http://rio-perlas.com/en/contact", 20171215234059),
]

def fetch(url, ts):
    for cand in [f"http://web.archive.org/web/{ts}id_/{url}",
                 f"http://web.archive.org/web/{ts}if_/{url}",
                 f"http://web.archive.org/web/2019id_/{url}",
                 f"http://web.archive.org/web/2024id_/{url}"]:
        try:
            req = urllib.request.Request(cand, headers={"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"})
            with urllib.request.urlopen(req, timeout=60) as r:
                data = r.read()
            if len(data) > 3000:
                return cand, data
        except Exception as e:
            last = str(e)
    return None, None

for name, url, ts in PAGES:
    dest = os.path.join(OUT, name + ".html")
    if os.path.exists(dest) and os.path.getsize(dest) > 3000:
        print("skip", name); continue
    cand, data = fetch(url, ts)
    if data:
        open(dest, "wb").write(data)
        print("OK", name, len(data), cand)
    else:
        print("FAIL", name, url)
