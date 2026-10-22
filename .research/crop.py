import sys
from PIL import Image
src = sys.argv[1]
out = sys.argv[2]
x, y, w, h = (int(v) for v in sys.argv[3:7])
im = Image.open(src)
print('size', im.size)
im.crop((x, y, x + w, y + h)).save(out)
print(out)
