import os, sys
from PIL import Image, ImageDraw
root = r"C:\Users\USUARIO\Desktop\Rio Perlas\public\images"
names = sys.argv[1:]
cell = 460
cols = 3
rows = (len(names)+cols-1)//cols
sheet = Image.new("RGB", (cols*cell, rows*(cell+24)), (20,20,20))
d = ImageDraw.Draw(sheet)
for i, n in enumerate(names):
    im = Image.open(os.path.join(root, n)).convert("RGB")
    im.thumbnail((cell-10, cell-10))
    x = (i%cols)*cell+5; y=(i//cols)*(cell+24)+5
    sheet.paste(im,(x,y))
    d.text((x,y+cell-16), n, fill=(255,220,120))
out = r"C:\Users\USUARIO\Desktop\Rio Perlas\.research\sheet2.jpg"
sheet.save(out, quality=80); print(out)
