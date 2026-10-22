import Seo from '../components/Seo'

export default function ExperiencesEn() {
  return (
    <>
      <Seo lang="en" title="Experiences | Río Perlas Thermal Resort & Spa" description="Experiences in the Orosí Valley: nature, nearby attractions." path="/en/experiences" />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <h1 className="font-display text-4xl md:text-5xl">Experiences</h1>
        <p className="mt-3 text-ink-light max-w-3xl">The Orosí Valley offers nature, heritage, and adventure. Information based on the official archive.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <article className="border border-stone">
            <img src="/images/hero/hero-04.webp" alt="Orosí Valley" className="w-full h-56 object-cover" width="1600" height="1060" loading="lazy" />
            <div className="p-5">
              <h2 className="font-display text-xl">Orosí Valley</h2>
              <p className="mt-2 text-sm text-ink-light">Mountains and forest. Near Tapantí NP, Irazú, Turrialba, Guayabo, Lankaster Gardens, and Orosí Church.</p>
            </div>
          </article>
          <article className="border border-stone">
            <img src="/images/gallery/gal-49.webp" alt="Thermal pools" className="w-full h-56 object-cover" width="570" height="602" loading="lazy" />
            <div className="p-5">
              <h2 className="font-display text-xl">Hot springs</h2>
              <p className="mt-2 text-sm text-ink-light">Hot pool, cold pool, children's pool, and jacuzzis.</p>
            </div>
          </article>
          <article className="border border-stone">
            <img src="/images/hero/hero-07.webp" alt="Trout fishing" className="w-full h-56 object-cover" width="1600" height="1063" loading="lazy" />
            <div className="p-5">
              <h2 className="font-display text-xl">Trout fishing</h2>
              <p className="mt-2 text-sm text-ink-light">Trout fishing in the lake (per official archive).</p>
            </div>
          </article>
        </div>
        <div className="mt-6">
          <p className="text-sm text-ink-light">Nearby: Tapantí National Park (10–15 km, 600 km²), Irazú Volcano (25–57 km), Turrialba (30–50 km), Guayabo National Monument (30 km), Lankaster Botanical Gardens (9 km), Orosí Church (8 km).</p>
        </div>
      </section>
    </>
  )
}
