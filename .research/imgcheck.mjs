import puppeteer from 'puppeteer-core'
import fs from 'node:fs'
import path from 'node:path'

const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
const OUT = 'C:\\Users\\USUARIO\\AppData\\Local\\Temp\\opencode\\shots'
const BASE = 'http://localhost:4173'

const urls = [
  '/es/', '/es/resort', '/es/aguas-termales', '/es/habitaciones', '/es/habitaciones/standard-room',
  '/es/habitaciones/superior-room', '/es/habitaciones/river-sound-suite', '/es/habitaciones/wood-cabin',
  '/es/habitaciones/mountain-view-suite', '/es/habitaciones/honeymoon-suite', '/es/habitaciones/master-suite',
  '/es/habitaciones/presidential-suite', '/es/spa', '/es/gastronomia', '/es/experiencias', '/es/eventos',
  '/es/pase-diario', '/es/galeria', '/es/ubicacion', '/es/privacidad', '/nope',
  '/en/', '/en/rooms', '/en/thermal-waters', '/en/dining', '/en/events', '/en/day-pass',
  '/en/gallery', '/en/location', '/en/privacy', '/en/rooms/wood-cabin',
]

const browser = await puppeteer.launch({ executablePath: CHROME, headless: 'new', args: ['--no-sandbox'] })
const page = await browser.newPage()
const bad = []
const seen = new Set()
for (const u of urls) {
  await page.setViewport({ width: 1440, height: 900 })
  await page.goto(BASE + u, { waitUntil: 'networkidle2' })
  await page.evaluate(() => {
    document.querySelectorAll('img').forEach((i) => { i.loading = 'eager' })
  })
  await page.evaluate(() => Promise.all([...document.images].filter((i) => !i.complete).map((i) => new Promise((r) => { i.onload = i.onerror = r }))))
  const imgs = await page.$$eval('img', (els) => els.map((e) => ({ src: e.currentSrc || e.src, ok: e.naturalWidth > 0, alt: e.alt })))
  for (const i of imgs) {
    seen.add(i.src)
    if (!i.ok) bad.push(`${u} -> ${i.src}`)
    if (i.alt === '' && !i.src.includes('og-image')) console.log('EMPTY ALT', u, i.src)
  }
}
await browser.close()

// verify every file referenced exists in dist
const missing = []
for (const src of seen) {
  if (!src.startsWith(BASE)) continue
  const rel = src.replace(BASE, '')
  const p = path.join('C:\\Users\\USUARIO\\Desktop\\Rio Perlas\\dist', rel.replace(/\//g, path.sep))
  if (!fs.existsSync(p)) missing.push(rel)
}
console.log('images referenced:', seen.size)
console.log('BROKEN:', bad.length ? bad.join('\n') : 'none')
console.log('MISSING FILES:', missing.length ? missing.join('\n') : 'none')
