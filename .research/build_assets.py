"""
Río Perlas — asset pipeline.

Takes the authentic photography recovered from the official site (rio-perlas.com /
hotelrioperlas.cr, via the Internet Archive) and produces a clean, semantically named
and responsive WebP set under public/images, plus a TypeScript manifest with the
intrinsic dimensions of every asset (so the layout never jumps).

Run:  python .research/build_assets.py
"""
import json, os, shutil
from PIL import Image, ImageEnhance

ROOT = r"C:\Users\USUARIO\Desktop\Rio Perlas"
RAW = os.path.join(ROOT, ".research", "raw")
OUT = os.path.join(ROOT, "public", "images")
MANIFEST_TS = os.path.join(ROOT, "src", "content", "imageManifest.ts")

WIDTHS = [480, 800, 1200, 1800, 2400]

# name -> (source file, alt text)
ASSETS = {
    # ---- Hero -------------------------------------------------------------
    "hero/resort-lake": ("arch/images__jkit__images__136-full.jpg", "Lago con cascada natural y cabañas de Río Perlas"),
    "hero/thermal-waterfall": ("arch/images__jkit__images__13-full.jpg", "Cascada de agua termal entre rocas y vegetación"),
    "hero/thermal-pool": ("arch/images__jkit__images__21-full.jpg", "Piscina termal con camastros junto al jardín"),
    "hero/garden-pavilion": ("arch/images__jkit__images__135-full.jpg", "Pabellón del resort rodeado de gardens tropicales"),
    "hero/cabin-porch": ("arch/images__jkit__images__137-full.jpg", "Porche de madera de una cabaña con vista al jardín"),
    "hero/forest-path": ("arch/images__jkit__items__29-full.jpg", "Sendero de selva tropical dentro del resort"),
    "hero/thermal-swim": ("arch/images__jkit__items__27-full.jpg", "Piscina termal natural con rocas y borde de piedra"),
    # ---- Resort -----------------------------------------------------------
    "resort/pool-pavilion": ("pages/resort.jpg", "Piscina principal con gazebo y villas del resort"),
    "resort/entrance": ("gallery/gal-20.jpg", "Entrada de Río Perlas con el letrero del resort"),
    "resort/garden": ("gallery/gal-31.jpg", "Jardín con setos y villas de estilo colonial"),
    "resort/veranda": ("gallery/gal-38.jpg", "Veranda con arcos y puertas de madera"),
    "resort/sculpture": ("gallery/gal-46.jpg", "Escultura de piedra en los jardines del resort"),
    "resort/temple": ("gallery/gal-48.jpg", "Templo de piedra y jardín con flores del resort"),
    "resort/buddha": ("gallery/gal-49.jpg", "Estatua tallada en piedra entre la vegetación"),
    "resort/lake-view": ("gallery/gal-43.jpg", "Vista del lago, la cascada y las cabañas del resort"),
    # ---- Thermal ----------------------------------------------------------
    "thermal/waterfall": ("gallery/gal-04.jpg", "Cascada termal que fluye entre las rocas"),
    "thermal/hot-pool": ("gallery/gal-43.jpg", "Piscina termal con borde de roca y cascada"),
    "thermal/cave": ("gallery/gal-32.jpg", "Interior de la gruta termal con luz natural"),
    "thermal/loungers": ("pages/resort.jpg", "Piscina con camastros y palmeras del resort"),
    "thermal/swim": ("arch/images__jkit__items__27-full.jpg", "Baño en la piscina termal natural del resort"),
    # ---- Rooms ------------------------------------------------------------
    "rooms/master-suite": ("rooms/master.jpg", "Master Suite con cama king y ventana en arco"),
    "rooms/mountain-view-suite": ("rooms/mountain-view.jpg", "Balcón de la Mountain View Suite con vista a las palmeras"),
    "rooms/wood-cabin": ("rooms/wood-cabin.jpg", "Cabaña de madera con camas dobles y techo de madera"),
    "rooms/cabins-aerial": ("official/of-08.jpg", "Cabañas de madera del resort vistas desde el jardín"),
    "rooms/cabin-bathroom": ("official/of-09.jpg", "Baño de la cabaña con cubierta de madera y espejo"),
    "rooms/superior-room": ("official/of-05.jpg", "Habitación Superior con cama doble y ventana al jardín"),
    "rooms/superior-lounge": ("gallery/gal-18.jpg", "Sala de estar de la Habitación Superior con sillones de mimbre"),
    "rooms/standard-room": ("official/of-06.jpg", "Habitación estándar con cama doble y lámpara de lectura"),
    "rooms/honeymoon-suite": ("gallery/gal-19.jpg", "Mesa preparada para dos en la terraza de la Honeymoon Suite"),
    "rooms/villa-suite": ("official/of-03.jpg", "Villa con arcos y jardín tropical del resort"),
    "rooms/suite-lounge": ("official/of-07.jpg", "Sala con arcos, plantas y luz natural de una suite"),
    "rooms/terrace-suite": ("official/of-04.jpg", "Terraza de la suite con vista a la piscina del resort"),
    "rooms/terrace-palms": ("official/of-01.jpg", "Terraza con palmeras y jardín del resort"),
    # ---- Spa --------------------------------------------------------------
    "spa/treatment-room": ("facilities/spa-tratamientos.jpg", "Sala de tratamiento de spa con camilla y vista tropical"),
    "spa/massage": ("gallery/gal-34.jpg", "Tratamiento de masaje en la sala de spa"),
    "spa/garden-room": ("gallery/gal-38.jpg", "Galería cubierta con arcos que conecta los jardines"),
    # ---- Dining -----------------------------------------------------------
    "dining/taberna": ("gallery/gal-44.jpg", "Entrada de La Taberna del Capitán con columnas y arcos"),
    "dining/lake-view": ("gallery/gal-42.jpg", "Terraza del restaurante con vista a los jardines"),
    "dining/table-setting": ("gallery/gal-19.jpg", "Mesa preparada en la sala del restaurante con vista al jardín"),
    "dining/veranda-dining": ("gallery/gal-38.jpg", "Veranda del resort con mesas y arcos"),
    # ---- Events -----------------------------------------------------------
    "events/ceremony": ("pages/eventos.jpg", "Pareja de novios durante la ceremonia en los jardines"),
    "events/couple": ("gallery/gal-29.jpg", "Pareja de novios entre la vegetación del resort"),
    "events/chapel": ("official/of-03.jpg", "Iglesia del resort con arcos coloniales y jardín"),
    "events/reception": ("pages/eventos.jpg", "Celebración de boda junto al agua en el resort"),
    # ---- Experiences ------------------------------------------------------
    "exp/trail-waterfall": ("gallery/gal-45.jpg", "Sendero del resort que llega a la cascada"),
    "exp/forest": ("arch/images__jkit__items__29-full.jpg", "Sendero de selva con raíces y helechos"),
    "exp/quetzal": ("gallery/gal-33.jpg", "Quetzal macho descansando en un tronco en el bosque del resort"),
    "exp/bridge": ("gallery/gal-04.jpg", "Puente de madera sobre la quebrada termal"),
    "exp/terrace-garden": ("official/of-01.jpg", "Senderismo entre palmeras y gardens del resort"),
    # ---- Gallery ----------------------------------------------------------
    "gallery/pool-garden": ("arch/images__jkit__images__21-full.jpg", "Piscina termal con camastros y vegetación"),
    "gallery/temple-garden": ("gallery/gal-48.jpg", "Jardín con templo de piedra"),
    "gallery/veranda": ("gallery/gal-38.jpg", "Veranda blanca con puertas de madera"),
    "gallery/thermal-pool": ("arch/images__jkit__images__21-full.jpg", "Piscina termal con camastros"),
    "gallery/sculpture": ("gallery/gal-49.jpg", "Estatua tallada en piedra"),
}


