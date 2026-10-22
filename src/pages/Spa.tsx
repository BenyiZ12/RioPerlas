import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useI18n } from '../i18n/useI18n'
import { routePaths, contactPath } from '../content/site'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import Img from '../components/Img'
import { spa } from '../content/offerings'

export default function Spa() {
  const { lang, t } = useI18n()

  const groups = [
    { title: t('spa.packages'), items: spa.packages },
    { title: t('spa.individual'), items: spa.treatments },
    { title: t('spa.facials'), items: spa.facials },
    { title: t('spa.waxing'), items: spa.waxing },
  ]

  return (
    <>
      <Seo
        lang={lang}
        title={t('meta.spa.title')}
        description={t('meta.spa.description')}
        paths={routePaths.spa}
      />
      <PageHero
        eyebrow={t('spa.eyebrow')}
        title={t('spa.title')}
        intro={t('spa.intro')}
        image="/images/spa/treatment-room"
        imageAlt="Sala de tratamiento de spa con camilla y vista tropical"
        variant="split"
      />

      <section className="container-luxe py-20 md:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <h2 className="font-display text-3xl leading-[1.12] text-pine-900 md:text-[2.25rem]">
              {t('spa.techniques')}
            </h2>
            <ul className="mt-8 space-y-3 text-sm text-ink-soft">
              {spa.techniques.map((tech) => (
                <li key={tech.es} className="flex items-start gap-3 border-b border-stone pb-3">
                  <span className="mt-2 h-px w-4 shrink-0 bg-aqua-600" aria-hidden="true" />
                  {tech[lang]}
                </li>
              ))}
            </ul>

            <h2 className="mt-12 font-display text-3xl leading-[1.12] text-pine-900 md:text-[2.25rem]">
              {t('resort.amenities.title')}
            </h2>
            <ul className="mt-6 space-y-3 text-sm text-ink-soft">
              {spa.facilities.map((f) => (
                <li key={f.es} className="flex items-start gap-3 border-b border-stone pb-3">
                  <span className="mt-2 h-px w-4 shrink-0 bg-aqua-600" aria-hidden="true" />
                  {f[lang]}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={1} className="lg:col-span-7">
            <Img
              src="/images/spa/massage"
              alt="Tratamiento de masaje en la sala de spa"
              sizes="(max-width: 1024px) 92vw, 56vw"
              className="aspect-[4/3] w-full object-cover"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-sand">
        <div className="container-luxe py-20 md:py-24">
          <SectionHeading eyebrow={t('spa.eyebrow')} title={t('spa.prices')} />

          <div className="mt-12 grid gap-10 md:grid-cols-2">
            {groups.map((g, gi) => (
              <Reveal key={g.title} delay={gi % 2}>
                <div>
                  <h3 className="border-b border-pine-800 pb-3 font-display text-xl text-pine-900">
                    {g.title}
                  </h3>
                  <ul>
                    {g.items.map((item) => (
                      <li
                        key={item.name.es}
                        className="flex items-baseline justify-between gap-4 border-b border-stone/70 py-3.5 text-sm"
                      >
                        <span className="text-ink">{item.name[lang]}</span>
                        <span className="font-display text-base text-pine-800">{item.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="mt-10 max-w-2xl text-xs leading-relaxed text-ink-soft">{t('spa.note')}</p>
            <Link to={`/${lang}${contactPath[lang]}#consulta`} className="btn btn-primary mt-8">
              {t('spa.inquire')}
              <ArrowRight size={14} strokeWidth={1.4} aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
