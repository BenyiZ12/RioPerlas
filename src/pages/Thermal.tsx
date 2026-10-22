import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useI18n } from '../i18n/useI18n'
import { routePaths, contactPath } from '../content/site'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import Img from '../components/Img'
import Lightbox from '../components/Lightbox'
import type { LightboxItem } from '../components/Lightbox'
import { useState } from 'react'

const features = [
  { key: 'poolTitle', body: 'poolBody', image: '/images/thermal/loungers' },
  { key: 'coldTitle', body: 'coldBody', image: '/images/thermal/swim' },
  { key: 'kidsTitle', body: 'kidsBody', image: '/images/gallery/thermal-pool' },
  { key: 'barTitle', body: 'barBody', image: '/images/hero/garden-pavilion' },
] as const

export default function Thermal() {
  const { lang, t } = useI18n()
  const [lightbox, setLightbox] = useState<number | null>(null)

  const gallery: LightboxItem[] = [
    { src: '/images/thermal/waterfall', alt: 'Cascada termal que fluye entre las rocas del resort' },
    { src: '/images/thermal/loungers', alt: 'Piscina termal con camastros junto al jardín' },
    { src: '/images/thermal/swim', alt: 'Piscina termal natural con borde de piedra' },
    { src: '/images/thermal/cave', alt: 'Interior de la gruta termal con luz natural' },
    { src: '/images/hero/thermal-pool', alt: 'Piscina del resort rodeada de vegetación tropical' },
    { src: '/images/exp/bridge', alt: 'Puente de madera sobre la quebrada termal' },
  ]

  return (
    <>
      <Seo
        lang={lang}
        title={t('meta.thermal.title')}
        description={t('meta.thermal.description')}
        paths={routePaths.thermal}
      />
      <PageHero
        eyebrow={t('thermal.eyebrow')}
        title={t('thermal.title')}
        intro={t('thermal.intro')}
        image="/images/hero/thermal-waterfall"
        imageAlt="Cascada de agua termal entre rocas y vegetación"
      />

      <section className="container-luxe py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-5">
            <h2 className="font-display text-3xl leading-[1.12] text-pine-900 md:text-[2.5rem]">
              {t('thermal.poolTitle')}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ink-soft">{t('thermal.poolBody')}</p>
            <Link to={`/${lang}${contactPath[lang]}#consulta`} className="btn btn-primary mt-9">
              {t('common.reserve')}
              <ArrowRight size={14} strokeWidth={1.4} aria-hidden="true" />
            </Link>
          </Reveal>
          <Reveal delay={1} className="lg:col-span-7">
            <button
              type="button"
              onClick={() => setLightbox(0)}
              className="group block w-full overflow-hidden"
              aria-label={gallery[0].alt}
            >
              <Img
                src="/images/thermal/waterfall"
                alt={gallery[0].alt}
                sizes="(max-width: 1024px) 92vw, 56vw"
                className="aspect-[16/11] w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
              />
            </button>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <Reveal key={f.key} delay={i % 4}>
              <article>
                <Img
                  src={f.image}
                  alt={`${t(`thermal.${f.key}`)} — Río Perlas`}
                  sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 23vw"
                  className="aspect-[4/5] w-full object-cover"
                />
                <h3 className="mt-5 font-display text-xl text-pine-900 md:text-2xl">
                  {t(`thermal.${f.key}`)}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{t(`thermal.${f.body}`)}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-pine-900 text-ivory">
        <div className="container-luxe py-20 md:py-24">
          <Reveal className="max-w-3xl">
            <p className="text-sm leading-relaxed text-ivory/70">{t('thermal.note')}</p>
            <Link to={`/${lang}${contactPath[lang]}#consulta`} className="btn btn-light mt-9">
              {t('common.inquire')}
              <ArrowRight size={14} strokeWidth={1.4} aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="container-luxe py-20 md:py-24">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {gallery.map((g, i) => (
            <Reveal key={g.src} delay={i % 3}>
              <button
                type="button"
                onClick={() => setLightbox(i)}
                className="group block w-full overflow-hidden"
                aria-label={g.alt}
              >
                <Img
                  src={g.src}
                  alt={g.alt}
                  sizes="(max-width: 768px) 46vw, 31vw"
                  className="aspect-square w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                />
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      <Lightbox
        items={gallery}
        index={lightbox}
        onClose={() => setLightbox(null)}
        onIndexChange={setLightbox}
      />
    </>
  )
}
