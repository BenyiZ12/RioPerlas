import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/useI18n'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { site } from '../content/site'

export default function Privacy() {
  const { lang, t } = useI18n()

  return (
    <>
      <Seo
        lang={lang}
        title={t('meta.privacy.title')}
        description={t('meta.privacy.description')}
        paths={{ es: '/privacidad', en: '/privacy' }}
      />
      <PageHero
        eyebrow={t('footer.privacy')}
        title={t('privacy.title')}
        image="/images/resort/garden"
        imageAlt="Jardines de Río Perlas en el Valle de Orosí"
        variant="split"
      />

      <section className="container-luxe py-20 md:py-24">
        <div className="max-w-3xl space-y-10 text-sm leading-relaxed text-ink-soft md:text-[0.95rem]">
          {(['a', 'b', 'c', 'd'] as const).map((k, i) => (
            <Reveal key={k} delay={i % 2}>
              <section>
                <h2 className="font-display text-2xl text-pine-900">{t(`privacy.${k}.title`)}</h2>
                <p className="mt-4">{t(`privacy.${k}.body`)}</p>
              </section>
            </Reveal>
          ))}

          <Reveal>
            <div className="border-t border-stone pt-8">
              <h2 className="font-display text-2xl text-pine-900">{t('privacy.contact.title')}</h2>
              <p className="mt-4">{t('privacy.contact.body')}</p>
              <p className="mt-4">
                <a href={`mailto:${site.contact.email}`} className="link-rule text-pine-800">
                  {site.contact.email}
                </a>
              </p>
              <p className="mt-6">
                <Link to={`/${lang}/ubicacion`} className="link-rule text-pine-800">
                  {t('nav.location')}
                </Link>
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
