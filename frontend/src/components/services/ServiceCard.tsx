
import { ArrowUpRight } from 'lucide-react'
import type { Service } from '../../types'

interface ServiceCardProps {
  service: Service
  index?: number
}

export default function ServiceCard({
  service,
  index = 0,
}: ServiceCardProps) {
  const number = String(index + 1).padStart(2, '0')

  return (
    <article className="group min-w-0 border-t border-triart-ink/20 py-7 transition-colors duration-500 hover:border-triart-green sm:py-9">
      <a
        href={`/services/${service.slug}`}
        className="block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-triart-green"
        aria-label={`Découvrir le service ${service.title}`}
      >
        {/* Numéro et lien visuel */}
        <div className="flex items-start justify-between gap-4">
          <span className="font-display text-xs tracking-[0.16em] text-triart-green/60 transition-colors duration-300 group-hover:text-triart-green">
            {number}
          </span>

          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-triart-ink/15 transition-all duration-500 group-hover:border-triart-green group-hover:bg-triart-green group-hover:text-triart-cream motion-reduce:transition-none">
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
            />
          </span>
        </div>

        {/* Titre et description */}
        <div className="mt-7 grid gap-5 sm:grid-cols-[1fr_1.1fr] sm:items-end">
          <h3 className="max-w-sm font-display text-2xl font-medium leading-tight text-triart-ink transition-transform duration-500 group-hover:translate-x-1 sm:text-3xl motion-reduce:transform-none motion-reduce:transition-none">
            {service.title}
          </h3>

          <p className="text-sm leading-7 text-triart-ink/65 transition-colors duration-300 group-hover:text-triart-ink/85">
            {service.shortDescription}
          </p>
        </div>

        {/* Fonctionnalités */}
        <div className="mt-7 flex flex-wrap gap-2">
          {service.features.slice(0, 3).map((feature, featureIndex) => (
            <span
              key={feature}
              className="rounded-full border border-triart-ink/10 px-3 py-2 text-xs text-triart-ink/65 transition-colors duration-300 group-hover:border-triart-green/25 group-hover:bg-triart-green/[0.04]"
              style={{
                transitionDelay: `${featureIndex * 40}ms`,
              }}
            >
              {feature}
            </span>
          ))}
        </div>

        {/* Ligne éditoriale animée */}
        <div className="mt-7 h-px origin-left scale-x-0 bg-triart-green/40 transition-transform duration-500 group-hover:scale-x-100 motion-reduce:scale-x-100" />
      </a>
    </article>
  )
}
