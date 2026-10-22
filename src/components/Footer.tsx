import { Link } from 'react-router-dom'
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail, Globe } from 'lucide-react'
import { useI18n } from '../i18n/useI18n'
import { contactPath, navItems, site } from '../content/site'

const socialIcons = {
  facebook: Facebook,
  instagram: Instagram,
  tripadvisor: Globe,
  youtube: Youtube,
} as const

export default function Footer() {
  const { lang, t } = useI18n()
  const address = lang === 'es' ? site.contact.addressEs : site.contact.addressEn

  return (
    <footer className="bg-pine-950 text-ivory/85">
      <div className="container-luxe grid gap-12 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-5">
          <img
            src="/images/brand/logo-wordmark.png"
            alt="Río Perlas Thermal Resort & Spa"
            width={1200}
            height={240}
            className="h-11 w-auto"
            loading="lazy"
          />
          <p className="mt-6 max-w-sm font-display text-xl leading-relaxed text-ivory/90">
            {t('footer.tagline')}
          </p>
          <p className="mt-6 text-sm leading-relaxed text-ivory/55">{t('footer.bookingNote')}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            {site.social.map((s) => {
              const Icon = socialIcons[s.key as keyof typeof socialIcons]
              return (
                <a
                  key={s.key}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center border border-ivory/20 text-ivory/70 transition-colors duration-300 hover:border-ivory/60 hover:text-ivory"
                >
                  <Icon size={15} strokeWidth={1.3} aria-hidden="true" />
                </a>
              )
            })}
          </div>
        </div>

        <nav className="md:col-span-3" aria-label={t('footer.explore')}>
          <h2 className="eyebrow text-ivory/45">{t('footer.explore')}</h2>
          <ul className="mt-6 space-y-3">
            {navItems.map((item) => (
              <li key={item.key}>
                <Link
                  to={`/${lang}${item.paths[lang]}`}
                  className="text-sm text-ivory/75 transition-colors duration-300 hover:text-ivory"
                >
                  {t(`nav.${item.key}`)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-4">
          <h2 className="eyebrow text-ivory/45">{t('footer.contact')}</h2>
          <ul className="mt-6 space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin size={15} strokeWidth={1.3} className="mt-0.5 shrink-0 text-aqua-500" aria-hidden="true" />
              <span>
                {address}
                <a
                  href={site.contact.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block text-xs tracking-[0.14em] uppercase text-aqua-500 transition-colors hover:text-ivory"
                >
                  {t('location.openMap')}
                </a>
              </span>
            </li>
            <li className="flex gap-3">
              <Phone size={15} strokeWidth={1.3} className="mt-0.5 shrink-0 text-aqua-500" aria-hidden="true" />
              <a href={site.contact.phoneHref} className="transition-colors hover:text-ivory">
                {site.contact.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail size={15} strokeWidth={1.3} className="mt-0.5 shrink-0 text-aqua-500" aria-hidden="true" />
              <a href={`mailto:${site.contact.email}`} className="transition-colors hover:text-ivory">
                {site.contact.email}
              </a>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 h-3 w-3 shrink-0 rounded-full border border-aqua-500" aria-hidden="true" />
              <span>
                {t('common.hours')}: {t('common.open24')}
              </span>
            </li>
          </ul>
          <Link to={`/${lang}${contactPath[lang]}#consulta`} className="btn btn-outline-light mt-8 w-full sm:w-auto">
            {t('nav.reserve')}
          </Link>
        </div>
      </div>

      <div className="border-t border-ivory/12">
        <div className="container-luxe flex flex-col gap-3 py-6 pb-24 text-xs text-ivory/45 sm:flex-row sm:items-center sm:justify-between lg:pb-6">
          <p>
            © {new Date().getFullYear()} {site.name}. {t('footer.rights')}
          </p>
          <p className="flex flex-wrap gap-x-5 gap-y-2">
            <Link
              to={`/${lang}${lang === 'es' ? '/privacidad' : '/privacy'}`}
              className="transition-colors hover:text-ivory"
            >
              {t('footer.privacy')}
            </Link>
            <a
              href={site.officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-ivory"
            >
              {t('common.officialSite')}
            </a>
            <Link
              to={`/${lang}${navItems.find((i) => i.key === 'gallery')!.paths[lang]}`}
              className="transition-colors hover:text-ivory"
            >
              {t('nav.gallery')}
            </Link>          </p>
        </div>
      </div>
    </footer>
  )
}
