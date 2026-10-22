import { imageManifest } from '../content/imageManifest'

type Props = {
  /** Manifest key path without extension, e.g. "/images/hero/resort-lake" */
  src: string
  alt: string
  className?: string
  /** Responsive sizes attribute */
  sizes?: string
  /** Load eagerly with high priority (above-the-fold images) */
  priority?: boolean
  /** object-position override */
  position?: string
  width?: number
  height?: number
}

function keyFrom(src: string) {
  return src.replace(/^\/images\//, '').replace(/\.(webp|jpg|png)$/, '')
}

export default function Img({
  src,
  alt,
  className = '',
  sizes = '100vw',
  priority = false,
  position,
  width,
  height,
}: Props) {
  const key = keyFrom(src)
  const asset = imageManifest[key]
  const widths = asset?.widths ?? []
  const srcSet = widths.length
    ? widths.map((w) => `/images/${key}-${w}.webp ${w}w`).join(', ')
    : undefined
  const fallback = widths.length
    ? `/images/${key}-${widths[widths.length - 1]}.webp`
    : `/images/${key}.webp`

  return (
    <img
      src={fallback}
      srcSet={srcSet}
      sizes={srcSet ? sizes : undefined}
      alt={alt}
      className={className}
      width={width ?? asset?.width}
      height={height ?? asset?.height}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding={priority ? 'sync' : 'async'}
      style={position ? { objectPosition: position } : undefined}
    />
  )
}
