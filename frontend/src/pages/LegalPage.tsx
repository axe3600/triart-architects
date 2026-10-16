import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import PageTransition from "../components/layout/PageTransition";
import ScrollReveal from "../components/ui/ScrollReveal";

// Rubriques légales à compléter avec les informations officielles.
const legalSections = [
  {
    title: "1. Éditeur du site",
    paragraphs: [
      "Nom commercial : TriArt Architects.",
      "Raison sociale, forme juridique, adresse du siège, immatriculation et coordonnées officielles : informations à renseigner par le responsable du site.",
    ],
  },
  {
    title: "2. Responsable de publication",
    paragraphs: [
      "Le nom et les coordonnées du responsable de publication doivent être ajoutés avant la mise en ligne définitive.",
    ],
  },
  {
    title: "3. Hébergement",
    paragraphs: [
      "Le nom, l'adresse et les coordonnées de l'hébergeur devront être renseignés après confirmation du service d'hébergement retenu.",
    ],
  },
  {
    title: "4. Propriété intellectuelle",
    paragraphs: [
      "Les textes, photographies, plans, illustrations, logos et autres éléments publiés sur le site doivent être utilisés conformément aux droits de leurs auteurs et titulaires.",
      "Les conditions précises de propriété intellectuelle et d'utilisation des contenus doivent être validées par le responsable du site.",
    ],
  },
  {
    title: "5. Responsabilité",
    paragraphs: [
      "Les informations présentées sur ce site ont vocation à décrire les activités et les réalisations du cabinet. Leur exactitude et leur actualisation doivent être vérifiées avant publication.",
    ],
  },
  {
    title: "6. Contact",
    paragraphs: [
      "Les coordonnées officielles permettant de joindre l'éditeur du site doivent être renseignées dans cette rubrique.",
    ],
  },
];

export default function LegalPage() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-[#F6F2EA] text-[#17211D]">
        {/* En-tête animé */}
        <section className="px-5 pb-12 pt-32 sm:px-8 md:pb-16 md:pt-40 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <ScrollReveal direction="left" duration={800}>
              <Link
                to="/"
                className="group inline-flex items-center gap-2 text-sm text-[#59635A] transition-colors duration-300 hover:text-[#263D32]"
              >
                <ArrowLeft
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-x-1"
                />
                Retour à l'accueil
              </Link>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={100} duration={850}>
              <p className="mb-5 mt-10 text-xs uppercase tracking-[0.3em] text-[#667766]">
                Informations juridiques
              </p>
              <h1 className="max-w-4xl text-5xl font-light leading-[1.05] tracking-tight sm:text-6xl lg:text-8xl">
                Mentions
                <br />
                <span className="font-serif italic text-[#667766]">
                  légales.
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={180} duration={850}>
              <p className="mt-7 max-w-2xl text-sm leading-7 text-[#59635A] sm:text-base">
                Cette page constitue une trame de travail. Les informations
                manquantes doivent être complétées et le contenu vérifié avant
                la publication du site.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Rubriques révélées au défilement */}
        <section className="px-5 pb-20 sm:px-8 md:pb-28 lg:px-16">
          <div className="mx-auto max-w-4xl">
            {legalSections.map((section, index) => (
              <ScrollReveal
                key={section.title}
                direction={index % 2 === 0 ? "left" : "up"}
                delay={index % 2 === 0 ? 0 : 70}
                duration={750}
              >
                <article className="grid gap-4 border-t border-[#D9D4C9] py-8 sm:grid-cols-[0.8fr_1.2fr] sm:gap-10 sm:py-10">
                  <h2 className="text-xl font-light sm:text-2xl">
                    {section.title}
                  </h2>

                  <div className="space-y-4">
                    {section.paragraphs.map((paragraph, paragraphIndex) => (
                      <p
                        key={`${index}-${paragraphIndex}`}
                        className="text-sm leading-7 text-[#59635A]"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </article>
              </ScrollReveal>
            ))}

            <ScrollReveal direction="zoom" duration={800}>
              <div className="mt-8 border border-[#D9D4C9] p-6 transition-colors duration-300 hover:border-[#A9B8A6] sm:p-8">
                <p className="text-sm font-medium">
                  À vérifier avant publication
                </p>

                <p className="mt-3 text-sm leading-7 text-[#59635A]">
                  Cette trame ne constitue pas une validation juridique. Les
                  mentions doivent être adaptées à l'identité réelle du
                  responsable du site, à son pays d'établissement, à son activité
                  et aux règles applicables.
                </p>

                <Link
                  to="/confidentialite"
                  className="group mt-5 inline-flex items-center gap-2 text-sm underline underline-offset-4 transition-colors duration-300 hover:text-[#667766]"
                >
                  Consulter la politique de confidentialité
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