def find_source(rel):
    for base in (RAW,):
        p = os.path.join(base, rel.replace("/", os.sep))
        if os.path.exists(p):
            return p
    return None


def main():
    if os.path.exists(OUT):
        for d in os.listdir(OUT):
            p = os.path.join(OUT, d)
            if os.path.isdir(p) and d != "brand":
                shutil.rmtree(p)
            elif os.path.isfile(p) and d not in ("brand",):
                os.remove(p)
    for d in ("brand",):
        os.makedirs(os.path.join(OUT, d), exist_ok=True)

    manifest = {}
    missing = []

    for name, (rel, alt) in ASSETS.items():
        src = find_source(rel)
        if not src:
            missing.append((name, rel))
            continue
        im = Image.open(src).convert("RGB")
        # Slight, gentle grade: reduce the oversaturated greens of the raw files and
        # add a touch of contrast so the photographs sit together as one library.
        im = ImageEnhance.Color(im).enhance(0.88)
        im = ImageEnhance.Contrast(im).enhance(1.04)
        im = ImageEnhance.Brightness(im).enhance(0.99)

        folder = os.path.dirname(name)
        os.makedirs(os.path.join(OUT, folder), exist_ok=True)
        base = os.path.basename(name)

        widths = []
        for w in WIDTHS:
            if w > im.width * 1.02:
                break
            resized = im if w == im.width else im.resize((w, round(im.height * w / im.width)), Image.LANCZOS)
            out = os.path.join(OUT, folder, f"{base}-{w}.webp")
            resized.save(out, "WEBP", quality=82, method=6)
            widths.append(w)
        if not widths:
            w = im.width
            im.save(os.path.join(OUT, folder, f"{base}-{w}.webp"), "WEBP", quality=84, method=6)
            widths.append(w)

        manifest[name] = {
            "alt": alt,
            "width": im.width,
            "height": im.height,
            "widths": widths,
        }
        print("ok", name, im.size, widths)

    # ---- Brand ------------------------------------------------------------
    brand = os.path.join(ROOT, ".research", "logo_orig.bin")
    logo_src = os.path.join(ROOT, ".research", "logo_preview.jpg")
    # The official transparent wordmark is already in public/images/brand (kept as-is).

    # favicon sizes derived from the official mark
    fav = os.path.join(OUT, "brand", "favicon.png")
    if os.path.exists(fav):
        f = Image.open(fav).convert("RGBA")
        for s in (16, 32, 48, 180):
            g = f.resize((s, s), Image.LANCZOS)
            name = "apple-touch-icon.png" if s == 180 else f"favicon-{s}.png"
            g.save(os.path.join(OUT, "brand", name))

    og_src = os.path.join(RAW, "arch", "images__jkit__images__136-full.jpg")
    if os.path.exists(og_src):
        os.makedirs(os.path.join(OUT, "og"), exist_ok=True)
        o = Image.open(og_src).convert("RGB")
        o = ImageEnhance.Color(o).enhance(0.88)
        o = o.resize((1200, 630), Image.LANCZOS)
        o.save(os.path.join(OUT, "og", "og-image.jpg"), "JPEG", quality=86)

    with open(MANIFEST_TS, "w", encoding="utf-8") as f:
        f.write("// AUTO-GENERATED by .research/build_assets.py — do not edit by hand.\n")
        f.write("export type ImageAsset = {\n  alt: string\n  width: number\n  height: number\n  widths: number[]\n}\n\n")
        f.write("export const imageManifest: Record<string, ImageAsset> = ")
        f.write(json.dumps(manifest, indent=2, ensure_ascii=False))
        f.write("\n")

    if missing:
        print("\nMISSING SOURCES:")
        for m in missing:
            print("  ", m)

    print(f"\n{len(manifest)} assets written.")


if __name__ == "__main__":
    main()
