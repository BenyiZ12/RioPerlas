import Seo from '../components/Seo'
import { spaEs } from '../content/spa'

export default function SpaEs() {
  return (
    <>
      <Seo lang="es" title="Spa | Río Perlas Thermal Resort & Spa" description="Tratamientos de spa en Río Perlas Thermal Resort & Spa, Valle de Orosi, Costa Rica. Precios verificados desde archivo." path="/es/spa" />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <h1 className="font-display text-4xl md:text-5xl">Spa</h1>
        <p className="mt-3 text-ink-light max-w-3xl">{spaEs.note}</p>
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <img src="/images/facilities/spa-tratamientos.webp" alt="Tratamientos de spa" className="w-full h-64 md:h-[420px] object-cover object-center" width="570" height="380" loading="lazy" />
          <div className="grid gap-6">
            <div className="border border-stone p-5">
              <h2 className="font-display text-xl">Paquetes</h2>
              <ul className="mt-3 divide-y divide-stone">
                {spaEs.packages.map((p) => (
                  <li key={p.name} className="flex items-center justify-between py-2 text-sm"><span className="text-ink-light">{p.name}</span><span>{p.price}</span></li>
                ))}
              </ul>
            </div>
            <div className="border border-stone p-5">
              <h2 className="font-display text-xl">Servicios individuales</h2>
              <ul className="mt-3 divide-y divide-stone">
                {spaEs.individual.map((p) => (
                  <li key={p.name} className="flex items-center justify-between py-2 text-sm"><span className="text-ink-light">{p.name}</span><span>{p.price}</span></li>
                ))}
              </ul>
            </div>
            <div className="border border-stone p-5">
              <h2 className="font-display text-xl">Faciales</h2>
              <ul className="mt-3 divide-y divide-stone">
                {spaEs.facials.map((p) => (
                  <li key={p.name} className="flex items-center justify-between py-2 text-sm"><span className="text-ink-light">{p.name}</span><span>{p.price}</span></li>
                ))}
              </ul>
            </div>
            <div className="border border-stone p-5">
              <h2 className="font-display text-xl">Depilación</h2>
              <ul className="mt-3 divide-y divide-stone">
                {spaEs.waxing.map((p) => (
                  <li key={p.name} className="flex items-center justify-between py-2 text-sm"><span className="text-ink-light">{p.name}</span><span>{p.price}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
