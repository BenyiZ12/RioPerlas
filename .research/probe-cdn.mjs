import fs from 'node:fs/promises';
import path from 'node:path';

const BASE = 'https://static11.com-hotel.com/uploads/hotel/168696/photo/';
const OUT = path.resolve('.research/raw/official');
await fs.mkdir(OUT, { recursive: true });

const args = process.argv.slice(2);
const lo = Number(args[0]);
const hi = Number(args[1]);
const prefix = args[2] || 'rio-perlas-thermal-resort-spa_';

const ids = [];
for (let i = lo; i <= hi; i++) ids.push(i);

const found = [];
let idx = 0;
const CONC = 24;

async function worker() {
  while (idx < ids.length) {
    const id = ids[idx++];
    const url = `${BASE}${prefix}${id}.jpg`;
    try {
      const r = await fetch(url, { method: 'HEAD' });
      if (r.status === 200) {
        const len = Number(r.headers.get('content-length') || 0);
        found.push({ id, len });
      }
    } catch {}
  }
}

await Promise.all(Array.from({ length: CONC }, worker));
found.sort((a, b) => a.id - b.id);
console.log(JSON.stringify(found));
await fs.writeFile(path.join(OUT, '_cdn_index.json'), JSON.stringify(found, null, 2));
