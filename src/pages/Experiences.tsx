import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useI18n } from '../i18n/useI18n'
import { routePaths, contactPath } from '../content/site'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import Img from '../components/Img'
import { experiences } from '../content/offerings'

export default function Experiences() {
  const { lang, t } = useI18n()

  const blocks = [
    { ...experiences.trails, image: '/images/exp/trail-waterfall' },
    { ...experiences.wildlife, image: '/images/exp/quetzal' },
    { ...experiences.surroundings, image: '/images/hero/forest-path' },
  ]

  return (
    <>
      <Seo
        lang={lang}
        title={t('meta.experiences.title')}
        description={t('meta.experiences.description')}
        paths={routePaths.experiences}
      />
      <PageHero
        eyebrow={t('experiences.eyebrow')}
        title={t('experiences.title')}
        intro={t('experiences.intro')}
        image="/images/exp/trail-waterfall"
        imageAlt="Sendero del resort que llega a la cascada"
      />

      <section className="container-luxe py-20 md:py-24">
        <div className="space-y-20">
          {blocks.map((b, i) => (
            <div
              key={b.title.en}
              className={`grid items-center gap-10 lg:grid-cols-12 lg:gap-16 ${
                i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
              }`}
            >
              <Reveal className="lg:col-span-6">
                <Img
                  src={b.image}
                  alt={`${b.title[lang]} — Río Perlas`}
                  sizes="(max-width: 1024px) 92vw, 48vw"
                  className="aspect-[4/3] w-full object-cover"
                />
              </Reveal>
              <Reveal delay={1} className="lg:col-span-6">
                <h2 className="font-display text-3xl leading-[1.12] text-pine-900 md:text-[2.5rem]">
                  {b.title[lang]}
                </h2>
                <p className="mt-6 text-base leading-relaxed text-ink-soft">{b.body[lang]}</p>
              </Reveal>
            </div>
          ))}
        </div>

        <Reveal>
          <div className="mt-20 border-t border-stone pt-12 text-center">
            <Link to={`/${lang}${contactPath[lang]}#consulta`} className="btn btn-primary">
              {t('experiences.inquire')}
              <ArrowRight size={14} strokeWidth={1.4} aria-hidden="true" />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  )
}
