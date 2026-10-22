import re, json
html=open(r"C:\Users\USUARIO\AppData\Local\Temp\arch_hab.html",encoding="utf-8",errors="ignore").read()
rooms=[]
for m in re.finditer(r'<h[23][^>]*>.*?</h[23]>', html, re.S|re.I):
    txt=re.sub(r'<[^>]+>',' ',m.group()).strip()
    if any(k.lower() in txt.lower() for k in ['cabina','suite','habitaci','room','junior','presidencial','master','mountain','river','superior','rustica']):
        start=max(0,m.start()-300)
        end=min(len(html), m.end()+5000)
        ctx=html[start:end]
        imgs=[x.group(1) for x in re.finditer(r'(?:src|href|data-orig-src)=\"([^\"]*jkit[^\"]*)\"', ctx)]
        prices=[x.group(0) for x in re.finditer(r'\$[0-9]+(?:[.,][0-9]+)?', ctx)]
        # get paragraphs
        paras=re.findall(r'<p[^>]*>(.*?)</p>', ctx, re.S|re.I)
        desc=' '.join(re.sub(r'<[^>]+>',' ',p) for p in paras)
        desc=re.sub(r'\s+',' ',desc).strip()
        rooms.append({'h':txt,'imgs':imgs[:10],'prices':prices[:12],'desc':desc[:600]})
open(r"C:\Users\USUARIO\AppData\Local\Temp\hab_parsed.json","w",encoding="utf-8").write(json.dumps(rooms, ensure_ascii=False, indent=2))
print(len(rooms))
for r in rooms: print(r['h'])
