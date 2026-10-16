import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import PageTransition from "../components/layout/PageTransition";
import ScrollReveal from "../components/ui/ScrollReveal";

// Rubriques provisoires à vérifier avant la mise en production.
const privacySections = [
  {
    title: "1. Responsable du traitement",
    paragraphs: [
      "Le responsable du traitement des données doit être identifié avec ses coordonnées officielles avant la publication de cette page.",
    ],
  },
  {
    title: "2. Données susceptibles d'être collectées",
    paragraphs: [
      "Selon les fonctionnalités effectivement mises en place, le site peut recueillir les informations transmises volontairement dans les formulaires de contact ou de demande de devis.",
      "Les catégories de données réellement collectées devront être précisées après vérification du fonctionnement technique du site.",
    ],
  },
  {
    title: "3. Finalités de la collecte",
    paragraphs: [
      "Les informations communiquées par les visiteurs peuvent servir à répondre aux demandes, échanger sur un projet et assurer le suivi des contacts, uniquement si ces traitements sont effectivement mis en œuvre.",
    ],
  },
  {
    title: "4. Durée de conservation",
    paragraphs: [
      "Les durées de conservation doivent être définies selon la nature des données, leur finalité et les obligations applicables au responsable du traitement.",
    ],
  },
  {
    title: "5. Partage et destinataires",
    paragraphs: [
      "Les destinataires des données, les éventuels prestataires techniques et les transferts hors du pays doivent être identifiés selon l'architecture réelle du site.",
    ],
  },
  {
    title: "6. Sécurité des données",
    paragraphs: [
      "Le responsable du site doit mettre en place des mesures techniques et organisationnelles adaptées aux données effectivement traitées.",
    ],
  },
  {
    title: "7. Droits des personnes",
    paragraphs: [
      "Les droits applicables aux personnes concernées, les modalités d'exercice de ces droits et l'autorité compétente doivent être précisés selon la législation applicable.",
    ],
  },
  {
    title: "8. Cookies et technologies similaires",
    paragraphs: [
      "Les cookies, outils de mesure d'audience et autres technologies doivent être inventoriés. Les informations et choix proposés aux visiteurs devront correspondre aux outils réellement utilisés.",
    ],
  },
  {
    title: "9. Contact",
    paragraphs: [
      "Les coordonnées du responsable à contacter pour toute question relative aux données personnelles doivent être renseignées avant publication.",
    ],
  },
];

export default function PrivacyPage() {
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
                Protection des données
              </p>
              <h1 className="max-w-5xl text-5xl font-light leading-[1.05] tracking-tight sm:text-6xl lg:text-8xl">
                Votre vie
                <br />
                <span className="font-serif italic text-[#667766]">
                  privée.
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={180} duration={850}>
              <p className="mt-7 max-w-2xl text-sm leading-7 text-[#59635A] sm:text-base">
                Cette trame explique les rubriques à documenter concernant les
                données personnelles. Elle doit être complétée et vérifiée
                avant la mise en ligne.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Rubriques révélées au défilement */}
        <section className="px-5 pb-20 sm:px-8 md:pb-28 lg:px-16">
          <div className="mx-auto max-w-4xl">
            {privacySections.map((section, index) => (
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
                  Important avant publication
                </p>

                <p className="mt-3 text-sm leading-7 text-[#59635A]">
                  Cette page est un modèle de travail, et non un avis juridique.
                  Son contenu doit correspondre aux pratiques réelles du site et
                  à la législation applicable.
                </p>

                <Link
                  to="/mentions-legales"
                  className="group mt-5 inline-flex items-center gap-2 text-sm underline underline-offset-4 transition-colors duration-300 hover:text-[#667766]"
                >
                  Consulter les mentions légales
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
