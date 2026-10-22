import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import { rooms } from '../content/rooms'

export default function RoomsEs() {
  return (
    <>
      <Seo lang="es" title="Habitaciones | Río Perlas Thermal Resort & Spa" description="Habitaciones y suites en Río Perlas Thermal Resort & Spa, Valle de Orosi, Cartago, Costa Rica." path="/es/habitaciones" />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <h1 className="font-display text-4xl md:text-5xl">Habitaciones</h1>
        <p className="mt-3 text-ink-light max-w-3xl">Información verificada desde el archivo oficial. Algunas habitaciones no cuentan con fotos verificadas y se marcan como por confirmar. Las amenidades específicas requieren confirmación del propietario.</p>
        <p className="mt-2 text-sm text-ink-light">Nota: el archivo indica 65 habitaciones en total (6 estándar, 34 River Sound, 17 cabañas, 3 Mountain View, 3 Honeymoon, 1 Master, 1 Presidencial). La cifra de ICTB (69) difiere ligeramente.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room) => (
            <article key={room.slug} className="border border-stone">
              {room.image ? (
                <img src={room.image} alt={room.nameEs} className="w-full h-56 object-cover" width="2304" height="1536" loading="lazy" />
              ) : (
                <div className="w-full h-56 bg-sand flex items-center justify-center text-sm text-ink-light">Imagen por confirmar</div>
              )}
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h2 className="font-display text-xl">{room.nameEs}</h2>
                  {!room.verified && <span className="text-xs text-ink-light">Por confirmar</span>}
                </div>
                <p className="mt-1 text-sm text-ink-light">{room.guestsEs} · {room.category}</p>
                <p className="mt-2 text-sm text-ink-light leading-relaxed">{room.descEs}</p>
                <div className="mt-4">
                  <Link to={`/es/habitaciones/${room.slug}`} className="text-sm text-brand-deep hover:underline">Ver detalles</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
