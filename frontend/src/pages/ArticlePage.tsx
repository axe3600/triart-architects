
import { Link, useParams } from "react-router";
import { ArrowLeft, ArrowRight, Clock3 } from "lucide-react";
import PageTransition from "../components/layout/PageTransition";
import ScrollReveal from "../components/ui/ScrollReveal";
import { getNewsBySlug, news } from "../data/news";
import ContactCTA from "../sections/ContactCTA";

export default function ArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getNewsBySlug(slug) : undefined;

  if (!article) {
    return (
      <PageTransition>
        <main className="flex min-h-[70vh] items-center justify-center bg-[#F6F2EA] px-5 pt-24 text-[#17211D]">
          <div className="max-w-lg text-center">
            <ScrollReveal direction="left">
              <p className="text-xs uppercase tracking-[0.25em] text-[#667766]">
                Journal TriArt
              </p>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={100}>
              <h1 className="mt-5 text-4xl font-light sm:text-5xl">
                Article introuvable
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={150}>
              <p className="mt-5 leading-7 text-[#59635A]">
                Cet article n&apos;existe pas ou n&apos;est plus disponible.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={200}>
              <Link
                to="/actualites"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#263D32] px-6 py-3 text-sm text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#17211D] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#263D32]"
              >
                <ArrowLeft size={16} />
                Retour aux actualités
              </Link>
            </ScrollReveal>
          </div>
        </main>
      </PageTransition>
    );
  }

  const relatedArticles = news
    .filter((item) => item.id !== article.id)
    .slice(0, 2);

  return (
    <PageTransition>
      <main className="min-h-screen bg-[#F6F2EA] text-[#17211D]">
        {/* Navigation de retour */}
        <section className="px-5 pt-28 sm:px-8 md:pt-36 lg:px-16">
          <div className="mx-auto max-w-4xl">
            <ScrollReveal direction="left">
              <Link
                to="/actualites"
                className="group inline-flex items-center gap-3 text-sm text-[#59635A] transition-colors duration-300 hover:text-[#263D32] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#263D32]"
              >
                <ArrowLeft
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-x-1"
                />
                Toutes les actualités
              </Link>
            </ScrollReveal>
          </div>
        </section>

        {/* Titre et introduction */}
        <article className="px-5 pb-16 pt-10 sm:px-8 md:pb-24 lg:px-16">
          <div className="mx-auto max-w-4xl">
            <ScrollReveal direction="left">
              <p className="text-xs uppercase tracking-[0.25em] text-[#667766]">
                {article.category}
              </p>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={100} duration={1000}>
              <h1 className="mt-6 text-4xl font-light leading-[1.1] tracking-tight sm:text-5xl lg:text-7xl">
                {article.title}
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={150} duration={900}>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-[#59635A]">
                {article.excerpt}
              </p>
            </ScrollReveal>

            {/* Métadonnées éditoriales */}
            <ScrollReveal direction="up" delay={100}>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-y border-[#D9D4C9] py-5 text-sm text-[#667766]">
                <span>{article.author}</span>

                <time
                  dateTime={new Date(article.publishedAt).toISOString()}
                >
                  {new Date(article.publishedAt).toLocaleDateString(
                    "fr-FR",
                    {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    },
                  )}
                </time>

                <span className="inline-flex items-center gap-2">
                  <Clock3 size={15} aria-hidden="true" />
                  {article.readingTime} min de lecture
                </span>
              </div>
            </ScrollReveal>

            {/* Image de couverture */}
            <ScrollReveal
              direction="zoom"
              delay={100}
              duration={1100}
              threshold={0.08}
            >
              <div className="group mt-10 aspect-[4/3] overflow-hidden bg-[#E5DED1] sm:aspect-[16/9]">
                <img
                  src={article.coverImage}
                  alt={article.title}
                  fetchPriority="high"
                  className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.035] motion-reduce:transition-none"
                />
              </div>
            </ScrollReveal>

            {/* Contenu éditorial */}
            <div className="mx-auto mt-12 max-w-3xl">
              {article.content
                .split("\n")
                .filter((paragraph) => paragraph.trim().length > 0)
                .map((paragraph, index) => (
                  <ScrollReveal
                    key={`${article.id}-paragraph-${index}`}
                    direction={index % 2 === 0 ? "right" : "up"}
                    delay={index % 2 === 0 ? 50 : 0}
                    duration={800}
                    threshold={0.12}
                  >
                    <p className="mb-6 text-base leading-8 text-[#465247] sm:text-lg">
                      {paragraph}
                    </p>
                  </ScrollReveal>
                ))}

              <ScrollReveal direction="left" delay={100}>
                <p className="mt-10 border-l-2 border-[#A9B8A6] pl-5 text-sm leading-7 text-[#667766]">
                  Les articles actuellement présentés sont des contenus
                  de démonstration. Leur version définitive devra être
                  validée par le cabinet avant publication.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </article>

        {/* Suggestions de lecture */}
        {relatedArticles.length > 0 && (
          <section className="border-t border-[#D9D4C9] px-5 py-16 sm:px-8 md:py-24 lg:px-16">
            <div className="mx-auto max-w-7xl">
              <ScrollReveal direction="left">
                <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#667766]">
                  Continuer la lecture
                </p>
              </ScrollReveal>

              <ScrollReveal direction="left" delay={100}>
                <h2 className="mb-10 text-3xl font-light sm:text-4xl">
                  D&apos;autres regards.
                </h2>
              </ScrollReveal>

              <div className="grid gap-8 sm:grid-cols-2">
                {relatedArticles.map((related, index) => (
                  <ScrollReveal
                    key={related.id}
                    direction={index === 0 ? "left" : "right"}
                    delay={index * 120}
                    duration={900}
                    threshold={0.12}
                  >
                    <Link
                      to={`/actualites/${related.slug}`}
                      className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#263D32]"
                    >
                      <div className="aspect-[4/3] overflow-hidden bg-[#E5DED1]">
                        <img
                          src={related.coverImage}
                          alt={related.title}
                          loading="lazy"
                          decoding="async"
                          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045] motion-reduce:transition-none"
                        />
                      </div>

                      <p className="mt-5 text-xs uppercase tracking-[0.15em] text-[#667766]">
                        {related.category}
                      </p>

                      <h3 className="mt-3 text-2xl font-light transition-colors duration-300 group-hover:text-[#667766]">
                        {related.title}
                      </h3>

                      <span className="mt-4 inline-flex items-center gap-2 text-sm">
                        Lire l&apos;article
                        <ArrowRight
                          size={15}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                          aria-hidden="true"
                        />
                      </span>
                    </Link>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>
        )}

        <ContactCTA />
      </main>
    </PageTransition>
  );
}
