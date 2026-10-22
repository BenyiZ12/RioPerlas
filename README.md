# Río Perlas Thermal Resort &amp; Spa — sitio web

Sitio corporativo y de reservas para **Río Perlas Thermal Resort &amp; Spa**, resort de aguas
termales en Orosí de Cartago, Costa Rica. Reconstruido desde cero sobre React + TypeScript +
Vite + Tailwind CSS v4, bilingüe (español / inglés) y con fotografía propia del resort.

---

## 1. Puesta en marcha

```bash
npm install
npm run dev        # servidor de desarrollo (http://localhost:5173)
npm run build      # comprobación de tipos + build de producción en dist/
npm run preview    # sirve dist/ en http://localhost:4173
npm run lint       # ESLint (configuración plana, eslint.config.js)
npm run typecheck  # tsc --noEmit
```

El sitio es una SPA con enrutado del lado del cliente. Para que las rutas profundas
(`/es/habitaciones/wood-cabin`, `/en/...`) funcionen en producción, el servidor debe reenviar
todas las rutas a `index.html`:

- `public/_redirects` (Netlify / Cloudflare Pages)
- `vercel.json` (Vercel)

---

## 2. Identidad visual

La paleta y la tipografía se han derivado del **logotipo oficial** y del entorno real del resort.

| Token | Valor | Uso |
| --- | --- | --- |
| `pine-950 / 900 / 800` | `#0c1712` `#12211b` `#1a2f26` | Fondos oscuros, pie de página, bloques editoriales |
| `moss-500` | `#5d7a68` | Verde musgo de apoyo |
| `aqua-500 / 600 / 700` | `#4fa3d1` `#2f7ba4` `#235f81` | Azul oficial del logotipo: acentos, enlaces, CTA |
| `ivory / sand / stone` | `#fbf9f4` `#f4efe6` `#e3dccf` | Fondos claros y filetes |
| `ink / ink-soft` | `#16211c` `#4c5a52` | Texto |

Tipografías (Google Fonts, licencia OFL):

- **Cormorant Garamond** — titulares y titulares editoriales.
- **Jost** — navegación, cuerpo de texto, botones, datos.

---

## 3. Logotipo oficial

| Archivo | Contenido | Uso |
| --- | --- | --- |
| `public/images/brand/logo.png` | Lockup oficial completo (1200×283, PNG con transparencia) | Referencia, JSON-LD, favicon |
| `public/images/brand/logo-full.png` | Lockup oficial completo (webp/png) | Pie de página, uso institucional |
| `public/images/brand/logo-wordmark.png` | **Variante de marca** generada a partir del archivo oficial: mismo escudo y mismo wordmark «Río Perlas», sin la banda inferior de strapline («Hotel Spa &amp; Resort · Cartago, Costa Rica ★★★★★») | Cabecera, menú móvil, pie de página |
| `public/images/brand/favicon-16/32/48.png`, `apple-touch-icon.png` | Iconos derivados del escudo oficial | Favicon y PWA |

`logo-wordmark.png` **no es un logotipo redibujado**: es un recorte del PNG oficial (el escudo
ocupa las columnas 0–270 y el wordmark las columnas 296–1189). Se conservan proporciones,
colores, tipografía y diseño. Si el propietario prefiere la banda de strapline en la cabecera,
basta con sustituir el `src` en `src/components/Header.tsx` y `src/components/Footer.tsx` por
`/images/brand/logo.png`.

---

## 4. Fotografía

Todas las imágenes proceden del **sitio oficial del resort** (`rio-perlas.com`, alojado con el
gestor de contenidos *Joomla* y la plantilla *J-Kit*), recuperadas del archivo de Internet y
descargadas de forma verificable. Trazabilidad completa en `.research/`.

- `public/images/hero/` — cascada termal, lago con cabañas, piscina, pabellón, porche de cabaña, selva.
- `public/images/resort/` — jardín, entrada, veranda, esculturas, lago.
- `public/images/thermal/` — cascada, pileta caliente, gruta, camastros.
- `public/images/rooms/` — master, mountain view, wood cabin, superior, estándar, suites.
- `public/images/spa/`, `dining/`, `events/`, `exp/`, `gallery/` — resto del material.

Pipeline: `.research/build_assets.py` genera variantes WebP responsive (480 / 800 / 1200 / 1800 /
2400 px), aplica un ajuste de color muy leve para unificar la biblioteca y escribe
`src/content/imageManifest.ts` con las dimensiones intrínsecas de cada archivo (evita saltos de
diseño). Para regenerar los recursos:

```bash
python .research/build_assets.py
```

Las fotografías de Booking.com que identifican habitaciones concretas tienen una resolución
original de 400 px; se usan únicamente en tarjetas y galerías secundarias, nunca a tamaño completo.

---

## 5. Contenido verificado

Toda la información comercial procede del sitio oficial (páginas de resort, habitaciones, spa,
restaurante, eventos, pase diario, senderismo, ubicación y contacto) o del archivo de Internet de
esas mismas páginas. **No hay precios, servicios, horarios, testimonios ni datos de contacto
inventados.**

