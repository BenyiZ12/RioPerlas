import fs from 'node:fs/promises';
import path from 'node:path';

const BASE = 'https://static11.com-hotel.com/uploads/hotel/168696/photo/';
const OUT = path.resolve('.research/raw/official');
await fs.mkdir(OUT, { recursive: true });

const jobs = [
  { prefix: 'rio-perlas-thermal-resort-spa_', lo: 17429960000, hi: 17429980000, tag: 'rp' },
  { prefix: 'hotel-rio-perlas-spa-resort_', lo: 15451000000, hi: 15452500000, tag: 'hr' },
];

for (const job of jobs) {
  const ids = [];
  for (let i = job.lo; i <= job.hi; i++) ids.push(i);
  const found = [];
  let idx = 0;
  const CONC = 32;
  async function worker() {
    while (idx < ids.length) {
      const id = ids[idx++];
      try {
        const r = await fetch(`${BASE}${job.prefix}${id}.jpg`, { method: 'HEAD' });
        if (r.status === 200) found.push({ id, len: Number(r.headers.get('content-length') || 0) });
      } catch {}
    }
  }
  await Promise.all(Array.from({ length: CONC }, worker));
  found.sort((a, b) => a.id - b.id);
  console.log(`[${job.tag}] found ${found.length}: ${JSON.stringify(found.map(f=>f.id))}`);
  await fs.writeFile(path.join(OUT, `_cdn_${job.tag}.json`), JSON.stringify(found, null, 2));
}
console.log('DONE');
