import os, sys
from PIL import Image, ImageDraw
OUT = r"C:\Users\USUARIO\AppData\Local\Temp\opencode\shots"
names = sys.argv[1:]
if not names:
    names = [f for f in os.listdir(OUT) if f.endswith('-desktop.png')]
cell = 430
cols = 5
rows = (len(names) + cols - 1) // cols
sheet = Image.new("RGB", (cols * cell, rows * (cell + 20)), (18, 18, 18))
d = ImageDraw.Draw(sheet)
for i, n in enumerate(names):
    im = Image.open(os.path.join(OUT, n)).convert("RGB")
    im.thumbnail((cell - 8, 900))
    x = (i % cols) * cell + 4
    y = (i // cols) * (cell + 20) + 4
    sheet.paste(im, (x, y))
    d.text((x, y + cell + 2), n, fill=(255, 215, 120))
sheet.save(os.path.join(OUT, "sheet.jpg"), quality=80)
print("ok", sheet.size)
