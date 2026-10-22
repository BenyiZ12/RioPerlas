import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 text-center">
      <h1 className="font-display text-4xl md:text-5xl">404</h1>
      <p className="mt-3 text-ink-light">Página no encontrada / Page not found</p>
      <div className="mt-6 flex justify-center gap-3">
        <Link to="/es/" className="px-4 py-2 border border-stone hover:bg-sand">Ir a inicio (ES)</Link>
        <Link to="/en/" className="px-4 py-2 border border-stone hover:bg-sand">Go to home (EN)</Link>
      </div>
    </section>
  )
}
