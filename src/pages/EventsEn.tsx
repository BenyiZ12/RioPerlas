import Seo from '../components/Seo'
import { eventsEn } from '../content/events'

export default function EventsEn() {
  return (
    <>
      <Seo lang="en" title="Weddings & Events | Río Perlas Thermal Resort & Spa" description="Weddings and events at Río Perlas Thermal Resort & Spa, Orosí Valley." path="/en/weddings-events" />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <h1 className="font-display text-4xl md:text-5xl">Weddings & Events</h1>
        <p className="mt-3 text-ink-light max-w-3xl">{eventsEn.note}</p>
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <img src="/images/gallery/gal-31.webp" alt="Weddings and events" className="w-full h-64 md:h-[420px] object-cover object-center" width="570" height="428" loading="lazy" />
          <div className="grid gap-4">
            <div className="border border-stone p-5">
              <h2 className="font-display text-xl">Wedding menus</h2>
              <ul className="mt-3 divide-y divide-stone">
                <li className="flex items-center justify-between py-2 text-sm"><span className="text-ink-light">{eventsEn.weddings.option1.name} ({eventsEn.weddings.option1.note})</span><span>{eventsEn.weddings.option1.from}</span></li>
                <li className="flex items-center justify-between py-2 text-sm"><span className="text-ink-light">{eventsEn.weddings.option2.name} ({eventsEn.weddings.option2.note})</span><span>{eventsEn.weddings.option2.from}</span></li>
              </ul>
              <p className="mt-3 text-sm text-ink-light">{eventsEn.weddings.gift}</p>
            </div>
            <div className="border border-stone p-5">
              <h2 className="font-display text-xl">Venues</h2>
              <ul className="mt-3 divide-y divide-stone">
                {eventsEn.weddings.venues.map((v) => (
                  <li key={v.name} className="flex items-center justify-between py-2 text-sm"><span className="text-ink-light">{v.name}</span><span>{v.capacity}</span></li>
                ))}
              </ul>
            </div>
            <p className="text-sm text-ink-light">Request a proposal: +506 2533-3341 · info@rio-perlas.com</p>
          </div>
        </div>
      </section>
    </>
  )
}
