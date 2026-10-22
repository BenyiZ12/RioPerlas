import { Link, useParams } from 'react-router-dom'
import Seo from '../components/Seo'
import { rooms } from '../content/rooms'

export default function RoomDetailEn() {
  const { slug } = useParams()
  const room = rooms.find((r) => r.slug === slug)

  if (!room) {
    return (
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="font-display text-3xl">Room not found</h1>
        <Link to="/en/rooms" className="text-brand-deep hover:underline">Back to rooms</Link>
      </section>
    )
  }

  return (
    <>
      <Seo lang="en" title={`${room.nameEn} | Río Perlas Thermal Resort & Spa`} description={room.descEn} path={`/en/rooms/${room.slug}`} />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <Link to="/en/rooms" className="text-sm text-ink-light hover:text-ink">← Rooms</Link>
        <h1 className="mt-3 font-display text-4xl md:text-5xl">{room.nameEn}</h1>
        <p className="mt-2 text-ink-light">{room.guestsEn} · {room.category}</p>
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          {room.image ? (
            <img src={room.image} alt={room.nameEn} className="w-full h-[420px] object-cover" width="2304" height="1536" loading="lazy" />
          ) : (
            <div className="w-full h-[420px] bg-sand flex items-center justify-center text-ink-light">Image not verified in archive</div>
          )}
          <div>
            <p className="text-ink-light leading-relaxed">{room.descEn}</p>
            {!room.verified && <p className="mt-3 text-sm text-ink-light">Some photos or amenities are not verified. Owner confirmation required.</p>}
            <div className="mt-6 border border-stone p-5">
              <h2 className="font-display text-xl">Reservations / Information</h2>
              <p className="mt-2 text-sm text-ink-light">Requests are handled by phone, WhatsApp, or email. This site does not simulate real-time availability.</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a href="tel:+50625333341" className="px-4 py-2 border border-stone hover:bg-sand">Call +506 2533-3341</a>
                <a href="mailto:info@rio-perlas.com" className="px-4 py-2 border border-stone hover:bg-sand">Email info@rio-perlas.com</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
