import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Check } from 'lucide-react'
import { useI18n } from '../i18n/useI18n'
import { contactPath } from '../content/site'
import Seo from '../components/Seo'
import Reveal from '../components/Reveal'
import Img from '../components/Img'
import { getRoom, rooms } from '../content/rooms'
import { routePaths, roomsPath } from '../content/site'
import NotFound from './NotFound'

export default function RoomDetail() {
  const { lang, t } = useI18n()
  const { slug } = useParams()
  const room = slug ? getRoom(slug) : undefined

  if (!room) return <NotFound />

  const others = rooms.filter((r) => r.slug !== room.slug).slice(0, 3)

  return (
    <>
      <Seo
        lang={lang}
        title={`${room.name[lang]} | Río Perlas Thermal Resort & Spa`}
        description={room.blurb[lang]}
        paths={{
          es: `${routePaths.rooms.es}/${room.slug}`,
          en: `${routePaths.rooms.en}/${room.slug}`,
        }}
      />

      <section className="container-luxe pt-10 md:pt-14">
        <Link to={`/${lang}${roomsPath[lang]}`} className="link-rule text-ink-soft">
          <ArrowLeft size={13} strokeWidth={1.4} aria-hidden="true" />
          {t('common.back')}
        </Link>
      </section>

      <section className="container-luxe pb-16 pt-8 md:pb-24 md:pt-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow text-aqua-700">{room.category[lang]}</p>
              <h1 className="mt-4 font-display text-4xl leading-[1.08] text-pine-900 md:text-6xl">
                {room.name[lang]}
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
                {room.blurb[lang]}
              </p>
            </Reveal>

            <Reveal delay={1} className="mt-12">
              <Img
                src={room.images[0].src}
                alt={`${room.name[lang]} — Río Perlas`}
                priority
                sizes="(max-width: 1024px) 92vw, 56vw"
                className="aspect-[4/3] w-full object-cover"
              />
            </Reveal>

            {room.images.length > 1 && (
              <Reveal delay={2} className="mt-4 grid gap-4 sm:grid-cols-2">
                {room.images.slice(1).map((img) => (
                  <Img
                    key={img.src}
                    src={img.src}
                    alt={`${room.name[lang]} — ${img.caption[lang]}`}
                    sizes="(max-width: 640px) 92vw, 28vw"
                    className="aspect-[4/3] w-full object-cover"
                  />
                ))}
              </Reveal>
            )}
          </div>

          <aside className="lg:col-span-5">
            <Reveal delay={1} className="lg:sticky lg:top-28">
              <div className="border border-stone bg-sand p-7 md:p-9">
                <dl className="space-y-4 border-b border-stone pb-6 text-sm">
                  <div className="flex items-baseline justify-between gap-4">
                    <dt className="text-[0.7rem] tracking-[0.16em] uppercase text-ink-soft">
                      {t('rooms.capacity')}
                    </dt>
                    <dd className="text-ink">{room.guests[lang]}</dd>
                  </div>
                  {room.size && (
                    <div className="flex items-baseline justify-between gap-4">
                      <dt className="text-[0.7rem] tracking-[0.16em] uppercase text-ink-soft">
                        {t('rooms.size')}
                      </dt>
                      <dd className="text-ink">{room.size[lang]}</dd>
                    </div>
                  )}
                  <div className="flex items-baseline justify-between gap-4">
                    <dt className="text-[0.7rem] tracking-[0.16em] uppercase text-ink-soft">
                      {t('rooms.breakfast')}
                    </dt>
                    <dd className="text-aqua-700">{t('rooms.breakfast')}</dd>
                  </div>
                </dl>

                <h2 className="mt-7 font-display text-xl text-pine-900">{t('rooms.detail.amenities')}</h2>
                <ul className="mt-4 space-y-2.5 text-sm text-ink-soft">
                  {room.amenities.map((a) => (
                    <li key={a.es} className="flex items-start gap-2.5">
                      <Check size={14} strokeWidth={1.5} className="mt-0.5 shrink-0 text-aqua-700" aria-hidden="true" />
                      {a[lang]}
                    </li>
                  ))}
                </ul>

                <Link to={`/${lang}${contactPath[lang]}#consulta`} className="btn btn-primary mt-8 w-full">
                  {t('rooms.detail.availability')}
                  <ArrowRight size={14} strokeWidth={1.4} aria-hidden="true" />
                </Link>
                <p className="mt-4 text-center text-xs leading-relaxed text-ink-soft">
                  {t('footer.bookingNote')}
                </p>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      <section className="bg-sand">
        <div className="container-luxe py-20 md:py-24">
          <h2 className="font-display text-2xl text-pine-900 md:text-3xl">
            {t('rooms.detail.otherRooms')}
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {others.map((r, i) => (
              <Reveal key={r.slug} delay={i % 3}>
                <Link to={`/${lang}${roomsPath[lang]}/${r.slug}`} className="group block">
                  <Img
                    src={r.images[0].src}
                    alt={`${r.name[lang]} — Río Perlas`}
                    sizes="(max-width: 640px) 92vw, 30vw"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                  />
                  <h3 className="mt-4 font-display text-xl text-pine-900">{r.name[lang]}</h3>
                  <p className="mt-2 text-sm text-ink-soft">{r.guests[lang]}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
