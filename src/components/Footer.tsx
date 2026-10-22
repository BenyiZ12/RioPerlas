import { Link } from 'react-router-dom'
import { es } from '../i18n/es'
import { en } from '../i18n/en'

export default function Footer({ lang }: { lang: 'es' | 'en' }) {
  const t = lang === 'es' ? es : en
  const base = lang === 'es' ? '/es' : '/en'
  return (
    <footer className="border-t border-stone bg-ivory">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <img src="/images/brand/logo-full.webp" alt="Río Perlas Thermal Resort & Spa" className="h-10 w-auto mb-4" width="1200" height="294" />
            <p className="text-sm text-ink-light">Río Perlas Thermal Resort & Spa</p>
            <p className="text-sm text-ink-light mt-2">{t.footer.address}</p>
          </div>
          <div>
            <h3 className="font-display text-lg mb-2">Contacto</h3>
            <p className="text-sm text-ink-light">{t.footer.tel}</p>
            <p className="text-sm text-ink-light">{t.footer.reception}</p>
            <a className="text-sm text-brand-deep hover:underline" href={`mailto:${t.footer.email}`}>{t.footer.email}</a>
            <p className="text-xs text-ink-light mt-3">{t.common.noteBooking}</p>
          </div>
          <div>
            <h3 className="font-display text-lg mb-2">{lang === 'es' ? 'Explorar' : 'Explore'}</h3>
            <ul className="space-y-1 text-sm">
              <li><Link className="text-ink-light hover:text-ink" to={`${base}/habitaciones`}>{lang === 'es' ? 'Habitaciones' : 'Rooms'}</Link></li>
              <li><Link className="text-ink-light hover:text-ink" to={`${base}/spa`}>Spa</Link></li>
              <li><Link className="text-ink-light hover:text-ink" to={`${base}/restaurante`}>{lang === 'es' ? 'Restaurante' : 'Restaurant'}</Link></li>
              <li><Link className="text-ink-light hover:text-ink" to={`${base}/pase-diario`}>{lang === 'es' ? 'Pase Diario' : 'Day Pass'}</Link></li>
              <li><Link className="text-ink-light hover:text-ink" to={`${base}/galeria`}>{lang === 'es' ? 'Galería' : 'Gallery'}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-display text-lg mb-2">{t.footer.follow}</h3>
            <ul className="space-y-1 text-sm">
              <li><a className="text-ink-light hover:text-ink" href="https://www.facebook.com/hotspringsrioperlas" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a className="text-ink-light hover:text-ink" href="https://www.instagram.com/hotel_rio_perlas/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a className="text-ink-light hover:text-ink" href="https://www.tripadvisor.com.ar/Hotel_Review-g309231-d300736-Reviews-Hotel_Rio_Perlas_Spa_Resort_Casino-Cartago_Province_of_Cartago.html" target="_blank" rel="noopener noreferrer">TripAdvisor</a></li>
            </ul>
            <p className="text-xs text-ink-light mt-4">{t.common.verified}</p>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-stone text-xs text-ink-light flex flex-col md:flex-row gap-2 md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Río Perlas Thermal Resort & Spa. {t.common.allRights}</p>
          <p>{t.footer.legal}</p>
        </div>
      </div>
    </footer>
  )
}
