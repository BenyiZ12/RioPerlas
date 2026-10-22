import { Link } from 'react-router-dom'
import { ArrowRight, Users } from 'lucide-react'
import { useI18n } from '../i18n/useI18n'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import Img from '../components/Img'
import { rooms } from '../content/rooms'
import { routePaths, roomsPath } from '../content/site'

export default function Rooms() {
  const { lang, t } = useI18n()

  return (
    <>
      <Seo
        lang={lang}
        title={t('meta.rooms.title')}
        description={t('meta.rooms.description')}
        paths={routePaths.rooms}
      />
      <PageHero
        eyebrow={t('rooms.eyebrow')}
        title={t('rooms.title')}
        intro={t('rooms.intro')}
        image="/images/rooms/wood-cabin"
        imageAlt="Cabaña de madera con camas dobles del resort"
      />

      <section className="container-luxe py-16 md:py-24">
        <div className="space-y-16 md:space-y-24">
          {rooms.map((room, i) => (
            <article
              key={room.slug}
              className={`grid items-center gap-10 lg:grid-cols-12 lg:gap-16 ${
                i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
              }`}
            >
              <Reveal className="lg:col-span-7">
                <Link to={`/${lang}${roomsPath[lang]}/${room.slug}`} className="group block overflow-hidden">
                  <Img
                    src={room.images[0].src}
                    alt={`${room.name[lang]} — Río Perlas`}
                    sizes="(max-width: 1024px) 92vw, 56vw"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                  />
                </Link>
              </Reveal>

              <Reveal delay={1} className="lg:col-span-5">
                <p className="eyebrow text-aqua-700">{room.category[lang]}</p>
                <h2 className="mt-3 font-display text-3xl leading-tight text-pine-900 md:text-[2.5rem]">
                  <Link to={`/${lang}${roomsPath[lang]}/${room.slug}`} className="transition-colors hover:text-aqua-700">
                    {room.name[lang]}
                  </Link>
                </h2>
                <p className="mt-5 text-base leading-relaxed text-ink-soft">{room.blurb[lang]}</p>

                <dl className="mt-7 flex flex-wrap gap-x-8 gap-y-4 border-y border-stone py-5 text-sm">
                  <div className="flex items-center gap-2">
                    <Users size={15} strokeWidth={1.3} className="text-aqua-700" aria-hidden="true" />
                    <dt className="sr-only">{t('rooms.capacity')}</dt>
                    <dd>{room.guests[lang]}</dd>
                  </div>
                  {room.size && (
                    <div>
                      <dt className="sr-only">{t('rooms.size')}</dt>
                      <dd>{room.size[lang]}</dd>
                    </div>
                  )}
                  <div>
                    <dt className="sr-only">{t('rooms.breakfast')}</dt>
                    <dd className="text-aqua-700">{t('rooms.breakfast')}</dd>
                  </div>
                </dl>

                <ul className="mt-6 grid gap-x-6 gap-y-2 text-sm text-ink-soft sm:grid-cols-2">
                  {room.amenities.slice(0, 4).map((a) => (
                    <li key={a.es} className="flex items-start gap-2">
                      <span className="mt-2 h-px w-3 shrink-0 bg-aqua-600" aria-hidden="true" />
                      {a[lang]}
                    </li>
                  ))}
                </ul>

                <Link
                  to={`/${lang}${roomsPath[lang]}/${room.slug}`}
                  className="link-rule mt-8 text-pine-800"
                >
                  {t('rooms.choose')}
                  <ArrowRight size={13} strokeWidth={1.4} aria-hidden="true" />
                </Link>
              </Reveal>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
