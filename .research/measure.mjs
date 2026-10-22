import puppeteer from 'puppeteer-core'
const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
const browser = await puppeteer.launch({ executablePath: CHROME, headless: 'new', args: ['--no-sandbox'] })
for (const w of [1440, 1280, 1024, 768, 390]) {
  const page = await browser.newPage()
  await page.setViewport({ width: w, height: 900 })
  await page.goto('http://localhost:4173/es/', { waitUntil: 'networkidle2' })
  await new Promise((r) => setTimeout(r, 500))
  const info = await page.evaluate(() => {
    const de = document.documentElement
    const header = document.querySelector('header')
    const nav = header?.querySelector('nav')
    const right = header?.querySelectorAll('div')[1]
    const widest = [...document.querySelectorAll('body *')]
      .map((el) => {
        const r = el.getBoundingClientRect()
        return { t: el.tagName + '.' + (el.className?.toString?.().slice(0, 40) || ''), r: Math.round(r.right) }
      })
      .filter((x) => x.r > de.clientWidth + 2)
      .slice(0, 6)
    return {
      scrollW: de.scrollWidth,
      clientW: de.clientWidth,
      navW: nav ? Math.round(nav.getBoundingClientRect().width) : null,
      headerW: header ? Math.round(header.getBoundingClientRect().width) : null,
      overflow: widest,
    }
  })
  console.log(w, JSON.stringify(info))
  await page.close()
}
await browser.close()
