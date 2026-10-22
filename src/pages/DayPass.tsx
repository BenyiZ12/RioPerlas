import { Link } from 'react-router-dom'
import { ArrowRight, Check, Clock } from 'lucide-react'
import { useI18n } from '../i18n/useI18n'
import { routePaths } from '../content/site'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import Img from '../components/Img'
import InquiryForm from '../components/InquiryForm'
import { dayPass } from '../content/offerings'

export default function DayPass() {
  const { lang, t } = useI18n()

  return (
    <>
      <Seo
        lang={lang}
        title={t('meta.dayPass.title')}
        description={t('meta.dayPass.description')}
        paths={routePaths.dayPass}
      />
      <PageHero
        eyebrow={t('dayPass.eyebrow')}
        title={t('dayPass.title')}
        intro={t('dayPass.intro')}
        image="/images/hero/thermal-pool"
        imageAlt="Piscina termal del resort con camastros y vegetación tropical"
      />

      <section className="container-luxe py-20 md:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <h2 className="font-display text-3xl leading-[1.12] text-pine-900 md:text-[2.25rem]">
              {t('dayPass.includes')}
            </h2>
            <ul className="mt-8 space-y-3 text-sm text-ink-soft">
              {dayPass.includes.map((item) => (
                <li key={item.es} className="flex items-start gap-3 border-b border-stone pb-3">
                  <Check size={14} strokeWidth={1.5} className="mt-0.5 shrink-0 text-aqua-700" aria-hidden="true" />
                  {item[lang]}
                </li>
              ))}
            </ul>

            <div className="mt-10 border border-stone bg-sand p-7">
              <p className="flex items-center gap-3 text-[0.7rem] tracking-[0.18em] uppercase text-ink-soft">
                <Clock size={14} strokeWidth={1.3} className="text-aqua-700" aria-hidden="true" />
                {t('dayPass.hours')}
              </p>
              <p className="mt-3 font-display text-3xl text-pine-900">{dayPass.hours[lang]}</p>

              <ul className="mt-7 space-y-3 border-t border-stone pt-5">
                {dayPass.prices.map((p) => (
                  <li key={p.label.en} className="flex items-baseline justify-between gap-4 text-sm">
                    <span className="text-ink-soft">{p.label[lang]}</span>
                    <span className="font-display text-xl text-pine-800">{p.price}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-xs leading-relaxed text-ink-soft">{t('dayPass.note')}</p>
            </div>
          </Reveal>

          <Reveal delay={1} className="lg:col-span-7">
            <Img
              src="/images/gallery/thermal-pool"
              alt="Piscina termal de Río Perlas con camastros y vegetación"
              sizes="(max-width: 1024px) 92vw, 56vw"
              className="aspect-[4/3] w-full object-cover"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-sand" id="consulta">
        <div className="container-luxe grid gap-12 py-20 md:py-24 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-4">
            <h2 className="font-display text-3xl leading-[1.12] text-pine-900 md:text-[2.25rem]">
              {t('location.formTitle')}
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-ink-soft">{t('location.formNote')}</p>
          </Reveal>
          <Reveal delay={1} className="lg:col-span-8">
            <InquiryForm defaultSubject="dayPass" />
          </Reveal>
        </div>
      </section>

      <section className="container-luxe py-16 text-center">
        <Reveal>
          <Link to={`/${lang}/aguas-termales`} className="link-rule text-pine-800">
            {t('common.exploreThermal')}
            <ArrowRight size={13} strokeWidth={1.4} aria-hidden="true" />
          </Link>
        </Reveal>
      </section>
    </>
  )
}
