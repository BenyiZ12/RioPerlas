import puppeteer from 'puppeteer-core'
const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
const browser = await puppeteer.launch({ executablePath: CHROME, headless: 'new', args: ['--no-sandbox'] })
const page = await browser.newPage()
for (const url of ['http://localhost:4173/en/thermal-waters', 'http://localhost:4173/es/habitaciones/wood-cabin', 'http://localhost:4173/en/privacy']) {
  await page.goto(url, { waitUntil: 'networkidle2' })
  await new Promise((r) => setTimeout(r, 700))
  const meta = await page.evaluate(() => ({
    title: document.title,
    desc: document.querySelector('meta[name="description"]')?.content,
    canonical: document.querySelector('link[rel="canonical"]')?.href,
    alternates: [...document.querySelectorAll('link[rel="alternate"]')].map((l) => `${l.hreflang}=${l.href}`),
    ogUrl: document.querySelector('meta[property="og:url"]')?.content,
    ogLocale: document.querySelector('meta[property="og:locale"]')?.content,
    ogImage: document.querySelector('meta[property="og:image"]')?.content,
    h1s: [...document.querySelectorAll('h1')].map((h) => h.textContent.trim()),
    lang: document.documentElement.lang,
    jsonld: !!document.querySelector('script[type="application/ld+json"]'),
  }))
  console.log('==', url)
  console.log(JSON.stringify(meta, null, 2))
}
await browser.close()
