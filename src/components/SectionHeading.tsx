import Reveal from './Reveal'

type Props = {
  eyebrow: string
  title: string
  intro?: string
  align?: 'left' | 'center'
  light?: boolean
  action?: React.ReactNode
}

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'left',
  light = false,
  action,
}: Props) {
  const isCenter = align === 'center'
  return (
    <Reveal className={isCenter ? 'text-center' : ''}>
      <div
        className={`flex flex-col gap-6 ${
          isCenter ? 'items-center' : 'md:flex-row md:items-end md:justify-between'
        }`}
      >
        <div className={isCenter ? 'max-w-2xl' : 'max-w-2xl'}>
          <p className={`eyebrow ${light ? 'text-aqua-500' : 'text-aqua-700'}`}>{eyebrow}</p>
          <h2
            className={`mt-4 font-display text-3xl leading-[1.12] md:text-5xl ${
              light ? 'text-ivory' : 'text-pine-900'
            }`}
          >
            {title}
          </h2>
          {intro && (
            <p
              className={`mt-5 text-base leading-relaxed md:text-[1.0625rem] ${
                light ? 'text-ivory/75' : 'text-ink-soft'
              }`}
            >
              {intro}
            </p>
          )}
        </div>
        {action && <div className="shrink-0">{action}</div>}
      </div>
    </Reveal>
  )
}
