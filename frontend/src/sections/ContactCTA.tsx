
import { ArrowUpRight } from 'lucide-react'
import ScrollReveal from '../components/ui/ScrollReveal'

export default function ContactCTA() {
  return (
    <section
      aria-labelledby="contact-cta-title"
      className="overflow-hidden bg-triart-cream px-6 py-16 sm:px-10 md:px-14 md:py-24 lg:px-20"
    >
      <div className="relative mx-auto max-w-[1440px] overflow-hidden bg-[#EAE5DA] px-6 py-12 sm:px-10 sm:py-16 md:px-16 md:py-20">
        {/* Cercles décoratifs verts */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full border-2 border-[#294D3D]/35 sm:h-80 sm:w-80"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-6 -top-14 h-44 w-44 rounded-full border-2 border-[#294D3D]/35 sm:h-60 sm:w-60"
        />

        <div className="relative z-10 max-w-3xl">
          <ScrollReveal direction="left">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-triart-green">
              Une idée, un lieu, une vision
            </p>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={100} duration={1000}>
            <h2
              id="contact-cta-title"
              className="mt-5 font-display text-4xl font-medium leading-tight text-triart-ink sm:text-5xl md:text-6xl"
            >
              Et si nous donnions forme à votre projet ?
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={150}>
            <p className="mt-6 max-w-xl text-sm leading-7 text-triart-ink/70 md:text-base">
              Parlons de vos idées, de vos besoins et des possibilités
              qu’offre votre espace. Chaque projet commence par un échange.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={250}>
            <a
              href="/contact"
              className="group mt-8 inline-flex items-center gap-4 rounded-full bg-[#294D3D] px-7 py-4 text-sm font-semibold text-[#F5F1E8] shadow-md transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-[#17251F] hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#294D3D] motion-reduce:transform-none motion-reduce:transition-none"
            >
              <span className="text-[#F5F1E8]">
                Parlons de votre projet
              </span>

              <ArrowUpRight
                size={18}
                className="shrink-0 text-[#F5F1E8] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 motion-reduce:transition-none"
              />
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
