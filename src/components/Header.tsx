import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { es } from '../i18n/es'
import { en } from '../i18n/en'

const navEs = [
  { to: '/es/', label: 'Inicio' },
  { to: '/es/resort', label: 'Resort' },
  { to: '/es/habitaciones', label: 'Habitaciones' },
  { to: '/es/spa', label: 'Spa' },
  { to: '/es/restaurante', label: 'Restaurante' },
  { to: '/es/experiencias', label: 'Experiencias' },
  { to: '/es/senderismo', label: 'Senderismo' },
  { to: '/es/pura-pora', label: 'Pura Pora' },
  { to: '/es/bodas-y-eventos', label: 'Bodas y Eventos' },
  { to: '/es/pase-diario', label: 'Pase Diario' },
  { to: '/es/galeria', label: 'Galería' },
  { to: '/es/ubicacion-contacto', label: 'Ubicación y Contacto' },
]

const navEn = [
  { to: '/en/', label: 'Home' },
  { to: '/en/resort', label: 'Resort' },
  { to: '/en/rooms', label: 'Rooms' },
  { to: '/en/spa', label: 'Spa' },
  { to: '/en/restaurant', label: 'Restaurant' },
  { to: '/en/experiences', label: 'Experiences' },
  { to: '/en/hiking', label: 'Hiking' },
  { to: '/en/pura-pora', label: 'Pura Pora' },
  { to: '/en/weddings-events', label: 'Weddings & Events' },
  { to: '/en/day-pass', label: 'Day Pass' },
  { to: '/en/gallery', label: 'Gallery' },
  { to: '/en/location-contact', label: 'Location & Contact' },
]

export default function Header({ lang }: { lang: 'es' | 'en' }) {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const t = lang === 'es' ? es : en
  const nav = lang === 'es' ? navEs : navEn
  const switchTo = lang === 'es' ? location.pathname.replace('/es', '/en') || '/en/' : location.pathname.replace('/en', '/es') || '/es/'

  return (
    <header className="border-b border-stone/60 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to={lang === 'es' ? '/es/' : '/en/'} className="flex items-center gap-3">
            <img src="/images/brand/logo-full.webp" alt="Río Perlas Thermal Resort & Spa" className="h-9 md:h-11 w-auto" width="1200" height="294" />
          </Link>
          <nav className="hidden xl:flex items-center gap-5">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === (lang === 'es' ? '/es/' : '/en/')}
                className={({ isActive }) => `text-sm transition-colors ${isActive ? 'text-brand-deep' : 'text-ink-light hover:text-ink'}`}
              >
                {item.label}
              </NavLink>
            ))}
            <Link to={switchTo} className="text-sm text-ink-light hover:text-ink border border-stone px-2 py-1">{t.nav.lang}</Link>
          </nav>
          <button className="xl:hidden p-2" aria-label={t.nav.menu} onClick={() => setOpen((v) => !v)}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="xl:hidden border-t border-stone bg-white">
          <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex flex-col gap-2">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === (lang === 'es' ? '/es/' : '/en/')}
                onClick={() => setOpen(false)}
                className={({ isActive }) => `text-sm py-1 ${isActive ? 'text-brand-deep' : 'text-ink-light'}`}
              >
                {item.label}
              </NavLink>
            ))}
            <Link to={switchTo} className="text-sm text-ink-light py-1">{lang === 'es' ? 'English' : 'Español'}</Link>
          </nav>
        </div>
      )}
    </header>
  )
}
