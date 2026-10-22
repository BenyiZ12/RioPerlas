import Seo from '../components/Seo'
import { eventsEs } from '../content/events'

export default function EventsEs() {
  return (
    <>
      <Seo lang="es" title="Bodas y Eventos | Río Perlas Thermal Resort & Spa" description="Bodas y eventos en Río Perlas Thermal Resort & Spa, Valle de Orosi." path="/es/bodas-y-eventos" />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <h1 className="font-display text-4xl md:text-5xl">Bodas y Eventos</h1>
        <p className="mt-3 text-ink-light max-w-3xl">{eventsEs.note}</p>
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <img src="/images/gallery/gal-31.webp" alt="Bodas y eventos" className="w-full h-[420px] object-cover" width="570" height="428" loading="lazy" />
          <div className="grid gap-4">
            <div className="border border-stone p-5">
              <h2 className="font-display text-xl">Menú de bodas</h2>
              <ul className="mt-3 divide-y divide-stone">
                <li className="flex items-center justify-between py-2 text-sm"><span className="text-ink-light">{eventsEs.weddings.option1.name} ({eventsEs.weddings.option1.note})</span><span>{eventsEs.weddings.option1.from}</span></li>
                <li className="flex items-center justify-between py-2 text-sm"><span className="text-ink-light">{eventsEs.weddings.option2.name} ({eventsEs.weddings.option2.note})</span><span>{eventsEs.weddings.option2.from}</span></li>
              </ul>
              <p className="mt-3 text-sm text-ink-light">{eventsEs.weddings.gift}</p>
            </div>
            <div className="border border-stone p-5">
              <h2 className="font-display text-xl">Salones</h2>
              <ul className="mt-3 divide-y divide-stone">
                {eventsEs.weddings.venues.map((v) => (
                  <li key={v.name} className="flex items-center justify-between py-2 text-sm"><span className="text-ink-light">{v.name}</span><span>{v.capacity}</span></li>
                ))}
              </ul>
            </div>
            <p className="text-sm text-ink-light">Solicitar propuesta: +506 2533-3341 · info@rio-perlas.com</p>
          </div>
        </div>
      </section>
    </>
  )
}
