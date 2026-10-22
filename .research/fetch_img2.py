import os, urllib.request, concurrent.futures as cf

OUT = r"C:\Users\USUARIO\Desktop\Rio Perlas\.research\raw\jkit"
os.makedirs(OUT, exist_ok=True)
PRIO = [89,90,91,92,94,134,102,103,104,105,303,338,144,138,20,129,130,148,150,3,4,5,7,8,9,10,31,33,34,37,38,39,208,253]

def fetch(args):
    i, variant = args
    fn = f"{i}{variant}.jpg"
    dest = os.path.join(OUT, fn)
    if os.path.exists(dest) and os.path.getsize(dest) > 8000:
        return "skip " + fn
    urls = []
    for base in ["http://rio-perlas.com/images/jkit/images/", "http://rio-perlas.com/images/jkit/items/"]:
        for pre in ["", "http://web.archive.org/web/2019id_/", "http://web.archive.org/web/2022id_/", "http://web.archive.org/web/2017id_/"]:
            urls.append(pre + base + fn)
    for u in urls:
        try:
            req = urllib.request.Request(u, headers={"User-Agent":"Mozilla/5.0"})
            d = urllib.request.urlopen(req, timeout=45).read()
            if len(d) > 8000 and d[:3] == b'\xff\xd8\xff':
                open(dest,"wb").write(d); return "OK " + fn + " " + str(len(d)) + " " + u
        except Exception:
            pass
    return "FAIL " + fn

jobs = [(i, v) for i in PRIO for v in ["-big", "-full", "-med"]]
with cf.ThreadPoolExecutor(max_workers=12) as ex:
    for r in ex.map(fetch, jobs):
        if not r.startswith("skip"):
            print(r, flush=True)
