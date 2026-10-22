import puppeteer from 'puppeteer-core'
const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
const OUT = 'C:\\Users\\USUARIO\\AppData\\Local\\Temp\\opencode\\shots'
const [url, name, y = '0', w = '1440', h = '900', mobile = 'no'] = process.argv.slice(2)

const browser = await puppeteer.launch({ executablePath: CHROME, headless: 'new', args: ['--no-sandbox', '--hide-scrollbars'] })
const page = await browser.newPage()
await page.setViewport({ width: +w, height: +h })
await page.goto(url, { waitUntil: 'networkidle2' })
await page.evaluate(async (yy) => {
  document.documentElement.style.scrollBehavior = 'auto'
  document.querySelectorAll('img').forEach((i) => { i.loading = 'eager' })
  window.scrollTo(0, +yy)
  await new Promise((r) => setTimeout(r, 1500))
}, y)
await page.evaluate(() =>
  Promise.all(
    [...document.images].filter((i) => !i.complete).map((i) => new Promise((r) => { i.onload = i.onerror = r })),
  ),
)
await new Promise((r) => setTimeout(r, 1200))
await page.screenshot({ path: `${OUT}\\${name}.png` })
console.log('ok', name)
await browser.close()
