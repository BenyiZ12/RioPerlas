import { site } from '../content/site'
import type { Lang } from '../i18n/useI18n'

type Props = { lang: Lang }

/**
 * Structured data built exclusively from information published by the resort:
 * address, telephone, email, coordinates, room count and facilities.
 */
export default function JsonLd({ lang }: Props) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Hotel',
    '@id': `${site.origin}/#hotel`,
    name: 'Río Perlas Thermal Resort & Spa',
    alternateName: ['Hotel Rio Perlas Spa & Resort', 'Río Perlas Resort & Spa'],
    url: `${site.origin}/${lang}/`,
    logo: `${site.origin}/images/brand/logo.png`,
    image: [`${site.origin}/images/og/og-image.jpg`],
    description:
      lang === 'es'
        ? 'Hotel spa y resort de aguas termales en Orosí, Cartago, Costa Rica. 110 hectáreas de selva tropical, 65 habitaciones, piscinas termales, spa de servicio completo y gastronomía costarricense.'
        : 'Thermal spa hotel and resort in Orosí, Cartago, Costa Rica. 110 hectares of tropical rainforest, 65 rooms, thermal pools, a full-service spa and Costa Rican cuisine.',
    telephone: '+50625333341',
    email: site.contact.email,
    priceRange: '$$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Orosí de Cartago',
      addressLocality: 'Orosí',
      addressRegion: 'Cartago',
      postalCode: '95710',
      addressCountry: 'CR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: site.contact.coords.lat,
      longitude: site.contact.coords.lng,
    },
    hasMap: site.contact.mapsUrl,
    numberOfRooms: 65,
    starRating: { '@type': 'Rating', ratingValue: '5' },
    petsAllowed: false,
    checkinTime: '14:00',
    checkoutTime: '12:00',
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'Thermal pools', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Full-service spa', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Restaurant', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Poolside bar', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Convention centre', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Free wifi', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Airport shuttle', value: false },
      { '@type': 'LocationFeatureSpecification', name: 'Spa', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Bar / lounge', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Breakfast', value: true },
      { '@type': 'LocationFeatureSpecification', name: '24-hour reception', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Hiking trails', value: true },
    ],
    sameAs: site.social.map((s) => s.href),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
