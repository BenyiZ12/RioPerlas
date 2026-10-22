# `.research` — investigación, procedencia y control de calidad

Este directorio no forma parte del sitio publicado. Conserva la trazabilidad de todo lo que se
ha afirmación en el sitio web y las herramientas de control de calidad.

## 1. Origen de la información

El sitio oficial `https://www.hotelrioperlas.cr/` devolvía **HTTP 503** durante el desarrollo y
el dominio `rio-perlas.com` (que es el que publica el gestor de contenidos *Joomla* con la
plantilla *J-Kit* y el que aparece enlazado en el pie del sitio original) respondía
«Account Suspended» por alojamiento suspendido.

La fuente primaria ha sido por tanto el **archivo de Internet (Wayback Machine)** del propio
sitio oficial, con estas instantáneas de referencia:

| Página | Instantánea |
| --- | --- |
| `rio-perlas.com/es/` | 2017-10-09 |
| `rio-perlas.com/es/hotel` | 2017-10-15 |
| `rio-perlas.com/es/recorrido/restaurante` | 2019 |
| `rio-perlas.com/es/recorrido/bodas-y-eventos` | 2017-10-16 |
| `rio-perlas.com/es/recorrido/day-pass` | 2017-10-16 |
| `rio-perlas.com/es/recorrido/senderismo-en-rio-perlas` | 2024-12-04 |
| `rio-perlas.com/es/recorrido/sobre-nosotros` | 2023-12-05 |
| `rio-perlas.com/en/contact` | 2017-12-15 |
| `rio-perlas.com/en/overview/location-area` | 2025-01-20 |
| `rio-perlas.com/es/superior-room` | 2024-11-11 |
| `rio-perlas.com/es/presidential-suite` | 2022-11-28 |

El HTML archivado se conserva en `html/` y el texto extraído se puede regenerar con
`python .research/extract.py <pagina>`.

## 2. Fotografía

- `raw/` — archivos originales descargados del sitio oficial (o de sus fichas públicas de
  reservas), con `_report.txt` que indica la URL de origen de cada imagen.
- `raw/arch/` — imágenes de la plantilla *J-Kit* en su resolución completa.
- `build_assets.py` — genera `public/images/**` (WebP responsive, ajuste de color unificado) y
  `src/content/imageManifest.ts`.
- `img_manifest.json` — dimensiones de origen de cada archivo.

**No se ha utilizado ninguna fotografía de otro hotel ni de banco de imágenes.**

## 3. Control de calidad (requiere Node y Chrome)

| Script | Para qué sirve |
| --- | --- |
| `shots.mjs` | Captura de pantalla completa de cada página en escritorio (1440) y móvil (390) y recoge los errores de consola |
| `test.mjs` | Comprueba que todos los enlaces internos resuelven, que cada página tiene `<h1>`, el cambio de idioma, el menú móvil, el desplegable «Más» y la validación del formulario |
| `measure.mjs` | Detecta desbordamiento horizontal en 1440 / 1280 / 1024 / 768 / 390 px |
| `meta.mjs` | Verifica título, metadescripción, canónica, `hreflang`, Open Graph y JSON-LD |
| `imgs.mjs` / `debug.mjs` | Estado de carga y dimensiones reales de cada imagen |
| `sitemap.py` | Genera `public/sitemap.xml` con las 40 URLs y sus alternativas de idioma |
| `sheet.py` / `sheet2.py` / `sheetall.py` | Hojas de contacto para revisar la biblioteca gráfica |
| `fetch_pages.py`, `fetch2.py`, `fetch_img.py`, `fetch_img2.py` | Descarga de HTML y de imágenes del archivo de Internet |

## 4. Decisiones documentadas

- **Logotipo**: `public/images/brand/logo.png` es el archivo oficial descargado. La variante
  `logo-wordmark.png` es un recorte del mismo archivo (columnas 0–1189, filas 0–240 más el
  escudo en 0–270 × 0–283) para poder usarlo en la cabecera sin que el strapline quede
  ilegible. No se ha redibujado ni recoloreado el logotipo.
- **Paleta**: el azul `#4fa3d1` procede literalmente del logotipo oficial; los verdes y el marfil
  del entorno del Valle de Orosí.
- **Precios de spa y pase diario**: tomados de la sección de precios del sitio oficial archivado.
  Se muestran con la nota de que el resort puede actualizarlos.
- **Sin propiedades medicinales**: el resort no publica ficha técnica del agua, por lo que el
  sitio lo indica expresamente en lugar de afirmar beneficios clínicos.
- **Sin testimonios**: el sitio original mostraba reseñas de Tripadvisor; no se han reproducido
  para evitar contenido de terceros sin permiso.
