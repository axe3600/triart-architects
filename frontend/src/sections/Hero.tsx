
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router'
import ScrollReveal from '../components/ui/ScrollReveal'

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] w-full items-end overflow-hidden bg-triart-ink">
      {/* Image de secours */}
      <img
        src="/images/hero-poster.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Vidéo plein écran */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/hero-poster.jpg"
        aria-hidden="true"
      >
        <source
          src="/videos/hero-architecture.mp4"
          type="video/mp4"
        />
      </video>

      {/* Voiles de contraste */}
      <div className="absolute inset-0 bg-triart-ink/35" />
      <div className="absolute inset-0 bg-gradient-to-r from-triart-ink/80 via-triart-ink/35 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-triart-ink/65 via-transparent to-triart-ink/25" />

      {/* Contenu animé */}
      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pb-12 pt-36 sm:px-10 md:px-14 md:pb-16 lg:px-20 lg:pb-20">
        <ScrollReveal direction="left" duration={900}>
          <p className="mb-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-medium uppercase tracking-[0.18em] text-triart-sand md:text-sm md:tracking-[0.25em]">
            <Link
              to="/construction"
              className="transition-colors hover:text-triart-cream focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-triart-cream"
            >
              Construction
            </Link>

            <span aria-hidden="true">·</span>

            <Link
              to="/architecture"
              className="transition-colors hover:text-triart-cream focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-triart-cream"
            >
              Architecture
            </Link>

            <span aria-hidden="true">·</span>

            <Link
              to="/conseil"
              className="transition-colors hover:text-triart-cream focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-triart-cream"
            >
              Conseil
            </Link>
          </p>
        </ScrollReveal>

        <div className="max-w-5xl">
          <ScrollReveal direction="left" duration={1000}>
            <h1 className="font-display text-5xl font-medium leading-[1.04] tracking-tight text-triart-cream sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
              L’espace prend
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={180} duration={1000}>
            <p className="mt-2 font-display text-5xl font-normal italic leading-[1.04] tracking-tight text-triart-cream sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
              une autre dimension.
            </p>
          </ScrollReveal>
        </div>

        <div className="mt-8 flex max-w-3xl flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
          <ScrollReveal direction="right" delay={200} className="max-w-lg">
            <p className="text-sm leading-7 text-white/85 md:text-base">
              Imaginons des espaces singuliers, où l’architecture,
              la matière et la lumière donnent forme à une vision.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={350}>
            <a
              href="#projets"
              className="group inline-flex w-fit shrink-0 items-center gap-4 rounded-full bg-triart-cream px-6 py-4 text-sm font-semibold text-triart-ink transition-colors duration-300 hover:bg-triart-sand"
            >
              Découvrir nos projets
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </ScrollReveal>
        </div>

        <ScrollReveal direction="up" delay={450}>
          <div className="mt-14 flex items-center justify-between border-t border-white/30 pt-5 text-xs text-white/80 md:mt-16">
            <span>TriArt Architects</span>

            <a
              href="#projets"
              className="group flex items-center gap-3 transition-colors hover:text-triart-sand"
            >
              Explorer
              <ArrowDown
                size={16}
                className="transition-transform duration-300 group-hover:translate-y-1"
              />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
