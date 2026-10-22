import Seo from '../components/Seo'

export default function LocationContactEn() {
  return (
    <>
      <Seo lang="en" title="Location & Contact | Río Perlas Thermal Resort & Spa" description="Location, contact and directions to Río Perlas Thermal Resort & Spa in Orosí, Cartago, Costa Rica." path="/en/location-contact" />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <h1 className="font-display text-4xl md:text-5xl">Location & Contact</h1>
        <p className="mt-3 text-ink-light max-w-3xl">Orosí de Cartago, Cartago Province, 95710, Costa Rica. Reception 24 h.</p>
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <div className="border border-stone p-5">
            <h2 className="font-display text-xl">Contact</h2>
            <p className="mt-2 text-sm text-ink-light">Phone: <a className="text-brand-deep hover:underline" href="tel:+50625333341">+506 2533-3341</a></p>
            <p className="mt-1 text-sm text-ink-light">Email: <a className="text-brand-deep hover:underline" href="mailto:info@rio-perlas.com">info@rio-perlas.com</a></p>
            <p className="mt-1 text-sm text-ink-light">Reception: 24 h</p>
            <p className="mt-4 text-sm text-ink-light">Reservation requests are handled by phone, WhatsApp, or email. No online bookings are processed.</p>
            <p className="mt-3 text-xs text-ink-light">Note: ICTB (visitcostarica.org) lists <span className="break-all">info.rioperlas@gmail.com</span> and a slightly different address. We prioritize information decoded from the official site (<span className="break-all">info@rio-perlas.com</span>).</p>
          </div>
          <div className="border border-stone overflow-hidden">
            <iframe title="Map Río Perlas Thermal Resort & Spa" src="https://maps.google.com/maps?q=9.801324,-83.886871&hl=en&z=14&output=embed" width="100%" height="420" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
        <div className="mt-6">
          <a className="text-brand-deep hover:underline" href="https://maps.google.com/?q=9.8013401,-83.8869707&z=16" target="_blank" rel="noopener noreferrer">Open in Google Maps</a>
        </div>
      </section>
    </>
  )
}
