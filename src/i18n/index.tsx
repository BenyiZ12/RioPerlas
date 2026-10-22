import { useMemo, type ReactNode } from 'react'
import { dictionaries, I18nContext, type I18nValue, type Lang } from './useI18n'
import es from './es'

export function I18nProvider({ lang, children }: { lang: Lang; children: ReactNode }) {
  const value = useMemo<I18nValue>(() => {
    const dict = dictionaries[lang]
    return {
      lang,
      dict,
      t: (key: string) => {
        const found = resolvePath(dict, key)
        return found ?? resolvePath(es, key) ?? key
      },
      L: (v) => (v ? v[lang] : ''),
    }
  }, [lang])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

function resolvePath(dict: Record<string, unknown>, path: string): string | undefined {
  const parts = path.split('.')
  let current: unknown = dict
  for (const part of parts) {
    if (typeof current !== 'object' || current === null) return undefined
    current = (current as Record<string, unknown>)[part]
  }
  return typeof current === 'string' ? current : undefined
}
