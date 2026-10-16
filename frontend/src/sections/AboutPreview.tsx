
import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import ScrollReveal from '../components/ui/ScrollReveal'

export default function AboutPreview() {
  return (
    <section
      id="cabinet"
      aria-labelledby="about-preview-title"
      className="overflow-hidden bg-triart-green text-triart-cream"
    >
      <div className="mx-auto grid max-w-[1600px] lg:grid-cols-2">
        {/* Présentation éditoriale */}
        <div className="flex flex-col justify-center px-6 py-20 sm:px-10 md:px-14 md:py-28 lg:px-20">
          <ScrollReveal direction="left" duration={850}>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-triart-sand">
              Le cabinet
            </p>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={100} duration={1000}>
            <h2
              id="about-preview-title"
              className="mt-6 max-w-2xl font-display text-4xl font-medium leading-tight sm:text-5xl md:text-6xl"
            >
              Donner forme aux idées.
              <span className="mt-2 block font-normal italic text-triart-sand">
                Créer du sens dans l’espace.
              </span>
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={150}>
            <p className="mt-7 max-w-lg text-sm leading-7 text-white/75 md:text-base">
              L’architecture est une manière de penser les lieux,
              les usages et les relations entre les personnes et
              leur environnement. Chaque projet mérite une réflexion
              attentive et une réponse singulière.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={250}>
            <a
              href="/cabinet"
              className="group mt-9 inline-flex w-fit items-center gap-4 border-b border-triart-sand/50 pb-3 text-sm font-medium transition-colors hover:text-triart-sand"
            >
              Découvrir le cabinet
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </ScrollReveal>
        </div>

        {/* Photographie animée */}
        <div className="relative min-h-[340px] overflow-hidden bg-[#344B3F] sm:min-h-[480px] lg:min-h-full">
          <ScrollReveal
            direction="zoom"
            duration={1100}
            className="absolute inset-0"
          >
            <img
              src="/images/studio/studio-architecture.jpg"
              alt="Illustration architecturale du cabinet TriArt"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </ScrollReveal>

          {/* Voile harmonisant la photographie */}
          <div className="pointer-events-none absolute inset-0 bg-triart-green/15" />

          {/* Signature visuelle */}
          <ScrollReveal
            direction="left"
            delay={200}
            className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10"
          >
            <div className="flex items-center gap-3 text-xs text-white/85">
              <span className="h-px w-10 bg-triart-sand" />
              <span className="uppercase tracking-[0.18em]">
                Architecture · Conception · Innovation
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal
            direction="right"
            delay={250}
            className="absolute right-6 top-6 sm:right-10 sm:top-10"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/40 text-white transition-colors duration-300 hover:bg-triart-cream hover:text-triart-green">
              <ArrowDownRight size={22} />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
