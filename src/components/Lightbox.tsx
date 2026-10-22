import { useCallback, useEffect } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import Img from './Img'
import { useI18n } from '../i18n/useI18n'

export type LightboxItem = { src: string; alt: string }

type Props = {
  items: LightboxItem[]
  index: number | null
  onClose: () => void
  onIndexChange: (index: number) => void
}

export default function Lightbox({ items, index, onClose, onIndexChange }: Props) {
  const { t } = useI18n()
  const open = index !== null

  const next = useCallback(() => {
    if (index === null) return
    onIndexChange((index + 1) % items.length)
  }, [index, items.length, onIndexChange])

  const prev = useCallback(() => {
    if (index === null) return
    onIndexChange((index - 1 + items.length) % items.length)
  }, [index, items.length, onIndexChange])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, next, prev, onClose])

  if (index === null) return null
  const item = items[index]

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-pine-950/95 p-4 md:p-10"
      role="dialog"
      aria-modal="true"
      aria-label={item.alt}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center border border-ivory/25 text-ivory transition-colors hover:bg-ivory/10 md:right-6 md:top-6"
        aria-label={t('common.closeGallery')}
      >
        <X size={20} strokeWidth={1.3} />
      </button>

      <button
        type="button"
        onClick={prev}
        className="absolute left-2 z-10 flex h-11 w-11 items-center justify-center border border-ivory/25 text-ivory transition-colors hover:bg-ivory/10 md:left-6"
        aria-label={t('common.prevImage')}
      >
        <ChevronLeft size={20} strokeWidth={1.3} />
      </button>

      <figure className="flex max-h-full max-w-5xl flex-col items-center">
        <Img
          src={item.src}
          alt={item.alt}
          priority
          sizes="(max-width: 768px) 92vw, 80vw"
          className="max-h-[78vh] w-auto object-contain"
        />
        <figcaption className="mt-5 max-w-xl text-center text-xs leading-relaxed text-ivory/70">
          {item.alt}
        </figcaption>
      </figure>

      <button
        type="button"
        onClick={next}
        className="absolute right-2 z-10 flex h-11 w-11 items-center justify-center border border-ivory/25 text-ivory transition-colors hover:bg-ivory/10 md:right-6"
        aria-label={t('common.nextImage')}
      >
        <ChevronRight size={20} strokeWidth={1.3} />
      </button>
    </div>
  )
}
