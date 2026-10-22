import { Link } from 'react-router-dom'
import { ArrowRight, Clock } from 'lucide-react'
import { useI18n } from '../i18n/useI18n'
import { routePaths, contactPath } from '../content/site'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import Img from '../components/Img'
import { dining } from '../content/offerings'

export default function Dining() {
  const { lang, t } = useI18n()

  return (
    <>
      <Seo
        lang={lang}
        title={t('meta.dining.title')}
        description={t('meta.dining.description')}
        paths={routePaths.dining}
      />
      <PageHero
        eyebrow={t('dining.eyebrow')}
        title={t('dining.title')}
        intro={t('dining.intro')}
        image="/images/dining/taberna"
        imageAlt="Entrada de La Taberna del Capitán con columnas y arcos"
        variant="split"
      />

      <section className="container-luxe py-20 md:py-24">
        <div className="space-y-16">
          {dining.venues.map((v, i) => (
            <article
              key={v.key}
              className={`grid items-center gap-10 lg:grid-cols-12 lg:gap-16 ${
                i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
              }`}
            >
              <Reveal className="lg:col-span-7">
                <Img
                  src={v.image}
                  alt={`${v.name[lang]} — Río Perlas`}
                  sizes="(max-width: 1024px) 92vw, 56vw"
                  className="aspect-[16/11] w-full object-cover"
                />
              </Reveal>
              <Reveal delay={1} className="lg:col-span-5">
                <p className="eyebrow text-aqua-700">{v.capacity[lang]}</p>
                <h2 className="mt-3 font-display text-3xl leading-tight text-pine-900 md:text-[2.5rem]">
                  {v.name[lang]}
                </h2>
                <p className="mt-5 text-base leading-relaxed text-ink-soft">{v.body[lang]}</p>
              </Reveal>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-pine-900 text-ivory">
        <div className="container-luxe py-20 md:py-24">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-5">
              <h2 className="font-display text-3xl leading-[1.12] md:text-[2.25rem]">
                {t('dining.hours')}
              </h2>
              <p className="mt-5 text-sm text-ivory/65">{t('dining.intro')}</p>
            </Reveal>
            <Reveal delay={1} className="lg:col-span-7">
              <ul className="space-y-4">
                {dining.hours.map((h) => (
                  <li
                    key={h.key}
                    className="flex items-center justify-between gap-4 border-b border-ivory/20 pb-4"
                  >
                    <span className="flex items-center gap-3 text-sm text-ivory/75">
                      <Clock size={15} strokeWidth={1.3} className="text-aqua-500" aria-hidden="true" />
                      {h.label[lang]}
                    </span>
                    <span className="font-display text-xl">{h.value}</span>
                  </li>
                ))}
              </ul>
              <Link to={`/${lang}${contactPath[lang]}#consulta`} className="btn btn-light mt-10">
                {t('dining.inquire')}
                <ArrowRight size={14} strokeWidth={1.4} aria-hidden="true" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