Datos de contacto publicados por el resort:

- Orosí de Cartago, Provincia de Cartago, 95710, Costa Rica
- Teléfono: +506 2533-3341 · Correo: info@rio-perlas.com · Recepción 24 h
- Facebook · Instagram · Tripadvisor · YouTube (enlaces en `src/content/site.ts`)

Instalaciones confirmadas: 110 hectáreas de selva tropical · 65 habitaciones (6 estándar,
34 River Sound Suite, 17 cabañas de madera, 3 Mountain View, 3 Honeymoon, 1 Master, 1 Presidencial)
· piscina termal con cascada · piscina fría · jacuzzis · piscina infantil · bar junto al agua ·
spa con sauna, vapor, baño turco e hidromasaje · La Taberna del Capitán, El Rancho y Las Loras ·
réplica de la iglesia colonial de Orosí · centro de convenciones para 150 personas ·
senderos autoguiados de 1 a 3 horas · lago con pesca de trucha.

**No se afirma ninguna propiedad medicinal del agua ni beneficio clínico**, porque el resort no
publica esa información. En su lugar, la sección de aguas termales indica de forma explícita que
no hay ficha técnica publicada.

---

## 6. Reservas y conversión

El resort no expone un motor de reservas con API pública en el sitio oficial: su canal es una
página de disponibilidad interna (`/disponibilidad`, Mini Hotel PMS) y la atención directa por
teléfono, correo y recepción 24 h.

Por eso el sitio:

1. Prioriza el **formulario de consulta**, que prepara un correo con fecha de llegada, fecha de
   salida, huéspedes y tipo de habitación hacia `info@rio-perlas.com` (sin simular una reserva
   confirmada y sin servidor de correo propio).
2. Enlaza la **disponibilidad oficial** (`site.availabilityUrl`) y el **sitio oficial**.
3. Mantiene el teléfono siempre visible: cabecera (≥ 2xl), menú móvil, barra fija inferior en
   móvil, pie de página y bloques de reserva.

> **Pendiente del propietario:** confirmar que `https://rio-perlas.com/disponibilidad` vuelve a
> estar activo — en el momento del desarrollo, el alojamiento del dominio oficial devolvía
> «Account Suspended». Si el enlace cambia, basta con actualizar `availabilityUrl` y `officialUrl`
> en `src/content/site.ts`.

---

## 7. Estructura

```
src/
  components/     Header, MobileCta, Footer, Layout, Seo, JsonLd, Img, Reveal,
                  SectionHeading, PageHero, InquiryForm, Lightbox
  content/        site.ts (marca, contacto, rutas), rooms.ts, offerings.ts,
                  imageManifest.ts (generado)
  i18n/           es.ts, en.ts (diccionarios), useI18n.ts, index.tsx (provider)
  pages/          Home, Resort, Thermal, Rooms, RoomDetail, Spa, Dining,
                  Experiences, Events, DayPass, Gallery, Location, Privacy, NotFound
```

Rutas: `/es/…` y `/en/…` con paths propios por idioma
(`/es/aguas-termales` ↔ `/en/thermal-waters`), `hreflang` y `x-default` coherentes, canónicas
por idioma y sitemap XML con las 40 URLs (`public/sitemap.xml`, generado con
`.research/sitemap.py`).

---

## 8. Accesibilidad, rendimiento y SEO

- Un único `<h1>` por página, jerarquía de encabezados correcta, skip-link y foco visible.
- Formularios con `<label>`, `aria-invalid`, `aria-describedby` y mensajes de error en español e
  inglés; el foco se traslada al primer campo inválido.
- Menú móvil como diálogo con `aria-modal`, cierre con Escape y foco visible; desplegable «Más»
  con `aria-expanded` y cierre al hacer clic fuera.
- Imágenes con `width`/`height` intrínsecos, `loading="lazy"` y `fetchpriority="high"` en la
  imagen principal; `srcset` y `sizes` en todas las respondivas.
- `prefers-reduced-motion` respetado: sin animaciones, el contenido se muestra igualmente.
- Open Graph, Twitter Card, JSON-LD `Hotel` con datos verificados, `robots.txt` y sitemap.
- Scripts de QA en `.research/` (capturas con Chrome headless, comprobación de enlaces,
  metadatos, desbordes horizontales y validación de formularios).

---

## 9. Revisión pendiente con el propietario

1. Confirmar el estado del dominio oficial y del enlace de disponibilidad.
2. Validar que la fotografía elegida para cada categoría de habitación es la correcta
   (ver `src/content/rooms.ts`, campo `images`).
3. Revisar las tarifas de spa y pase diario, que son las publicadas por el resort y pueden
   haber cambiado.
4. Si existe un canal oficial de WhatsApp, añadirlo en `src/content/site.ts`.
5. Revisar y sustituir la política de privacidad si el hotel cuenta con una aprobada por su
   asesoría legal.
