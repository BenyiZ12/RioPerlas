import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import JsonLdHotel from './JsonLdHotel'

export default function Layout({ lang }: { lang: 'es' | 'en' }) {
  const location = useLocation()
  return (
    <div className="min-h-screen flex flex-col">
      <a href="#main" className="skip-link">Skip to content</a>
      <Header lang={lang} />
      <main id="main" className="flex-1">
        <Outlet />
      </main>
      <Footer lang={lang} />
      <JsonLdHotel lang={lang} path={location.pathname} />
    </div>
  )
}
