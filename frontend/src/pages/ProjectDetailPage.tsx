
import { Link, useParams } from "react-router";
import {
  ArrowLeft,
  ArrowUpRight,
  MapPin,
  CalendarDays,
  Ruler,
} from "lucide-react";
import PageTransition from "../components/layout/PageTransition";
import ScrollReveal from "../components/ui/ScrollReveal";
import { getProjectBySlug, projects } from "../data/projects";
import ContactCTA from "../sections/ContactCTA";

function getCategoryLabel(category: string): string {
  const labels: Record<string, string> = {
    residential: "Résidentiel",
    commercial: "Commercial",
    interior: "Design intérieur",
    hospitality: "Hôtellerie",
    public: "Architecture publique",
    urban: "Urbanisme",
  };

  return labels[category] ?? category;
}

function getStatusLabel(status: string): string {
  if (status === "completed") return "Terminé";
  if (status === "ongoing") return "En cours";
  return "À venir";
}

export default function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) {
    return (
      <PageTransition>
        <main className="flex min-h-[70vh] items-center justify-center bg-[#F6F2EA] px-5 pt-24 text-[#17211D]">
          <div className="max-w-lg text-center">
            <ScrollReveal direction="left">
              <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#667766]">
                Portfolio
              </p>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={100}>
              <h1 className="text-4xl font-light sm:text-5xl">
                Projet introuvable
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={150}>
              <p className="mt-5 leading-7 text-[#59635A]">
                Ce projet n&apos;existe pas ou n&apos;est plus disponible.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={200}>
              <Link
                to="/projets"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#263D32] px-6 py-3 text-sm text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#17211D] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#263D32]"
              >
                <ArrowLeft size={16} />
                Retour aux projets
              </Link>
            </ScrollReveal>
          </div>
        </main>
      </PageTransition>
    );
  }

  const relatedProjects = projects
    .filter(
      (item) =>
        item.id !== project.id &&
        item.category === project.category,
    )
    .slice(0, 2);

  const displayedRelated =
    relatedProjects.length >= 2
      ? relatedProjects
      : [
          ...relatedProjects,
          ...projects
            .filter(
              (item) =>
                item.id !== project.id &&
                !relatedProjects.some(
                  (related) => related.id === item.id,
                ),
            )
            .slice(0, 2 - relatedProjects.length),
        ];

  return (
    <PageTransition>
      <main className="min-h-screen bg-[#F6F2EA] text-[#17211D]">
        {/* Retour au portfolio */}
        <section className="px-5 pt-28 sm:px-8 md:pt-36 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <ScrollReveal direction="left">
              <Link
                to="/projets"
                className="group inline-flex items-center gap-3 text-sm text-[#59635A] transition-colors duration-300 hover:text-[#263D32] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#263D32]"
              >
                <ArrowLeft
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-x-1"
                />
                Tous les projets
              </Link>
            </ScrollReveal>
          </div>
        </section>

        {/* Présentation générale */}
        <section className="px-5 pb-12 pt-8 sm:px-8 md:pb-16 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <ScrollReveal direction="left">
              <div className="mb-8 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#667766]">
                <span>{getCategoryLabel(project.category)}</span>
                <span aria-hidden="true">/</span>
                <span>{getStatusLabel(project.status)}</span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" duration={1000}>
              <h1 className="max-w-5xl text-5xl font-light leading-[1.05] tracking-tight sm:text-6xl lg:text-8xl">
                {project.title}
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={120} duration={900}>
              <p className="mt-7 max-w-2xl text-base leading-8 text-[#59635A] sm:text-lg">
                {project.description}
              </p>
            </ScrollReveal>

            {/* Image principale */}
            <ScrollReveal
              direction="zoom"
              delay={100}
              duration={1100}
              threshold={0.08}
            >
              <div className="group mt-12 aspect-[4/3] overflow-hidden bg-[#E5DED1] sm:aspect-[16/9]">
                <img
                  src={project.coverImage}
                  alt={`Visuel du projet ${project.title}`}
                  fetchPriority="high"
                  className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.035] motion-reduce:transition-none"
                />
              </div>
            </ScrollReveal>

            {/* Informations du projet */}
            <div className="grid gap-6 border-b border-[#D9D4C9] py-8 sm:grid-cols-2 lg:grid-cols-4">
              <ScrollReveal direction="up">
                <div className="flex items-start gap-3">
                  <MapPin
                    size={18}
                    className="mt-1 shrink-0 text-[#667766]"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-xs uppercase tracking-[0.15em] text-[#667766]">
                      Localisation
                    </p>
                    <p className="mt-2 text-sm">{project.location}</p>
                  </div>
                </div>
              </ScrollReveal>

              {project.year && (
                <ScrollReveal direction="up" delay={80}>
                  <div className="flex items-start gap-3">
                    <CalendarDays
                      size={18}
                      className="mt-1 shrink-0 text-[#667766]"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="text-xs uppercase tracking-[0.15em] text-[#667766]">
                        Année
                      </p>
                      <p className="mt-2 text-sm">{project.year}</p>
                    </div>
                  </div>
                </ScrollReveal>
              )}

              {project.area && (
                <ScrollReveal direction="up" delay={160}>
                  <div className="flex items-start gap-3">
                    <Ruler
                      size={18}
                      className="mt-1 shrink-0 text-[#667766]"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="text-xs uppercase tracking-[0.15em] text-[#667766]">
                        Surface
                      </p>
                      <p className="mt-2 text-sm">{project.area}</p>
                    </div>
                  </div>
                </ScrollReveal>
              )}

              <ScrollReveal direction="up" delay={240}>
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-[#667766]">
                    Statut
                  </p>
                  <p className="mt-2 text-sm">
                    {getStatusLabel(project.status)}
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Galerie du projet */}
            {project.gallery && project.gallery.length > 0 && (
              <section className="py-14 md:py-20">
                <ScrollReveal direction="left">
                  <p className="mb-7 text-xs uppercase tracking-[0.2em] text-[#667766]">
                    Galerie du projet
                  </p>
                </ScrollReveal>

                <div className="grid gap-5 sm:grid-cols-2">
                  {project.gallery.map((image, index) => (
                    <ScrollReveal
                      key={`${project.id}-gallery-${index}`}
                      direction={index % 2 === 0 ? "left" : "right"}
                      delay={(index % 2) * 120}
                      duration={900}
                      threshold={0.1}
                    >
                      <div className="group aspect-[4/3] overflow-hidden bg-[#E5DED1]">
                        <img
                          src={image}
                          alt={`${project.title} — vue ${index + 1}`}
                          loading="lazy"
                          decoding="async"
                          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] motion-reduce:transition-none"
                        />
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </section>
            )}

            {/* Mots-clés */}
            {project.tags && project.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 py-8">
                {project.tags.map((tag, index) => (
                  <ScrollReveal
                    key={tag}
                    direction="up"
                    delay={(index % 5) * 50}
                  >
                    <span className="inline-flex rounded-full border border-[#D2CCBF] px-4 py-2 text-xs text-[#59635A] transition-colors duration-300 hover:border-[#263D32] hover:text-[#263D32]">
                      {tag}
                    </span>
                  </ScrollReveal>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Projets similaires */}
        {displayedRelated.length > 0 && (
          <section className="border-t border-[#D9D4C9] px-5 py-16 sm:px-8 md:py-24 lg:px-16">
            <div className="mx-auto max-w-7xl">
              <div className="mb-10 flex items-end justify-between gap-5">
                <div>
                  <ScrollReveal direction="left">
                    <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#667766]">
                      Continuer la découverte
                    </p>
                  </ScrollReveal>

                  <ScrollReveal direction="left" delay={100}>
                    <h2 className="text-3xl font-light sm:text-5xl">
                      D&apos;autres perspectives.
                    </h2>
                  </ScrollReveal>
                </div>

                <ScrollReveal direction="right">
                  <Link
                    to="/projets"
                    className="group hidden items-center gap-2 text-sm transition-colors duration-300 hover:text-[#667766] sm:inline-flex"
                  >
                    Tous les projets
                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </Link>
                </ScrollReveal>
              </div>

              <div className="grid gap-8 sm:grid-cols-2">
                {displayedRelated.map((related, index) => (
                  <ScrollReveal
                    key={related.id}
                    direction={index % 2 === 0 ? "up" : "zoom"}
                    delay={index * 120}
                    duration={900}
                    threshold={0.12}
                  >
                    <Link
                      to={`/projets/${related.slug}`}
                      className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#263D32]"
                    >
                      <div className="aspect-[4/3] overflow-hidden bg-[#E5DED1]">
                        <img
                          src={related.coverImage}
                          alt={`Visuel du projet ${related.title}`}
                          loading="lazy"
                          decoding="async"
                          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] motion-reduce:transition-none"
                        />
                      </div>

                      <div className="mt-5 flex items-start justify-between gap-4">
                        <div>
                          <p className="mb-2 text-xs uppercase tracking-[0.15em] text-[#667766]">
                            {getCategoryLabel(related.category)}
                          </p>

                          <h3 className="text-xl font-light transition-colors duration-300 group-hover:text-[#667766] sm:text-2xl">
                            {related.title}
                          </h3>

                          <p className="mt-2 text-sm text-[#667766]">
                            {related.location}
                          </p>
                        </div>

                        <ArrowUpRight
                          size={20}
                          className="mt-1 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                          aria-hidden="true"
                        />
                      </div>
                    </Link>
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
