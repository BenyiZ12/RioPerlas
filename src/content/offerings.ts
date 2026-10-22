export type Localized = { es: string; en: string }

export type PricedItem = { name: Localized; price: string }

export const spa = {
  packages: [
    { name: { es: 'Piel de seda', en: 'Silk Skin' }, price: '$65' },
    { name: { es: 'Magia del fango', en: 'Mud Magic' }, price: '$85' },
    { name: { es: 'Alivio del estrés', en: 'Stress Relief' }, price: '$85' },
    { name: { es: 'Río Perlas Spa Day', en: 'Río Perlas Spa Day' }, price: '$100' },
    { name: { es: 'La magia de Irazú', en: 'The Magic of Irazú' }, price: '$125' },
  ] satisfies PricedItem[],
  treatments: [
    { name: { es: 'Manicura', en: 'Manicure' }, price: '$23' },
    { name: { es: 'Pedicura', en: 'Pedicure' }, price: '$30' },
    { name: { es: 'Baño turco', en: 'Turkish Bath' }, price: '$21' },
    { name: { es: 'Sauna', en: 'Sauna' }, price: '$21' },
    { name: { es: 'Limpieza corporal', en: 'Body Cleansing' }, price: '$25' },
    { name: { es: 'Hidromasaje', en: 'Hydro Massage' }, price: '$20' },
    { name: { es: 'Infrajet', en: 'Infrajet' }, price: '$11' },
    { name: { es: 'Limpieza con barro corporal', en: 'Body Mud Cleansing' }, price: '$25' },
  ] satisfies PricedItem[],
  facials: [
    { name: { es: 'Cosmopolita', en: 'Cosmopolitan' }, price: '$50' },
    { name: { es: 'Limpieza facial', en: 'Facial Cleansing' }, price: '$42' },
    { name: { es: 'Facial relax', en: 'Relax Facial' }, price: '$29' },
  ] satisfies PricedItem[],
  waxing: [{ name: { es: 'Depilación', en: 'Waxing' }, price: '$10 – $40' }] satisfies PricedItem[],
  techniques: [
    { es: 'Masajes con piedras calientes', en: 'Hot stone massages' },
    { es: 'Masajes suecos', en: 'Swedish massages' },
    { es: 'Masajes tailandeses', en: 'Thai massages' },
    { es: 'Tratamientos faciales', en: 'Facial treatments' },
    { es: 'Detox y tratamientos de rejuvenecimiento', en: 'Detox and rejuvenating treatments' },
    { es: 'Envolturas terapéuticas de barro', en: 'Therapeutic mud wraps' },
    { es: 'Aromaterapia e hidroterapia', en: 'Aromatherapy and hydrotherapy' },
  ] satisfies Localized[],
  facilities: [
    { es: 'Sauna seca sueca', en: 'Swedish dry sauna' },
    { es: 'Bañera de hidromasaje', en: 'Hydro massage bath' },
    { es: 'Baño de vapor', en: 'Steam bath' },
    { es: 'Baño turco / Khammam', en: 'Turkish bath / Khammam' },
    { es: 'Salas de tratamiento interiores', en: 'Indoor treatment rooms' },
    { es: 'Áreas de tratamiento al aire libre', en: 'Outdoor treatment areas' },
  ] satisfies Localized[],
}

export const dining = {
  venues: [
    {
      key: 'taberna',
      name: { es: 'La Taberna del Capitán', en: "La Taberna del Capitán" },
      image: '/images/dining/taberna',
      body: {
        es: 'El restaurante principal, situado cerca del lago, ofrece cocina costarricense para el desayuno, el almuerzo y la cena, con producto local: quesos, frutas orgánicas, verduras y pescado. Puede atender a más de 100 invitados.',
        en: 'The main restaurant, set close to the lake, serves Costa Rican cuisine for breakfast, lunch and dinner, with local produce: cheeses, organic fruit, vegetables and fish. It can seat more than 100 guests.',
      },
      capacity: { es: 'Más de 100 invitados', en: 'More than 100 guests' },
    },
    {
      key: 'rancho',
      name: { es: 'El Rancho', en: 'El Rancho' },
      image: '/images/dining/lake-view',
      body: {
        es: 'Segundo punto de servicio de comidas: buffet y desayuno tradicional costarricense, con un enfoque de estilo de vida saludable y producto de la tierra. Puede atender a más de 50 invitados.',
        en: 'The second dining venue: buffet and traditional Costa Rican breakfast, with a healthy-lifestyle approach and produce from the land. It can seat more than 50 guests.',
      },
      capacity: { es: 'Más de 50 invitados', en: 'More than 50 guests' },
    },
    {
      key: 'loras',
      name: { es: 'Las Loras', en: 'Las Loras' },
      image: '/images/dining/table-setting',
      body: {
        es: 'Bar de aperitivos junto a la piscina termal: refrescos, botanas y bebidas, con la montaña y el bosque como escenario.',
        en: 'A snack bar next to the thermal pool: soft drinks, snacks and beverages, with the mountains and forest as the backdrop.',
      },
      capacity: { es: 'Bar junto a la piscina', en: 'Poolside bar' },
    },
  ],
  hours: [
    { key: 'breakfast', label: { es: 'Desayuno', en: 'Breakfast' }, value: '7:30 – 10:00' },
    { key: 'lunch', label: { es: 'Almuerzo', en: 'Lunch' }, value: '12:30 – 15:00' },
    { key: 'dinner', label: { es: 'Cena', en: 'Dinner' }, value: '19:00 – 22:00' },
  ],
}

