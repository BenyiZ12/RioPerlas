import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import JsonLd from './JsonLd'
import MobileCta from './MobileCta'
import { I18nProvider } from '../i18n'
import type { Lang } from '../i18n/useI18n'

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname, hash])
  return null
}

export default function Layout({ lang, children }: { lang: Lang; children?: React.ReactNode }) {
  return (
    <I18nProvider lang={lang}>
      <ScrollToTop />
      <JsonLd lang={lang} />
      <a href="#main" className="skip-link">
        Ir al contenido principal
      </a>
      <div className="flex min-h-screen flex-col bg-ivory">
        <Header />
        <main id="main" className="flex-1">
          {children ?? <Outlet />}
        </main>
        <Footer />
      </div>
      <MobileCta />
    </I18nProvider>
  )
}