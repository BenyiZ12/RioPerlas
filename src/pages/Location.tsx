import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone, Clock, ArrowUpRight } from 'lucide-react'
import { useI18n } from '../i18n/useI18n'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import Img from '../components/Img'
import InquiryForm from '../components/InquiryForm'
import { routePaths, site } from '../content/site'

const directionKeys = ['sanJose', 'airport', 'cartago', 'tapanti'] as const

export default function Location() {
  const { lang, t } = useI18n()
  const address = lang === 'es' ? site.contact.addressEs : site.contact.addressEn

  return (
    <>
      <Seo
        lang={lang}
        title={t('meta.location.title')}
        description={t('meta.location.description')}
        paths={routePaths.location}
      />
      <PageHero
        eyebrow={t('location.eyebrow')}
        title={t('location.title')}
        intro={t('location.intro')}
        image="/images/resort/entrance"
        imageAlt="Entrada de Río Perlas en el Valle de Orosí"
        variant="split"
      />

      <section className="container-luxe py-20 md:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <h2 className="font-display text-3xl leading-[1.12] text-pine-900 md:text-[2.25rem]">
              {t('location.contact')}
            </h2>
            <ul className="mt-8 space-y-6 text-sm text-ink-soft">
              <li className="flex gap-4">
                <MapPin size={16} strokeWidth={1.3} className="mt-0.5 shrink-0 text-aqua-700" aria-hidden="true" />
                <span>
                  {address}
                  <a
                    href={site.contact.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-[0.7rem] tracking-[0.16em] uppercase text-aqua-700 underline-offset-4 hover:underline"
                  >
                    {t('location.openMap')}
                  </a>
                </span>
              </li>
              <li className="flex gap-4">
                <Phone size={16} strokeWidth={1.3} className="mt-0.5 shrink-0 text-aqua-700" aria-hidden="true" />
                <a href={site.contact.phoneHref} className="transition-colors hover:text-pine-900">
                  {site.contact.phoneDisplay}
                </a>
              </li>
              <li className="flex gap-4">
                <Mail size={16} strokeWidth={1.3} className="mt-0.5 shrink-0 text-aqua-700" aria-hidden="true" />
                <a href={`mailto:${site.contact.email}`} className="transition-colors hover:text-pine-900">
                  {site.contact.email}
                </a>
              </li>
              <li className="flex gap-4">
                <Clock size={16} strokeWidth={1.3} className="mt-0.5 shrink-0 text-aqua-700" aria-hidden="true" />
                <span>
                  {t('location.reception')}
                </span>
              </li>
            </ul>

            <h2 className="mt-14 font-display text-3xl leading-[1.12] text-pine-900 md:text-[2.25rem]">
              {t('location.directions')}
            </h2>
            <ul className="mt-6 space-y-3 text-sm text-ink-soft">
              {directionKeys.map((k) => (
                <li key={k} className="border-b border-stone pb-3">
                  {t(`location.directionsList.${k}`)}
                </li>
              ))}
            </ul>

            <a
              href={site.availabilityUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline mt-8"
            >
              {t('common.officialAvailability')}
              <ArrowUpRight size={14} strokeWidth={1.4} aria-hidden="true" />
            </a>
          </Reveal>

          <Reveal delay={1} className="lg:col-span-7">
            <div className="overflow-hidden border border-stone">
              <iframe
                title={`${t('location.map')} — Río Perlas`}
                src={site.contact.mapsEmbed}
                width="100%"
                height="460"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0 }}
              />
            </div>
            <Img
              src="/images/resort/pool-pavilion"
              alt="Piscina principal de Río Perlas con gazebo y villas coloniales"
              sizes="(max-width: 1024px) 92vw, 56vw"
              className="mt-4 aspect-[16/9] w-full object-cover"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-sand" id="consulta">
        <div className="container-luxe grid gap-12 py-20 md:py-24 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-4">
            <h2 className="font-display text-3xl leading-[1.12] text-pine-900 md:text-[2.25rem]">
              {t('location.formTitle')}
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-ink-soft">{t('location.formNote')}</p>
            <p className="mt-6 text-sm text-ink-soft">{t('footer.bookingNote')}</p>
            <Link to={`/${lang}/habitaciones`} className="link-rule mt-8 text-pine-800">
              {t('common.exploreRooms')}
            </Link>
          </Reveal>
          <Reveal delay={1} className="lg:col-span-8">
            <InquiryForm defaultSubject="stay" />
          </Reveal>
        </div>
      </section>
    </>
  )
}
