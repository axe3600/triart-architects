
import { Link } from 'react-router'
import {
  ArrowLeft,
  ArrowRight,
  ClipboardList,
  Sparkles,
  CheckCircle2,
  Clock3,
  ShieldCheck,
} from 'lucide-react'
import PageTransition from '../components/layout/PageTransition'
import ContactForm from '../components/forms/ContactForm'

const steps = [
  {
    number: '01',
    title: 'Présentation de votre besoin.',
    description: 'Comprendre votre idée et vos objectifs.',
  },
  {
    number: '02',
    title: 'Étude des informations communiquées.',
    description: 'Prendre connaissance des grandes lignes du projet.',
  },
  {
    number: '03',
    title: 'Échange sur les possibilités et la suite à donner.',
    description: 'Préparer les prochaines étapes ensemble.',
  },
]

export default function QuotePage() {
  return (
    <PageTransition>
      <main className="min-h-screen overflow-hidden bg-[#F6F2EA] text-[#17211D]">
        {/* Introduction */}
        <section className="relative px-5 pb-12 pt-32 sm:px-8 md:pb-16 md:pt-40 lg:px-16">
          {/* Décoration de fond */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-32 top-24 h-80 w-80 rounded-full border border-[#263D32]/[0.06] sm:-right-20"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-12 top-40 h-56 w-56 rounded-full border border-[#263D32]/[0.06]"
          />

          <div className="relative mx-auto max-w-7xl">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 text-sm text-[#59635A] transition-colors duration-300 hover:text-[#263D32]"
            >
              <ArrowLeft
                size={16}
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />
              Retour au contact
            </Link>

            <div className="mt-10 grid gap-8 md:grid-cols-[1.5fr_1fr] md:items-end">
              <div
                style={{ animation: 'quoteReveal 750ms ease-out both' }}
              >
                <p className="mb-5 inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[#667766]">
                  <span className="h-px w-7 bg-[#667766]" />
                  Votre projet commence ici
                </p>

                <h1 className="text-5xl font-light leading-[1.05] tracking-tight sm:text-6xl lg:text-8xl">
                  Imaginons
                  <br />
                  <span className="font-serif italic text-[#667766]">
                    votre projet.
                  </span>
                </h1>
              </div>

              <div
                className="max-w-md md:justify-self-end"
                style={{
                  animation: 'quoteReveal 750ms ease-out 150ms both',
                }}
              >
                <p className="text-base leading-7 text-[#59635A]">
                  Présentez-nous votre besoin, vos objectifs et les grandes
                  lignes de votre projet. Ces premières informations nous
                  aideront à préparer les échanges.
                </p>

                <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3 text-xs text-[#667766]">
                  <span className="inline-flex items-center gap-2">
                    <CheckCircle2 size={15} />
                    Demande personnalisée
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Clock3 size={15} />
                    Premier échange
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-12 h-px origin-left bg-[#263D32]/15 sm:mt-16" />
          </div>
        </section>

        {/* Formulaire et accompagnement */}
        <section className="px-5 pb-20 sm:px-8 md:pb-28 lg:px-16">
          <div className="mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
            {/* Panneau d'accompagnement */}
            <aside
              className="group relative isolate h-fit overflow-hidden rounded-sm bg-[#263D32] p-7 text-[#F6F2EA] shadow-xl shadow-[#263D32]/10 transition-shadow duration-500 hover:shadow-2xl hover:shadow-[#263D32]/15 sm:p-10 lg:sticky lg:top-8 lg:p-11"
              style={{
                animation: 'quoteReveal 800ms ease-out 100ms both',
              }}
            >
              {/* Cercles décoratifs animés */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-20 -top-20 -z-10 h-64 w-64 rounded-full border border-white/10 transition-transform duration-1000 group-hover:scale-110"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-10 -top-10 -z-10 h-44 w-44 rounded-full border border-white/10 transition-transform duration-1000 group-hover:scale-110"
              />

              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 transition-colors duration-300 group-hover:border-[#D9C8AC]/70">
                <ClipboardList
                  size={24}
                  strokeWidth={1.3}
                  className="text-[#D9C8AC] transition-transform duration-500 group-hover:-rotate-6"
                />
              </div>

              <p className="mt-8 text-xs uppercase tracking-[0.22em] text-[#D9C8AC]">
                Votre demande
              </p>

              <h2 className="mt-4 text-3xl font-light leading-tight sm:text-4xl">
                Préparons votre demande.
              </h2>

              <p className="mt-5 text-sm leading-7 text-[#D4DCD2]">
                Pour mieux comprendre votre besoin, pensez à préciser le type
                de projet, sa localisation, vos attentes et votre calendrier
                prévisionnel.
              </p>

              <div className="mt-9 border-t border-white/20 pt-7">
                <p className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#D9C8AC]">
                  <Sparkles size={14} />
                  Les prochaines étapes
                </p>

                <ol className="mt-6 space-y-6">
                  {steps.map((step, index) => (
                    <li
                      key={step.number}
                      className="group/step flex gap-4"
                      style={{
                        animation: `quoteReveal 650ms ease-out ${250 + index * 120}ms both`,
                      }}
                    >
                      <span className="pt-0.5 text-sm text-[#D9C8AC] transition-transform duration-300 group-hover/step:translate-x-1">
                        {step.number}
                      </span>
                      <div>
                        <p className="text-sm leading-6">{step.title}</p>
                        <p className="mt-1 text-xs leading-5 text-[#C3CEBF]">
                          {step.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="mt-8 flex gap-3 border-t border-white/15 pt-6">
                <ShieldCheck
                  size={19}
                  className="mt-0.5 shrink-0 text-[#D9C8AC]"
                />
                <p className="text-xs leading-6 text-[#C3CEBF]">
                  Cette présentation décrit un parcours indicatif. Les délais
                  et modalités réels restent à confirmer par le cabinet.
                </p>
              </div>
            </aside>

            {/* Formulaire */}
            <div
              className="min-w-0 py-2 sm:py-5"
              style={{
                animation: 'quoteReveal 800ms ease-out 250ms both',
              }}
            >
              <div className="flex items-center gap-3">
                <span className="h-px w-7 bg-[#667766]" />
                <p className="text-xs uppercase tracking-[0.25em] text-[#667766]">
                  Demande de devis
                </p>
              </div>

              <h2 className="mt-5 text-3xl font-light leading-tight sm:text-4xl lg:text-5xl">
                Décrivez-nous votre besoin.
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#59635A]">
                Complétez les champs du formulaire pour présenter votre
                demande. Les informations permettront de préparer les
                échanges autour de votre projet.
              </p>

              <div className="mt-8 rounded-sm border border-[#263D32]/10 bg-white/45 p-5 transition-colors duration-300 hover:border-[#263D32]/20 sm:p-7 md:p-9">
                <ContactForm />
              </div>

              <div className="mt-8 flex flex-col gap-5 border-t border-[#263D32]/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-medium text-[#263D32]">
                    Votre projet mérite une attention particulière.
                  </p>
                  <p className="mt-1 text-xs leading-5 text-[#59635A]">
                    Découvrez aussi les réalisations du cabinet.
                  </p>
                </div>

                <Link
                  to="/projets"
                  className="group inline-flex shrink-0 items-center gap-2 text-sm text-[#263D32] transition-colors duration-300 hover:text-[#667766]"
                >
                  Découvrir nos projets
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <style>{`
          @keyframes quoteReveal {
            from {
              opacity: 0;
              transform: translateY(22px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @media (prefers-reduced-motion: reduce) {
            [style*="quoteReveal"] {
              animation: none !important;
            }
          }
        `}</style>
      </main>
    </PageTransition>
  )
}
