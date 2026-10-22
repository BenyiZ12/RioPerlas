import Seo from '../components/Seo'

export default function PuraPoraEs() {
  return (
    <>
      <Seo lang="es" title="Pura Pora | Río Perlas Thermal Resort & Spa" description="Pura Pora en Río Perlas Thermal Resort & Spa." path="/es/pura-pora" />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <h1 className="font-display text-4xl md:text-5xl">Pura Pora</h1>
        <p className="mt-3 text-ink-light max-w-3xl">Menciónada en el sitio oficial del resort. No se encontraron descripciones detalladas ni referencias clínicas verificadas en el archivo recuperado.</p>
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <img src="/images/pages/resort.webp" alt="Entorno del resort" className="w-full h-64 md:h-[420px] object-cover object-center" width="1170" height="780" loading="lazy" />
          <div className="border border-stone p-5">
            <h2 className="font-display text-xl">Nota</h2>
            <p className="mt-2 text-sm text-ink-light">No se hacen afirmaciones medicinales o terapéuticas. Cualquier información sobre Pura Pora requiere confirmación directa con el resort.</p>
          </div>
        </div>
      </section>
    </>
  )
}
