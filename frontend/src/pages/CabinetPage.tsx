
import { ArrowUpRight } from 'lucide-react'
import PageTransition from '../components/layout/PageTransition'
import ScrollReveal from '../components/ui/ScrollReveal'
import ContactCTA from '../sections/ContactCTA'

export default function CabinetPage() {
  return (
    <PageTransition>
      <main className="bg-triart-cream text-triart-ink">
        {/* Introduction */}
        <section className="px-6 pb-16 pt-36 sm:px-10 md:px-14 md:pb-24 md:pt-44 lg:px-20">
          <div className="mx-auto max-w-[1440px]">
            <ScrollReveal direction="left">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-triart-green">
                Le cabinet
              </p>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={100} duration={1000}>
              <h1 className="mt-6 max-w-5xl font-display text-4xl font-medium leading-tight sm:text-5xl md:text-7xl">
                Concevoir des espaces qui ont du sens.
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={150}>
              <p className="mt-7 max-w-2xl text-base leading-8 text-triart-ink/65 md:text-lg">
                Une réflexion architecturale attentive aux lieux,
                aux usages, aux matières et à la lumière.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Image d'ambiance */}
        <section className="px-6 sm:px-10 md:px-14 lg:px-20">
          <div className="mx-auto max-w-[1440px]">
            <ScrollReveal direction="zoom" duration={1100}>
              <div className="group relative aspect-[16/9] overflow-hidden bg-[#EAE5DA] md:aspect-[2/1]">
                <img
                  src="/images/studio/studio-architecture.jpg"
                  alt="Illustration de l'univers architectural de TriArt"
                  className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.035] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  loading="lazy"
                  decoding="async"
                />
                <div className="pointer-events-none absolute inset-0 bg-triart-ink/10" />
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Notre approche */}
        <section className="px-6 py-20 sm:px-10 md:px-14 md:py-28 lg:px-20">
          <div className="mx-auto grid max-w-[1440px] gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
            <div>
              <ScrollReveal direction="left">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-triart-green">
                  Notre approche
                </p>
              </ScrollReveal>

              <ScrollReveal direction="left" delay={100} duration={950}>
                <h2 className="mt-5 font-display text-3xl font-medium leading-tight sm:text-4xl md:text-5xl">
                  Comprendre avant de concevoir.
                </h2>
              </ScrollReveal>
            </div>

            <div className="space-y-6 text-sm leading-8 text-triart-ink/70 md:text-base">
              <ScrollReveal direction="right">
                <p>
                  Chaque projet commence par l'écoute et l'analyse de
                  son contexte. Les usages, les contraintes et les
                  aspirations permettent de définir une direction de
                  conception cohérente.
                </p>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={120}>
                <p>
                  La réflexion architecturale associe les volumes,
                  la lumière, les matières et la circulation afin de
                  proposer des espaces adaptés à leur destination.
                </p>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={240}>
                <p>
                  Cette présentation constitue une base éditoriale
                  provisoire. Elle devra être enrichie avec l'histoire,
                  l'équipe et les engagements réels du cabinet.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Nos principes */}
        <section className="bg-[#EAE5DA] px-6 py-20 sm:px-10 md:px-14 md:py-24 lg:px-20">
          <div className="mx-auto max-w-[1440px]">
            <ScrollReveal direction="left">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-triart-green">
                Nos principes
              </p>
            </ScrollReveal>

            <div className="mt-10 grid gap-10 md:grid-cols-3 md:gap-8">
              {[
                {
                  number: '01',
                  title: 'Écoute',
                  description:
                    'Comprendre les besoins, les attentes et les usages avant de définir les orientations du projet.',
                },
                {
                  number: '02',
                  title: 'Cohérence',
                  description:
                    "Relier les espaces, les matières et les fonctions au sein d'une vision architecturale globale.",
                },
                {
                  number: '03',
                  title: 'Sens',
                  description:
                    "Chercher une réponse adaptée au contexte et à l'expérience des personnes qui vivront les lieux.",
                },
              ].map((principle, index) => (
                <ScrollReveal
                  key={principle.number}
                  direction="up"
                  delay={index * 120}
                  duration={850}
                >
                  <article className="group h-full border-t border-triart-ink/20 pt-5 transition-colors duration-500 hover:border-triart-green">
                    <span className="text-xs tracking-[0.2em] text-triart-green/65">
                      {principle.number}
                    </span>

                    <h2 className="mt-5 font-display text-2xl transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none">
                      {principle.title}
                    </h2>

                    <p className="mt-4 text-sm leading-7 text-triart-ink/65">
                      {principle.description}
                    </p>
                  </article>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal direction="left" delay={150}>
              <a
                href="/expertises"
                className="group mt-12 inline-flex items-center gap-3 text-sm font-semibold text-triart-green transition-colors duration-300 hover:text-triart-ink"
              >
                Découvrir nos expertises
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </ScrollReveal>
          </div>
        </section>

        {/* Appel à l'action commun */}
        <ContactCTA />
      </main>
    </PageTransition>
  )
}
