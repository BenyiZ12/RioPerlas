// Precise downloader: uses exact Wayback timestamps from the CDX index.
import { mkdir, writeFile, readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const OUT = path.resolve(".research/raw/arch");
const PROXY = "https://images.weserv.nl/?url=";

const cdx = JSON.parse(await readFile(process.env.TEMP + "/rp_jpg.json", "utf8"));
const rows = cdx.slice(1).map((r) => ({ ts: r[0], url: r[1] }));

// Extra root-level images referenced by the official site (2024 captures).
const EXTRA = [
  "https://rio-perlas.com/images/superior-01.jpg",
  "https://rio-perlas.com/images/rs.jpg",
  "https://rio-perlas.com/images/junior-suite-01.jpg",
  "https://rio-perlas.com/images/hs.jpg",
  "https://rio-perlas.com/images/ps.jpg",
  "https://rio-perlas.com/images/wood-cabin-roustic-01.jpg",
  "https://rio-perlas.com/images/wc.jpg",
  "https://rio-perlas.com/images/mv.jpg",
  "https://rio-perlas.com/images/ms.jpg",
];

async function cdxLookup(url) {
  const api = `https://web.archive.org/cdx/search/cdx?url=${encodeURIComponent(url)}&output=json&filter=statuscode:200&limit=20&fl=timestamp,original`;
  try {
    const res = await fetch(api, { headers: { "User-Agent": "Mozilla/5.0 Chrome/126.0.0.0" } });
    const j = JSON.parse(await res.text());
    return j.slice(1).map((r) => ({ ts: r[0], url: r[1] }));
  } catch { return []; }
}

async function grab(archiveUrl) {
  for (let i = 0; i < 3; i++) {
    try {
      const proxied = PROXY + encodeURIComponent(archiveUrl) + "&output=jpg&q=92";
      const res = await fetch(proxied, { headers: { "User-Agent": "Mozilla/5.0 Chrome/126.0.0.0" } });
      if (!res.ok) { await new Promise((r) => setTimeout(r, 900 * (i + 1))); continue; }
      const ct = res.headers.get("content-type") || "";
      if (!ct.startsWith("image/")) { await new Promise((r) => setTimeout(r, 900 * (i + 1))); continue; }
      const buf = Buffer.from(await res.arrayBuffer());
      if (buf.length < 1200) { await new Promise((r) => setTimeout(r, 900 * (i + 1))); continue; }
      return buf;
    } catch { await new Promise((r) => setTimeout(r, 900 * (i + 1))); }
  }
  return null;
}

await mkdir(OUT, { recursive: true });

const jobs = rows.map((r) => ({ ...r, name: r.url.replace(/^https?:\/\/[^/]+\//, "").replace(/\//g, "__").replace(/\.jpg$/, "") + ".jpg" }));

for (const url of EXTRA) {
  const hits = await cdxLookup(url);
  if (hits.length) {
    jobs.push({ ts: hits[0].ts, url: hits[0].url, name: url.replace(/^https?:\/\/[^/]+\//, "").replace(/\//g, "__").replace(/\.jpg$/, "") + ".jpg" });
  } else {
    console.log("NO CDX  " + url);
  }
}

const report = [];
let ok = 0, fail = 0;
for (const job of jobs) {
  const dest = path.join(OUT, job.name);
  if (existsSync(dest)) { ok++; continue; }
  const archiveUrl = `https://web.archive.org/web/${job.ts}id_/${job.url}`;
  const buf = await grab(archiveUrl);
  if (buf) {
    await writeFile(dest, buf);
    report.push(`OK    ${job.name.padEnd(48)} ${String(buf.length).padStart(8)}b`);
    ok++;
  } else {
    report.push(`FAIL  ${job.name.padEnd(48)} ${job.url}`);
    fail++;
  }
  await new Promise((r) => setTimeout(r, 80));
}
console.log(report.filter((r) => r.startsWith("FAIL")).join("\n") || "(no failures)");
console.log(`=== ok=${ok} fail=${fail} total=${jobs.length} ===`);
await writeFile(path.join(OUT, "_report.txt"), report.join("\n"));
