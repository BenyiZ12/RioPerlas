export const spaEs = {
  note: "Precios verificados desde el archivo del sitio oficial. Pueden cambiar sin previo aviso. Confirmar al momento de reservar.",
  packages: [
    { name: "Piel de seda", price: "$65" },
    { name: "Magia del fango", price: "$85" },
    { name: "Alivio del estrés", price: "$85" },
    { name: "Río Perlas Spa Day", price: "$100" },
    { name: "La magia de Irazú", price: "$125" },
  ],
  individual: [
    { name: "Manicura", price: "$23" },
    { name: "Pedicura", price: "$30" },
    { name: "Baño turco", price: "$21" },
    { name: "Sauna", price: "$21" },
    { name: "Limpieza corporal", price: "$25" },
    { name: "Hidromasaje", price: "$20" },
    { name: "Infrajet", price: "$11" },
    { name: "Limpieza con barro corporal", price: "$25" },
  ],
  facials: [
    { name: "Cosmopolita", price: "$50" },
    { name: "Limpieza facial", price: "$42" },
    { name: "Facial relax", price: "$29" },
  ],
  waxing: [
    { name: "Depilación (varios)", price: "$10–$40" },
  ],
}

export const spaEn = {
  note: "Prices verified from the official site archive. They may change without notice. Please confirm at the time of booking.",
  packages: spaEs.packages,
  individual: spaEs.individual,
  facials: spaEs.facials,
  waxing: spaEs.waxing,
}
