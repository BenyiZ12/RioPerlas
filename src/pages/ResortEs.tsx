import Seo from '../components/Seo.tsx'
import { useReveal } from '../hooks/useReveal.ts'
import { facilitiesEs } from '../content/facilities.ts'

export default function ResortEs() {
  const ref = useReveal<HTMLDivElement>()
  return (
    <>
      <Seo lang="es" title="Resort | Río Perlas Thermal Resort & Spa" description="Conozca el resort en el Valle de Orosi, Cartago, Costa Rica: piscinas termales, naturaleza, instalaciones." path="/es/resort" />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <h1 className="font-display text-4xl md:text-5xl">Resort</h1>
        <p className="mt-3 text-ink-light max-w-3xl">Río Perlas Thermal Resort & Spa se ubica en Orosí de Cartago, rodeado de bosque tropical. El complejo ofrece aguas termales naturales, habitaciones, spa, gastronomía y espacios para eventos.</p>
        <div className="mt-8 grid gap-6 lg:grid-cols-2 items-start">
          <img src="/images/hero/hero-03.webp" alt="Complejo termal del resort" className="w-full h-64 md:h-[420px] object-cover object-center" width="1600" height="1200" loading="lazy" />
          <div ref={ref} className="grid gap-4">
            {facilitiesEs.map((f) => (
              <article key={f.title} className="border border-stone p-5">
                <h2 className="font-display text-xl">{f.title}</h2>
                <p className="mt-2 text-sm text-ink-light">{f.body}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <img src="/images/facilities/recepcion.webp" alt="Recepción" className="w-full h-64 object-cover" width="570" height="380" loading="lazy" />
          <img src="/images/facilities/spa-tratamientos.webp" alt="Área de spa" className="w-full h-64 object-cover" width="570" height="380" loading="lazy" />
          <img src="/images/pages/resort.webp" alt="Entorno del resort" className="w-full h-64 object-cover" width="1170" height="780" loading="lazy" />
        </div>
      </section>
    </>
  )
}
