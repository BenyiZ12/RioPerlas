import os, re, json, urllib.request, time

OUT = r"C:\Users\USUARIO\Desktop\Rio Perlas\.research\html"
os.makedirs(OUT, exist_ok=True)

WANT = [
 "rio-perlas.com/es/superior-room",
 "rio-perlas.com/es/honeymoon-suite",
 "rio-perlas.com/es/presidential-suite",
 "www.rio-perlas.com/es/disponibilidad",
 "rio-perlas.com/es/disponibilidad",
 "rio-perlas.com/es/recorrido/tratamientos-de-spa",
 "www.rio-perlas.com/es/recorrido/tratamientos-de-spa",
 "rio-perlas.com/es/recorrido/senderismo-en-rio-perlas",
 "www.rio-perlas.com/es/recorrido/senderismo-en-rio-perlas",
 "rio-perlas.com/es/recorrido/sobre-nosotros",
 "www.rio-perlas.com/es/recorrido/sobre-nosotros",
 "rio-perlas.com/es/recorrido/ubicacion",
 "www.rio-perlas.com/es/recorrido/ubicacion",
 "rio-perlas.com/es/pura-pora",
 "www.rio-perlas.com/es/pura-pora",
 "rio-perlas.com/es/contacto",
 "www.rio-perlas.com/es/contacto",
 "rio-perlas.com/es/habitaciones",
 "www.rio-perlas.com/es/habitaciones",
 "rio-perlas.com/en/overview/about-us",
 "rio-perlas.com/en/overview/spa-treatments",
 "rio-perlas.com/en/overview/weddings-and-events",
 "rio-perlas.com/en/overview/location-area",
 "rio-perlas.com/en/overview/hiking-tour-in-rio-perlas",
 "www.rio-perlas.com/en/calendar",
 "rio-perlas.com/es/calendar",
]

def cdx(url):
    u = f"http://web.archive.org/cdx/search/cdx?url={url}&output=text&fl=timestamp,original,statuscode&filter=statuscode:200&limit=60"
    try:
        req = urllib.request.Request(u, headers={"User-Agent":"Mozilla/5.0"})
        return urllib.request.urlopen(req, timeout=60).read().decode("utf-8","replace")
    except Exception as e:
        return ""

def get(url):
    for cand in [f"http://web.archive.org/web/{url}", f"http://web.archive.org/web/2019id_/{url}"]:
        try:
            req = urllib.request.Request(cand, headers={"User-Agent":"Mozilla/5.0"})
            d = urllib.request.urlopen(req, timeout=60).read()
            if len(d) > 3000 and b"Account Suspended" not in d[:3000]:
                return d
        except Exception:
            pass
    return None

for w in WANT:
    name = re.sub(r'[^a-z0-9]+','_', w.lower()).strip('_')
    dest = os.path.join(OUT, name + ".html")
    if os.path.exists(dest) and os.path.getsize(dest) > 3000:
        print("skip", name); continue
    txt = cdx(w)
    rows = [l.split() for l in txt.strip().split("\n") if l.strip()]
    rows = [r for r in rows if len(r) >= 2]
    rows.sort(key=lambda r: r[0], reverse=True)
    got = False
    for ts, orig, *rest in rows[:6]:
        d = get(f"{ts}id_/{orig}")
        if d:
            open(dest,"wb").write(d); print("OK", name, ts, len(d)); got=True; break
    if not got:
        print("FAIL", name, w)
    time.sleep(0.5)
