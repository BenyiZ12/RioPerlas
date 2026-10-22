import { Link } from 'react-router-dom'
import { ArrowRight, Clock, LogIn, LogOut, Moon } from 'lucide-react'
import { useI18n } from '../i18n/useI18n'
import { routePaths } from '../content/site'
import { contactPath } from '../content/site'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import Img from '../components/Img'

const amenityKeys = [
  'thermal',
  'bar',
  'restaurant',
  'spa',
  'church',
  'convention',
  'trails',
  'reception',
] as const

export default function Resort() {
  const { lang, t } = useI18n()

  return (
    <>
      <Seo
        lang={lang}
        title={t('meta.resort.title')}
        description={t('meta.resort.description')}
        paths={routePaths.resort}
      />
      <PageHero
        eyebrow={t('resort.eyebrow')}
        title={t('resort.title')}
        intro={t('resort.intro')}
        image="/images/hero/garden-pavilion"
        imageAlt="Pabellón del resort rodeado de jardines tropicales"
      />

      <section className="container-luxe py-20 md:py-28">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-7">
            <h2 className="font-display text-3xl leading-[1.12] text-pine-900 md:text-[2.5rem]">
              {t('resort.history')}
            </h2>
          </Reveal>
          <Reveal delay={1} className="lg:col-span-5">
            <Img
              src="/images/resort/entrance"
              alt="Entrada de Río Perlas con el letrero del resort"
              sizes="(max-width: 1024px) 92vw, 40vw"
              className="aspect-[4/3] w-full object-cover"
            />
          </Reveal>
        </div>

        <div className="mt-16 grid gap-14 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-5">
            <Img
              src="/images/hero/forest-path"
              alt="Sendero de selva tropical dentro del resort"
              sizes="(max-width: 1024px) 92vw, 40vw"
              className="aspect-[4/3] w-full object-cover"
            />
          </Reveal>
          <Reveal delay={1} className="lg:col-span-7">
            <h2 className="font-display text-3xl leading-[1.12] text-pine-900 md:text-[2.5rem]">
              {t('resort.ecosystem')}
            </h2>
          </Reveal>
        </div>
      </section>

      {/* Facilities */}
      <section className="bg-sand">
        <div className="container-luxe py-20 md:py-28">
          <SectionHeading eyebrow={t('nav.resort')} title={t('resort.amenities.title')} />
          <ul className="mt-12 grid gap-x-10 gap-y-8 md:grid-cols-2">
            {amenityKeys.map((key, i) => (
              <Reveal key={key} delay={i % 2} as="li">
                <div className="flex gap-5 border-t border-stone pt-5">
                  <span className="font-display text-2xl leading-none text-aqua-700">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-sm leading-relaxed text-ink-soft md:text-[0.95rem]">
                    {t(`resort.amenities.items.${key}`)}
                  </span>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Gallery strip */}
      <section className="container-luxe py-20 md:py-24">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { src: '/images/resort/veranda', alt: 'Veranda con arcos del resort' },
            { src: '/images/resort/temple', alt: 'Templo de piedra entre los jardines' },
            { src: '/images/resort/sculpture', alt: 'Escultura de piedra en los jardines' },
            { src: '/images/resort/lake-view', alt: 'Vista del lago, la cascada y las cabañas' },
          ].map((g, i) => (
            <Reveal key={g.src} delay={i % 4}>
              <Img
                src={g.src}
                alt={g.alt}
                sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 23vw"
                className="aspect-[3/4] w-full object-cover"
              />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Policies */}
      <section className="bg-pine-900 text-ivory">
        <div className="container-luxe py-20 md:py-24">
          <SectionHeading eyebrow={t('nav.resort')} title={t('resort.policy.title')} light />
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {[
              { icon: LogIn, label: t('resort.policy.checkIn'), value: '2:00 pm' },
              { icon: LogOut, label: t('resort.policy.checkOut'), value: '12:00 pm' },
              { icon: Moon, label: t('resort.policy.late'), value: '5:00 pm · $25' },
            ].map((p, i) => (
              <Reveal key={p.label} delay={i}>
                <div className="border-t border-ivory/20 pt-6">
                  <p.icon size={18} strokeWidth={1.3} className="text-aqua-500" aria-hidden="true" />
                  <p className="mt-4 text-[0.7rem] tracking-[0.18em] uppercase text-ivory/50">
                    {p.label}
                  </p>
                  <p className="mt-2 font-display text-2xl">{p.value}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="mt-10 flex max-w-2xl items-start gap-3 text-sm text-ivory/60">
              <Clock size={15} strokeWidth={1.3} className="mt-0.5 shrink-0" aria-hidden="true" />
              {t('resort.policy.note')}
            </p>
          </Reveal>
          <Reveal>
            <Link to={`/${lang}${contactPath[lang]}#consulta`} className="btn btn-light mt-10">
              {t('common.reserve')}
              <ArrowRight size={14} strokeWidth={1.4} aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
