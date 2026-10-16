
import { ArrowUpRight } from 'lucide-react'
import { getFeaturedProjects } from '../data/projects'
import ProjectCard from '../components/projects/ProjectCard'
import ScrollReveal from '../components/ui/ScrollReveal'

const featuredProjects = getFeaturedProjects()

export default function FeaturedProjects() {
  return (
    <section
      id="projets"
      aria-labelledby="featured-projects-title"
      className="overflow-hidden bg-triart-cream px-6 py-20 sm:px-10 md:px-14 md:py-28 lg:px-20"
    >
      <div className="mx-auto max-w-[1440px]">
        {/* Introduction éditoriale */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <ScrollReveal direction="left">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-triart-green">
                Notre univers
              </p>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={100} duration={950}>
              <h2
                id="featured-projects-title"
                className="mt-5 font-display text-4xl font-medium leading-tight text-triart-ink sm:text-5xl md:text-6xl"
              >
                Des espaces pensés avec sens, précision et caractère.
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={150}>
              <p className="mt-5 max-w-xl text-sm leading-7 text-triart-ink/65 md:text-base">
                Découvrez notre approche de l’architecture à travers
                une sélection de concepts et de projets.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="up" delay={200}>
            <a
              href="/projets"
              className="group inline-flex w-fit shrink-0 items-center gap-3 border-b border-triart-green/40 pb-2 text-sm font-medium text-triart-green transition-colors duration-300 hover:border-triart-green"
            >
              Explorer le portfolio
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </ScrollReveal>
        </div>

        {/* Grille responsive des projets */}
        {featuredProjects.length > 0 ? (
          <div className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-x-8">
            {featuredProjects.map((project, index) => (
              <ScrollReveal
                key={project.id}
                direction="up"
                delay={(index % 3) * 120}
                duration={850}
              >
                <ProjectCard
                  project={project}
                  index={index}
                />
              </ScrollReveal>
            ))}
          </div>
        ) : (
          <ScrollReveal direction="up">
            <p className="mt-12 border-t border-triart-ink/15 py-8 text-sm text-triart-ink/60">
              Les projets seront présentés ici prochainement.
            </p>
          </ScrollReveal>
        )}
      </div>
    </section>
  )
}
