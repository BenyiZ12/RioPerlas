import Img from './Img'
import Reveal from './Reveal'

type Props = {
  eyebrow: string
  title: string
  intro?: string
  image: string
  imageAlt: string
  /**
   * `full` = photographic full-bleed banner (use it with a 1200 px+ source).
   * `split` = editorial split with the photograph beside the text (use it with
   * smaller sources so the image is never upscaled beyond its native size).
   */
  variant?: 'full' | 'split'
  tone?: 'light' | 'dark'
}

export default function PageHero({
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
  variant = 'full',
  tone = 'dark',
}: Props) {
  if (variant === 'split') {
    return (
      <section className="bg-pine-950">
        <div className="container-luxe grid items-stretch gap-10 py-14 md:py-20 lg:grid-cols-2 lg:gap-16">
          <Reveal className="flex flex-col justify-center">
            <p className="eyebrow text-aqua-500">{eyebrow}</p>
            <h1 className="mt-5 font-display text-4xl leading-[1.08] text-ivory md:text-5xl xl:text-6xl">
              {title}
            </h1>
            {intro && (
              <p className="mt-6 max-w-xl text-base leading-relaxed text-ivory/70">{intro}</p>
            )}
          </Reveal>
          <Reveal delay={1} className="min-h-[16rem] lg:min-h-[26rem]">
            <Img
              src={image}
              alt={imageAlt}
              priority
              sizes="(max-width: 1024px) 92vw, 46vw"
              className="h-full w-full object-cover"
            />
          </Reveal>
        </div>
      </section>
    )
  }

  return (
    <section className="relative isolate overflow-hidden bg-pine-950">
      <div className="absolute inset-0">
        <Img src={image} alt={imageAlt} priority sizes="100vw" className="h-full w-full object-cover" />
      </div>
      <div
        className={`absolute inset-0 ${
          tone === 'dark'
            ? 'bg-gradient-to-t from-pine-950 via-pine-950/55 to-pine-950/35'
            : 'bg-gradient-to-t from-pine-950/85 via-pine-950/35 to-pine-950/20'
        }`}
      />
      <div className="container-luxe relative pb-16 pt-20 md:pb-24 md:pt-32">
        <Reveal>
          <p className="eyebrow text-aqua-500">{eyebrow}</p>
          <h1 className="mt-5 max-w-3xl font-display text-4xl leading-[1.08] text-ivory md:text-6xl">
            {title}
          </h1>
          {intro && (
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-ivory/75 md:text-lg">{intro}</p>
          )}
        </Reveal>
      </div>
    </section>
  )
}
