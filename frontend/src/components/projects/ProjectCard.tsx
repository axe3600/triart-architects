
import { ArrowUpRight } from 'lucide-react'
import type { Project } from '../../types'

interface ProjectCardProps {
  project: Project
  index?: number
}

const categoryLabels: Record<Project['category'], string> = {
  residential: 'Résidentiel',
  commercial: 'Commercial',
  hospitality: 'Hospitalité',
  public: 'Espace public',
  interior: 'Architecture intérieure',
  urban: 'Urbanisme',
}

export default function ProjectCard({
  project,
}: ProjectCardProps) {
  return (
    <article className="group min-w-0">
      <a
        href={`/projets/${project.slug}`}
        className="block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-triart-green"
        aria-label={`Découvrir le projet ${project.title}`}
      >
        {/* Image et interactions */}
        <div className="relative aspect-[4/5] overflow-hidden bg-[#EAE5DA] sm:aspect-[4/4.5]">
          <img
            src={project.coverImage}
            alt={project.title}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          />

          {/* Voile discret au survol */}
          <div className="pointer-events-none absolute inset-0 bg-triart-ink/0 transition-colors duration-700 group-hover:bg-triart-ink/10" />

          {/* Catégorie */}
          <span className="absolute left-4 top-4 bg-triart-cream/95 px-3 py-2 text-[10px] font-medium uppercase tracking-[0.12em] text-triart-green backdrop-blur-sm">
            {categoryLabels[project.category]}
          </span>

          {/* Bouton visuel */}
          <span className="absolute bottom-4 right-4 flex h-11 w-11 translate-y-2 items-center justify-center rounded-full bg-triart-cream text-triart-ink opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:bg-triart-green group-hover:text-triart-cream group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 motion-reduce:translate-y-0 motion-reduce:opacity-100">
            <ArrowUpRight
              size={20}
              className="transition-transform duration-300 group-hover:rotate-45 motion-reduce:transition-none"
            />
          </span>
        </div>

        {/* Informations du projet */}
        <div className="flex items-start justify-between gap-4 pt-5">
          <div className="min-w-0">
            <h3 className="font-display text-xl font-medium text-triart-ink transition-colors duration-300 group-hover:text-triart-green sm:text-2xl">
              {project.title}
            </h3>

            <p className="mt-2 text-sm text-triart-ink/60">
              {project.location}
            </p>
          </div>

          {project.year && (
            <span className="shrink-0 pt-1 text-xs tabular-nums text-triart-ink/55">
              {project.year}
            </span>
          )}
        </div>

        <p className="mt-3 line-clamp-2 text-sm leading-6 text-triart-ink/65">
          {project.description}
        </p>

        {/* Soulignement animé */}
        <div className="mt-5 h-px origin-left scale-x-0 bg-triart-green/50 transition-transform duration-500 group-hover:scale-x-100 motion-reduce:scale-x-100" />
      </a>
    </article>
  )
}
