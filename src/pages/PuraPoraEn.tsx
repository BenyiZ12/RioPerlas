import Seo from '../components/Seo'

export default function PuraPoraEn() {
  return (
    <>
      <Seo lang="en" title="Pura Pora | Río Perlas Thermal Resort & Spa" description="Pura Pora at Río Perlas Thermal Resort & Spa." path="/en/pura-pora" />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <h1 className="font-display text-4xl md:text-5xl">Pura Pora</h1>
        <p className="mt-3 text-ink-light max-w-3xl">Mentioned on the resort's official site. No detailed description or verified clinical references were found in the recovered archive.</p>
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <img src="/images/pages/resort.webp" alt="Resort surroundings" className="w-full h-64 md:h-[420px] object-cover object-center" width="1170" height="780" loading="lazy" />
          <div className="border border-stone p-5">
            <h2 className="font-display text-xl">Note</h2>
            <p className="mt-2 text-sm text-ink-light">No medicinal or therapeutic claims are made. Any information about Pura Pora requires direct confirmation with the resort.</p>
          </div>
        </div>
      </section>
    </>
  )
}
