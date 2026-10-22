import Seo from '../components/Seo'

export default function HikingEn() {
  return (
    <>
      <Seo lang="en" title="Hiking | Río Perlas Thermal Resort & Spa" description="Hiking and nature in the Orosí Valley." path="/en/hiking" />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <h1 className="font-display text-4xl md:text-5xl">Hiking</h1>
        <p className="mt-3 text-ink-light max-w-3xl">The resort is set in the Orosí Valley with tropical forest and wildlife (45 mammal species, over 400 bird species, 28 reptile and amphibian species per the official archive).</p>
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <img src="/images/hero/hero-06.webp" alt="Hiking in the Orosí Valley" className="w-full h-64 md:h-[420px] object-cover object-center" width="1600" height="953" loading="lazy" />
          <div className="border border-stone p-5">
            <h2 className="font-display text-xl">Information</h2>
            <p className="mt-2 text-sm text-ink-light">Exact trail maps and routes were not fully detailed in the recovered archive. Please check with reception on site.</p>
            <p className="mt-3 text-sm text-ink-light">Tapantí National Park is 10–15 km away (600 km²).</p>
          </div>
        </div>
      </section>
    </>
  )
}
