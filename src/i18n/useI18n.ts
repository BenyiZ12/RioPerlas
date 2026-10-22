import { createContext, useContext } from 'react'
import es from './es'
import en from './en'
import type { Dict } from './es'

export type Lang = 'es' | 'en'

export const dictionaries: Record<Lang, Dict> = { es, en }

export type I18nValue = {
  lang: Lang
  dict: Dict
  /** Translate a dotted key, falling back to Spanish and then to the key itself. */
  t: (key: string) => string
  /** Localized helper for content objects shaped as { es, en }. */
  L: (value: { es: string; en: string } | undefined | null) => string
}

export const I18nContext = createContext<I18nValue | null>(null)

export function useI18n(): I18nValue {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used inside <I18nProvider>')
  return ctx
}
