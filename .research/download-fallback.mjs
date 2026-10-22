// Fallback downloader: for targets that failed, try multiple archive capture
// years and jkit size variants (med/big/full/screen/small).
import { mkdir, writeFile } from "node:fs/promises";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";

const OUT = path.resolve(".research/raw");
const PROXY = "https://images.weserv.nl/?url=";
const YEARS = ["2025", "2023", "2022", "2021", "2020", "2019", "2018"];

// target name -> array of base archive paths (without size suffix)
const TARGETS = {
  "hero/hero-10": ["http://rio-perlas.com/images/jkit/images/17"],
  "hero/hero-11": ["http://rio-perlas.com/images/jkit/images/16"],
  "facilities/piscinas-termales": ["http://rio-perlas.com/images/jkit/images/89"],
  "facilities/bar": ["http://rio-perlas.com/images/jkit/images/90"],
  "facilities/iglesia": ["http://rio-perlas.com/images/jkit/images/91"],
  "facilities/sala-conferencias": ["http://rio-perlas.com/images/jkit/images/92"],
  "facilities/restaurante": ["http://rio-perlas.com/images/jkit/images/94"],
  "facilities/habitaciones": ["http://rio-perlas.com/images/jkit/images/134"],
  "pages/sobre-nosotros": ["http://rio-perlas.com/images/jkit/items/40"],
  "pages/ubicacion": ["http://rio-perlas.com/images/jkit/items/41"],
  "pages/restaurante": ["http://rio-perlas.com/images/jkit/items/42"],
  "pages/spa": ["http://rio-perlas.com/images/jkit/items/43"],
  "pages/day-pass": ["http://rio-perlas.com/images/jkit/items/45"],
  "pages/senderismo": ["http://rio-perlas.com/images/jkit/items/46"],
  "pages/pura-pora": ["http://rio-perlas.com/images/jkit/items/51"],
  "pages/contacto": ["http://rio-perlas.com/images/jkit/items/5"],
  "rooms/superior": ["https://rio-perlas.com/images/superior-01"],
  "rooms/river-sound": ["https://rio-perlas.com/images/rs"],
  "rooms/junior-suite": ["https://rio-perlas.com/images/junior-suite-01"],
  "rooms/honeymoon": ["https://rio-perlas.com/images/hs"],
  "rooms/presidential": ["https://rio-perlas.com/images/ps"],
  "rooms/wood-cabin-rustic": ["https://rio-perlas.com/images/wood-cabin-roustic-01"],
  "rooms/superior-alt": ["http://rio-perlas.com/images/jkit/images/338"],
  "gallery/gal-01": ["http://rio-perlas.com/images/jkit/images/3"],
  "gallery/gal-02": ["http://rio-perlas.com/images/jkit/images/4"],
  "gallery/gal-03": ["http://rio-perlas.com/images/jkit/images/5"],
  "gallery/gal-05": ["http://rio-perlas.com/images/jkit/images/7"],
  "gallery/gal-06": ["http://rio-perlas.com/images/jkit/images/8"],
  "gallery/gal-07": ["http://rio-perlas.com/images/jkit/images/9"],
  "gallery/gal-08": ["http://rio-perlas.com/images/jkit/images/10"],
  "gallery/gal-09": ["http://rio-perlas.com/images/jkit/images/31"],
  "gallery/gal-10": ["http://rio-perlas.com/images/jkit/images/32"],
  "gallery/gal-11": ["http://rio-perlas.com/images/jkit/images/33"],
  "gallery/gal-12": ["http://rio-perlas.com/images/jkit/images/34"],
  "gallery/gal-14": ["http://rio-perlas.com/images/jkit/images/37"],
  "gallery/gal-15": ["http://rio-perlas.com/images/jkit/images/38"],
  "gallery/gal-16": ["http://rio-perlas.com/images/jkit/images/39"],
  "gallery/gal-22": ["http://rio-perlas.com/images/jkit/images/72"],
  "gallery/gal-23": ["http://rio-perlas.com/images/jkit/images/82"],
  "gallery/gal-26": ["http://rio-perlas.com/images/jkit/images/129"],
  "gallery/gal-27": ["http://rio-perlas.com/images/jkit/images/148"],
  "gallery/gal-28": ["http://rio-perlas.com/images/jkit/images/150"],
  "gallery/gal-36": ["http://rio-perlas.com/images/jkit/images/208"],
  "gallery/gal-39": ["http://rio-perlas.com/images/jkit/images/253"],
  "gallery/gal-40": ["http://rio-perlas.com/images/jkit/images/269"],
  "gallery/gal-41": ["http://rio-perlas.com/images/jkit/images/276"],
  "gallery/gal-50": ["http://rio-perlas.com/images/jkit/images/35"],
};
const SUFFIXES = ["-med", "-big", "-full", "-screen", "-small", ""];

async function grab(url) {
  try {
    const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0 Chrome/126.0.0.0" } });
    if (!res.ok) return null;
    const ct = res.headers.get("content-type") || "";
    if (!ct.startsWith("image/")) return null;
    const buf = Buffer.from(await res.arrayBuffer());
    return buf.length > 1200 ? buf : null;
  } catch { return null; }
}

const report = [];
for (const [name, bases] of Object.entries(TARGETS)) {
  const dest = path.join(OUT, name + ".jpg");
  if (existsSync(dest)) { report.push(`SKIP  ${name}`); continue; }
  let got = null, used = "";
  outer:
  for (const base of bases) {
    for (const suf of SUFFIXES) {
      for (const y of YEARS) {
        const archiveUrl = `https://web.archive.org/web/${y}id_/${base}${suf}.jpg`;
        const proxied = PROXY + encodeURIComponent(archiveUrl) + "&output=jpg&q=92";
        const buf = await grab(proxied);
        if (buf) { got = buf; used = `${base}${suf}.jpg @${y}`; break outer; }
        await new Promise(r => setTimeout(r, 90));
      }
    }
  }
  if (got) {
    await mkdir(path.dirname(dest), { recursive: true });
    await writeFile(dest, got);
    report.push(`OK    ${name.padEnd(30)} ${String(got.length).padStart(8)}b  ${used}`);
  } else {
    report.push(`FAIL  ${name.padEnd(30)} ${bases.join(", ")}`);
  }
  await new Promise(r => setTimeout(r, 100));
}
console.log(report.join("\n"));
await writeFile(path.join(OUT, "_report2.txt"), report.join("\n"));
