import Seo from '../components/Seo'
import { dayPassEn } from '../content/daypass'

export default function DayPassEn() {
  return (
    <>
      <Seo lang="en" title="Day Pass | Río Perlas Thermal Resort & Spa" description="Day pass with access to thermal pools, lunch, and facility use." path="/en/day-pass" />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <h1 className="font-display text-4xl md:text-5xl">Day Pass</h1>
        <p className="mt-3 text-ink-light max-w-3xl">{dayPassEn.note}</p>
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <img src="/images/gallery/gal-47.webp" alt="Thermal pools for day pass" className="w-full h-[420px] object-cover" width="570" height="379" loading="lazy" />
          <div className="border border-stone p-5">
            <h2 className="font-display text-xl">Prices</h2>
            <ul className="mt-3 divide-y divide-stone">
              {dayPassEn.prices.map((p) => (
                <li key={p.label} className="flex items-center justify-between py-2 text-sm"><span className="text-ink-light">{p.label}</span><span>{p.price}</span></li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-ink-light">Request day availability: +506 2533-3341 · info@rio-perlas.com</p>
          </div>
        </div>
      </section>
    </>
  )
}
