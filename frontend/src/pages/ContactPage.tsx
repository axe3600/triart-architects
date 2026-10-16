
import { ArrowDownRight, Mail, MapPin, Phone } from 'lucide-react'
import PageTransition from '../components/layout/PageTransition'
import ScrollReveal from '../components/ui/ScrollReveal'
import ContactForm from '../components/forms/ContactForm'

export default function ContactPage() {
  return (
    <PageTransition>
      <main className="min-h-screen overflow-hidden bg-[#F6F2EA] text-[#17211D]">
        {/* Introduction */}
        <section className="px-5 pb-14 pt-32 sm:px-8 md:pb-20 md:pt-40 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <ScrollReveal direction="left">
              <p className="mb-6 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#667766]">
                <span className="h-px w-8 bg-[#667766]" />
                Entrons en contact
              </p>
            </ScrollReveal>

            <div className="grid gap-8 md:grid-cols-[1.35fr_0.85fr] md:items-end">
              <ScrollReveal direction="left" delay={100} duration={1000}>
                <h1 className="max-w-3xl text-5xl font-light leading-[1.04] tracking-tight sm:text-6xl lg:text-8xl">
                  Parlons de
                  <br />
                  <span className="font-serif italic text-[#667766]">
                    votre projet.
                  </span>
                </h1>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={150}>
                <div className="max-w-md border-l-2 border-[#294D3D]/25 py-2 pl-5 md:justify-self-end">
                  <p className="text-base leading-8 text-[#59635A]">
                    Une idée, un besoin ou une question ? Présentez-nous
                    votre projet afin de préparer un premier échange.
                  </p>
                  <a
                    href="#formulaire"
                    className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#294D3D] transition-colors hover:text-[#17211D] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#294D3D]"
                  >
                    Commençons la conversation
                    <ArrowDownRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1 motion-reduce:transition-none"
                    />
                  </a>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Espace de contact */}
        <section className="px-5 pb-20 sm:px-8 md:pb-28 lg:px-16">
          <div className="mx-auto grid max-w-7xl items-stretch gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:gap-8">
            {/* Carte des coordonnées */}
            <ScrollReveal direction="left" delay={0} duration={1000} threshold={0.15}>
              <aside className="relative h-full min-h-[540px] overflow-hidden rounded-[2rem] bg-[#263D32] p-7 text-[#F6F2EA] shadow-[0_20px_60px_rgba(23,33,29,0.10)] sm:p-10 lg:p-12">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full border border-white/10"
                />

                <div className="relative z-10 flex h-full flex-col">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C3CEBF]">
                    Le cabinet
                  </p>

                  <h2 className="mt-7 max-w-md text-3xl font-light leading-tight sm:text-4xl">
                    Un premier échange,
                    <br />
                    une nouvelle
                    <br className="hidden sm:block" /> perspective.
                  </h2>

                  <p className="mt-5 max-w-md text-sm leading-7 text-[#D4DCD2]">
                    Contactez l'équipe TriArt pour discuter de votre besoin,
                    de vos attentes et des prochaines étapes envisageables.
                  </p>

                  <div className="mt-10 space-y-7 border-t border-white/15 pt-8">
                    <div className="flex items-start gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white/5">
                        <MapPin size={19} aria-hidden="true" className="text-[#D4DCD2]" />
                      </span>
                      <div className="pt-1">
                        <p className="text-xs uppercase tracking-[0.15em] text-[#C3CEBF]">
                          Adresse
                        </p>
                        <p className="mt-2 text-sm leading-6 text-[#F6F2EA]">
                          Adresse du cabinet à confirmer
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white/5">
                        <Mail size={19} aria-hidden="true" className="text-[#D4DCD2]" />
                      </span>
                      <div className="pt-1">
                        <p className="text-xs uppercase tracking-[0.15em] text-[#C3CEBF]">
                          E-mail
                        </p>
                        <p className="mt-2 text-sm leading-6 text-[#F6F2EA]">
                          Adresse e-mail à confirmer
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white/5">
                        <Phone size={19} aria-hidden="true" className="text-[#D4DCD2]" />
                      </span>
                      <div className="pt-1">
                        <p className="text-xs uppercase tracking-[0.15em] text-[#C3CEBF]">
                          Téléphone
                        </p>
                        <p className="mt-2 text-sm leading-6 text-[#F6F2EA]">
                          Numéro à confirmer
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-auto pt-10">
                    <a
                      href="#formulaire"
                      className="group inline-flex w-full items-center justify-between gap-4 rounded-full border border-white/20 px-5 py-4 text-sm font-semibold text-[#F6F2EA] transition-all duration-300 hover:border-white/40 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F6F2EA] motion-reduce:transition-none sm:w-auto"
                    >
                      Remplir le formulaire
                      <ArrowDownRight
                        size={18}
                        aria-hidden="true"
                        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1 motion-reduce:transition-none"
                      />
                    </a>
                  </div>
                </div>
              </aside>
            </ScrollReveal>

            {/* Carte du formulaire */}
            <ScrollReveal direction="right" delay={150} duration={1000} threshold={0.15}>
              <div
                id="formulaire"
                className="scroll-mt-28 rounded-[2rem] border border-[#17211D]/[0.06] bg-[#FCFAF6] p-6 shadow-[0_20px_60px_rgba(23,33,29,0.05)] sm:p-9 lg:p-12"
              >
                <div className="mb-8 border-b border-[#17211D]/10 pb-7 sm:mb-10 sm:pb-9">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#667766]">
                    Votre message
                  </p>

                  <h2 className="mt-5 max-w-xl text-3xl font-light leading-tight sm:text-4xl">
                    Comment pouvons-nous vous aider ?
                  </h2>

                  <p className="mt-4 max-w-xl text-sm leading-7 text-[#59635A]">
                    Décrivez-nous votre idée, vos besoins ou vos envies.
                    Chaque projet commence par une conversation.
                  </p>
                </div>

                <ContactForm />
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
    </PageTransition>
  )
}
