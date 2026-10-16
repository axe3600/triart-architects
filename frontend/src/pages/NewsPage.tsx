
import { useMemo, useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import PageTransition from "../components/layout/PageTransition";
import ScrollReveal from "../components/ui/ScrollReveal";
import { news } from "../data/news";
import ContactCTA from "../sections/ContactCTA";

const categories = [
  "Toutes",
  ...new Set(news.map((article) => article.category)),
];

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState("Toutes");

  const filteredArticles = useMemo(() => {
    if (activeCategory === "Toutes") {
      return news;
    }

    return news.filter(
      (article) => article.category === activeCategory,
    );
  }, [activeCategory]);

  const featuredArticle = filteredArticles[0];
  const remainingArticles = filteredArticles.slice(1);

  return (
    <PageTransition>
      <main className="min-h-screen bg-[#F6F2EA] text-[#17211D]">
        {/* En-tête */}
        <section className="px-5 pb-12 pt-32 sm:px-8 md:pb-16 md:pt-40 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <ScrollReveal direction="left" duration={850}>
              <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#667766]">
                Journal du cabinet
              </p>
            </ScrollReveal>

            <div className="grid gap-8 md:grid-cols-[1.5fr_1fr] md:items-end">
              <ScrollReveal direction="left" duration={1000}>
                <h1 className="text-5xl font-light leading-[1.05] tracking-tight sm:text-6xl lg:text-8xl">
                  Idées,
                  <br />
                  <span className="font-serif italic text-[#667766]">
                    matières &amp; regards.
                  </span>
                </h1>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={150} duration={900}>
                <p className="max-w-md text-base leading-7 text-[#59635A] md:justify-self-end">
                  Retrouvez les actualités, les réflexions et les
                  inspirations autour de l&apos;architecture, du design et
                  de la conception des espaces.
                </p>
              </ScrollReveal>
            </div>

            {/* Filtres */}
            <ScrollReveal direction="up" delay={150}>
              <div className="mt-12 flex flex-wrap gap-2 border-y border-[#D9D4C9] py-5">
                {categories.map((category, index) => {
                  const isActive = activeCategory === category;

                  return (
                    <button
                      key={category}
                      type="button"
                      onClick={() => setActiveCategory(category)}
                      aria-pressed={isActive}
                      className={`rounded-full border px-4 py-2 text-xs transition-all duration-300 ease-out hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#263D32] motion-reduce:transform-none motion-reduce:transition-none ${
                        isActive
                          ? "border-[#263D32] bg-[#263D32] text-[#F6F2EA]"
                          : "border-[#D2CCBF] text-[#465247] hover:border-[#263D32] hover:bg-[#EAE5DA]"
                      }`}
                      style={{ transitionDelay: `${index * 35}ms` }}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Article à la une */}
        {featuredArticle ? (
          <section className="px-5 pb-16 sm:px-8 md:pb-24 lg:px-16">
            <div className="mx-auto max-w-7xl">
              <ScrollReveal
                key={featuredArticle.id}
                direction="up"
                duration={950}
                threshold={0.1}
              >
                <Link
                  to={`/actualites/${featuredArticle.slug}`}
                  className="group grid overflow-hidden bg-[#E9E3D8] transition-shadow duration-500 hover:shadow-xl md:grid-cols-2"
                >
                  <div className="group/image aspect-[4/3] overflow-hidden md:aspect-auto md:min-h-[440px]">
                    <img
                      src={featuredArticle.coverImage}
                      alt={featuredArticle.title}
                      className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.04] motion-reduce:transition-none"
                    />
                  </div>

                  <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
                    <p className="text-xs uppercase tracking-[0.2em] text-[#667766]">
                      À la une · {featuredArticle.category}
                    </p>

                    <h2 className="mt-6 text-3xl font-light leading-tight transition-colors duration-300 group-hover:text-[#667766] sm:text-4xl lg:text-5xl">
                      {featuredArticle.title}
                    </h2>

                    <p className="mt-5 text-sm leading-7 text-[#59635A]">
                      {featuredArticle.excerpt}
                    </p>

                    <div className="mt-8 flex items-center justify-between gap-4">
                      <time
                        dateTime={new Date(
                          featuredArticle.publishedAt,
                        ).toISOString()}
                        className="text-xs text-[#667766]"
                      >
                        {new Date(
                          featuredArticle.publishedAt,
                        ).toLocaleDateString("fr-FR", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </time>

                      <span className="inline-flex items-center gap-2 text-sm">
                        Lire l&apos;article
                        <ArrowUpRight
                          size={17}
                          className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            </div>
          </section>
        ) : (
          <section className="px-5 py-20 text-center sm:px-8">
            <ScrollReveal direction="up">
              <p className="text-lg font-light">
                Aucune actualité disponible dans cette catégorie.
              </p>
            </ScrollReveal>
          </section>
        )}

        {/* Autres publications */}
        {remainingArticles.length > 0 && (
          <section className="px-5 pb-20 sm:px-8 md:pb-28 lg:px-16">
            <div className="mx-auto max-w-7xl">
              <div className="mb-10 flex items-end justify-between gap-5">
                <div>
                  <ScrollReveal direction="left">
                    <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#667766]">
                      À découvrir
                    </p>
                  </ScrollReveal>

                  <ScrollReveal direction="left" delay={100}>
                    <h2 className="text-3xl font-light sm:text-4xl">
                      Nos dernières publications.
                    </h2>
                  </ScrollReveal>
                </div>

                <ScrollReveal direction="right">
                  <span className="text-sm text-[#667766]">
                    {filteredArticles.length} article
                    {filteredArticles.length > 1 ? "s" : ""}
                  </span>
                </ScrollReveal>
              </div>

              <div
                key={activeCategory}
                className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3"
              >
                {remainingArticles.map((article, index) => (
                  <ScrollReveal
                    key={article.id}
                    direction={index % 2 === 0 ? "up" : "zoom"}
                    delay={(index % 3) * 100}
                    duration={850}
                    threshold={0.12}
                  >
                    <article className="group">
                      <Link
                        to={`/actualites/${article.slug}`}
                        className="block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#263D32]"
                      >
                        <div className="overflow-hidden bg-[#E5DED1]">
                          <div className="aspect-[4/3] overflow-hidden">
                            <img
                              src={article.coverImage}
                              alt={article.title}
                              loading="lazy"
                              decoding="async"
                              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045] motion-reduce:transition-none"
                            />
                          </div>
                        </div>

                        <div className="mt-5 flex items-center justify-between gap-3">
                          <span className="text-xs uppercase tracking-[0.15em] text-[#667766]">
                            {article.category}
                          </span>

                          <time
                            dateTime={new Date(
                              article.publishedAt,
                            ).toISOString()}
                            className="text-xs text-[#667766]"
                          >
                            {new Date(
                              article.publishedAt,
                            ).toLocaleDateString("fr-FR", {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            })}
                          </time>
                        </div>

                        <h3 className="mt-4 text-2xl font-light leading-snug transition-colors duration-300 group-hover:text-[#667766]">
                          {article.title}
                        </h3>

                        <p className="mt-3 text-sm leading-7 text-[#59635A]">
                          {article.excerpt}
                        </p>

                        <span className="mt-5 inline-flex items-center gap-2 text-sm">
                          Lire la suite
                          <ArrowRight
                            size={15}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                            aria-hidden="true"
                          />
                        </span>
                      </Link>
                    </article>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Contact */}
        <ContactCTA />
      </main>
    </PageTransition>
  );
}
