
import { Link } from "react-router";
import {
  ArrowDownRight,
  ArrowRight,
  Compass,
  Layers3,
  Lightbulb,
  Leaf,
} from "lucide-react";
import PageTransition from "../components/layout/PageTransition";
import ScrollReveal from "../components/ui/ScrollReveal";
import { services } from "../data/services";
import ContactCTA from "../sections/ContactCTA";

const principles = [
  {
    number: "01",
    title: "Comprendre avant de concevoir",
    description:
      "Chaque projet commence par l'écoute, l'analyse du contexte et la compréhension des besoins des utilisateurs.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Donner du sens à la matière",
    description:
      "Les volumes, les textures, la lumière et les matériaux participent ensemble à l'identité d'un lieu.",
    icon: Layers3,
  },
  {
    number: "03",
    title: "Imaginer des solutions durables",
    description:
      "La réflexion architecturale peut intégrer le climat, les usages, la durabilité et l'évolution des espaces.",
    icon: Leaf,
  },
  {
    number: "04",
    title: "Explorer de nouvelles idées",
    description:
      "La créativité et la recherche permettent d'envisager des réponses adaptées aux contraintes de chaque projet.",
    icon: Lightbulb,
  },
];

export default function ExpertisePage() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-[#F6F2EA] text-[#17211D]">
        {/* Introduction éditoriale */}
        <section className="px-5 pb-16 pt-32 sm:px-8 md:pb-24 md:pt-40 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <ScrollReveal direction="left" duration={850}>
              <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[#667766]">
                Notre approche
              </p>
            </ScrollReveal>

            <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-end">
              <ScrollReveal direction="left" duration={1000}>
                <h1 className="max-w-5xl text-5xl font-light leading-[1.05] tracking-tight sm:text-6xl lg:text-8xl">
                  Penser les lieux,
                  <br />
                  <span className="font-serif italic text-[#667766]">
                    autrement.
                  </span>
                </h1>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={150} duration={900}>
                <div className="max-w-lg md:justify-self-end">
                  <p className="text-lg leading-8 text-[#59635A]">
                    Une démarche architecturale attentive aux personnes,
                    aux usages et à l&apos;environnement. L&apos;objectif est de
                    concevoir des espaces cohérents avec leur contexte et
                    leur fonction.
                  </p>

                  <a
                    href="#principes"
                    className="group mt-7 inline-flex items-center gap-3 text-sm transition-colors duration-300 hover:text-[#667766] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#263D32]"
                  >
                    Découvrir notre approche
                    <ArrowDownRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
                    />
                  </a>
                </div>
              </ScrollReveal>
            </div>

            {/* Visuel principal */}
            <ScrollReveal
              direction="zoom"
              delay={100}
              duration={1100}
              threshold={0.08}
            >
              <div className="group mt-14 aspect-[4/3] overflow-hidden bg-[#E5DED1] sm:aspect-[16/7]">
                <img
                  src="/images/expertise/approche-architecture.jpg"
                  alt="Visuel architectural illustrant l'approche du cabinet"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.035] motion-reduce:transition-none"
                />
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Principes de conception */}
        <section
          id="principes"
          className="scroll-mt-24 bg-[#263D32] px-5 py-16 text-[#F6F2EA] sm:px-8 md:py-24 lg:px-16"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-3xl md:mb-16">
              <ScrollReveal direction="left">
                <p className="mb-5 text-xs uppercase tracking-[0.25em] text-[#C3CEBF]">
                  Nos principes
                </p>
              </ScrollReveal>

              <ScrollReveal direction="left" delay={100} duration={950}>
                <h2 className="text-4xl font-light leading-tight sm:text-5xl lg:text-6xl">
                  Une vision guidée par l&apos;usage et la sensibilité.
                </h2>
              </ScrollReveal>
            </div>

            <div className="grid border-t border-white/20 sm:grid-cols-2">
              {principles.map((principle, index) => {
                const Icon = principle.icon;

                return (
                  <ScrollReveal
                    key={principle.number}
                    direction={index % 2 === 0 ? "left" : "right"}
                    delay={(index % 2) * 120}
                    duration={850}
                    threshold={0.12}
                  >
                    <article className="group h-full border-b border-white/20 py-8 transition-colors duration-300 hover:bg-white/[0.035] sm:px-6 sm:py-10 sm:even:border-l sm:even:pl-10">
                      <div className="mb-8 flex items-center justify-between">
                        <span className="text-sm text-[#C3CEBF]">
                          {principle.number}
                        </span>

                        <Icon
                          size={23}
                          strokeWidth={1.3}
                          className="text-[#C3CEBF] transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110"
                          aria-hidden="true"
                        />
                      </div>

                      <h3 className="max-w-sm text-2xl font-light sm:text-3xl">
                        {principle.title}
                      </h3>

                      <p className="mt-4 max-w-md text-sm leading-7 text-[#D4DCD2]">
                        {principle.description}
                      </p>
                    </article>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Domaines d'expertise */}
        <section className="px-5 py-16 sm:px-8 md:py-24 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <ScrollReveal direction="left">
                  <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#667766]">
                    Domaines d&apos;intervention
                  </p>
                </ScrollReveal>

                <ScrollReveal direction="left" delay={100}>
                  <h2 className="text-4xl font-light sm:text-5xl">
                    Des expertises complémentaires.
                  </h2>
                </ScrollReveal>
              </div>

              <ScrollReveal direction="right" delay={150}>
                <p className="max-w-md text-sm leading-7 text-[#59635A]">
                  Les domaines présentés ci-dessous sont provisoires.
                  Ils devront être confirmés et précisés selon les
                  prestations réellement proposées par le cabinet.
                </p>
              </ScrollReveal>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {services.map((service, index) => (
                <ScrollReveal
                  key={service.id}
                  direction={index % 2 === 0 ? "left" : "right"}
                  delay={(index % 2) * 120}
                  duration={850}
                  threshold={0.12}
                >
                  <article className="group h-full border border-[#D9D4C9] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#263D32] hover:bg-[#EDE8DE] hover:shadow-lg sm:p-8 motion-reduce:transform-none">
                    <div className="mb-10 flex items-center justify-between">
                      <span className="text-xs uppercase tracking-[0.2em] text-[#667766]">
                        Expertise {String(index + 1).padStart(2, "0")}
                      </span>

                      <ArrowDownRight
                        size={20}
                        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
                        aria-hidden="true"
                      />
                    </div>

                    <h3 className="text-2xl font-light sm:text-3xl">
                      {service.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-[#59635A]">
                      {service.shortDescription}
                    </p>

                    <Link
                      to={`/services/${service.slug}`}
                      className="mt-7 inline-flex items-center gap-2 text-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#263D32]"
                    >
                      Découvrir
                      <ArrowRight
                        size={15}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </Link>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <ContactCTA />
      </main>
    </PageTransition>
  );
}
