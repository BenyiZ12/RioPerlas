// Downloads the authentic Río Perlas photo library from official archives.
// Sources: rio-perlas.com official site (via Wayback Machine) + the property's
// official photo set published by the booking partner (com-hotel CDN).
import { mkdir, writeFile, readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const OUT = path.resolve(".research/raw");
const FINAL = path.resolve("public/images");
const PROXY = "https://images.weserv.nl/?url=";

const WB = "https://web.archive.org/web/2024id_/http://rio-perlas.com/";
const WB2 = "https://web.archive.org/web/2024id_/https://rio-perlas.com/";
const CDN = "https://static11.com-hotel.com/uploads/hotel/168696/photo/";

// name, source url
const MANIFEST = [
  // ---------- BRAND ----------
  ["brand/logo-rio-perlas", WB + "images/jkit/items/15.jpg"],

  // ---------- HERO / SLIDESHOW ----------
  ["hero/hero-01", WB + "images/jkit/images/131-med.jpg"],
  ["hero/hero-02", WB + "images/jkit/images/132-med.jpg"],
  ["hero/hero-03", WB + "images/jkit/images/21-full.jpg"],
  ["hero/hero-04", WB + "images/jkit/images/13-full.jpg"],
  ["hero/hero-05", WB + "images/jkit/images/135-full.jpg"],
  ["hero/hero-06", WB + "images/jkit/images/136-full.jpg"],
  ["hero/hero-07", WB + "images/jkit/images/137-full.jpg"],
  ["hero/hero-08", WB + "images/jkit/images/15-med.jpg"],
  ["hero/hero-09", WB + "images/jkit/images/14-med.jpg"],
  ["hero/hero-10", WB + "images/jkit/images/17-med.jpg"],
  ["hero/hero-11", WB + "images/jkit/images/16-med.jpg"],

  // ---------- FACILITIES (jkit images) ----------
  ["facilities/piscinas-termales", WB + "images/jkit/images/89-med.jpg"],
  ["facilities/bar", WB + "images/jkit/images/90-med.jpg"],
  ["facilities/iglesia", WB + "images/jkit/images/91-med.jpg"],
  ["facilities/sala-conferencias", WB + "images/jkit/images/92-med.jpg"],
  ["facilities/recepcion", WB + "images/jkit/images/93-med.jpg"],
  ["facilities/restaurante", WB + "images/jkit/images/94-med.jpg"],
  ["facilities/spa-tratamientos", WB + "images/jkit/images/130-med.jpg"],
  ["facilities/habitaciones", WB + "images/jkit/images/134-med.jpg"],

  // ---------- PAGES (jkit items) ----------
  ["pages/resort", WB + "images/jkit/items/32-big.jpg"],
  ["pages/sobre-nosotros", WB + "images/jkit/items/40-big.jpg"],
  ["pages/ubicacion", WB + "images/jkit/items/41-big.jpg"],
  ["pages/restaurante", WB + "images/jkit/items/42-big.jpg"],
  ["pages/spa", WB + "images/jkit/items/43-big.jpg"],
  ["pages/eventos", WB + "images/jkit/items/44-big.jpg"],
  ["pages/day-pass", WB + "images/jkit/items/45-big.jpg"],
  ["pages/senderismo", WB + "images/jkit/items/46-big.jpg"],
  ["pages/pura-pora", WB + "images/jkit/items/51-big.jpg"],
  ["pages/contacto", WB + "images/jkit/items/5-med.jpg"],
  ["pages/historia", WB + "images/jkit/items/2-big.jpg"],
  ["pages/contacto-fondo", WB + "images/jkit/items/29-big.jpg"],

  // ---------- ROOMS ----------
  ["rooms/superior", WB2 + "images/superior-01.jpg"],
  ["rooms/river-sound", WB2 + "images/rs.jpg"],
  ["rooms/junior-suite", WB2 + "images/junior-suite-01.jpg"],
  ["rooms/wood-cabin", WB2 + "images/wc.jpg"],
  ["rooms/honeymoon", WB2 + "images/hs.jpg"],
  ["rooms/mountain-view", WB2 + "images/mv.jpg"],
  ["rooms/master", WB2 + "images/ms.jpg"],
  ["rooms/presidential", WB2 + "images/ps.jpg"],
  ["rooms/wood-cabin-rustic", WB2 + "images/wood-cabin-roustic-01.jpg"],
  ["rooms/superior-alt", WB + "images/jkit/images/338-med.jpg"],

  // ---------- GALLERY ----------
  ["gallery/gal-01", WB + "images/jkit/images/3-med.jpg"],
  ["gallery/gal-02", WB + "images/jkit/images/4-med.jpg"],
  ["gallery/gal-03", WB + "images/jkit/images/5-med.jpg"],
  ["gallery/gal-04", WB + "images/jkit/images/6-med.jpg"],
  ["gallery/gal-05", WB + "images/jkit/images/7-med.jpg"],
  ["gallery/gal-06", WB + "images/jkit/images/8-med.jpg"],
  ["gallery/gal-07", WB + "images/jkit/images/9-med.jpg"],
  ["gallery/gal-08", WB + "images/jkit/images/10-med.jpg"],
  ["gallery/gal-09", WB + "images/jkit/images/31-med.jpg"],
  ["gallery/gal-10", WB + "images/jkit/images/32-med.jpg"],
  ["gallery/gal-11", WB + "images/jkit/images/33-med.jpg"],
  ["gallery/gal-12", WB + "images/jkit/images/34-med.jpg"],
  ["gallery/gal-13", WB + "images/jkit/images/36-med.jpg"],
  ["gallery/gal-14", WB + "images/jkit/images/37-med.jpg"],
  ["gallery/gal-15", WB + "images/jkit/images/38-med.jpg"],
  ["gallery/gal-16", WB + "images/jkit/images/39-med.jpg"],
  ["gallery/gal-17", WB + "images/jkit/images/40-med.jpg"],
  ["gallery/gal-18", WB + "images/jkit/images/49-med.jpg"],
  ["gallery/gal-19", WB + "images/jkit/images/59-med.jpg"],
  ["gallery/gal-20", WB + "images/jkit/images/66-med.jpg"],
  ["gallery/gal-21", WB + "images/jkit/images/68-med.jpg"],
  ["gallery/gal-22", WB + "images/jkit/images/72-med.jpg"],
  ["gallery/gal-23", WB + "images/jkit/images/82-med.jpg"],
  ["gallery/gal-24", WB + "images/jkit/images/120-med.jpg"],
  ["gallery/gal-25", WB + "images/jkit/images/128-small.jpg"],
  ["gallery/gal-26", WB + "images/jkit/images/129-small.jpg"],
  ["gallery/gal-27", WB + "images/jkit/images/148-med.jpg"],
  ["gallery/gal-28", WB + "images/jkit/images/150-med.jpg"],
  ["gallery/gal-29", WB + "images/jkit/images/159-med.jpg"],
  ["gallery/gal-30", WB + "images/jkit/images/160-med.jpg"],
  ["gallery/gal-31", WB + "images/jkit/images/172-med.jpg"],
  ["gallery/gal-32", WB + "images/jkit/images/184-med.jpg"],
  ["gallery/gal-33", WB + "images/jkit/images/186-med.jpg"],
  ["gallery/gal-34", WB + "images/jkit/images/200-med.jpg"],
  ["gallery/gal-35", WB + "images/jkit/images/204-med.jpg"],
  ["gallery/gal-36", WB + "images/jkit/images/208-med.jpg"],
  ["gallery/gal-37", WB + "images/jkit/images/233-med.jpg"],
  ["gallery/gal-38", WB + "images/jkit/images/248-med.jpg"],
  ["gallery/gal-39", WB + "images/jkit/images/253-med.jpg"],
  ["gallery/gal-40", WB + "images/jkit/images/269-med.jpg"],
  ["gallery/gal-41", WB + "images/jkit/images/276-med.jpg"],
  ["gallery/gal-42", WB + "images/jkit/images/283-med.jpg"],
  ["gallery/gal-43", WB + "images/jkit/images/294-med.jpg"],
  ["gallery/gal-44", WB + "images/jkit/images/301-med.jpg"],
  ["gallery/gal-45", WB + "images/jkit/images/6-med.jpg"],
  ["gallery/gal-46", WB + "images/jkit/images/23-med.jpg"],
  ["gallery/gal-47", WB + "images/jkit/images/24-med.jpg"],
  ["gallery/gal-48", WB + "images/jkit/images/25-med.jpg"],
  ["gallery/gal-49", WB + "images/jkit/images/26-med.jpg"],
  ["gallery/gal-50", WB + "images/jkit/images/35-med.jpg"],

  // ---------- OFFICIAL SET PUBLISHED VIA BOOKING PARTNER (2024-2025) ----------
  ["official/of-01", CDN + "lg_rio-perlas-thermal-resort-spa_174299682111.jpg"],
  ["official/of-02", CDN + "lg_rio-perlas-thermal-resort-spa_174299682419.jpg"],
  ["official/of-03", CDN + "lg_rio-perlas-thermal-resort-spa_174299682418.jpg"],
  ["official/of-04", CDN + "lg_rio-perlas-thermal-resort-spa_174299682317.jpg"],
  ["official/of-05", CDN + "lg_rio-perlas-thermal-resort-spa_174299682316.jpg"],
  ["official/of-06", CDN + "lg_rio-perlas-thermal-resort-spa_174299682215.jpg"],
  ["official/of-07", CDN + "lg_rio-perlas-thermal-resort-spa_174299682214.jpg"],
  ["official/of-08", CDN + "lg_rio-perlas-thermal-resort-spa_174299682213.jpg"],
  ["official/of-09", CDN + "lg_rio-perlas-thermal-resort-spa_174299682212.jpg"],
  ["official/of-10", CDN + "lg_rio-perlas-thermal-resort-spa_15451686021.jpg"],
];

async function fetchWithRetry(url, tries = 3) {
  for (let i = 0; i < tries; i++) {
    try {
      const res = await fetch(url, {
        headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/126.0.0.0 Safari/537.36" },
      });
      if (!res.ok) { await new Promise(r => setTimeout(r, 1200 * (i + 1))); continue; }
      const ct = res.headers.get("content-type") || "";
      if (!ct.startsWith("image/")) { await new Promise(r => setTimeout(r, 1200 * (i + 1))); continue; }
      const buf = Buffer.from(await res.arrayBuffer());
      if (buf.length < 1200) { await new Promise(r => setTimeout(r, 1200 * (i + 1))); continue; }
      return buf;
    } catch {
      await new Promise(r => setTimeout(r, 1200 * (i + 1)));
    }
  }
  return null;
}

await mkdir(OUT, { recursive: true });
const report = [];
let ok = 0, fail = 0;

for (const [name, src] of MANIFEST) {
  const dest = path.join(OUT, name + ".jpg");
  if (existsSync(dest)) { report.push(`SKIP  ${name}`); ok++; continue; }
  // Route archive.org URLs through the weserv image proxy (archive blocks direct replay).
  const proxied = src.startsWith("https://web.archive.org")
    ? PROXY + encodeURIComponent(src) + "&output=jpg&q=92"
    : src;
  const buf = await fetchWithRetry(proxied);
  if (buf) {
    await mkdir(path.dirname(dest), { recursive: true });
    await writeFile(dest, buf);
    report.push(`OK    ${name.padEnd(34)} ${String(buf.length).padStart(8)}b  ${src.slice(-58)}`);
    ok++;
  } else {
    report.push(`FAIL  ${name.padEnd(34)} ${src.slice(-58)}`);
    fail++;
  }
  await new Promise(r => setTimeout(r, 120));
}

console.log(report.join("\n"));
console.log(`\n=== downloaded ok=${ok} fail=${fail} ===`);
await writeFile(path.join(OUT, "_report.txt"), report.join("\n"));
