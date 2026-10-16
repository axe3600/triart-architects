
import type { Service } from '../types';

/**
 * TRIART ARCHITECTS
 * Catalogue provisoire de services.
 *
 * Les prestations réelles restent à confirmer par le cabinet.
 */

export const services: Service[] = [
  {
    id: 'service-001',
    slug: 'conception-architecturale',
    title: 'Conception architecturale',
    shortDescription:
      'Donner forme aux idées à travers une conception cohérente et sensible.',
    description:
      'Une démarche de conception qui explore les usages, les volumes, la lumière et le contexte afin de développer une vision architecturale adaptée au projet.',
    image: '/images/services/conception-architecturale.jpg',
    icon: 'drafting-compass',
    features: [
      'Étude des besoins',
      'Réflexion sur les volumes',
      'Organisation des espaces',
      'Développement du concept',
    ],
    featured: true,
  },
  {
    id: 'service-002',
    slug: 'architecture-interieure',
    title: 'Architecture intérieure',
    shortDescription:
      'Créer des intérieurs fonctionnels, harmonieux et expressifs.',
    description:
      'Une approche de l’espace intérieur qui prend en compte les usages, les matières, les couleurs, l’éclairage et la cohérence générale du lieu.',
    image: '/images/services/architecture-interieure.jpg',
    icon: 'lamp',
    features: [
      'Aménagement intérieur',
      'Choix des matières',
      'Étude de l’éclairage',
      'Harmonie des espaces',
    ],
    featured: true,
  },
  {
    id: 'service-003',
    slug: 'etudes-et-planification',
    title: 'Études et planification',
    shortDescription:
      'Structurer le projet avant sa réalisation.',
    description:
      'Une phase d’étude destinée à clarifier les objectifs, les contraintes et les grandes orientations du projet avant les étapes de réalisation.',
    image: '/images/services/etudes-planification.jpg',
    icon: 'ruler',
    features: [
      'Analyse du contexte',
      'Étude des contraintes',
      'Organisation des étapes',
      'Préparation du projet',
    ],
    featured: true,
  },
  {
    id: 'service-004',
    slug: 'amenagement-des-espaces',
    title: 'Aménagement des espaces',
    shortDescription:
      'Concevoir des espaces adaptés aux personnes et à leurs usages.',
    description:
      'Une réflexion sur les circulations, les relations entre les espaces et la manière dont les personnes vivent et utilisent un lieu.',
    image: '/images/services/amenagement-espaces.jpg',
    icon: 'layout-grid',
    features: [
      'Analyse des usages',
      'Organisation des circulations',
      'Optimisation des surfaces',
      'Réflexion sur le confort',
    ],
    featured: false,
  },
];

/** Retourne les services mis en avant. */
export function getFeaturedServices(): Service[] {
  return services.filter((service) => service.featured);
}

/** Recherche un service par son slug. */
export function getServiceBySlug(
  slug: string,
): Service | undefined {
  return services.find((service) => service.slug === slug);
}
