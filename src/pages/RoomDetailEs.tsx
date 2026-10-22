import { Link, useParams } from 'react-router-dom'
import Seo from '../components/Seo'
import { rooms } from '../content/rooms'

export default function RoomDetailEs() {
  const { slug } = useParams()
  const room = rooms.find((r) => r.slug === slug)

  if (!room) {
    return (
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="font-display text-3xl">Habitación no encontrada</h1>
        <Link to="/es/habitaciones" className="text-brand-deep hover:underline">Volver a habitaciones</Link>
      </section>
    )
  }

  return (
    <>
      <Seo lang="es" title={`${room.nameEs} | Río Perlas Thermal Resort & Spa`} description={room.descEs} path={`/es/habitaciones/${room.slug}`} />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <Link to="/es/habitaciones" className="text-sm text-ink-light hover:text-ink">← Habitaciones</Link>
        <h1 className="mt-3 font-display text-4xl md:text-5xl">{room.nameEs}</h1>
        <p className="mt-2 text-ink-light">{room.guestsEs} · {room.category}</p>
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          {room.image ? (
            <img src={room.image} alt={room.nameEs} className="w-full h-[420px] object-cover" width="2304" height="1536" loading="lazy" />
          ) : (
            <div className="w-full h-[420px] bg-sand flex items-center justify-center text-ink-light">Imagen no verificada en archivo</div>
          )}
          <div>
            <p className="text-ink-light leading-relaxed">{room.descEs}</p>
            {!room.verified && <p className="mt-3 text-sm text-ink-light">Algunas fotos o amenidades no están verificadas. Requiere confirmación del propietario.</p>}
            <div className="mt-6 border border-stone p-5">
              <h2 className="font-display text-xl">Reservas / Información</h2>
              <p className="mt-2 text-sm text-ink-light">Las solicitudes se gestionan por teléfono, WhatsApp o correo. Este sitio no simula disponibilidad en tiempo real.</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a href="tel:+50625333341" className="px-4 py-2 border border-stone hover:bg-sand">Llamar +506 2533-3341</a>
                <a href="mailto:info@rio-perlas.com" className="px-4 py-2 border border-stone hover:bg-sand">Correo info@rio-perlas.com</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
