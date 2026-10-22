import os, json, math
from PIL import Image, ImageChops

ROOT = os.path.join(os.path.dirname(__file__), "raw")
PUB = os.path.join(os.path.dirname(os.path.dirname(__file__)), "public", "images")
BRAND = os.path.join(PUB, "brand")
os.makedirs(BRAND, exist_ok=True)

# Process logo: try to make background transparent if white
logo_path = os.path.join(ROOT, "brand", "logo-rio-perlas.jpg")
if not os.path.exists(logo_path):
    # fallback
    for p in [os.path.join(ROOT, "arch", "images__jkit__items__15.jpg")]:
        if os.path.exists(p): logo_path = p; break

im = Image.open(logo_path).convert("RGB")
# try to remove near-white background
im2 = im.convert("RGBA")
datas = im2.getdata()
newData = []
for item in datas:
    r,g,b = item[0], item[1], item[2]
    # if very close to white
    if r > 240 and g > 240 and b > 240:
        newData.append((255, 255, 255, 0))
    else:
        newData.append((r,g,b,255))
im2.putdata(newData)
# trim
bbox = im2.getbbox()
if bbox:
    im2 = im2.crop(bbox)
# save
im2.save(os.path.join(BRAND, "logo.png"), optimize=True)
im2.save(os.path.join(BRAND, "logo.webp"), quality=90)
# also full size without trim but transparent attempt on original
im3 = im.convert("RGBA")
datas3 = im3.getdata()
newData3 = []
for item in datas3:
    r,g,b = item[0], item[1], item[2]
    if r > 245 and g > 245 and b > 245:
        newData3.append((255, 255, 255, 0))
    else:
        newData3.append((r,g,b,255))
im3.putdata(newData3)
im3.save(os.path.join(BRAND, "logo-full.png"), optimize=True)
im3.save(os.path.join(BRAND, "logo-full.webp"), quality=90)
# favicon
fav = im3.resize((32,32), Image.LANCZOS)
fav.save(os.path.join(BRAND, "favicon.png"))
# also 48, 180
im3.resize((48,48), Image.LANCZOS).save(os.path.join(BRAND, "favicon-48.png"))
im3.resize((180,180), Image.LANCZOS).save(os.path.join(BRAND, "apple-touch-icon.png"))

print("logo done", im.size, im2.size)
