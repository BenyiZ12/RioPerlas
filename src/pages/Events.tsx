import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import { useI18n } from '../i18n/useI18n'
import { routePaths } from '../content/site'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import Img from '../components/Img'
import InquiryForm from '../components/InquiryForm'
import { events } from '../content/offerings'

export default function Events() {
  const { lang, t } = useI18n()

  return (
    <>
      <Seo
        lang={lang}
        title={t('meta.events.title')}
        description={t('meta.events.description')}
        paths={routePaths.events}
      />
      <PageHero
        eyebrow={t('events.eyebrow')}
        title={t('events.title')}
        intro={t('events.intro')}
        image="/images/events/ceremony"
        imageAlt="Pareja de novios durante la ceremonia en los jardines del resort"
      />

      <section className="container-luxe py-20 md:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-7">
            <h2 className="font-display text-3xl leading-[1.12] text-pine-900 md:text-[2.5rem]">
              {t('events.package')}
            </h2>
            <ul className="mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {events.packageIncludes.map((item) => (
                <li key={item.es} className="flex items-start gap-3 border-b border-stone pb-3 text-sm text-ink-soft">
                  <Check size={14} strokeWidth={1.5} className="mt-0.5 shrink-0 text-aqua-700" aria-hidden="true" />
                  {item[lang]}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-ink-soft">{events.minGuests[lang]}</p>
          </Reveal>

          <Reveal delay={1} className="lg:col-span-5">
            <Img
              src="/images/events/couple"
              alt="Pareja de novios entre la vegetación del resort"
              sizes="(max-width: 1024px) 92vw, 40vw"
              className="aspect-[3/4] w-full object-cover"
            />
          </Reveal>
        </div>

        <div className="mt-20 grid gap-12 border-t border-stone pt-16 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <h2 className="font-display text-3xl leading-[1.12] text-pine-900 md:text-[2.5rem]">
              {t('events.venues')}
            </h2>
            <ul className="mt-8 space-y-4 text-sm text-ink-soft">
              {events.venues.map((v) => (
                <li key={v.es} className="border-b border-stone pb-4">
                  {v[lang]}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={1} className="lg:col-span-7">
            <Img
              src="/images/events/chapel"
              alt="Iglesia del resort con arcos coloniales y jardín"
              sizes="(max-width: 1024px) 92vw, 56vw"
              className="aspect-[16/11] w-full object-cover"
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
            <p className="mt-6 text-sm text-ink-soft">{t('events.minGuests')}</p>
          </Reveal>
          <Reveal delay={1} className="lg:col-span-8">
            <InquiryForm defaultSubject="event" />
          </Reveal>
        </div>
      </section>

      <section className="container-luxe py-16 text-center">
        <Reveal>
          <Link to={`/${lang}/pase-diario`} className="link-rule text-pine-800">
            {t('nav.dayPass')}
            <ArrowRight size={13} strokeWidth={1.4} aria-hidden="true" />
          </Link>
        </Reveal>
      </section>
    </>
  )
}
