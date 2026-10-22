import Seo from '../components/Seo'

export default function LocationContactEs() {
  return (
    <>
      <Seo lang="es" title="Ubicación y Contacto | Río Perlas Thermal Resort & Spa" description="Ubicación, contacto y cómo llegar a Río Perlas Thermal Resort & Spa en Orosí, Cartago, Costa Rica." path="/es/ubicacion-contacto" />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <h1 className="font-display text-4xl md:text-5xl">Ubicación y Contacto</h1>
        <p className="mt-3 text-ink-light max-w-3xl">Orosí de Cartago, Provincia de Cartago, 95710, Costa Rica. Recepción 24 h.</p>
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <div className="border border-stone p-5">
            <h2 className="font-display text-xl">Contacto</h2>
            <p className="mt-2 text-sm text-ink-light">Teléfono: <a className="text-brand-deep hover:underline" href="tel:+50625333341">+506 2533-3341</a></p>
            <p className="mt-1 text-sm text-ink-light">Correo: <a className="text-brand-deep hover:underline" href="mailto:info@rio-perlas.com">info@rio-perlas.com</a></p>
            <p className="mt-1 text-sm text-ink-light">Recepción: 24 h</p>
            <p className="mt-4 text-sm text-ink-light">Las solicitudes de reserva se atienden por teléfono, WhatsApp o correo. No se procesan reservas en línea.</p>
            <p className="mt-3 text-xs text-ink-light">Nota: ICTB (visitcostarica.org) lista <span className="break-all">info.rioperlas@gmail.com</span> y una dirección ligeramente distinta. Se prioriza la información decodificada del sitio oficial (<span className="break-all">info@rio-perlas.com</span>).</p>
          </div>
          <div className="border border-stone overflow-hidden">
            <iframe title="Mapa Río Perlas Thermal Resort & Spa" src="https://maps.google.com/maps?q=9.801324,-83.886871&hl=es&z=14&output=embed" width="100%" height="420" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
        <div className="mt-6">
          <a className="text-brand-deep hover:underline" href="https://maps.google.com/?q=9.8013401,-83.8869707&z=16" target="_blank" rel="noopener noreferrer">Abrir en Google Maps</a>
        </div>
      </section>
    </>
  )
}
