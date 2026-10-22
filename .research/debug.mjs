import puppeteer from 'puppeteer-core'
const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
const browser = await puppeteer.launch({ executablePath: CHROME, headless: 'new', args: ['--no-sandbox'] })
const page = await browser.newPage()
page.on('console', (m) => console.log('CONSOLE', m.type(), m.text()))
page.on('pageerror', (e) => console.log('PAGEERROR', e.message))
page.on('requestfailed', (r) => console.log('REQFAIL', r.url(), r.failure()?.errorText))
page.on('response', (r) => { if (r.status() >= 400) console.log('HTTP', r.status(), r.url()) })
await page.setViewport({ width: 1440, height: 900 })
await page.goto(process.argv[2] || 'http://localhost:4173/es/', { waitUntil: 'networkidle2' })
await new Promise((r) => setTimeout(r, 1500))
const info = await page.evaluate(() => ({
  mainHTML: document.getElementById('main')?.innerHTML.slice(0, 2500),
  bodyH: document.documentElement.scrollHeight,
  revealCount: document.querySelectorAll('.reveal').length,
  visible: document.querySelectorAll('.reveal.is-visible').length,
}))
console.log(JSON.stringify(info, null, 2))
await browser.close()
