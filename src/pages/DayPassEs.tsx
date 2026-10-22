import Seo from '../components/Seo'
import { dayPassEs } from '../content/daypass'

export default function DayPassEs() {
  return (
    <>
      <Seo lang="es" title="Pase Diario | Río Perlas Thermal Resort & Spa" description="Pase diario con acceso a piscinas termales, almuerzo y uso de instalaciones." path="/es/pase-diario" />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <h1 className="font-display text-4xl md:text-5xl">Pase Diario</h1>
        <p className="mt-3 text-ink-light max-w-3xl">{dayPassEs.note}</p>
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <img src="/images/gallery/gal-47.webp" alt="Piscinas termales para pase diario" className="w-full h-[420px] object-cover" width="570" height="379" loading="lazy" />
          <div className="border border-stone p-5">
            <h2 className="font-display text-xl">Precios</h2>
            <ul className="mt-3 divide-y divide-stone">
              {dayPassEs.prices.map((p) => (
                <li key={p.label} className="flex items-center justify-between py-2 text-sm"><span className="text-ink-light">{p.label}</span><span>{p.price}</span></li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-ink-light">Solicitar información para disponibilidad del día: +506 2533-3341 · info@rio-perlas.com</p>
          </div>
        </div>
      </section>
    </>
  )
}
