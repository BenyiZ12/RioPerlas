import sys, collections
from PIL import Image

path = sys.argv[1]
im = Image.open(path).convert("RGB")
w, h = im.size
print(f"size: {w}x{h}")

px = im.load()
corners = [px[0,0], px[w-1,0], px[0,h-1], px[w-1,h-1]]
print("corners:", corners)

# dominant colors (quantized)
q = im.quantize(colors=12, method=Image.MEDIANCUT).convert("RGB")
cnt = collections.Counter(q.getdata())
print("palette:")
for c, n in cnt.most_common(12):
    print(f"  #{c[0]:02x}{c[1]:02x}{c[2]:02x}  {100*n/(w*h):.1f}%")

# bounding box of non-background content
bg = corners[0]
def is_bg(c, tol=28):
    return abs(c[0]-bg[0])+abs(c[1]-bg[1])+abs(c[2]-bg[2]) < tol
minx, miny, maxx, maxy = w, h, 0, 0
for y in range(0, h, 2):
    for x in range(0, w, 2):
        if not is_bg(px[x,y]):
            if x < minx: minx = x
            if x > maxx: maxx = x
            if y < miny: miny = y
            if y > maxy: maxy = y
print(f"content bbox: x {minx}-{maxx}  y {miny}-{maxy}  (w={maxx-minx+1}, h={maxy-miny+1})")

# row-ink profile to see structure (marks vs wordmark)
prof = []
for y in range(0, h, 3):
    ink = sum(1 for x in range(0, w, 2) if not is_bg(px[x,y]))
    prof.append(ink)
print("ink profile (every 3rd row):")
for i, v in enumerate(prof):
    if v:
        print(f"  y={i*3:4d} {v:4d}")
