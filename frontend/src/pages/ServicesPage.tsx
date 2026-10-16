
import { ArrowUpRight } from 'lucide-react'
import PageTransition from '../components/layout/PageTransition'
import ScrollReveal from '../components/ui/ScrollReveal'
import ServiceCard from '../components/services/ServiceCard'
import ContactCTA from '../sections/ContactCTA'
import { services } from '../data/services'

export default function ServicesPage() {
  return (
    <PageTransition>
      <main className="bg-triart-cream text-triart-ink">
        {/* Introduction */}
        <section className="px-6 pb-16 pt-36 sm:px-10 md:px-14 md:pb-24 md:pt-44 lg:px-20">
          <div className="mx-auto max-w-[1440px]">
            <ScrollReveal direction="left">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-triart-green">
                Nos services
              </p>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={100} duration={1000}>
              <h1 className="mt-6 max-w-5xl font-display text-4xl font-medium leading-tight sm:text-5xl md:text-7xl">
                Des idées aux espaces, une démarche cohérente.
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={150}>
              <p className="mt-7 max-w-2xl text-base leading-8 text-triart-ink/65 md:text-lg">
                Découvrez les domaines d’intervention proposés dans
                notre catalogue de présentation.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Catalogue des services */}
        <section className="px-6 pb-20 sm:px-10 md:px-14 md:pb-28 lg:px-20">
          <div className="mx-auto max-w-[1440px]">
            {services.length > 0 ? (
              <div className="grid gap-x-10 md:grid-cols-2">
                {services.map((service, index) => (
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
                <p className="border-t border-triart-ink/15 py-8 text-sm text-triart-ink/60">
                  Les services seront présentés prochainement.
                </p>
              </ScrollReveal>
            )}

            <ScrollReveal direction="right" delay={100}>
              <p className="mt-8 max-w-2xl text-xs leading-6 text-triart-ink/50">
                Les prestations affichées sont provisoires et devront
                être confirmées par le cabinet avant la publication du site.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={150}>
              <a
                href="/devis"
                className="group mt-8 inline-flex items-center gap-3 rounded-full bg-triart-green px-6 py-4 text-sm font-semibold text-triart-cream transition-colors duration-300 hover:bg-triart-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-triart-green motion-reduce:transition-none"
              >
                Discuter de votre projet
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 motion-reduce:transition-none"
                />
              </a>
            </ScrollReveal>
          </div>
        </section>

        {/* Appel à l'action partagé */}
        <ContactCTA />
      </main>
    </PageTransition>
  )
}
