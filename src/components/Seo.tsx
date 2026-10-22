import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

type Props = {
  lang: 'es' | 'en'
  title: string
  description: string
  path: string
}

const BASE = 'https://www.rioperlasresort.example' // placeholder; update if owner provides domain

export default function Seo({ lang, title, description, path }: Props) {
  const location = useLocation()

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = title

    const setMeta = (name: string, content: string, attr: string = 'name') => {
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, name)
        document.head.appendChild(el)
      }
      el.content = content
    }

    setMeta('description', description)
    setMeta('og:title', title, 'property')
    setMeta('og:description', description, 'property')
    setMeta('og:type', 'website', 'property')
    setMeta('og:locale', lang === 'es' ? 'es_CR' : 'en_US', 'property')
    setMeta('twitter:card', 'summary_large_image')
    setMeta('twitter:title', title)
    setMeta('twitter:description', description)

    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
    if (!link) {
      link = document.createElement('link')
      link.rel = 'canonical'
      document.head.appendChild(link)
    }
    link.href = `${BASE}${path}`

    // hreflang
    const removeHreflang = () => {
      document.querySelectorAll('link[rel="alternate"][hreflang]').forEach((n) => n.remove())
    }
    removeHreflang()
    const esPath = path.replace('/en/', '/es/').replace('/en', '/es')
    const enPath = path.replace('/es/', '/en/').replace('/es', '/en')
    const addAlt = (hreflang: string, hrefPath: string) => {
      const l = document.createElement('link')
      l.rel = 'alternate'
      l.hreflang = hreflang
      l.href = `${BASE}${hrefPath.endsWith('/') ? hrefPath : hrefPath + '/'}`
      document.head.appendChild(l)
    }
    addAlt('es-CR', esPath)
    addAlt('en', enPath)
    addAlt('x-default', esPath)
  }, [lang, title, description, path, location.pathname])

  return null
}
