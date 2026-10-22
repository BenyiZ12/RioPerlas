import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/useI18n'
import Seo from '../components/Seo'
import Img from '../components/Img'

export default function NotFound() {
  const { lang, t } = useI18n()

  return (
    <>
      <Seo
        lang={lang}
        title={t('meta.notFound.title')}
        description={t('meta.notFound.description')}
        paths={{ es: '/404', en: '/404' }}
      />
      <section className="relative isolate overflow-hidden bg-pine-950">
        <div className="absolute inset-0 opacity-45">
          <Img src="/images/hero/forest-path" alt="" sizes="100vw" className="h-full w-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-pine-950/80 to-pine-950" />
        <div className="container-luxe relative flex min-h-[70svh] flex-col items-center justify-center py-24 text-center">
          <p className="eyebrow text-aqua-500">{t('notFound.code')}</p>
          <h1 className="mt-5 font-display text-4xl leading-tight text-ivory md:text-6xl">
            {t('notFound.title')}
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-ivory/70">{t('notFound.body')}</p>
          <Link to={`/${lang}/`} className="btn btn-light mt-10">
            {t('notFound.cta')}
          </Link>
        </div>
      </section>
    </>
  )
}
