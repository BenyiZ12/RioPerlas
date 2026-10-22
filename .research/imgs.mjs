import puppeteer from 'puppeteer-core'
const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
const browser = await puppeteer.launch({ executablePath: CHROME, headless: 'new', args: ['--no-sandbox'] })
const page = await browser.newPage()
page.on('pageerror', (e) => console.log('PAGEERROR', e.message))
await page.setViewport({ width: 1440, height: 900 })
await page.goto(process.argv[2] || 'http://localhost:4173/es/', { waitUntil: 'networkidle2' })
await page.evaluate(async () => {
  document.documentElement.style.scrollBehavior = 'auto'
  const step = window.innerHeight * 0.7
  for (let y = 0; y < document.documentElement.scrollHeight; y += step) {
    window.scrollTo(0, y)
    await new Promise((r) => setTimeout(r, 120))
  }
  window.scrollTo(0, 0)
})
await new Promise((r) => setTimeout(r, 800))
const imgs = await page.evaluate(() =>
  [...document.querySelectorAll('img')].map((i) => ({
    src: i.currentSrc || i.src,
    nat: `${i.naturalWidth}x${i.naturalHeight}`,
    box: `${Math.round(i.getBoundingClientRect().width)}x${Math.round(i.getBoundingClientRect().height)}`,
    complete: i.complete,
  })),
)
for (const i of imgs) console.log(i.box.padEnd(10), i.nat.padEnd(12), i.complete, i.src.split('/').pop())
await browser.close()
