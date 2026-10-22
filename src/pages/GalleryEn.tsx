import { useState } from 'react'
import Seo from '../components/Seo'
import { gallery } from '../content/gallery'

export default function GalleryEn() {
  const [active, setActive] = useState<number | null>(null)
  const item = active !== null ? gallery[active] : null

  return (
    <>
      <Seo lang="en" title="Gallery | Río Perlas Thermal Resort & Spa" description="Photo gallery of Río Perlas Thermal Resort & Spa, Orosí Valley." path="/en/gallery" />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <h1 className="font-display text-4xl md:text-5xl">Gallery</h1>
        <p className="mt-3 text-ink-light max-w-3xl">Images recovered from the resort's official archive. Captions based on original site lightbox titles.</p>
        <div className="mt-8 columns-1 sm:columns-2 lg:columns-3 gap-4">
          {gallery.map((g, idx) => (
            <button key={g.src} onClick={() => setActive(idx)} className="mb-4 w-full break-inside-avoid border border-stone overflow-hidden">
              <img src={g.src} alt={g.altEn} className="w-full h-auto" loading="lazy" />
            </button>
          ))}
        </div>
      </section>
      {item && (
        <div className="fixed inset-0 bg-black/80 z-[60] flex items-center justify-center p-4" role="dialog" aria-modal="true" onClick={() => setActive(null)}>
          <button className="absolute top-4 right-4 text-white text-sm" onClick={() => setActive(null)}>Close</button>
          <img src={item.src} alt={item.altEn} className="max-h-[90vh] max-w-[90vw] object-contain" />
        </div>
      )}
    </>
  )
}
