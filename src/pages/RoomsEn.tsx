import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import { rooms } from '../content/rooms'

export default function RoomsEn() {
  return (
    <>
      <Seo lang="en" title="Rooms | Río Perlas Thermal Resort & Spa" description="Rooms and suites at Río Perlas Thermal Resort & Spa, Orosí Valley, Cartago, Costa Rica." path="/en/rooms" />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <h1 className="font-display text-4xl md:text-5xl">Rooms</h1>
        <p className="mt-3 text-ink-light max-w-3xl">Information verified from the official archive. Some rooms have no verified photos and are marked as to confirm. Specific amenities require owner confirmation.</p>
        <p className="mt-2 text-sm text-ink-light">Note: the archive indicates 65 rooms total (6 standard, 34 River Sound, 17 cabins, 3 Mountain View, 3 Honeymoon, 1 Master, 1 Presidential). ICTB lists 69 (slight difference).</p>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room) => (
            <article key={room.slug} className="border border-stone">
              {room.image ? (
                <img src={room.image} alt={room.nameEn} className="w-full h-48 md:h-56 object-cover object-center" width="2304" height="1536" loading="lazy" />
              ) : (
                <div className="w-full h-48 md:h-56 bg-sand flex items-center justify-center text-sm text-ink-light">Image to confirm</div>
              )}
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h2 className="font-display text-xl">{room.nameEn}</h2>
                  {!room.verified && <span className="text-xs text-ink-light">To confirm</span>}
                </div>
                <p className="mt-1 text-sm text-ink-light">{room.guestsEn} · {room.category}</p>
                <p className="mt-2 text-sm text-ink-light leading-relaxed">{room.descEn}</p>
                <div className="mt-4">
                  <Link to={`/en/rooms/${room.slug}`} className="text-sm text-brand-deep hover:underline">View details</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
