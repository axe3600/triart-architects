
import { useMemo, useState } from "react";
import { ArrowRight, SlidersHorizontal } from "lucide-react";
import PageTransition from "../components/layout/PageTransition";
import ScrollReveal from "../components/ui/ScrollReveal";
import ProjectCard from "../components/projects/ProjectCard";
import { projects } from "../data/projects";
import type { ProjectCategory } from "../types";
import ContactCTA from "../sections/ContactCTA";

const categories: {
  label: string;
  value: ProjectCategory | "all";
}[] = [
  { label: "Tous les projets", value: "all" },
  { label: "Résidentiel", value: "residential" },
  { label: "Commercial", value: "commercial" },
  { label: "Intérieur", value: "interior" },
  { label: "Hôtellerie", value: "hospitality" },
  { label: "Public", value: "public" },
  { label: "Urbain", value: "urban" },
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] =
    useState<ProjectCategory | "all">("all");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") {
      return projects;
    }

    return projects.filter(
      (project) => project.category === activeCategory,
    );
  }, [activeCategory]);

  return (
    <PageTransition>
      <main className="min-h-screen bg-[#F6F2EA] text-[#17211D]">
        {/* En-tête du portfolio */}
        <section className="px-5 pb-12 pt-32 sm:px-8 md:pb-16 md:pt-40 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <ScrollReveal direction="left" duration={850}>
              <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#667766]">
                Portfolio — Architecture &amp; design
              </p>
            </ScrollReveal>

            <div className="grid gap-8 md:grid-cols-[1.5fr_1fr] md:items-end">
              <ScrollReveal direction="left" duration={1000}>
                <h1 className="max-w-4xl text-5xl font-light leading-[1.05] tracking-tight sm:text-6xl lg:text-8xl">
                  Des lieux qui
                  <br />
                  <span className="font-serif italic text-[#667766]">
                    ont du sens.
                  </span>
                </h1>
              </ScrollReveal>

              <ScrollReveal
                direction="right"
                delay={150}
                duration={900}
              >
                <p className="max-w-md text-base leading-7 text-[#59635A] md:justify-self-end">
                  Découvrez une sélection de projets architecturaux,
                  d&apos;espaces de vie et de lieux professionnels. Les projets
                  présentés sont provisoires et devront être remplacés par
                  les réalisations validées du cabinet.
                </p>
              </ScrollReveal>
            </div>

            {/* Filtres de catégories */}
            <ScrollReveal direction="up" delay={150}>
              <div className="mt-12 flex flex-wrap items-center gap-3 border-y border-[#D9D4C9] py-5">
                <SlidersHorizontal
                  size={17}
                  strokeWidth={1.5}
                  aria-hidden="true"
                />

                <span className="mr-2 text-xs uppercase tracking-[0.18em]">
                  Explorer
                </span>

                {categories.map((category, index) => {
                  const isActive = activeCategory === category.value;

                  return (
                    <button
                      key={category.value}
                      type="button"
                      onClick={() => setActiveCategory(category.value)}
                      aria-pressed={isActive}
                      className={`rounded-full border px-4 py-2 text-xs transition-all duration-300 ease-out hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#263D32] motion-reduce:transform-none motion-reduce:transition-none ${
                        isActive
                          ? "border-[#263D32] bg-[#263D32] text-[#F6F2EA]"
                          : "border-[#D2CCBF] text-[#465247] hover:border-[#263D32] hover:bg-[#EAE5DA]"
                      }`}
                      style={{
                        transitionDelay: `${index * 35}ms`,
                      }}
                    >
                      {category.label}
                    </button>
                  );
                })}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Grille des projets */}
        <section className="px-5 pb-20 sm:px-8 md:pb-28 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <ScrollReveal direction="right" delay={80}>
              <div className="mb-8 flex items-center justify-between">
                <p
                  className="text-sm text-[#667766]"
                  aria-live="polite"
                >
                  {filteredProjects.length} projet
                  {filteredProjects.length > 1 ? "s" : ""}
                </p>

                <p className="hidden text-xs uppercase tracking-[0.18em] text-[#667766] sm:block">
                  Architecture · Matière · Espace
                </p>
              </div>
            </ScrollReveal>

            {filteredProjects.length > 0 ? (
              <div
                key={activeCategory}
                className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:gap-y-16"
              >
                {filteredProjects.map((project, index) => (
                  <ScrollReveal
                    key={project.id}
                    direction={index % 2 === 0 ? "up" : "zoom"}
                    delay={(index % 4) * 100}
                    duration={850}
                    threshold={0.12}
                    className={index % 3 === 1 ? "lg:mt-16" : ""}
                  >
                    <ProjectCard project={project} />
                  </ScrollReveal>
                ))}
              </div>
            ) : (
              <ScrollReveal direction="up">
                <div className="py-20 text-center">
                  <p className="text-lg font-light">
                    Aucun projet dans cette catégorie pour le moment.
                  </p>

                  <button
                    type="button"
                    onClick={() => setActiveCategory("all")}
                    className="mt-5 inline-flex items-center gap-2 text-sm underline underline-offset-4 transition-colors duration-300 hover:text-[#667766] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#263D32]"
                  >
                    Voir tous les projets
                    <ArrowRight
                      size={15}
                      className="transition-transform duration-300 hover:translate-x-1"
                    />
                  </button>
                </div>
              </ScrollReveal>
            )}
          </div>
        </section>

        {/* Invitation à contacter le cabinet */}
        <ContactCTA />
      </main>
    </PageTransition>
  );
}
