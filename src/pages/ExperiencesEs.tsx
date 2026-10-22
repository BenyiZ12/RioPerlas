import Seo from '../components/Seo'

export default function ExperiencesEs() {
  return (
    <>
      <Seo lang="es" title="Experiencias | Río Perlas Thermal Resort & Spa" description="Experiencias en el Valle de Orosi: naturaleza, atracciones cercanas." path="/es/experiencias" />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <h1 className="font-display text-4xl md:text-5xl">Experiencias</h1>
        <p className="mt-3 text-ink-light max-w-3xl">El Valle de Orosi ofrece naturaleza, patrimonio y aventura. La siguiente información está basada en el archivo oficial.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <article className="border border-stone">
            <img src="/images/hero/hero-04.webp" alt="Valle de Orosi" className="w-full h-48 md:h-56 object-cover object-center" width="1600" height="1060" loading="lazy" />
            <div className="p-5">
              <h2 className="font-display text-xl">Valle de Orosi</h2>
              <p className="mt-2 text-sm text-ink-light">Rodeado de montañas y bosque. Cerca de Tapantí NP, Irazú, Turrialba, Guayabo, Jardines Lankaster e Iglesia de Orosí.</p>
            </div>
          </article>
          <article className="border border-stone">
            <img src="/images/gallery/gal-49.webp" alt="Piscinas termales" className="w-full h-48 md:h-56 object-cover object-center" width="570" height="602" loading="lazy" />
            <div className="p-5">
              <h2 className="font-display text-xl">Aguas termales</h2>
              <p className="mt-2 text-sm text-ink-light">Piscina termal, piscina fría, piscina para niños y jacuzzis.</p>
            </div>
          </article>
          <article className="border border-stone">
            <img src="/images/hero/hero-07.webp" alt="Pesca de trucha" className="w-full h-48 md:h-56 object-cover object-center" width="1600" height="1063" loading="lazy" />
            <div className="p-5">
              <h2 className="font-display text-xl">Pesca de trucha</h2>
              <p className="mt-2 text-sm text-ink-light">Pesca de trucha en el lago (según archivo oficial).</p>
            </div>
          </article>
        </div>
        <div className="mt-6">
          <p className="text-sm text-ink-light">Atracciones cercanas: Parque Nacional Tapantí (10–15 km, 600 km²), Volcán Irazú (25–57 km), Turrialba (30–50 km), Monumento Nacional Guayabo (30 km), Jardines Lankaster (9 km), Iglesia de Orosí (8 km).</p>
        </div>
      </section>
    </>
  )
}
