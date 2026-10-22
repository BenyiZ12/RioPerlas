import { Link } from 'react-router-dom'
import { Phone } from 'lucide-react'
import { useI18n } from '../i18n/useI18n'
import { site } from '../content/site'

/** Persistent booking call-to-action for small screens. */
export default function MobileCta() {
  const { lang, t } = useI18n()

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-ivory/15 bg-pine-950/95 backdrop-blur-sm lg:hidden">
      <div className="flex items-stretch gap-2 px-4 py-3">
        <Link
          to={`/${lang}/ubicacion#consulta`}
          className="btn btn-light flex-1 !px-4 !py-3 text-center text-[0.7rem]"
        >
          {t('common.reserve')}
        </Link>
        <a
          href={site.contact.phoneHref}
          className="btn btn-outline-light !px-4 !py-3"
          aria-label={`${t('common.phone')}: ${site.contact.phoneDisplay}`}
        >
          <Phone size={16} strokeWidth={1.4} aria-hidden="true" />
        </a>
      </div>
    </div>
  )
}
