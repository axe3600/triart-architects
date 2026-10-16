import { Link } from 'react-router'
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Compass,
  ListChecks,
  MessagesSquare,
} from 'lucide-react'
import PageTransition from '../components/layout/PageTransition'
import ScrollReveal from '../components/ui/ScrollReveal'
import ContactCTA from '../sections/ContactCTA'

const consultingPillars = [
  {
    number: '01',
    title: 'Comprendre',
    description:
      'Identifier les besoins, les attentes et les contraintes pour établir une vision commune du projet.',
    icon: Compass,
  },
  {
    number: '02',
    title: 'Structurer',
    description:
      'Organiser les priorités et clarifier les étapes afin de donner au projet une direction cohérente.',
    icon: ListChecks,
  },
  {
    number: '03',
    title: 'Accompagner',
    description:
      'Faciliter les échanges et aider à orienter les décisions tout en gardant une vision d’ensemble.',
    icon: MessagesSquare,
  },
]

export default function ConseilPage() {
  return (
    <PageTransition>
      <main className="bg-triart-cream text-triart-ink">
        {/* Hero */}
        <section className="px-6 pb-20 pt-36 sm:px-10 md:px-14 md:pb-28 md:pt-44 lg:px-20">
          <div className="mx-auto max-w-[1440px]">
            <ScrollReveal direction="left">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-triart-green">
                Conseil · Stratégie · Accompagnement
              </p>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={100} duration={1000}>
              <h1 className="mt-6 max-w-5xl font-display text-5xl font-medium leading-[1.08] tracking-tight sm:text-6xl md:text-8xl">
                Donner du sens
                <br />
                <span className="italic text-[#687C68]">
                  à chaque projet.
                </span>
              </h1>
            </ScrollReveal>

            <div className="mt-10 grid gap-8 md:grid-cols-2 md:items-end">
              <ScrollReveal direction="left" delay={150}>
                <p className="max-w-2xl text-base leading-8 text-triart-ink/75 md:text-lg">
                  Prendre le temps de poser les bonnes questions pour
                  transformer une intention en projet cohérent, structuré et
                  adapté à ses objectifs.
                </p>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={200}>
                <div className="max-w-xl md:justify-self-end">
                  <p className="text-sm leading-7 text-triart-ink/65 md:text-base">
                    Une réflexion en amont aide à clarifier les besoins,
                    comprendre les contraintes et organiser les priorités avant
                    d’engager les prochaines étapes.
                  </p>

                  <a
                    href="#demarche-conseil"
                    className="mt-6 inline-flex items-center gap-3 text-sm font-semibold text-triart-green transition-colors hover:text-triart-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-triart-green"
                  >
                    Découvrir notre démarche
                    <ArrowRight size={16} aria-hidden="true" />
                  </a>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Vidéo immersive — Conseil */}
        <section className="px-6 pb-20 sm:px-10 md:px-14 lg:px-20">
          <div className="mx-auto max-w-[1440px]">
            <ScrollReveal direction="zoom" duration={900}>
              <div className="group relative isolate min-h-[300px] overflow-hidden rounded-[2rem] bg-[#263D32] shadow-xl sm:min-h-[420px] md:min-h-[560px]">
                <video
                  className="absolute inset-0 h-full w-full object-cover"
                  src="/videos/conseil.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label="Vidéo illustrative d’un architecte étudiant des plans de projet"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-r from-[#17211D]/85 via-[#17211D]/45 to-transparent"
                />
                <div className="relative z-10 flex min-h-[300px] items-end p-7 sm:min-h-[420px] sm:p-12 md:min-h-[560px] md:p-16">
                  <div className="max-w-2xl text-[#F6F2EA]">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D9C8AC]">
                      Conseil & accompagnement
                    </p>
                    <h2 className="mt-4 font-display text-3xl leading-tight sm:text-4xl md:text-6xl">
                      Clarifier les idées.
                      <br />
                      Construire la bonne direction.
                    </h2>
                    <p className="mt-5 max-w-xl text-sm leading-7 text-white/85 md:text-base">
                      Prendre du recul, organiser les priorités et faire les
                      bons choix pour avancer avec une vision claire.
                    </p>
                    <a
                      href="#demarche-conseil"
                      className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#F6F2EA] px-5 py-3 text-sm font-semibold !text-[#263D32] transition duration-300 hover:-translate-y-1 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                    >
                      Découvrir notre démarche
                      <ArrowRight size={16} aria-hidden="true" />
                    </a>
                  </div>
                </div>
                <div className="pointer-events-none absolute right-5 top-5 rounded-full border border-white/35 bg-black/20 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm sm:right-7 sm:top-7">
                  Conseil · TriArt
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Notre approche */}
        <section
          id="demarche-conseil"
          className="scroll-mt-28 px-6 pb-24 sm:px-10 md:px-14 lg:px-20"
        >
          <div className="mx-auto max-w-[1440px]">
            <ScrollReveal direction="zoom" duration={1000}>
              <div className="relative overflow-hidden rounded-[2rem] bg-[#EAE5DA] p-8 sm:p-12 md:p-16 lg:p-20">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full border border-triart-green/20 sm:h-80 sm:w-80"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-28 right-28 h-56 w-56 rounded-full border border-triart-green/10 sm:h-72 sm:w-72"
                />

                <div className="relative z-10 max-w-4xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-triart-green">
                    Notre approche
                  </p>

                  <h2 className="mt-5 font-display text-3xl leading-tight sm:text-4xl md:text-6xl">
                    La clarté avant l’action.
                  </h2>

                  <p className="mt-6 max-w-2xl text-sm leading-7 text-triart-ink/70 md:text-base md:leading-8">
                    Chaque projet commence par une compréhension des attentes,
                    des contraintes et des objectifs. Cette réflexion permet
                    de définir une direction de travail et de construire une
                    démarche adaptée à la réalité du projet.
                  </p>

                  <Link
                    to="/devis"
                    className="group mt-9 inline-flex items-center gap-3 rounded-full bg-[#263D32] px-6 py-3.5 text-sm font-semibold !text-[#F6F2EA] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#17211D] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#263D32] focus-visible:ring-offset-4 focus-visible:ring-offset-[#EAE5DA] [&_svg]:!text-[#F6F2EA]"
                  >
                    Échanger sur votre projet
                    <ArrowUpRight
                      size={17}
                      aria-hidden="true"
                      className="!text-[#F6F2EA] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Les piliers du conseil */}
        <section className="px-6 pb-24 sm:px-10 md:px-14 lg:px-20">
          <div className="mx-auto max-w-[1440px]">
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
              <div>
                <ScrollReveal direction="left">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-triart-green">
                    Les piliers de notre démarche
                  </p>

                  <h2 className="mt-5 max-w-lg font-display text-3xl leading-tight sm:text-4xl md:text-5xl">
                    Réfléchir, structurer, avancer.
                  </h2>

                  <p className="mt-6 max-w-lg text-sm leading-7 text-triart-ink/65 md:text-base">
                    Une méthode de réflexion claire permet de mieux partager
                    les objectifs, de prioriser les décisions et de garder le
                    cap sur l’intention initiale.
                  </p>
                </ScrollReveal>
              </div>

              <div className="border-t border-triart-ink/15">
                {consultingPillars.map((pillar, index) => {
                  const Icon = pillar.icon

                  return (
                    <ScrollReveal
                      key={pillar.number}
                      direction="right"
                      delay={index * 100}
                      duration={850}
                    >
                      <article className="grid gap-4 border-b border-triart-ink/15 py-7 sm:grid-cols-[64px_1fr] sm:gap-6 md:py-9">
                        <div className="flex items-start justify-between sm:contents">
                          <span className="text-xs font-semibold tracking-[0.15em] text-triart-green">
                            {pillar.number}
                          </span>
                          <Icon
                            size={21}
                            strokeWidth={1.5}
                            aria-hidden="true"
                            className="text-triart-green sm:hidden"
                          />
                        </div>

                        <div>
                          <div className="flex items-center justify-between gap-4">
                            <h3 className="font-display text-xl sm:text-2xl">
                              {pillar.title}
                            </h3>
                            <Icon
                              size={22}
                              strokeWidth={1.5}
                              aria-hidden="true"
                              className="hidden shrink-0 text-triart-green sm:block"
                            />
                          </div>

                          <p className="mt-3 max-w-2xl text-sm leading-7 text-triart-ink/65 md:text-base">
                            {pillar.description}
                          </p>
                        </div>
                      </article>
                    </ScrollReveal>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Invitation à échanger */}
        <section className="px-6 pb-24 sm:px-10 md:px-14 lg:px-20">
          <div className="mx-auto max-w-[1440px]">
            <ScrollReveal direction="up">
              <div className="flex flex-col gap-6 rounded-[2rem] border border-triart-ink/15 p-8 sm:p-10 md:flex-row md:items-center md:justify-between md:p-14">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-triart-green">
                    <Check size={15} aria-hidden="true" />
                    Construisons une vision claire
                  </div>

                  <h2 className="mt-4 font-display text-2xl leading-tight sm:text-3xl md:text-4xl">
                    Chaque décision compte.
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-triart-ink/65 md:text-base">
                    Présentez-nous votre idée, vos objectifs et vos premières
                    questions. Un échange permettra de mieux comprendre votre
                    besoin et d’envisager les prochaines étapes.
                  </p>
                </div>

                <Link
                  to="/devis"
                  className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#263D32] px-6 py-4 text-sm font-semibold !text-[#F6F2EA] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#17211D] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#263D32] focus-visible:ring-offset-4 [&_svg]:!text-[#F6F2EA]"
                >
                  Parlons de votre projet
                  <ArrowRight
                    size={17}
                    aria-hidden="true"
                    className="!text-[#F6F2EA] transition-transform duration-300 group-hover:translate-x-1"
                  />
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
