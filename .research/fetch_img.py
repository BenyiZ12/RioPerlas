import os, urllib.request, time

OUT = r"C:\Users\USUARIO\Desktop\Rio Perlas\.research\raw\jkit"
os.makedirs(OUT, exist_ok=True)

IDS = [89,90,91,92,94,134,102,103,104,105,303,338,144,138,20,3,4,5,7,8,9,10,31,32,33,34,35,37,38,39,40,72,82,208,253,269,276,129,130,148,150,17,21,13,159,160,172,184,186,200,204,233,248]

def try_get(url):
    for cand in [url, "http://web.archive.org/web/2019id_/"+url, "http://web.archive.org/web/2021id_/"+url]:
        try:
            req = urllib.request.Request(cand, headers={"User-Agent":"Mozilla/5.0"})
            d = urllib.request.urlopen(req, timeout=60).read()
            if len(d) > 8000 and d[:3] in (b'\xff\xd8\xff',):
                return d
        except Exception:
            pass
    return None

for i in IDS:
    for variant in ["-big", "-full", "-med"]:
        fn = f"{i}{variant}.jpg"
        dest = os.path.join(OUT, fn)
        if os.path.exists(dest): continue
        d = try_get(f"http://rio-perlas.com/images/jkit/images/{fn}")
        if d:
            open(dest,"wb").write(d); print("OK", fn, len(d)); break
        d = try_get(f"http://rio-perlas.com/images/jkit/items/{fn}")
        if d:
            open(dest,"wb").write(d); print("OKitems", fn, len(d)); break
    else:
        print("FAIL", i)
    time.sleep(0.3)
