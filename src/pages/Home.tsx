import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { useI18n } from '../i18n/useI18n'
import Seo from '../components/Seo'
import Img from '../components/Img'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import Lightbox from '../components/Lightbox'
import type { LightboxItem } from '../components/Lightbox'
import { rooms } from '../content/rooms'
import { contactPath, routePaths, site } from '../content/site'
import { useState } from 'react'

export default function Home() {
  const { lang, t, L } = useI18n()
  const [lightbox, setLightbox] = useState<number | null>(null)

  const featuredRooms = rooms.filter((r) =>
    ['wood-cabin', 'mountain-view-suite', 'master-suite', 'presidential-suite'].includes(r.slug),
  )

  const gallery: LightboxItem[] = [
    { src: '/images/hero/resort-lake', alt: 'Río Perlas — lago, cascada y cabañas del resort' },
    { src: '/images/thermal/waterfall', alt: 'Río Perlas — cascada termal entre las rocas' },
    { src: '/images/resort/garden', alt: 'Río Perlas — jardines con villas coloniales' },
    { src: '/images/spa/massage', alt: 'Río Perlas — sala de tratamiento de spa' },
    { src: '/images/dining/taberna', alt: 'Río Perlas — entrada de La Taberna del Capitán' },
    { src: '/images/exp/quetzal', alt: 'Río Perlas — quetzal en el bosque del resort' },
    { src: '/images/rooms/wood-cabin', alt: 'Río Perlas — interior de cabaña de madera' },
    { src: '/images/events/ceremony', alt: 'Río Perlas — boda en los jardines del resort' },
  ]

  const stats = [
    { value: '110', label: t('home.stats.hectares') },
    { value: '65', label: t('home.stats.rooms') },
    { value: '2', label: t('home.stats.pools') },
    { value: '400+', label: t('home.stats.species') },
  ]

  return (
    <>
      <Seo
        lang={lang}
        title={t('meta.home.title')}
        description={t('meta.home.description')}
        paths={{ es: routePaths.home.es, en: routePaths.home.en }}
        image="/images/og/og-image.jpg"
      />
      {/* ---------------- Hero ---------------- */}
      <section className="relative isolate -mt-[72px] overflow-hidden bg-pine-950 md:-mt-[86px]">
        <div className="absolute inset-0">
          <Img
            src="/images/hero/resort-lake"
            alt="Lago, cascada y cabañas de Río Perlas en el Valle de Orosí"
            priority
            sizes="100vw"
            className="h-full w-full object-cover"
            position="center 55%"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-pine-950/70 via-pine-950/35 to-pine-950/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-pine-950/75 via-pine-950/25 to-transparent" />

        <div className="container-luxe relative flex min-h-[92svh] flex-col justify-end pb-14 pt-32 md:min-h-[88svh] md:pb-20 md:pt-40">
          <Reveal>
            <div style={{ textShadow: '0 2px 26px rgba(12, 23, 18, 0.55)' }}>
              <p className="eyebrow text-aqua-500">{t('home.heroEyebrow')}</p>
            <h1 className="mt-6 font-display text-[3.25rem] leading-[0.95] text-ivory sm:text-7xl md:text-[6.5rem]">
              {t('home.heroTitle')}
            </h1>
            <p className="mt-4 font-display text-xl italic text-ivory/80 md:text-3xl">
              {t('home.heroSubtitle')}
            </p>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-ivory/80 md:text-lg">
              {t('home.heroLead')}
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link to={`/${lang}${contactPath[lang]}#consulta`} className="btn btn-light">
                {t('home.heroPrimary')}
                <ArrowRight size={14} strokeWidth={1.4} aria-hidden="true" />
              </Link>
              <Link to={`/${lang}/resort`} className="btn btn-outline-light">
                {t('home.heroSecondary')}
              </Link>
            </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- Intro ---------------- */}
      <section className="container-luxe py-20 md:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow text-aqua-700">{t('home.introEyebrow')}</p>
              <h2 className="mt-4 font-display text-3xl leading-[1.12] text-pine-900 md:text-[2.75rem]">
                {t('home.introTitle')}
              </h2>
              <p className="mt-6 text-base leading-relaxed text-ink-soft md:text-[1.0625rem]">
                {t('home.introBody')}
              </p>
              <Link to={`/${lang}/resort`} className="link-rule mt-8 text-pine-800">
                {t('home.introLink')}
                <ArrowRight size={13} strokeWidth={1.4} aria-hidden="true" />
              </Link>
            </Reveal>
          </div>

          <Reveal delay={1} className="lg:col-span-7">
            <div className="relative">
              <Img
                src="/images/resort/pool-pavilion"
                alt="Piscina principal de Río Perlas con gazebo y villas coloniales"
                sizes="(max-width: 1024px) 92vw, 56vw"
                className="aspect-[4/3] w-full object-cover"
              />
              <Img
                src="/images/resort/garden"
                alt="Jardines con setos y villas de estilo colonial del resort"
                sizes="(max-width: 1024px) 46vw, 24vw"
                className="absolute -bottom-10 -left-6 hidden aspect-square w-40 border-4 border-ivory object-cover md:block lg:-left-10 lg:w-48"
              />
            </div>
          </Reveal>
        </div>

        <Reveal delay={1}>
          <dl className="mt-16 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-stone pt-12 md:mt-24 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="font-display text-4xl leading-none text-pine-800 md:text-5xl">{s.value}</dt>
                <dd className="mt-3 max-w-[16rem] text-sm leading-relaxed text-ink-soft">{s.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </section>

      {/* ---------------- Thermal ---------------- */}
      <section className="relative isolate overflow-hidden bg-pine-900">
        <div className="absolute inset-0">
          <Img
            src="/images/hero/thermal-waterfall"
            alt="Cascada de agua termal entre rocas y vegetación del resort"
            sizes="100vw"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-pine-950/92 via-pine-950/70 to-pine-950/30" />
        <div className="container-luxe relative py-24 md:py-36">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-aqua-500">{t('home.thermalEyebrow')}</p>
            <h2 className="mt-5 font-display text-3xl leading-[1.1] text-ivory md:text-6xl">
              {t('home.thermalTitle')}
            </h2>
            <p className="mt-7 text-base leading-relaxed text-ivory/80 md:text-lg">
              {t('home.thermalBody')}
            </p>
            <Link to={`/${lang}/aguas-termales`} className="btn btn-outline-light mt-10">
              {t('home.thermalLink')}
              <ArrowRight size={14} strokeWidth={1.4} aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ---------------- Rooms ---------------- */}
      <section className="container-luxe py-20 md:py-28">
        <SectionHeading
          eyebrow={t('home.roomsEyebrow')}
          title={t('home.roomsTitle')}
          intro={t('home.roomsBody')}
          action={
            <Link to={`/${lang}/habitaciones`} className="link-rule text-pine-800">
              {t('common.viewAllRooms')}
              <ArrowRight size={13} strokeWidth={1.4} aria-hidden="true" />
            </Link>
          }
        />

        <div className="mt-14 grid gap-x-8 gap-y-12 md:grid-cols-2">
          {featuredRooms.map((room, i) => (
            <Reveal key={room.slug} delay={i % 2}>
              <Link to={`/${lang}/habitaciones/${room.slug}`} className="group block">
                <div className="overflow-hidden">
                  <Img
                    src={room.images[0].src}
                    alt={`${room.name[lang]} — ${L(room.images[0].caption)}`}
                    sizes="(max-width: 768px) 92vw, 44vw"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                  />
                </div>
                <div className="mt-5 flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-2xl text-pine-900 md:text-3xl">{room.name[lang]}</h3>
                  <span className="text-[0.7rem] tracking-[0.16em] uppercase text-ink-soft">
                    {room.guests[lang]}
                  </span>
                </div>
                <p className="mt-3 max-w-lg text-sm leading-relaxed text-ink-soft">{room.blurb[lang]}</p>
                <span className="link-rule mt-4 text-pine-800">
                  {t('common.viewDetails')}
                  <ArrowUpRight size={13} strokeWidth={1.4} aria-hidden="true" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------- Spa ---------------- */}
      <section className="bg-sand">
        <div className="container-luxe grid items-center gap-12 py-20 md:py-28 lg:grid-cols-2 lg:gap-20">
          <Reveal className="order-2 lg:order-1">
            <p className="eyebrow text-aqua-700">{t('home.spaEyebrow')}</p>
            <h2 className="mt-4 font-display text-3xl leading-[1.12] text-pine-900 md:text-[2.75rem]">
              {t('home.spaTitle')}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ink-soft md:text-[1.0625rem]">
              {t('home.spaBody')}
            </p>
            <Link to={`/${lang}/spa`} className="link-rule mt-8 text-pine-800">
              {t('common.exploreSpa')}
              <ArrowRight size={13} strokeWidth={1.4} aria-hidden="true" />
            </Link>
          </Reveal>
          <Reveal delay={1} className="order-1 lg:order-2">
            <Img
              src="/images/spa/massage"
              alt="Tratamiento de masaje en la sala de spa del resort"
              sizes="(max-width: 1024px) 92vw, 46vw"
              className="aspect-[4/3] w-full object-cover"
            />
          </Reveal>
        </div>
      </section>

      {/* ---------------- Dining ---------------- */}
      <section className="container-luxe py-20 md:py-28">
        <SectionHeading
          eyebrow={t('home.diningEyebrow')}
          title={t('home.diningTitle')}
          intro={t('home.diningBody')}
          action={
            <Link to={`/${lang}/gastronomia`} className="link-rule text-pine-800">
              {t('common.exploreDining')}
              <ArrowRight size={13} strokeWidth={1.4} aria-hidden="true" />
            </Link>
          }
        />

        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {[
            { name: t('dining.taberna'), body: t('dining.tabernaBody'), img: '/images/dining/taberna' },
            { name: t('dining.rancho'), body: t('dining.ranchoBody'), img: '/images/dining/lake-view' },
            { name: t('dining.loras'), body: t('dining.lorasBody'), img: '/images/dining/table-setting' },
          ].map((v, i) => (
            <Reveal key={v.name} delay={i}>
              <div className="group">
                <Img
                  src={v.img}
                  alt={`${v.name} — ${site.name}`}
                  sizes="(max-width: 768px) 92vw, 30vw"
                  className="aspect-[3/4] w-full object-cover"
                />
                <h3 className="mt-5 font-display text-2xl text-pine-900">{v.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{v.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------- Experiences + Events ---------------- */}
      <section className="bg-pine-900 text-ivory">
        <div className="container-luxe grid gap-14 py-20 md:py-28 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="eyebrow text-aqua-500">{t('home.experiencesEyebrow')}</p>
            <h2 className="mt-4 font-display text-3xl leading-[1.12] md:text-[2.75rem]">
              {t('home.experiencesTitle')}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ivory/75">{t('home.experiencesBody')}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to={`/${lang}/experiencias`} className="btn btn-outline-light">
                {t('nav.experiences')}
              </Link>
              <Link to={`/${lang}/pase-diario`} className="btn btn-outline-light">
                {t('nav.dayPass')}
              </Link>
            </div>
            <Img
              src="/images/exp/trail-waterfall"
              alt="Sendero del resort que llega a la cascada"
              sizes="(max-width: 1024px) 92vw, 46vw"
              className="mt-12 aspect-[16/10] w-full object-cover"
            />
          </Reveal>

          <Reveal delay={1}>
            <p className="eyebrow text-aqua-500">{t('nav.events')}</p>
            <h2 className="mt-4 font-display text-3xl leading-[1.12] md:text-[2.75rem]">
              {t('events.title')}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ivory/75">{t('events.intro')}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to={`/${lang}/eventos`} className="btn btn-light">
                {t('common.exploreEvents')}
              </Link>
            </div>
            <Img
              src="/images/events/ceremony"
              alt="Pareja de novios durante la ceremonia en los jardines del resort"
              sizes="(max-width: 1024px) 92vw, 46vw"
              className="mt-12 aspect-[16/10] w-full object-cover"
            />
          </Reveal>
        </div>
      </section>

      {/* ---------------- Gallery ---------------- */}
      <section className="container-luxe py-20 md:py-28">
        <SectionHeading
          eyebrow={t('home.galleryEyebrow')}
          title={t('home.galleryTitle')}
          action={
            <Link to={`/${lang}/galeria`} className="link-rule text-pine-800">
              {t('common.viewGallery')}
              <ArrowRight size={13} strokeWidth={1.4} aria-hidden="true" />
            </Link>
          }
        />

        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {gallery.slice(0, 4).map((g, i) => (
            <Reveal key={g.src} delay={i % 4}>
              <button
                type="button"
                onClick={() => setLightbox(i)}
                className="group block w-full overflow-hidden"
                aria-label={g.alt}
              >
                <Img
                  src={g.src}
                  alt={g.alt}
                  sizes="(max-width: 768px) 46vw, 23vw"
                  className="aspect-square w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                />
              </button>
            </Reveal>
          ))}
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {gallery.slice(4).map((g, i) => (
            <Reveal key={g.src} delay={i % 4}>
              <button
                type="button"
                onClick={() => setLightbox(i + 4)}
                className="group block w-full overflow-hidden"
                aria-label={g.alt}
              >
                <Img
                  src={g.src}
                  alt={g.alt}
                  sizes="(max-width: 768px) 46vw, 23vw"
                  className="aspect-square w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                />
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------- Booking CTA ---------------- */}
      <section className="relative isolate overflow-hidden bg-pine-950">
        <div className="absolute inset-0 opacity-35">
          <Img
            src="/images/hero/thermal-pool"
            alt=""
            sizes="100vw"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-pine-950 via-pine-950/85 to-pine-950/60" />
        <div className="container-luxe relative py-20 md:py-28">
          <Reveal className="max-w-2xl">
            <h2 className="font-display text-3xl leading-[1.12] text-ivory md:text-5xl">
              {t('home.bookingTitle')}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ivory/75 md:text-lg">
              {t('home.bookingBody')}
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link to={`/${lang}${contactPath[lang]}#consulta`} className="btn btn-light">
                {t('common.reserve')}
                <ArrowRight size={14} strokeWidth={1.4} aria-hidden="true" />
              </Link>
              <a href={site.contact.phoneHref} className="btn btn-outline-light">
                {site.contact.phoneDisplay}
              </a>
            </div>
            <p className="mt-6 max-w-md text-xs leading-relaxed text-ivory/50">
              {t('footer.bookingNote')}{' '}
              <a
                href={site.availabilityUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 transition-colors hover:text-ivory"
              >
                {t('common.officialAvailability')}
              </a>
            </p>
          </Reveal>
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
