import puppeteer from 'puppeteer-core'
const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
const browser = await puppeteer.launch({ executablePath: CHROME, headless: 'new', args: ['--no-sandbox'] })
const page = await browser.newPage()
const errors = []
page.on('pageerror', (e) => errors.push('PAGEERROR ' + e.message))
page.on('console', (m) => { if (m.type() === 'error') errors.push('CONSOLE ' + m.text()) })
const log = (...a) => console.log(...a)

await page.setViewport({ width: 1440, height: 900 })
await page.goto('http://localhost:4173/es/', { waitUntil: 'networkidle2' })

// 1. Every internal link resolves to a real route
const links = await page.$$eval('a[href^="/"]', (as) => [...new Set(as.map((a) => a.getAttribute('href')))])
log('internal links:', links.length)
const bad = []
for (const href of links) {
  const res = await page.goto('http://localhost:4173' + href, { waitUntil: 'domcontentloaded' })
  const title = await page.title()
  const h1 = await page.$eval('h1', (e) => e.textContent.trim()).catch(() => null)
  if (!h1) bad.push(`${href} -> no H1 (status ${res.status()})`)
  log(`  ${href} :: ${res.status()} :: H1="${h1}"`)
}
log('pages without H1:', bad)

// 2. More dropdown
await page.goto('http://localhost:4173/es/', { waitUntil: 'networkidle2' })
await page.click('button[aria-haspopup="true"]')
await new Promise((r) => setTimeout(r, 400))
const dropdown = await page.$$eval('nav a', (as) => as.map((a) => a.textContent.trim()))
log('dropdown open, nav links:', dropdown.join(' | '))

// 3. Language switch
await page.goto('http://localhost:4173/es/habitaciones', { waitUntil: 'networkidle2' })
const langLink = await page.$('a[hreflang="en"]')
await langLink.click()
await new Promise((r) => setTimeout(r, 700))
log('after lang switch url:', page.url())
const enH1 = await page.$eval('h1', (e) => e.textContent.trim()).catch(() => 'none')
log('en h1:', enH1)

// 4. Room detail via link
await page.goto('http://localhost:4173/en/rooms', { waitUntil: 'networkidle2' })
await new Promise((r) => setTimeout(r, 600))
const roomLink = await page.$('main a[href*="/rooms/"]')
if (!roomLink) {
  const hrefs = await page.$$eval('main a', (as) => as.map((a) => a.getAttribute('href')).slice(0, 12))
  log('no room link found, main hrefs:', hrefs.join(', '))
} else {
  await roomLink.click()
  await new Promise((r) => setTimeout(r, 900))
  log('room detail url:', page.url())
  log('room h1:', await page.$eval('h1', (e) => e.textContent.trim()).catch(() => 'none'))
}

// 5. Form validation
await page.goto('http://localhost:4173/es/ubicacion#consulta', { waitUntil: 'networkidle2' })
await page.click('button[type="submit"]')
await new Promise((r) => setTimeout(r, 400))
const errs = await page.$$eval('[aria-invalid="true"]', (es) => es.length)
const msgs = await page.$$eval('p.text-\\[\\#a4402f\\]', (es) => es.map((e) => e.textContent))
log('invalid fields:', errs, msgs)

// 6. Mobile menu
await page.setViewport({ width: 390, height: 844 })
await page.goto('http://localhost:4173/es/', { waitUntil: 'networkidle2' })
await page.click('header > div > button[aria-expanded]')
await new Promise((r) => setTimeout(r, 700))
const drawer = await page.$$eval('[role="dialog"] a', (as) => as.map((a) => a.textContent.trim()))
log('mobile drawer links:', drawer.join(' | '))
await page.screenshot({ path: 'C:\\Users\\USUARIO\\AppData\\Local\\Temp\\opencode\\shots\\mobile-menu.png' })

// 7. External links
const ext = await page.$$eval('a[href^="http"]', (as) => [...new Set(as.map((a) => a.href))])
log('external links:', ext.length)

log('\nERRORS:', errors.length ? [...new Set(errors)].join('\n') : 'none')
await browser.close()
