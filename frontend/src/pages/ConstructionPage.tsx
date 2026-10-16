
import { Link } from 'react-router'
import { ArrowDown, ArrowRight, ArrowUpRight, Check } from 'lucide-react'
import PageTransition from '../components/layout/PageTransition'
import ScrollReveal from '../components/ui/ScrollReveal'
import ContactCTA from '../sections/ContactCTA'

const principles = [
  {
    number: '01',
    title: 'Une vision cohérente',
    description:
      'Préserver l’intention architecturale et veiller à la cohérence entre les espaces imaginés, les matériaux et le résultat recherché.',
  },
  {
    number: '02',
    title: 'Une attention aux détails',
    description:
      'Accorder une place essentielle aux volumes, aux matières, aux finitions et à la qualité de chaque élément du projet.',
  },
  {
    number: '03',
    title: 'Une approche durable',
    description:
      'Privilégier une réflexion attentive au contexte, à l’usage des espaces et à leur relation avec l’environnement.',
  },
]

export default function ConstructionPage() {
  return (
    <PageTransition>
      <main className="bg-triart-cream text-triart-ink">
        {/* Hero */}
        <section className="px-6 pb-20 pt-36 sm:px-10 md:px-14 md:pb-28 md:pt-44 lg:px-20">
          <div className="mx-auto max-w-[1440px]">
            <ScrollReveal direction="left">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-triart-green">
                Construction · Réalisation · Qualité
              </p>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={100} duration={1000}>
              <h1 className="mt-6 max-w-5xl font-display text-5xl font-medium leading-[1.08] tracking-tight sm:text-6xl md:text-8xl">
                Donner forme
                <br />
                <span className="italic text-[#687C68]">
                  aux ambitions.
                </span>
              </h1>
            </ScrollReveal>

            <div className="mt-10 grid gap-8 md:grid-cols-2 md:items-end">
              <ScrollReveal direction="left" delay={150}>
                <p className="max-w-2xl text-base leading-8 text-triart-ink/75 md:text-lg">
                  Un projet architectural prend toute sa dimension lorsque
                  la vision, les choix constructifs et l’attention portée
                  à chaque détail s’inscrivent dans une même exigence de qualité.
                </p>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={200}>
                <div className="max-w-xl md:justify-self-end">
                  <p className="text-sm leading-7 text-triart-ink/65 md:text-base">
                    TriArt développe une approche de l’architecture
                    contemporaine attentive aux volumes, aux matériaux,
                    aux usages et à l’intégration du bâtiment dans son
                    environnement.
                  </p>

                  <a
                    href="#approche-construction"
                    className="mt-6 inline-flex items-center gap-3 text-sm font-semibold text-triart-green transition-colors hover:text-triart-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-triart-green"
                  >
                    Découvrir notre approche
                    <ArrowDown size={16} aria-hidden="true" />
                  </a>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Vidéo immersive — Construction */}
        <section className="px-6 pb-20 sm:px-10 md:px-14 lg:px-20">
          <div className="mx-auto max-w-[1440px]">
            <ScrollReveal direction="zoom" duration={900}>
              <div className="group relative isolate min-h-[300px] overflow-hidden rounded-[2rem] bg-[#263D32] shadow-xl sm:min-h-[420px] md:min-h-[560px]">
                <video
                  className="absolute inset-0 h-full w-full object-cover"
                  src="/videos/construction.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label="Vidéo illustrative d’un chantier de construction"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-r from-[#17211D]/80 via-[#17211D]/35 to-transparent"
                />
                <div className="relative z-10 flex min-h-[300px] items-end p-7 sm:min-h-[420px] sm:p-12 md:min-h-[560px] md:p-16">
                  <div className="max-w-2xl text-[#F6F2EA]">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D9C8AC]">
                      De la vision à la réalisation
                    </p>
                    <h2 className="mt-4 font-display text-3xl leading-tight sm:text-4xl md:text-6xl">
                      Bâtir avec précision.
                      <br />
                      Réaliser avec exigence.
                    </h2>
                    <p className="mt-5 max-w-xl text-sm leading-7 text-white/85 md:text-base">
                      Chaque étape compte : une préparation réfléchie, des choix
                      cohérents et une attention constante portée à la qualité.
                    </p>
                    <a
                      href="#approche-construction"
                      className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#F6F2EA] px-5 py-3 text-sm font-semibold !text-[#263D32] transition duration-300 hover:-translate-y-1 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                    >
                      Explorer notre approche
                      <ArrowDown size={16} aria-hidden="true" />
                    </a>
                  </div>
                </div>
                <div className="pointer-events-none absolute right-5 top-5 rounded-full border border-white/35 bg-black/20 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm sm:right-7 sm:top-7">
                  Construction · TriArt
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Approche */}
        <section
          id="approche-construction"
          className="scroll-mt-28 px-6 pb-24 sm:px-10 md:px-14 lg:px-20"
        >
          <div className="mx-auto max-w-[1440px]">
            <ScrollReveal direction="zoom" duration={1000}>
              <div className="relative overflow-hidden rounded-[2rem] bg-[#263D32] p-8 text-[#F6F2EA] sm:p-12 md:p-16 lg:p-20">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/15 sm:h-96 sm:w-96"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-32 right-24 h-64 w-64 rounded-full border border-white/10"
                />

                <div className="relative z-10 max-w-4xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C8D2C1]">
                    Une approche exigeante
                  </p>

                  <h2 className="mt-5 font-display text-3xl leading-tight sm:text-4xl md:text-6xl">
                    La qualité ne doit rien au hasard.
                  </h2>

                  <p className="mt-6 max-w-2xl text-sm leading-7 text-white/75 md:text-base md:leading-8">
                    Construire, c’est donner une expression concrète à
                    une intention. La réflexion sur les matériaux, la
                    composition des volumes et l’attention aux finitions
                    participent à la cohérence et à l’identité de chaque
                    réalisation.
                  </p>

                  <Link
                    to="/projets"
                    className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#F6F2EA] px-6 py-3.5 text-sm font-semibold !text-[#263D32] transition duration-300 hover:-translate-y-1 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white [&_svg]:!text-[#263D32]"
                  >
                    Découvrir nos projets
                    <ArrowUpRight size={17} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Principes */}
        <section className="px-6 pb-24 sm:px-10 md:px-14 lg:px-20">
          <div className="mx-auto max-w-[1440px]">
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
              <div>
                <ScrollReveal direction="left">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-triart-green">
                    Notre exigence
                  </p>
                </ScrollReveal>

                <ScrollReveal direction="left" delay={100}>
                  <h2 className="mt-5 max-w-lg font-display text-3xl leading-tight sm:text-4xl md:text-5xl">
                    Chaque choix compte.
                  </h2>
                </ScrollReveal>

                <ScrollReveal direction="left" delay={180}>
                  <p className="mt-6 max-w-lg text-sm leading-7 text-triart-ink/65 md:text-base">
                    Une réalisation réussie repose sur une vision claire,
                    une attention constante aux détails et une réflexion
                    adaptée aux besoins du projet.
                  </p>
                </ScrollReveal>
              </div>

              <div className="border-t border-triart-ink/15">
                {principles.map((principle, index) => (
                  <ScrollReveal
                    key={principle.number}
                    direction="right"
                    delay={index * 100}
                    duration={850}
                  >
                    <article className="grid gap-4 border-b border-triart-ink/15 py-7 sm:grid-cols-[64px_1fr] sm:gap-6 md:py-9">
                      <span className="text-xs font-semibold tracking-[0.15em] text-triart-green">
                        {principle.number}
                      </span>

                      <div>
                        <h3 className="font-display text-xl sm:text-2xl">
                          {principle.title}
                        </h3>

                        <p className="mt-3 max-w-2xl text-sm leading-7 text-triart-ink/65 md:text-base">
                          {principle.description}
                        </p>
                      </div>
                    </article>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Transition vers les projets */}
        <section className="px-6 pb-24 sm:px-10 md:px-14 lg:px-20">
          <div className="mx-auto max-w-[1440px]">
            <ScrollReveal direction="up">
              <div className="flex flex-col gap-6 rounded-[2rem] border border-triart-ink/15 p-8 sm:p-10 md:flex-row md:items-center md:justify-between md:p-14">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-triart-green">
                    <Check size={15} aria-hidden="true" />
                    De l’intention à l’espace
                  </div>

                  <h2 className="mt-4 font-display text-2xl leading-tight sm:text-3xl md:text-4xl">
                    Un projet commence par une vision.
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-triart-ink/65 md:text-base">
                    Présentez-nous votre projet et échangeons sur vos
                    besoins, vos objectifs et les possibilités qui s’offrent
                    à vous.
                  </p>
                </div>

                <Link
                  to="/devis"
                  className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-triart-green px-6 py-4 text-sm font-semibold !text-[#F6F2EA] transition duration-300 hover:-translate-y-1 hover:bg-triart-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-triart-green [&_svg]:!text-[#F6F2EA]"
                >
                  Parler de mon projet
                  <ArrowRight size={17} aria-hidden="true" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <ContactCTA />
      </main>
    </PageTransition>
  )
}
