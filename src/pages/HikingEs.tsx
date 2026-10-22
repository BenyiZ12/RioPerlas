import Seo from '../components/Seo'

export default function HikingEs() {
  return (
    <>
      <Seo lang="es" title="Senderismo | Río Perlas Thermal Resort & Spa" description="Senderismo y naturaleza en el Valle de Orosi." path="/es/senderismo" />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <h1 className="font-display text-4xl md:text-5xl">Senderismo</h1>
        <p className="mt-3 text-ink-light max-w-3xl">El entorno del resort forma parte del Valle de Orosi, con bosque tropical y diversidad de fauna (45 especies de mamíferos, más de 400 especies de aves, 28 especies de reptiles y anfibios según el archivo oficial).</p>
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <img src="/images/hero/hero-06.webp" alt="Senderismo en el Valle de Orosi" className="w-full h-64 md:h-[420px] object-cover object-center" width="1600" height="953" loading="lazy" />
          <div className="border border-stone p-5">
            <h2 className="font-display text-xl">Información</h2>
            <p className="mt-2 text-sm text-ink-light">Señalamientos y rutas exactas no se encuentran completamente detallados en el archivo recuperado. Se recomienda consultar en recepción al momento de la visita.</p>
            <p className="mt-3 text-sm text-ink-light">Parque Nacional Tapantí se encuentra a 10–15 km (600 km²).</p>
          </div>
        </div>
      </section>
    </>
  )
}
