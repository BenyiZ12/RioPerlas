import os, sys
from PIL import Image, ImageDraw

root = r"C:\Users\USUARIO\Desktop\Rio Perlas\public\images"
out = r"C:\Users\USUARIO\Desktop\Rio Perlas\.research\sheet.jpg"
files = []
for dp, dn, fn in os.walk(root):
    for f in fn:
        if f.endswith(".webp") or f.endswith(".jpg") or f.endswith(".png"):
            if "-640" in f or "-960" in f or "-1280" in f or "-1920" in f: continue
            files.append(os.path.join(dp, f))
files.sort()
cols, cell, label_h = 6, 320, 26
rows = (len(files) + cols - 1)//cols
sheet = Image.new("RGB", (cols*cell, rows*(cell+label_h)), (25,25,25))
d = ImageDraw.Draw(sheet)
for i, f in enumerate(files):
    try:
        im = Image.open(f).convert("RGB")
    except Exception as e:
        continue
    im.thumbnail((cell-8, cell-8))
    x = (i % cols)*cell + 4
    y = (i // cols)*(cell+label_h) + 4
    sheet.paste(im, (x, y))
    name = os.path.relpath(f, root).replace("\\", "/")
    d.text((x, y+cell-2), name[:52], fill=(255,220,150))
sheet.save(out, quality=82)
print(out, sheet.size, len(files))
