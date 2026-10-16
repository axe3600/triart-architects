
import { Link } from 'react-router'
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
} from 'lucide-react'
import PageTransition from '../components/layout/PageTransition'
import ScrollReveal from '../components/ui/ScrollReveal'
import ContactCTA from '../sections/ContactCTA'

const architecturalPrinciples = [
  {
    number: '01',
    title: 'Composer les volumes',
    description:
      'Des lignes affirmées, des proportions maîtrisées et des formes soigneusement composées donnent à chaque projet une identité architecturale singulière.',
  },
  {
    number: '02',
    title: 'Révéler les matières',
    description:
      'Le verre, le bois, les textures minérales et les contrastes de matières participent au caractère du bâtiment et à la perception de ses espaces.',
  },
  {
    number: '03',
    title: 'Dialoguer avec le paysage',
    description:
      'La lumière, les ouvertures et la végétation contribuent à créer une relation plus riche entre l’architecture, ses occupants et son environnement.',
  },
]

export default function ArchitecturePage() {
  return (
    <PageTransition>
      <main className="bg-triart-cream text-triart-ink">
        {/* Hero */}
        <section className="px-6 pb-20 pt-36 sm:px-10 md:px-14 md:pb-28 md:pt-44 lg:px-20">
          <div className="mx-auto max-w-[1440px]">
            <ScrollReveal direction="left">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-triart-green">
                Architecture · Conception · Innovation
              </p>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={100} duration={1000}>
              <h1 className="mt-6 max-w-5xl font-display text-5xl font-medium leading-[1.08] tracking-tight sm:text-6xl md:text-8xl">
                Imaginer
                <br />
                <span className="italic text-[#687C68]">
                  autrement.
                </span>
              </h1>
            </ScrollReveal>

            <div className="mt-10 grid gap-8 md:grid-cols-2 md:items-end">
              <ScrollReveal direction="left" delay={150}>
                <p className="max-w-2xl text-base leading-8 text-triart-ink/75 md:text-lg">
                  L’architecture est une manière de donner forme aux idées,
                  de révéler le potentiel d’un lieu et de créer des espaces
                  qui associent identité, fonctionnalité et qualité d’usage.
                </p>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={200}>
                <div className="max-w-xl md:justify-self-end">
                  <p className="text-sm leading-7 text-triart-ink/65 md:text-base">
                    TriArt explore une architecture contemporaine où les
                    lignes, les volumes, les matières et la lumière
                    contribuent à une expression cohérente, attentive au
                    contexte et à l’environnement.
                  </p>

                  <a
                    href="#vision-architecturale"
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

        {/* Vidéo immersive — Architecture */}
        <section className="px-6 pb-20 sm:px-10 md:px-14 lg:px-20">
          <div className="mx-auto max-w-[1440px]">
            <ScrollReveal direction="zoom" duration={900}>
              <div className="group relative isolate min-h-[300px] overflow-hidden rounded-[2rem] bg-[#263D32] shadow-xl sm:min-h-[420px] md:min-h-[560px]">
                <video
                  className="absolute inset-0 h-full w-full object-cover"
                  src="/videos/architecture.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label="Vidéo illustrative d’architecture contemporaine"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-r from-[#17211D]/80 via-[#17211D]/35 to-transparent"
                />
                <div className="relative z-10 flex min-h-[300px] items-end p-7 sm:min-h-[420px] sm:p-12 md:min-h-[560px] md:p-16">
                  <div className="max-w-2xl text-[#F6F2EA]">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D9C8AC]">
                      Architecture contemporaine
                    </p>
                    <h2 className="mt-4 font-display text-3xl leading-tight sm:text-4xl md:text-6xl">
                      Imaginer les lieux.
                      <br />
                      Révéler leur potentiel.
                    </h2>
                    <p className="mt-5 max-w-xl text-sm leading-7 text-white/85 md:text-base">
                      Des volumes à la lumière, chaque décision participe à
                      créer des espaces expressifs, fonctionnels et harmonieux.
                    </p>
                    <a
                      href="#vision-architecturale"
                      className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#F6F2EA] px-5 py-3 text-sm font-semibold !text-[#263D32] transition duration-300 hover:-translate-y-1 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                    >
                      Découvrir notre vision
                      <ArrowDown size={16} aria-hidden="true" />
                    </a>
                  </div>
                </div>
                <div className="pointer-events-none absolute right-5 top-5 rounded-full border border-white/35 bg-black/20 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm sm:right-7 sm:top-7">
                  Architecture · TriArt
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Vision architecturale */}
        <section
          id="vision-architecturale"
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
                    Notre vision
                  </p>

                  <h2 className="mt-5 font-display text-3xl leading-tight sm:text-4xl md:text-6xl">
                    Chaque espace possède son identité.
                  </h2>

                  <p className="mt-6 max-w-2xl text-sm leading-7 text-triart-ink/70 md:text-base md:leading-8">
                    Une architecture réussie ne se limite pas à une forme
                    remarquable. Elle doit aussi répondre à un usage,
                    exprimer une intention et entretenir une relation
                    cohérente avec son environnement. Chaque choix de
                    composition contribue à l’expérience du lieu.
                  </p>

                  <Link
                    to="/projets"
                    className="group mt-9 inline-flex items-center gap-3 rounded-full bg-[#263D32] px-6 py-3.5 text-sm font-semibold !text-[#F6F2EA] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#17211D] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#263D32] focus-visible:ring-offset-4 focus-visible:ring-offset-[#EAE5DA] [&_svg]:!text-[#F6F2EA]"
                  >
                    Explorer nos réalisations
                    <ArrowUpRight size={17} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Principes architecturaux */}
        <section className="px-6 pb-24 sm:px-10 md:px-14 lg:px-20">
          <div className="mx-auto max-w-[1440px]">
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
              <div>
                <ScrollReveal direction="left">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-triart-green">
                    Notre démarche
                  </p>
                </ScrollReveal>

                <ScrollReveal direction="left" delay={100}>
                  <h2 className="mt-5 max-w-lg font-display text-3xl leading-tight sm:text-4xl md:text-5xl">
                    Concevoir avec intention.
                  </h2>
                </ScrollReveal>

                <ScrollReveal direction="left" delay={180}>
                  <p className="mt-6 max-w-lg text-sm leading-7 text-triart-ink/65 md:text-base">
                    Des premières intentions aux choix de composition,
                    chaque dimension du projet participe à créer une
                    architecture lisible, expressive et adaptée à son usage.
                  </p>
                </ScrollReveal>
              </div>

              <div className="border-t border-triart-ink/15">
                {architecturalPrinciples.map((principle, index) => (
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

        {/* Invitation à découvrir les projets */}
        <section className="px-6 pb-24 sm:px-10 md:px-14 lg:px-20">
          <div className="mx-auto max-w-[1440px]">
            <ScrollReveal direction="up">
              <div className="flex flex-col gap-6 rounded-[2rem] border border-triart-ink/15 p-8 sm:p-10 md:flex-row md:items-center md:justify-between md:p-14">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-triart-green">
                    <Check size={15} aria-hidden="true" />
                    De l’idée à l’espace
                  </div>

                  <h2 className="mt-4 font-display text-2xl leading-tight sm:text-3xl md:text-4xl">
                    Votre projet mérite une vision singulière.
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-triart-ink/65 md:text-base">
                    Découvrez les réalisations du cabinet et imaginez les
                    possibilités qu’une réflexion architecturale adaptée
                    peut ouvrir pour votre projet.
                  </p>
                </div>

                <Link
                  to="/devis"
                  className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#263D32] px-6 py-4 text-sm font-semibold !text-[#F6F2EA] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#17211D] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#263D32] focus-visible:ring-offset-4 [&_svg]:!text-[#F6F2EA]"
                >
                  Parlons de votre projet
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
