export type NavItem = {
  key: string
  /** locale-aware path (relative to the language prefix) */
  paths: { es: string; en: string }
}

export const site = {
  name: 'Río Perlas Thermal Resort & Spa',
  shortName: 'Río Perlas',
  domain: 'www.rio-perlas.com',
  origin: 'https://www.rio-perlas.com',
  logo: '/images/brand/logo.png',
  logoFull: '/images/brand/logo-full.png',
  /** Official booking/availability page published by the resort (Mini Hotel PMS) */
  availabilityUrl: 'https://rio-perlas.com/disponibilidad',
  officialUrl: 'https://rio-perlas.com/',
  contact: {
    phoneDisplay: '+506 2533 3341',
    phoneHref: 'tel:+50625333341',
    email: 'info@rio-perlas.com',
    addressEs: 'Orosí de Cartago, Provincia de Cartago, 95710, Costa Rica',
    addressEn: 'Orosi de Cartago, Cartago Province, 95710, Costa Rica',
    reception: '24 h',
    coords: { lat: 9.801324, lng: -83.886871 },
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Rio%20Perlas%20Thermal%20Resort%20%26%20Spa%2C%20Orosi%2C%20Cartago%2C%20Costa%20Rica',
    mapsEmbed:
      'https://maps.google.com/maps?q=9.801324,-83.886871&hl=es&z=13&output=embed',
  },
  social: [
    { key: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/hotspringsrioperlas/' },
    { key: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/hotel_rio_perlas/' },
    {
      key: 'tripadvisor',
      label: 'Tripadvisor',
      href: 'https://www.tripadvisor.com.ar/Hotel_Review-g309231-d300736-Reviews-Hotel_Rio_Perlas_Spa_Resort_Casino-Cartago_Province_of_Cartago.html',
    },
    { key: 'youtube', label: 'YouTube', href: 'https://www.youtube.com/watch?v=QuDOSGVY7mE' },
  ],
} as const

export const navItems: NavItem[] = [
  { key: 'home', paths: { es: '/', en: '/' } },
  { key: 'resort', paths: { es: '/resort', en: '/resort' } },
  { key: 'rooms', paths: { es: '/habitaciones', en: '/rooms' } },
  { key: 'thermal', paths: { es: '/aguas-termales', en: '/thermal-waters' } },
  { key: 'spa', paths: { es: '/spa', en: '/spa' } },
  { key: 'dining', paths: { es: '/gastronomia', en: '/dining' } },
  { key: 'experiences', paths: { es: '/experiencias', en: '/experiences' } },
  { key: 'events', paths: { es: '/eventos', en: '/events' } },
  { key: 'dayPass', paths: { es: '/pase-diario', en: '/day-pass' } },
  { key: 'gallery', paths: { es: '/galeria', en: '/gallery' } },
  { key: 'location', paths: { es: '/ubicacion', en: '/location' } },
]

/** Contact page path per locale (holds the reservation enquiry form). */
export const contactPath = { es: '/ubicacion', en: '/location' }

/** Rooms listing path per locale. */
export const roomsPath = { es: '/habitaciones', en: '/rooms' }

/** Canonical route path of every page, per locale. */
export const routePaths = {
  home: { es: '/', en: '/' },
  resort: { es: '/resort', en: '/resort' },
  thermal: { es: '/aguas-termales', en: '/thermal-waters' },
  rooms: { es: '/habitaciones', en: '/rooms' },
  spa: { es: '/spa', en: '/spa' },
  dining: { es: '/gastronomia', en: '/dining' },
  experiences: { es: '/experiencias', en: '/experiences' },
  events: { es: '/eventos', en: '/events' },
  dayPass: { es: '/pase-diario', en: '/day-pass' },
  gallery: { es: '/galeria', en: '/gallery' },
  location: { es: '/ubicacion', en: '/location' },
} as const

/** Maps a Spanish path to its English counterpart, used by the language switcher. */
export const pathTranslations: Record<string, string> = Object.fromEntries(
  navItems.map((i) => [i.paths.es, i.paths.en]),
)

export const reversePathTranslations: Record<string, string> = Object.fromEntries(
  navItems.map((i) => [i.paths.en, i.paths.es]),
)

/** Keeps the visitor on the same page when switching language. */
export function translatePath(pathname: string, from: 'es' | 'en', to: 'es' | 'en'): string {
  const rest = pathname.replace(/^\/(es|en)/, '') || '/'
  if (from === to) return rest
  const map = from === 'es' ? pathTranslations : reversePathTranslations
  const segments = rest.split('/').filter(Boolean)
  if (segments.length === 0) return '/'
  const mapped = map[`/${segments[0]}`]
  if (!mapped) return rest
  const tail = segments.slice(1)
  const head = mapped === '/' ? '' : mapped.replace(/^\//, '')
  return '/' + [head, ...tail].filter(Boolean).join('/')
}

/** Items shown directly in the desktop bar; the rest live under “Más”. */
export const primaryNavKeys = ['resort', 'rooms', 'thermal', 'spa', 'dining', 'experiences']
export const secondaryNavKeys = ['events', 'dayPass', 'gallery', 'location']
