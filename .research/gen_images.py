import os, json
from PIL import Image

ROOT = os.path.join(os.path.dirname(__file__), "raw")
PUB = os.path.join(os.path.dirname(os.path.dirname(__file__)), "public", "images")
SIZES = {
    "hero": [640, 960, 1280, 1920],
    "rooms": [640, 960, 1280, 1920],
    "gallery": [640, 960, 1280],
    "facilities": [640, 960, 1280],
    "pages": [640, 960, 1280],
    "official": [400, 640],
}

def ensure_dir(p):
    os.makedirs(p, exist_ok=True)

# map source -> dest category/name
items = []
# hero
for fn in sorted(os.listdir(os.path.join(ROOT, "hero"))):
    if fn.lower().endswith(('.jpg','.jpeg','.png')):
        items.append((os.path.join(ROOT, "hero", fn), "hero", fn.replace('.jpg','.webp').replace('.jpeg','.webp')))
# rooms
for fn in sorted(os.listdir(os.path.join(ROOT, "rooms"))):
    if fn.lower().endswith(('.jpg','.jpeg','.png')):
        items.append((os.path.join(ROOT, "rooms", fn), "rooms", fn.replace('.jpg','.webp').replace('.jpeg','.webp')))
# facilities
for fn in sorted(os.listdir(os.path.join(ROOT, "facilities"))):
    if fn.lower().endswith(('.jpg','.jpeg','.png')):
        items.append((os.path.join(ROOT, "facilities", fn), "facilities", fn.replace('.jpg','.webp').replace('.jpeg','.webp')))
# pages
for fn in sorted(os.listdir(os.path.join(ROOT, "pages"))):
    if fn.lower().endswith(('.jpg','.jpeg','.png')):
        items.append((os.path.join(ROOT, "pages", fn), "pages", fn.replace('.jpg','.webp').replace('.jpeg','.webp')))
# gallery
for fn in sorted(os.listdir(os.path.join(ROOT, "gallery"))):
    if fn.lower().endswith(('.jpg','.jpeg','.png')):
        items.append((os.path.join(ROOT, "gallery", fn), "gallery", fn.replace('.jpg','.webp').replace('.jpeg','.webp')))
# official
for fn in sorted(os.listdir(os.path.join(ROOT, "official"))):
    if fn.lower().endswith(('.jpg','.jpeg','.png')):
        items.append((os.path.join(ROOT, "official", fn), "official", fn.replace('.jpg','.webp').replace('.jpeg','.webp')))
# arch picks for gallery/hero if needed - also add some key ones
# pick large/full ones
for key in ["images__jkit__items__27-full.jpg","images__jkit__items__29-full.jpg","images__jkit__images__13-full.jpg","images__jkit__images__21-full.jpg","images__jkit__images__135-full.jpg","images__jkit__images__136-full.jpg","images__jkit__images__137-full.jpg"]:
    p = os.path.join(ROOT, "arch", key)
    if os.path.exists(p):
        items.append((p, "hero", "arch-"+key.replace('.jpg','.webp')))

manifest = []
for src, cat, base in items:
    outdir = os.path.join(PUB, cat)
    ensure_dir(outdir)
    try:
        im = Image.open(src)
        w,h = im.size
        # save original webp
        orig_webp = os.path.join(outdir, base)
        im.convert('RGB').save(orig_webp, quality=82, method=6)
        manifest.append({'src': src.replace(ROOT,'raw').replace('\\','/'), 'cat': cat, 'base': base, 'w': w, 'h': h})
        # responsive sizes
        for sz in SIZES.get(cat, [640,960,1280]):
            if sz >= w: continue
            ratio = sz / w
            nw, nh = int(w*ratio), int(h*ratio)
            nim = im.resize((nw,nh), Image.LANCZOS)
            name = base.replace('.webp', f'-{sz}.webp')
            nim.convert('RGB').save(os.path.join(outdir, name), quality=78, method=6)
    except Exception as e:
        print('ERR', src, e)

open(os.path.join(os.path.dirname(os.path.dirname(__file__)), '.research', 'img_manifest.json'), 'w', encoding='utf-8').write(json.dumps(manifest, indent=2))
print('done', len(manifest))
