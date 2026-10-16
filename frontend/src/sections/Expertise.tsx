
import { ArrowUpRight } from 'lucide-react'
import { getFeaturedServices } from '../data/services'
import ServiceCard from '../components/services/ServiceCard'
import ScrollReveal from '../components/ui/ScrollReveal'

const featuredServices = getFeaturedServices()

export default function Expertise() {
  return (
    <section
      id="expertises"
      aria-labelledby="expertise-title"
      className="overflow-hidden bg-triart-cream px-6 py-20 sm:px-10 md:px-14 md:py-28 lg:px-20"
    >
      <div className="mx-auto max-w-[1440px]">
        {/* En-tête éditorial */}
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <ScrollReveal direction="left">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-triart-green">
                Nos expertises
              </p>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={100} duration={950}>
              <h2
                id="expertise-title"
                className="mt-5 max-w-3xl font-display text-4xl font-medium leading-tight text-triart-ink sm:text-5xl md:text-6xl"
              >
                Une vision, plusieurs expertises.
              </h2>
            </ScrollReveal>
          </div>

          <div className="lg:justify-self-end">
            <ScrollReveal direction="right" delay={150}>
              <p className="max-w-xl text-sm leading-7 text-triart-ink/65 md:text-base">
                Chaque projet commence par une écoute attentive et
                une compréhension précise des besoins, du lieu et
                des usages.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={250}>
              <a
                href="/expertises"
                className="group mt-5 inline-flex items-center gap-3 text-sm font-medium text-triart-green transition-colors duration-300 hover:text-triart-ink"
              >
                Découvrir notre approche
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </ScrollReveal>
          </div>
        </div>

        {/* Expertises sélectionnées */}
        {featuredServices.length > 0 ? (
          <div className="mt-12 grid gap-x-10 md:mt-16 lg:grid-cols-2">
            {featuredServices.map((service, index) => (
              <ScrollReveal
                key={service.id}
                direction={index % 2 === 0 ? 'left' : 'right'}
                delay={(index % 2) * 120}
                duration={850}
              >
                <ServiceCard
                  service={service}
                  index={index}
                />
              </ScrollReveal>
            ))}
          </div>
        ) : (
          <ScrollReveal direction="up">
            <p className="mt-10 border-t border-triart-ink/15 py-8 text-sm text-triart-ink/60">
              Nos expertises seront présentées prochainement.
            </p>
          </ScrollReveal>
        )}
      </div>
    </section>
  )
}
