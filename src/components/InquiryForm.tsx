import { useId, useRef, useState, type FormEvent } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import { useI18n } from '../i18n/useI18n'
import { site } from '../content/site'
import { rooms } from '../content/rooms'

type Props = {
  /** Pre-selected enquiry topic */
  defaultSubject?: string
}

type Errors = { name?: string; email?: string; dates?: string; guests?: string }

export default function InquiryForm({ defaultSubject = 'stay' }: Props) {
  const { t } = useI18n()
  const uid = useId()
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    arrival: '',
    departure: '',
    adults: '2',
    children: '0',
    room: '',
    subject: defaultSubject,
    message: '',
  })
  const [errors, setErrors] = useState<Errors>({})
  const [sent, setSent] = useState(false)
  const formRef = useRef<HTMLFormElement | null>(null)

  const subjectOptions = [
    { value: 'stay', label: t('form.subjects.stay') },
    { value: 'dayPass', label: t('form.subjects.dayPass') },
    { value: 'spa', label: t('form.subjects.spa') },
    { value: 'event', label: t('form.subjects.event') },
    { value: 'corporate', label: t('form.subjects.corporate') },
    { value: 'other', label: t('form.subjects.other') },
  ]

  const set = (key: keyof typeof values) => (e: { target: { value: string } }) =>
    setValues((v) => ({ ...v, [key]: e.target.value }))

  function validate(): Errors {
    const next: Errors = {}
    if (!values.name.trim()) next.name = t('form.errors.name')
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) next.email = t('form.errors.email')
    if (values.arrival && values.departure && values.departure <= values.arrival)
      next.dates = t('form.errors.dates')
    if (Number(values.adults) + Number(values.children) < 1) next.guests = t('form.errors.guests')
    return next
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const next = validate()
    setErrors(next)
    if (Object.keys(next).length > 0) {
      const first = formRef.current?.querySelector<HTMLElement>('[aria-invalid="true"]')
      first?.focus()
      return
    }

    const subjectLabel =
      subjectOptions.find((o) => o.value === values.subject)?.label ?? values.subject
    const lines = [
      `${t('form.name')}: ${values.name}`,
      `${t('form.email')}: ${values.email}`,
      values.phone ? `${t('form.phone')}: ${values.phone}` : '',
      values.arrival || values.departure
        ? `${t('form.arrival')}: ${values.arrival || '—'} / ${t('form.departure')}: ${values.departure || '—'}`
        : '',
      `${t('form.guests')}: ${values.adults} ${t('form.adults').toLowerCase()}, ${values.children} ${t('form.children').toLowerCase()}`,
      values.room ? `${t('form.rooms')}: ${values.room}` : '',
      '',
      values.message,
    ].filter(Boolean)

    const body = lines.join('\n')
    const href = `mailto:${site.contact.email}?subject=${encodeURIComponent(
      `Río Perlas — ${subjectLabel}`,
    )}&body=${encodeURIComponent(body)}`

    window.location.href = href
    setSent(true)
  }

  const labelCls = 'block text-[0.7rem] tracking-[0.16em] uppercase text-ink-soft mb-2'
  const inputCls =
    'w-full border border-stone bg-white px-4 py-3 text-sm text-ink transition-colors duration-300 focus:border-pine-700 focus:outline-none'
  const errorCls = 'mt-1.5 text-xs text-[#a4402f]'

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelCls} htmlFor={`${uid}-name`}>
            {t('form.name')} <span className="text-aqua-700">*</span>
          </label>
          <input
            id={`${uid}-name`}
            name="name"
            type="text"
            autoComplete="name"
            className={inputCls}
            value={values.name}
            onChange={set('name')}
            aria-invalid={errors.name ? 'true' : undefined}
            aria-describedby={errors.name ? `${uid}-name-err` : undefined}
          />
          {errors.name && (
            <p id={`${uid}-name-err`} className={errorCls}>
              {errors.name}
            </p>
          )}
        </div>
        <div>
          <label className={labelCls} htmlFor={`${uid}-email`}>
            {t('form.email')} <span className="text-aqua-700">*</span>
          </label>
          <input
            id={`${uid}-email`}
            name="email"
            type="email"
            autoComplete="email"
            className={inputCls}
            value={values.email}
            onChange={set('email')}
            aria-invalid={errors.email ? 'true' : undefined}
            aria-describedby={errors.email ? `${uid}-email-err` : undefined}
          />
          {errors.email && (
            <p id={`${uid}-email-err`} className={errorCls}>
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelCls} htmlFor={`${uid}-phone`}>
            {t('form.phone')}
          </label>
          <input
            id={`${uid}-phone`}
            name="phone"
            type="tel"
            autoComplete="tel"
            className={inputCls}
            value={values.phone}
            onChange={set('phone')}
          />
        </div>
        <div>
          <label className={labelCls} htmlFor={`${uid}-subject`}>
            {t('form.subject')}
          </label>
          <select
            id={`${uid}-subject`}
            name="subject"
            className={inputCls}
            value={values.subject}
            onChange={set('subject')}
          >
            {subjectOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelCls} htmlFor={`${uid}-arrival`}>
            {t('form.arrival')}
          </label>
          <input
            id={`${uid}-arrival`}
            name="arrival"
            type="date"
            className={inputCls}
            value={values.arrival}
            onChange={set('arrival')}
          />
        </div>
        <div>
          <label className={labelCls} htmlFor={`${uid}-departure`}>
            {t('form.departure')}
          </label>
          <input
            id={`${uid}-departure`}
            name="departure"
            type="date"
            className={inputCls}
            value={values.departure}
            onChange={set('departure')}
            aria-invalid={errors.dates ? 'true' : undefined}
            aria-describedby={errors.dates ? `${uid}-dates-err` : undefined}
          />
        </div>
      </div>
      {errors.dates && (
        <p id={`${uid}-dates-err`} className={errorCls}>
          {errors.dates}
        </p>
      )}

      <div className="grid gap-5 sm:grid-cols-3">
        <div>
          <label className={labelCls} htmlFor={`${uid}-adults`}>
            {t('form.adults')}
          </label>
          <input
            id={`${uid}-adults`}
            name="adults"
            type="number"
            min={1}
            max={20}
            className={inputCls}
            value={values.adults}
            onChange={set('adults')}
            aria-invalid={errors.guests ? 'true' : undefined}
          />
        </div>
        <div>
          <label className={labelCls} htmlFor={`${uid}-children`}>
            {t('form.children')}
          </label>
          <input
            id={`${uid}-children`}
            name="children"
            type="number"
            min={0}
            max={20}
            className={inputCls}
            value={values.children}
            onChange={set('children')}
          />
        </div>
        <div>
          <label className={labelCls} htmlFor={`${uid}-room`}>
            {t('form.rooms')}
          </label>
          <select
            id={`${uid}-room`}
            name="room"
            className={inputCls}
            value={values.room}
            onChange={set('room')}
          >
            <option value="">—</option>
            {rooms.map((r) => (
              <option key={r.slug} value={r.name.es}>
                {r.name.es}
              </option>
            ))}
          </select>
        </div>
      </div>
      {errors.guests && <p className={errorCls}>{errors.guests}</p>}

      <div>
        <label className={labelCls} htmlFor={`${uid}-message`}>
          {t('form.message')}
        </label>
        <textarea
          id={`${uid}-message`}
          name="message"
          rows={5}
          className={`${inputCls} resize-y`}
          value={values.message}
          onChange={set('message')}
        />
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" className="btn btn-primary">
          {t('form.submit')}
          <ArrowRight size={14} strokeWidth={1.4} aria-hidden="true" />
        </button>
        <p className="max-w-sm text-xs leading-relaxed text-ink-soft">{t('location.formNote')}</p>
      </div>

      {sent && (
        <p
          role="status"
          className="flex items-start gap-2 border-l-2 border-aqua-600 bg-sand px-4 py-3 text-sm text-ink"
        >
          <Check size={15} strokeWidth={1.5} className="mt-0.5 shrink-0 text-aqua-700" aria-hidden="true" />
          {t('form.success')}
        </p>
      )}
    </form>
  )
}
