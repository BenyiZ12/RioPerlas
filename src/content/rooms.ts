export type Localized = { es: string; en: string }

export type Room = {
  slug: string
  name: Localized
  category: Localized
  /** Number of rooms of this type published by the resort */
  units: number
  guests: Localized
  size: Localized | null
  blurb: Localized
  amenities: Localized[]
  images: { src: string; caption: Localized }[]
}

export const rooms: Room[] = [
  {
    slug: 'standard-room',
    name: { es: 'Habitación Estándar', en: 'Standard Room' },
    category: { es: 'Habitación', en: 'Room' },
    units: 6,
    guests: { es: '2 huéspedes', en: '2 guests' },
    size: null,
    blurb: {
      es: 'Habitación de estilo colonial con la calidez del valle: dos camas queen, escritorio, ventana al jardín y acceso directo a los senderos del resort.',
      en: 'A colonial-style room with the warmth of the valley: two queen beds, a desk, a window onto the garden and direct access to the resort trails.',
    },
    amenities: [
      { es: 'Dos camas queen', en: 'Two queen beds' },
      { es: 'Baño completo con ducha', en: 'Full bathroom with shower' },
      { es: 'Minibar y cafetera', en: 'Minibar and coffee maker' },
      { es: 'TV, teléfono y wifi', en: 'TV, telephone and wifi' },
      { es: 'Caja fuerte y secador de pelo', en: 'Safe and hair dryer' },
      { es: 'Servicio de limpieza diario', en: 'Daily cleaning service' },
      { es: 'Desayuno incluido', en: 'Breakfast included' },
    ],
    images: [
      { src: '/images/rooms/standard-room', caption: { es: 'Habitación estándar', en: 'Standard room' } },
      { src: '/images/rooms/terrace-palms', caption: { es: 'Terraza con palmeras', en: 'Terrace with palm trees' } },
    ],
  },
  {
    slug: 'superior-room',
    name: { es: 'Superior Room', en: 'Superior Room' },
    category: { es: 'Habitación', en: 'Room' },
    units: 6,
    guests: { es: 'Hasta 4 huéspedes', en: 'Up to 4 guests' },
    size: null,
    blurb: {
      es: 'Habitación de cemento en estilo colonial, ubicada cerca de la recepción y el parqueo, con terraza y sala de estar. Cuenta con dos camas queen y jacuzzi en el baño.',
      en: 'A colonial-style concrete room close to reception and parking, with a terrace and a sitting area. Two queen beds and a jacuzzi in the bathroom.',
    },
    amenities: [
      { es: 'Dos camas queen', en: 'Two queen beds' },
      { es: 'Terraza con sala de estar', en: 'Terrace with sitting area' },
      { es: 'Baño con jacuzzi y ducha', en: 'Bathroom with jacuzzi and shower' },
      { es: 'Minibar refrigerado y cafetera', en: 'Refrigerated minibar and coffee maker' },
      { es: 'TV, teléfono, wifi y caja fuerte', en: 'TV, telephone, wifi and safe' },
      { es: 'Artículos de tocador de lujo', en: 'Luxury toiletries' },
      { es: 'Desayuno incluido', en: 'Breakfast included' },
    ],
    images: [
      { src: '/images/rooms/superior-room', caption: { es: 'Habitación Superior', en: 'Superior room' } },
      { src: '/images/rooms/superior-lounge', caption: { es: 'Sala de estar con mimbre', en: 'Sitting area with rattan chairs' } },
      { src: '/images/rooms/terrace-palms', caption: { es: 'Terraza con palmeras', en: 'Terrace with palm trees' } },
    ],
  },
  {
    slug: 'river-sound-suite',
    name: { es: 'River Sound Suite', en: 'River Sound Suite' },
    category: { es: 'Suite', en: 'Suite' },
    units: 34,
    guests: { es: '2 a 3 huéspedes', en: '2 to 3 guests' },
    size: null,
    blurb: {
      es: 'La categoría más amplia del resort. Suite de planta abierta con zona de estar, baño completo y terraza, pensada para quien busca espacio y silencio junto al río.',
      en: 'The most numerous category in the resort. An open-plan suite with a sitting area, full bathroom and terrace, designed for guests who want space and quiet close to the river.',
    },
    amenities: [
      { es: 'Planta abierta con zona de estar', en: 'Open plan with sitting area' },
      { es: 'Baño completo con ducha o jacuzzi', en: 'Full bathroom with shower or jacuzzi' },
      { es: 'Minibar, TV y wifi', en: 'Minibar, TV and wifi' },
      { es: 'Caja fuerte, teléfono y secador de pelo', en: 'Safe, telephone and hair dryer' },
      { es: 'Servicio de limpieza diario', en: 'Daily cleaning service' },
      { es: 'Desayuno incluido', en: 'Breakfast included' },
    ],
    images: [
      { src: '/images/rooms/suite-lounge', caption: { es: 'Zona de estar de la suite', en: 'Sitting area of the suite' } },
      { src: '/images/rooms/terrace-suite', caption: { es: 'Terraza con vista a la piscina', en: 'Terrace overlooking the pool' } },
    ],
  },
  {
    slug: 'wood-cabin',
    name: { es: 'Wood Cabin', en: 'Wood Cabin' },
    category: { es: 'Cabaña', en: 'Cabin' },
    units: 17,
    guests: { es: '2 a 4 huéspedes', en: '2 to 4 guests' },
    size: null,
    blurb: {
      es: 'Cabañas de madera con techo de madera noble y porche propio, dispersas entre los jardines de lluvia. Es la opción más cercana a la naturaleza del resort.',
      en: 'Wooden cabins with a beamed ceiling and their own porch, scattered through the rain gardens. The option closest to nature within the resort.',
    },
    amenities: [
      { es: 'Camas dobles', en: 'Double beds' },
      { es: 'Porche privado', en: 'Private porch' },
      { es: 'Baño con cubierta de madera', en: 'Bathroom with wooden vanity' },
      { es: 'Minibar, TV y wifi', en: 'Minibar, TV and wifi' },
      { es: 'Caja fuerte y secador de pelo', en: 'Safe and hair dryer' },
      { es: 'Desayuno incluido', en: 'Breakfast included' },
    ],
    images: [
      { src: '/images/rooms/wood-cabin', caption: { es: 'Interior de la cabaña de madera', en: 'Inside the wood cabin' } },
      { src: '/images/hero/cabin-porch', caption: { es: 'Porche de la cabaña', en: 'Cabin porch' } },
      { src: '/images/rooms/cabins-aerial', caption: { es: 'Cabañas entre los jardines', en: 'Cabins among the gardens' } },
      { src: '/images/rooms/cabin-bathroom', caption: { es: 'Baño de la cabaña', en: 'Cabin bathroom' } },
    ],
  },
  {
    slug: 'mountain-view-suite',
    name: { es: 'Mountain View Suite', en: 'Mountain View Suite' },
    category: { es: 'Suite', en: 'Suite' },
    units: 3,
    guests: { es: '2 a 4 huéspedes', en: '2 to 4 guests' },
    size: null,
    blurb: {
      es: 'Suites colocadas en los puntos altos del resort, con balcón privado orientado hacia el valle y las laderas del Tapantí.',
      en: 'Suites set on the higher points of the resort, with a private balcony facing the valley and the slopes of Tapantí.',
    },
    amenities: [
      { es: 'Balcón con vista panorámica', en: 'Balcony with panoramic views' },
      { es: 'Baño completo con ducha o jacuzzi', en: 'Full bathroom with shower or jacuzzi' },
      { es: 'Minibar, TV y wifi', en: 'Minibar, TV and wifi' },
      { es: 'Caja fuerte, teléfono y secador de pelo', en: 'Safe, telephone and hair dryer' },
      { es: 'Servicio de limpieza diario', en: 'Daily cleaning service' },
      { es: 'Desayuno incluido', en: 'Breakfast included' },
    ],
    images: [
      { src: '/images/rooms/mountain-view-suite', caption: { es: 'Balcón con vista a la montaña', en: 'Balcony with mountain view' } },
      { src: '/images/exp/terrace-garden', caption: { es: 'Vegetación del valle', en: 'Valley vegetation' } },
    ],
  },
  {
    slug: 'honeymoon-suite',
    name: { es: 'Honeymoon Suite', en: 'Honeymoon Suite' },
    category: { es: 'Suite', en: 'Suite' },
    units: 3,
    guests: { es: '2 huéspedes', en: '2 guests' },
    size: null,
    blurb: {
      es: 'Suite amplia y romántica con dormitorio acogedor, zona de estar interior y terraza privada sobre los jardines.',
      en: 'A spacious, romantic suite with a cosy bedroom, an interior sitting area and a private terrace above the gardens.',
    },
    amenities: [
      { es: 'Terraza privada', en: 'Private terrace' },
      { es: 'Zona de estar interior', en: 'Interior sitting area' },
      { es: 'Baño completo con jacuzzi', en: 'Full bathroom with jacuzzi' },
      { es: 'Minibar, TV y wifi', en: 'Minibar, TV and wifi' },
      { es: 'Servicio de limpieza diario', en: 'Daily cleaning service' },
      { es: 'Desayuno incluido', en: 'Breakfast included' },
    ],
    images: [
      { src: '/images/rooms/honeymoon-suite', caption: { es: 'Mesa para dos en la terraza', en: 'Table for two on the terrace' } },
      { src: '/images/rooms/villa-suite', caption: { es: 'Villa con arcos coloniales', en: 'Colonial villa with arches' } },
    ],
  },
  {
    slug: 'master-suite',
    name: { es: 'Master Suite', en: 'Master Suite' },
    category: { es: 'Suite', en: 'Suite' },
    units: 1,
    guests: { es: '4 a 6 huéspedes', en: '4 to 6 guests' },
    size: null,
    blurb: {
      es: 'Suite de dos habitaciones, ideal para familia o grupos de amigos, con ventanas en arco que miran al bosque y al valle.',
      en: 'A two-bedroom suite, ideal for families or groups of friends, with arched windows looking onto the forest and the valley.',
    },
    amenities: [
      { es: 'Dos dormitorios', en: 'Two bedrooms' },
      { es: 'Zona de estar', en: 'Sitting area' },
      { es: 'Baños completos', en: 'Full bathrooms' },
      { es: 'Minibar, TV y wifi', en: 'Minibar, TV and wifi' },
      { es: 'Caja fuerte y servicio de limpieza diario', en: 'Safe and daily cleaning service' },
      { es: 'Desayuno incluido', en: 'Breakfast included' },
    ],
    images: [
      { src: '/images/rooms/master-suite', caption: { es: 'Dormitorio principal con ventana en arco', en: 'Main bedroom with arched window' } },
      { src: '/images/rooms/terrace-suite', caption: { es: 'Terraza de la suite', en: 'Suite terrace' } },
    ],
  },
  {
    slug: 'presidential-suite',
    name: { es: 'Suite Presidencial', en: 'Presidential Suite' },
    category: { es: 'Suite', en: 'Suite' },
    units: 1,
    guests: { es: '2 a 4 huéspedes', en: '2 to 4 guests' },
    size: { es: '120 m²', en: '120 m²' },
    blurb: {
      es: 'Nuestra suite más amplia: 120 m² con una gran terraza, dormitorio king, habitación secundaria, salón comedor con bar de madera y un jacuzzi de gran tamaño en el dormitorio principal.',
      en: 'Our most spacious suite: 120 m² with a large terrace, a king bedroom, a second bedroom, a living and dining room with a wooden bar and an oversized jacuzzi in the main bedroom.',
    },
    amenities: [
      { es: 'Terraza amplia con zona de estar', en: 'Large terrace with sitting area' },
      { es: 'Dormitorio king y habitación secundaria', en: 'King bedroom and second bedroom' },
      { es: 'Jacuzzi grande y dos duchas', en: 'Oversized jacuzzi and two showers' },
      { es: 'Salón comedor con bar de madera', en: 'Living-dining room with wooden bar' },
      { es: 'Minibar, TV, wifi y caja fuerte', en: 'Minibar, TV, wifi and safe' },
      { es: 'Servicio de limpieza diario', en: 'Daily cleaning service' },
      { es: 'Desayuno incluido', en: 'Breakfast included' },
    ],
    images: [
      { src: '/images/rooms/terrace-suite', caption: { es: 'Terraza con vista a la piscina', en: 'Terrace overlooking the pool' } },
      { src: '/images/rooms/suite-lounge', caption: { es: 'Salón de la suite', en: 'Suite living room' } },
      { src: '/images/rooms/villa-suite', caption: { es: 'Villa con arcos coloniales', en: 'Colonial villa with arches' } },
    ],
  },
]

export const getRoom = (slug: string) => rooms.find((r) => r.slug === slug)
