import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import { useReveal } from '../hooks/useReveal'
import { es } from '../i18n/es'
import { rooms } from '../content/rooms'

export default function HomeEs() {
  const t = es
  const ref1 = useReveal<HTMLElement>()
  const ref2 = useReveal<HTMLElement>()
  const ref3 = useReveal<HTMLElement>()

  return (
    <>
      <Seo lang="es" title="Río Perlas Thermal Resort & Spa | Orosí, Cartago, Costa Rica" description="Resort termal con aguas termales naturales en el Valle de Orosi, Cartago, Costa Rica. Piscinas termales, spa, habitaciones, gastronomía." path="/es/" />
      <section className="relative">
        <img src="/images/hero/arch-images__jkit__images__135-full.webp" srcSet="/images/hero/arch-images__jkit__images__135-full-640.webp 640w, /images/hero/arch-images__jkit__images__135-full-960.webp 960w, /images/hero/arch-images__jkit__images__135-full-1280.webp 1280w, /images/hero/arch-images__jkit__images__135-full.webp 1600w" sizes="100vw" alt="Río Perlas Thermal Resort & Spa - Piscinas termales rodeadas de naturaleza" className="w-full min-h-[55vh] md:h-[75vh] object-cover object-center" width="1600" height="1060" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-black/10" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="font-display text-4xl md:text-6xl text-white max-w-3xl">{t.home.heroTitle}</h1>
            <p className="mt-4 text-lg md:text-xl text-white/90 max-w-2xl">{t.home.heroSub}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/es/habitaciones" className="px-5 py-2.5 bg-white text-ink hover:bg-ivory">{t.common.viewRooms}</Link>
              <Link to="/es/ubicacion-contacto" className="px-5 py-2.5 border border-white/80 text-white hover:bg-white/10">{t.common.requestInfo}</Link>
            </div>
          </div>
        </div>
      </section>

      <section ref={ref1} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div>
            <h2 className="font-display text-3xl md:text-4xl">{t.home.introTitle}</h2>
            <p className="mt-4 text-ink-light leading-relaxed">{t.home.introBody}</p>
            <p className="mt-3 text-sm text-ink-light">{t.common.noteBooking}</p>
            <div className="mt-6">
              <Link to="/es/resort" className="text-brand-deep hover:underline">{langEs('Conocer el resort →')}</Link>
            </div>
          </div>
          <img src="/images/hero/hero-01.webp" alt="Entorno natural del Valle de Orosi" className="w-full h-[420px] object-cover" width="570" height="380" loading="lazy" />
        </div>
      </section>

      <section ref={ref2} className="bg-sand">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <img src="/images/gallery/gal-24.webp" alt="Piscinas termales naturales" className="w-full h-[420px] object-cover" width="570" height="367" loading="lazy" />
            <div>
              <h2 className="font-display text-3xl md:text-4xl">{t.home.thermalTitle}</h2>
              <p className="mt-4 text-ink-light leading-relaxed">{t.home.thermalBody}</p>
              <div className="mt-6 flex gap-3">
                <Link to="/es/pase-diario" className="px-4 py-2 border border-stone hover:bg-white">Pase Diario</Link>
                <Link to="/es/spa" className="px-4 py-2 border border-stone hover:bg-white">Spa</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={ref3} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="font-display text-3xl md:text-4xl">Habitaciones</h2>
            <p className="mt-2 text-ink-light">Opciones verificadas desde el archivo oficial. Algunas imágenes/amenidades requieren confirmación.</p>
          </div>
          <Link to="/es/habitaciones" className="hidden md:inline text-brand-deep hover:underline">{t.common.viewRooms}</Link>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rooms.slice(0, 6).map((room) => (
            <article key={room.slug} className="border border-stone">
              {room.image ? (
                <img src={room.image} alt={room.nameEs} className="w-full h-48 md:h-56 object-cover object-center" width="2304" height="1536" loading="lazy" />
              ) : (
                <div className="w-full h-48 md:h-56 bg-sand flex items-center justify-center text-sm text-ink-light">Imagen por confirmar</div>
              )}
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-xl">{room.nameEs}</h3>
                  {!room.verified && <span className="text-xs text-ink-light">Por confirmar</span>}
                </div>
                <p className="mt-1 text-sm text-ink-light">{room.guestsEs} · {room.category}</p>
                <p className="mt-2 text-sm text-ink-light">{room.descEs.slice(0, 110)}{room.descEs.length > 110 ? '…' : ''}</p>
                <div className="mt-4">
                  <Link to={`/es/habitaciones/${room.slug}`} className="text-sm text-brand-deep hover:underline">{t.common.viewDetails}</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-6 md:hidden">
          <Link to="/es/habitaciones" className="text-brand-deep hover:underline">{t.common.viewRooms}</Link>
        </div>
      </section>
    </>
  )
}

function langEs(s: string) { return s }
