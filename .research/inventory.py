import os
from PIL import Image

ROOT = os.path.join(os.path.dirname(__file__), "raw")
rows = []
for dirpath, dirnames, filenames in os.walk(ROOT):
    for fn in sorted(filenames):
        if not fn.lower().endswith((".jpg", ".jpeg", ".png", ".webp")):
            continue
        p = os.path.join(dirpath, fn)
        try:
            with Image.open(p) as im:
                w, h = im.size
                mode = im.mode
        except Exception as e:
            w = h = 0
            mode = f"ERR {e}"
        rel = os.path.relpath(p, ROOT).replace("\\", "/")
        rows.append((rel, w, h, mode, os.path.getsize(p)))

for r in rows:
    print(f"{r[0]:<58} {r[1]:>5}x{r[2]:<5} {r[3]:<5} {r[4]:>9}")
print(f"\nTOTAL {len(rows)}")
