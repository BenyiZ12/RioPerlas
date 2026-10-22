import { useState } from 'react'
import { useI18n } from '../i18n/useI18n'
import { routePaths } from '../content/site'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import Img from '../components/Img'
import Lightbox from '../components/Lightbox'
import type { LightboxItem } from '../components/Lightbox'

const items: LightboxItem[] = [
  { src: '/images/hero/resort-lake', alt: 'Lago, cascada y cabañas del resort' },
  { src: '/images/hero/thermal-waterfall', alt: 'Cascada de agua termal entre rocas' },
  { src: '/images/hero/thermal-pool', alt: 'Piscina termal con camastros' },
  { src: '/images/hero/garden-pavilion', alt: 'Pabellón rodeado de jardines tropicales' },
  { src: '/images/hero/cabin-porch', alt: 'Porche de madera de una cabaña' },
  { src: '/images/hero/forest-path', alt: 'Sendero de selva tropical' },
  { src: '/images/hero/thermal-swim', alt: 'Piscina termal natural con borde de piedra' },
  { src: '/images/resort/pool-pavilion', alt: 'Piscina principal con gazebo y villas' },
  { src: '/images/resort/entrance', alt: 'Entrada de Río Perlas' },
  { src: '/images/resort/garden', alt: 'Jardines con villas coloniales' },
  { src: '/images/resort/veranda', alt: 'Veranda con arcos y puertas de madera' },
  { src: '/images/resort/sculpture', alt: 'Escultura de piedra en los jardines' },
  { src: '/images/resort/temple', alt: 'Templo de piedra entre flores' },
  { src: '/images/thermal/waterfall', alt: 'Cascada termal' },
  { src: '/images/thermal/cave', alt: 'Gruja termal con luz natural' },
  { src: '/images/rooms/wood-cabin', alt: 'Interior de cabaña de madera' },
  { src: '/images/rooms/master-suite', alt: 'Master Suite con ventana en arco' },
  { src: '/images/rooms/mountain-view-suite', alt: 'Balcón de la Mountain View Suite' },
  { src: '/images/rooms/superior-room', alt: 'Habitación Superior' },
  { src: '/images/spa/massage', alt: 'Tratamiento de masaje en el spa' },
  { src: '/images/spa/treatment-room', alt: 'Sala de tratamiento de spa' },
  { src: '/images/dining/taberna', alt: 'La Taberna del Capitán' },
  { src: '/images/dining/lake-view', alt: 'Terraza del restaurante' },
  { src: '/images/events/ceremony', alt: 'Boda en los jardines del resort' },
  { src: '/images/events/couple', alt: 'Pareja de novios entre la vegetación' },
  { src: '/images/exp/quetzal', alt: 'Quetzal en el bosque del resort' },
  { src: '/images/exp/trail-waterfall', alt: 'Sendero hacia la cascada' },
  { src: '/images/gallery/sculpture', alt: 'Estatua tallada en piedra' },
  { src: '/images/gallery/thermal-pool', alt: 'Piscina termal con camastros' },
  { src: '/images/gallery/veranda', alt: 'Veranda blanca del resort' },
]

export default function Gallery() {
  const { lang, t } = useI18n()
  const [lightbox, setLightbox] = useState<number | null>(null)

  return (
    <>
      <Seo
        lang={lang}
        title={t('meta.gallery.title')}
        description={t('meta.gallery.description')}
        paths={routePaths.gallery}
      />
      <PageHero
        eyebrow={t('gallery.eyebrow')}
        title={t('gallery.title')}
        intro={t('gallery.intro')}
        image="/images/gallery/temple-garden"
        imageAlt="Jardín del resort con templo de piedra"
        variant="split"
      />

      <section className="container-luxe py-16 md:py-20">
        <div className="columns-2 gap-3 md:columns-3 md:gap-4 [&>*]:mb-3 md:[&>*]:mb-4">
          {items.map((g, i) => (
            <Reveal key={g.src + i} delay={(i % 3) + 1} className="break-inside-avoid">
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
                  className="w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                />
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      <Lightbox
        items={items}
        index={lightbox}
        onClose={() => setLightbox(null)}
        onIndexChange={setLightbox}
      />
    </>
  )
}
