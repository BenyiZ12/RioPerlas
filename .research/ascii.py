import sys
from PIL import Image

path = sys.argv[1]
cols = int(sys.argv[2]) if len(sys.argv) > 2 else 150
im = Image.open(path).convert("L")
w, h = im.size
scale = cols / w
rows = max(1, int(h * scale * 0.5))
im2 = im.resize((cols, rows), Image.LANCZOS)
ramp = " .:-=+*#%@"
px = im2.load()
for y in range(rows):
    line = "".join(ramp[min(9, (255 - px[x, y]) * 10 // 256)] for x in range(cols))
    print(line)
