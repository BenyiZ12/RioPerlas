import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Phone, ChevronDown, Globe } from 'lucide-react'
import { useI18n } from '../i18n/useI18n'
import { contactPath, navItems, primaryNavKeys, secondaryNavKeys, site, translatePath } from '../content/site'

export default function Header() {
  const { lang, t } = useI18n()
  const [open, setOpen] = useState(false)
  const [moreOpen, setMoreOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const moreRef = useRef<HTMLDivElement | null>(null)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
    setMoreOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    if (!moreOpen) return
    const onClick = (e: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) setMoreOpen(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMoreOpen(false)
    }
    document.addEventListener('mousedown', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [moreOpen])

  const primary = navItems.filter((i) => primaryNavKeys.includes(i.key))
  const secondary = navItems.filter((i) => secondaryNavKeys.includes(i.key))
  const otherLang = lang === 'es' ? 'en' : 'es'
  const otherPath = translatePath(location.pathname, lang, otherLang)

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `relative whitespace-nowrap py-2 text-[0.66rem] tracking-[0.1em] uppercase transition-colors duration-300 xl:text-[0.7rem] xl:tracking-[0.14em] 2xl:text-[0.72rem] 2xl:tracking-[0.16em] ${
      isActive ? 'text-pine-900' : 'text-ink-soft hover:text-pine-900'
    }`

  /** Nav entries that only appear from the `xl` breakpoint upwards. */
  const wideOnly = new Set(['dining', 'experiences'])
  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-500 ${
        scrolled ? 'border-stone bg-ivory/95 backdrop-blur-[2px]' : 'border-stone/70 bg-ivory'
      }`}
    >
      <div className="container-luxe flex h-[72px] items-center justify-between gap-6 md:h-[86px]">
        <Link to={`/${lang}/`} className="shrink-0" aria-label={`${site.name} — ${t('nav.home')}`}>
          <img
            src="/images/brand/logo-wordmark.png"
            alt="Río Perlas Thermal Resort & Spa"
            width={1200}
            height={240}
            className="h-9 w-auto md:h-10"
            loading="eager"
            decoding="sync"
          />
        </Link>

        <nav aria-label="Principal" className="hidden lg:flex items-center gap-4 2xl:gap-5">
          {primary.map((item) => (
            <NavLink
              key={item.key}
              to={`/${lang}${item.paths[lang]}`}
              className={({ isActive }) =>
                `${linkClass({ isActive })} ${wideOnly.has(item.key) ? 'hidden xl:block' : ''}`
              }
            >
              {({ isActive }) => (
                <>
                  {t(`nav.${item.key}`)}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-px bg-pine-900 transition-all duration-500 ${
                      isActive ? 'w-full' : 'w-0'
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}

          <div className="relative" ref={moreRef}>
            <button
              type="button"
              onClick={() => setMoreOpen((v) => !v)}
              aria-expanded={moreOpen}
              aria-haspopup="true"
              className="flex items-center gap-1.5 whitespace-nowrap py-2 text-[0.66rem] tracking-[0.1em] uppercase text-ink-soft transition-colors duration-300 hover:text-pine-900 xl:text-[0.7rem] xl:tracking-[0.14em] 2xl:text-[0.72rem] 2xl:tracking-[0.16em]"
            >
              {t('nav.menu')}
              <ChevronDown
                size={13}
                strokeWidth={1.4}
                className={`transition-transform duration-300 ${moreOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {moreOpen && (
              <div className="absolute right-0 top-full mt-2 w-60 border border-stone bg-ivory py-2 shadow-[0_18px_40px_-24px_rgba(12,23,18,0.45)]">
                {[...primary.filter((i) => wideOnly.has(i.key)), ...secondary].map((item) => (
                  <NavLink
                    key={item.key}
                    to={`/${lang}${item.paths[lang]}`}
                    className={`block px-5 py-2.5 text-[0.7rem] tracking-[0.14em] uppercase text-ink-soft transition-colors duration-300 hover:bg-sand hover:text-pine-900 ${
                      wideOnly.has(item.key) ? 'xl:hidden' : ''
                    }`}
                  >
                    {t(`nav.${item.key}`)}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        </nav>

        <div className="hidden lg:flex items-center gap-4 xl:gap-6">
          <a
            href={site.contact.phoneHref}
            className="flex items-center gap-2 whitespace-nowrap text-[0.68rem] tracking-[0.14em] text-ink-soft transition-colors duration-300 hover:text-pine-900 2xl:inline-flex"
            aria-label={`${t('common.phone')}: ${site.contact.phoneDisplay}`}
          >
            <Phone size={13} strokeWidth={1.4} aria-hidden="true" />
            <span className="hidden 2xl:inline">{site.contact.phoneDisplay}</span>
          </a>
          <Link
            to={`/${otherLang}${otherPath}`}
            className="flex items-center gap-1.5 whitespace-nowrap text-[0.66rem] tracking-[0.1em] text-ink-soft transition-colors duration-300 hover:text-pine-900 xl:text-[0.7rem] xl:tracking-[0.14em] 2xl:text-[0.72rem] 2xl:tracking-[0.16em]"
            aria-label={t('nav.switchLangAria')}
            hrefLang={otherLang}
          >
            <Globe size={13} strokeWidth={1.4} aria-hidden="true" />
            {t('nav.switchLang')}
          </Link>
          <Link to={`/${lang}${contactPath[lang]}#consulta`} className="btn btn-primary !py-3 !px-6">
            {t('nav.reserve')}
          </Link>
        </div>

        <button
          type="button"
          className="lg:hidden -mr-2 p-2 text-pine-900"
          onClick={() => setOpen(true)}
          aria-expanded={open}
          aria-label={t('nav.menu')}
        >
          <Menu size={26} strokeWidth={1.2} />
        </button>
      </div>

      {/* Mobile navigation */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-opacity duration-300 ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        aria-hidden={!open}
      >
        <div
          className="absolute inset-0 bg-pine-950/50"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
        <div
          className={`absolute inset-y-0 right-0 flex w-full flex-col bg-ivory transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:w-[86%] sm:max-w-sm ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
          role="dialog"
          aria-modal="true"
          aria-label={t('nav.menu')}
        >
          <div className="flex items-center justify-between border-b border-stone px-6 py-5">
            <img
              src="/images/brand/logo-wordmark.png"
              alt="Río Perlas Thermal Resort & Spa"
              width={1200}
              height={240}
              className="h-8 w-auto"
            />
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="-mr-2 p-2 text-pine-900"
              aria-label={t('nav.close')}
            >
              <X size={24} strokeWidth={1.2} />
            </button>
          </div>

          <nav aria-label="Móvil" className="flex-1 overflow-y-auto px-6 py-6">
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.key}>
                  <NavLink
                    to={`/${lang}${item.paths[lang]}`}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block border-b border-stone/60 py-3 font-display text-2xl transition-colors duration-300 ${
                        isActive ? 'text-aqua-700' : 'text-pine-900'
                      }`
                    }
                  >
                    {t(`nav.${item.key}`)}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="border-t border-stone px-6 py-5">
            <a
              href={site.contact.phoneHref}
              className="flex items-center gap-2 text-sm tracking-[0.1em] text-pine-900"
            >
              <Phone size={14} strokeWidth={1.4} aria-hidden="true" />
              {site.contact.phoneDisplay}
            </a>
            <Link
              to={`/${otherLang}${otherPath}`}
              onClick={() => setOpen(false)}
              className="mt-4 flex items-center gap-1.5 text-[0.72rem] tracking-[0.16em] uppercase text-ink-soft"
            >
              <Globe size={13} strokeWidth={1.4} aria-hidden="true" />
              {t('nav.switchLang')}
            </Link>
            <Link
              to={`/${lang}${contactPath[lang]}#consulta`}
              onClick={() => setOpen(false)}
              className="btn btn-primary mt-5 w-full"
            >
              {t('nav.reserve')}
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