export const dayPass = {
  hours: { es: '9:00 a 21:00', en: '9:00 to 21:00' },
  prices: [
    { label: { es: 'Mayores de 18 años', en: 'Over 18 years old' }, price: '$35' },
    { label: { es: 'Menores de 18 años', en: 'Under 18 years old' }, price: '$20' },
  ],
  includes: [
    { es: 'Ingreso al complejo', en: 'Entry to the complex' },
    { es: 'Acceso a las piscinas termales', en: 'Access to the thermal pools' },
    { es: 'Almuerzo', en: 'Lunch' },
    { es: 'Uso de las instalaciones del resort', en: 'Use of the resort facilities' },
  ],
}

export const events = {
  packageIncludes: [
    { es: 'Snacks de cóctel', en: 'Cocktail snacks' },
    { es: 'Brindis con vino espumoso sin alcohol', en: 'Toast with non-alcoholic sparkling wine' },
    { es: '1 entrada, 2 carnes, 2 acompañamientos y 1 postre', en: '1 starter, 2 meats, 2 side dishes and 1 dessert' },
    { es: 'Bebidas naturales y gaseosas', en: 'Natural drinks and soft drinks' },
    { es: 'Mantelería del hotel', en: 'Hotel table linen' },
    { es: 'Prueba de menú para 2 personas', en: 'Menu tasting for 2 people' },
    { es: 'Estacionamiento', en: 'Parking' },
    { es: 'Cortesía para los novios', en: 'Courtesy for the bride and groom' },
    { es: 'Noche de bodas en el hotel', en: 'Wedding night at the hotel' },
  ],
  venues: [
    { es: 'Salón Orquídeas, para 50 a 80 invitados', en: 'Orquídeas Hall, for 50 to 80 guests' },
    { es: 'La Taberna del Capitán, para 80 a 120 invitados', en: 'La Taberna del Capitán, for 80 to 120 guests' },
    { es: 'Centro de convenciones, para hasta 150 visitantes', en: 'Convention centre, for up to 150 guests' },
    { es: 'Réplica de la iglesia colonial de Orosí, para ceremonias', en: 'Replica of the colonial Orosí church, for ceremonies' },
  ],
  minGuests: { es: 'El precio del paquete aplica con un mínimo de 50 personas.', en: 'Package pricing applies from a minimum of 50 guests.' },
}

export const experiences = {
  trails: {
    title: { es: 'Las rutas', en: 'The trails' },
    body: {
      es: 'Río Perlas ofrece varias rutas de senderismo autoguiado, sin guías, donde es posible disfrutar de piletas de agua termal natural, del río que cruza las 110 hectáreas y de numerosas áreas ideales para picnic. Una de las rutas atraviesa el río Perlas y conduce a una pequeña catarata y a un mirador panorámico. Se recomienda llegar temprano para aprovechar las vistas antes de que suban las nubes de la tarde: la humedad es constante entre los 1.200 y los 2.440 metros de elevación. La mayoría de los senderos del resort se transitan entre 1 y 3 horas.',
      en: 'Río Perlas offers several self-guided hiking routes, without guides, where guests can enjoy natural thermal pools, the river that crosses the 110 hectares and numerous areas ideal for picnics. One of the routes crosses the Perlas river and leads to a small waterfall and a panoramic lookout. It is best to arrive early to enjoy the views before the afternoon clouds roll in: the humidity is constant between 1,200 and 2,440 metres of elevation. Most of the resort trails take between 1 and 3 hours to walk.',
    },
  },
  wildlife: {
    title: { es: 'Vida silvestre', en: 'Wildlife' },
    body: {
      es: 'El resort alberga dos mundos de vida: bosque tropical montano inferior y bosque premontano, que cambian con la elevación. En el valle crecen robles, árboles de Panamá, magnolias, bromelias y orquídeas, y se registran más de 400 especies de aves —quetzales, tucancitos esmeralda, halcones, trogones y colibríes—, además de 28 especies de reptiles y anfibios. Entre la paca, el tapir, el kinkajou, el coatí, el mapache, el mono capuchino de cara blanca y el ocelote, también es posible divisar la Thysania agrippina, la mariposa más grande conocida en el continente americano.',
      en: 'The resort shelters two worlds of life: lower montane tropical rainforest and premontane forest, which change with elevation. In the valley grow oaks, Panama trees, magnolias, bromeliads and orchids, and more than 400 bird species are recorded —quetzals, emerald toucanets, hawks, trogons and hummingbirds— alongside 28 species of reptiles and amphibians. Among the pacas, tapirs, kinkajous, coatis, raccoons, white-faced capuchins and ocelots, it is also possible to spot the Thysania agrippina, the largest butterfly known in the American continent.',
    },
  },
  surroundings: {
    title: { es: 'En los alrededores', en: 'In the surroundings' },
    body: {
      es: 'El valle es un área tranquila y serena en la provincia de Cartago. A pocos kilómetros están el Parque Nacional Tapantí (15 km), el Volcán Irazú (57 km), el Volcán Turrialba (30 km), la Reserva Arqueológica Guayabo (30 km), los ríos Pacuare y Reventazón para rafting, los Jardines Lankaster (9 km) y el Valle de Ujarrás. También se ofrecen actividades como tirolesa, rafting, excursiones a plantaciones de café, rapel, ciclismo de ruta y montaña, cabalgatas y recorridos en ATV.',
      en: 'The valley is a quiet and serene area in the province of Cartago. Within a short distance are Tapantí National Park (15 km), Irazú Volcano (57 km), Turrialba Volcano (30 km), the Guayabo Archaeological Reserve (30 km), the Pacuare and Reventazón rivers for rafting, the Lankaster Gardens (9 km) and the Ujarrás Valley. Activities such as zip-lining, rafting, coffee plantation tours, rappelling, road and mountain biking, horseback riding and ATV rides are also available.',
    },
  },
}
