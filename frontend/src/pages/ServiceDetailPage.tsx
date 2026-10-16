
import { useParams } from 'react-router'
import { ArrowLeft, ArrowUpRight, Check } from 'lucide-react'
import PageTransition from '../components/layout/PageTransition'
import ScrollReveal from '../components/ui/ScrollReveal'
import ContactCTA from '../sections/ContactCTA'
import { getServiceBySlug } from '../data/services'

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const service = slug ? getServiceBySlug(slug) : undefined

  if (!service) {
    return (
      <PageTransition>
        <main className="min-h-[60vh] bg-triart-cream px-6 pb-20 pt-36 text-triart-ink sm:px-10 md:px-14 md:pt-44 lg:px-20">
          <div className="mx-auto max-w-[1000px]">
            <ScrollReveal direction="left">
              <p className="text-xs uppercase tracking-[0.2em] text-triart-green">
                Service introuvable
              </p>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={100}>
              <h1 className="mt-5 font-display text-4xl sm:text-5xl">
                Cette page n’est pas disponible.
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={150}>
              <p className="mt-5 max-w-xl text-sm leading-7 text-triart-ink/65">
                Le service demandé n’existe pas ou n’est pas encore publié.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={200}>
              <a
                href="/services"
                className="group mt-8 inline-flex items-center gap-3 text-sm font-semibold text-triart-green transition-colors hover:text-triart-ink"
              >
                <ArrowLeft
                  size={18}
                  className="transition-transform duration-300 group-hover:-translate-x-1"
                />
                Retour aux services
              </a>
            </ScrollReveal>
          </div>
        </main>
      </PageTransition>
    )
  }

  return (
    <PageTransition>
      <main className="bg-triart-cream text-triart-ink">
        {/* En-tête du service */}
        <section className="px-6 pb-16 pt-36 sm:px-10 md:px-14 md:pb-24 md:pt-44 lg:px-20">
          <div className="mx-auto max-w-[1440px]">
            <ScrollReveal direction="left">
              <a
                href="/services"
                className="group inline-flex items-center gap-2 text-sm text-triart-ink/60 transition-colors hover:text-triart-green"
              >
                <ArrowLeft
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-x-1"
                />
                Tous les services
              </a>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={100}>
              <p className="mt-10 text-xs font-semibold uppercase tracking-[0.22em] text-triart-green">
                Notre expertise
              </p>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={150} duration={1000}>
              <h1 className="mt-5 max-w-5xl font-display text-4xl font-medium leading-tight sm:text-5xl md:text-7xl">
                {service.title}
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={200}>
              <p className="mt-7 max-w-2xl text-base leading-8 text-triart-ink/65 md:text-lg">
                {service.shortDescription}
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Image principale */}
        <section className="px-6 sm:px-10 md:px-14 lg:px-20">
          <div className="mx-auto max-w-[1440px]">
            <ScrollReveal direction="zoom" duration={1100}>
              <div className="group relative aspect-[16/9] overflow-hidden bg-[#EAE5DA] md:aspect-[2/1]">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.035] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                />
                <div className="pointer-events-none absolute inset-0 bg-triart-ink/10" />
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Description et prestations */}
        <section className="px-6 py-20 sm:px-10 md:px-14 md:py-28 lg:px-20">
          <div className="mx-auto grid max-w-[1440px] gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-20">
            <div>
              <ScrollReveal direction="left">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-triart-green">
                  Notre démarche
                </p>
              </ScrollReveal>

              <ScrollReveal direction="left" delay={100} duration={950}>
                <h2 className="mt-5 font-display text-3xl leading-tight sm:text-4xl">
                  Une approche adaptée à votre projet.
                </h2>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={150}>
                <p className="mt-6 text-sm leading-8 text-triart-ink/70 md:text-base">
                  {service.description}
                </p>
              </ScrollReveal>
            </div>

            <div>
              <ScrollReveal direction="right">
                <h2 className="font-display text-2xl sm:text-3xl">
                  Les points abordés
                </h2>
              </ScrollReveal>

              <ul className="mt-6 divide-y divide-triart-ink/10">
                {service.features.map((feature, index) => (
                  <li key={feature}>
                    <ScrollReveal
                      direction="right"
                      delay={(index % 4) * 70}
                    >
                      <div className="flex items-start gap-3 py-4 text-sm leading-6 text-triart-ink/70">
                        <Check
                          size={18}
                          className="mt-0.5 shrink-0 text-triart-green"
                        />
                        <span>{feature}</span>
                      </div>
                    </ScrollReveal>
                  </li>
                ))}
              </ul>


              <ScrollReveal direction="up" delay={150}>
                <a
                  href="/devis"
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

        <ContactCTA />
      </main>
    </PageTransition>
  )
}
