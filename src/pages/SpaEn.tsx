import Seo from '../components/Seo'
import { spaEn } from '../content/spa'

export default function SpaEn() {
  return (
    <>
      <Seo lang="en" title="Spa | Río Perlas Thermal Resort & Spa" description="Spa treatments at Río Perlas Thermal Resort & Spa, Orosí Valley, Costa Rica. Prices verified from archive." path="/en/spa" />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <h1 className="font-display text-4xl md:text-5xl">Spa</h1>
        <p className="mt-3 text-ink-light max-w-3xl">{spaEn.note}</p>
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <img src="/images/facilities/spa-tratamientos.webp" alt="Spa treatments" className="w-full h-[420px] object-cover" width="570" height="380" loading="lazy" />
          <div className="grid gap-6">
            <div className="border border-stone p-5">
              <h2 className="font-display text-xl">Packages</h2>
              <ul className="mt-3 divide-y divide-stone">
                {spaEn.packages.map((p) => (
                  <li key={p.name} className="flex items-center justify-between py-2 text-sm"><span className="text-ink-light">{p.name}</span><span>{p.price}</span></li>
                ))}
              </ul>
            </div>
            <div className="border border-stone p-5">
              <h2 className="font-display text-xl">Individual services</h2>
              <ul className="mt-3 divide-y divide-stone">
                {spaEn.individual.map((p) => (
                  <li key={p.name} className="flex items-center justify-between py-2 text-sm"><span className="text-ink-light">{p.name}</span><span>{p.price}</span></li>
                ))}
              </ul>
            </div>
            <div className="border border-stone p-5">
              <h2 className="font-display text-xl">Facials</h2>
              <ul className="mt-3 divide-y divide-stone">
                {spaEn.facials.map((p) => (
                  <li key={p.name} className="flex items-center justify-between py-2 text-sm"><span className="text-ink-light">{p.name}</span><span>{p.price}</span></li>
                ))}
              </ul>
            </div>
            <div className="border border-stone p-5">
              <h2 className="font-display text-xl">Waxing</h2>
              <ul className="mt-3 divide-y divide-stone">
                {spaEn.waxing.map((p) => (
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
