import { useEffect } from 'react'
import { site } from '../content/site'
import type { Lang } from '../i18n/useI18n'

type Props = {
  lang: Lang
  title: string
  description: string
  /** Path of this page in each locale, without the language prefix. */
  paths: { es: string; en: string }
  image?: string
  type?: 'website' | 'article'
}

function upsertMeta(selector: string, attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertLink(rel: string, href: string, hreflang?: string) {
  const selector = hreflang
    ? `link[rel="${rel}"][hreflang="${hreflang}"]`
    : `link[rel="${rel}"]:not([hreflang])`
  let el = document.head.querySelector<HTMLLinkElement>(selector)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    if (hreflang) el.setAttribute('hreflang', hreflang)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

export default function Seo({ lang, title, description, paths, image, type = 'website' }: Props) {
  const esUrl = `${site.origin}/es${paths.es}`
  const enUrl = `${site.origin}/en${paths.en}`
  const canonical = lang === 'es' ? esUrl : enUrl
  const ogImage = image ? `${site.origin}${image}` : `${site.origin}/images/og/og-image.jpg`

  useEffect(() => {
    document.title = title
    document.documentElement.lang = lang

    upsertMeta('meta[name="description"]', 'name', 'description', description)
    upsertMeta('meta[property="og:title"]', 'property', 'og:title', title)
    upsertMeta('meta[property="og:description"]', 'property', 'og:description', description)
    upsertMeta('meta[property="og:url"]', 'property', 'og:url', canonical)
    upsertMeta('meta[property="og:type"]', 'property', 'og:type', type)
    upsertMeta('meta[property="og:image"]', 'property', 'og:image', ogImage)
    upsertMeta('meta[property="og:locale"]', 'property', 'og:locale', lang === 'es' ? 'es_CR' : 'en_US')
    upsertMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title)
    upsertMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description)
    upsertMeta('meta[name="twitter:image"]', 'name', 'twitter:image', ogImage)

    upsertLink('canonical', canonical)
    upsertLink('alternate', esUrl, 'es')
    upsertLink('alternate', enUrl, 'en')
    upsertLink('alternate', esUrl, 'x-default')
  }, [title, description, canonical, esUrl, enUrl, lang, ogImage, type])

  return null
}
