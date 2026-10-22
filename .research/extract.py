import os, re, sys, html

OUT = r"C:\Users\USUARIO\Desktop\Rio Perlas\.research\html"
names = sys.argv[1:] or [f[:-5] for f in os.listdir(OUT) if f.endswith(".html")]
for n in names:
    p = os.path.join(OUT, n + ".html")
    if not os.path.exists(p): 
        print("### MISSING", n); continue
    h = open(p, encoding="utf-8", errors="replace").read()
    h = re.sub(r'(?is)<script.*?</script>', ' ', h)
    h = re.sub(r'(?is)<style.*?</style>', ' ', h)
    h = re.sub(r'(?is)<noscript.*?</noscript>', ' ', h)
    # keep links
    h = re.sub(r'(?i)<a\b[^>]*href="([^"]*)"[^>]*>(.*?)</a>', r' [@@\1@@ \2]', h, flags=re.S)
    h = re.sub(r'(?i)<img\b[^>]*alt="([^"]*)"[^>]*>', r' [IMG:\1]', h)
    h = re.sub(r'(?s)<!--.*?-->', ' ', h)
    t = re.sub(r'(?s)<[^>]+>', '\n', h)
    t = html.unescape(t)
    lines = [x.strip() for x in t.split('\n')]
    lines = [x for x in lines if x]
    print("="*30, n, "="*30)
    sys.stdout.write("\n".join(lines).encode("ascii", "replace").decode("ascii") + "\n")
