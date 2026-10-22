import Seo from '../components/Seo'
import { restaurantEs } from '../content/restaurant'

export default function RestaurantEs() {
  return (
    <>
      <Seo lang="es" title="Restaurante | Río Perlas Thermal Resort & Spa" description="Gastronomía costarricense en Río Perlas Thermal Resort & Spa, Valle de Orosi." path="/es/restaurante" />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <h1 className="font-display text-4xl md:text-5xl">Restaurante</h1>
        <p className="mt-3 text-ink-light max-w-3xl">{restaurantEs.note}</p>
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <img src="/images/gallery/gal-43.webp" alt="Restaurante del resort" className="w-full h-[420px] object-cover" width="570" height="340" loading="lazy" />
          <div className="grid gap-4">
            {restaurantEs.venues.map((v) => (
              <article key={v.name} className="border border-stone p-5">
                <h2 className="font-display text-xl">{v.name}</h2>
                <p className="mt-1 text-sm text-ink-light">{v.cuisine} · {v.capacity}</p>
                <p className="mt-2 text-sm text-ink-light">{v.hours}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
