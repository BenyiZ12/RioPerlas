import puppeteer from 'puppeteer-core'

const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
const OUT = 'C:\\Users\\USUARIO\\AppData\\Local\\Temp\\opencode\\shots'

const targets = process.argv[2]
  ? [{ url: process.argv[2], name: process.argv[3] || 'page', full: process.argv[4] === 'full' }]
  : []

const defaults = [
  { url: 'http://localhost:4173/es/', name: 'home' },
  { url: 'http://localhost:4173/es/resort', name: 'resort' },
  { url: 'http://localhost:4173/es/aguas-termales', name: 'thermal' },
  { url: 'http://localhost:4173/es/habitaciones', name: 'rooms' },
  { url: 'http://localhost:4173/es/habitaciones/wood-cabin', name: 'room-detail' },
  { url: 'http://localhost:4173/es/spa', name: 'spa' },
  { url: 'http://localhost:4173/es/gastronomia', name: 'dining' },
  { url: 'http://localhost:4173/es/experiencias', name: 'experiences' },
  { url: 'http://localhost:4173/es/eventos', name: 'events' },
  { url: 'http://localhost:4173/es/pase-diario', name: 'daypass' },
  { url: 'http://localhost:4173/es/galeria', name: 'gallery' },
  { url: 'http://localhost:4173/es/ubicacion', name: 'location' },
  { url: 'http://localhost:4173/en/', name: 'home-en' },
  { url: 'http://localhost:4173/nope', name: '404' },
]

const list = targets.length ? targets : defaults

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: 'new',
  args: ['--no-sandbox', '--disable-gpu', '--hide-scrollbars'],
})

const errors = []
for (const t of list) {
  for (const device of [
    { key: 'desktop', width: 1440, height: 900 },
    { key: 'mobile', width: 390, height: 844 },
  ]) {
    const page = await browser.newPage()
    page.on('console', (m) => {
      if (m.type() === 'error') errors.push(`${t.name}/${device.key}: ${m.text()}`)
    })
    page.on('pageerror', (e) => errors.push(`${t.name}/${device.key}: PAGEERROR ${e.message}`))
    await page.setViewport({ width: device.width, height: device.height, deviceScaleFactor: 1 })
    await page.goto(t.url, { waitUntil: 'networkidle2', timeout: 60000 })
    await page.evaluate(async () => {
      document.documentElement.style.scrollBehavior = 'auto'
      document.querySelectorAll('img').forEach((i) => { i.loading = 'eager' })
      const step = window.innerHeight * 0.7
      for (let y = 0; y < document.documentElement.scrollHeight; y += step) {
        window.scrollTo(0, y)
        await new Promise((r) => setTimeout(r, 120))
      }
      window.scrollTo(0, 0)
      await new Promise((r) => setTimeout(r, 300))
    })
    await page.evaluate(() =>
      Promise.all(
        [...document.images].filter((i) => !i.complete).map((i) => new Promise((r) => { i.onload = i.onerror = r })),
      ),
    )
    await new Promise((r) => setTimeout(r, 600))
    await page.screenshot({ path: `${OUT}\\${t.name}-${device.key}.png`, fullPage: true })
    await page.close()
  }
  console.log('shot', t.name)
}

await browser.close()
if (errors.length) {
  console.log('\nCONSOLE ERRORS:')
  console.log([...new Set(errors)].join('\n'))
} else {
  console.log('\nNo console errors.')
}
