import { useEffect } from 'react'

type Props = {
  lang: 'es' | 'en'
  path: string
}

export default function JsonLdHotel({ lang }: Props) {
  useEffect(() => {
    const id = 'jsonld-hotel'
    let el = document.getElementById(id) as HTMLScriptElement | null
    if (el) el.remove()

    const data = {
      '@context': 'https://schema.org',
      '@type': 'Hotel',
      name: 'Río Perlas Thermal Resort & Spa',
      description: lang === 'es'
        ? 'Resort termal con aguas termales naturales en el Valle de Orosi, Cartago, Costa Rica.'
        : 'Thermal resort with natural hot springs in the Orosi Valley, Cartago, Costa Rica.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Orosí de Cartago',
        addressLocality: 'Orosí',
        addressRegion: 'Cartago',
        postalCode: '95710',
        addressCountry: 'CR',
      },
      telephone: '+506 2533-3341',
      email: 'info@rio-perlas.com',
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 9.8013401,
        longitude: -83.8869707,
      },
      amenityFeature: [
        { '@type': 'LocationFeatureSpecification', name: lang === 'es' ? 'Piscinas termales' : 'Thermal pools', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Spa', value: true },
        { '@type': 'LocationFeatureSpecification', name: lang === 'es' ? 'Restaurante' : 'Restaurant', value: true },
      ],
    }

    el = document.createElement('script')
    el.type = 'application/ld+json'
    el.id = id
    el.textContent = JSON.stringify(data)
    document.head.appendChild(el)
  }, [lang])

  return null
}
