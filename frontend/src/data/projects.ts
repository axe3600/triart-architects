
import type { Project } from '../types';

/**
 * TRIART ARCHITECTS
 * Projets du catalogue public du cabinet.
 * Images provisoires issues des fichiers déjà présents
 * dans public/images/projects.
 */

export const projects: Project[] = [
  {
    id: 'project-001',
    slug: 'immeuble-vge',
    title: 'IMMEUBLE VGE',
    category: 'residential',
    location: 'Marcory Zone 4, Abidjan',
    year: 2026,
    description:
      'Un immeuble résidentiel contemporain associant façades vitrées, bois chaleureux et végétation en toiture.',
    coverImage: '/images/projects/residence-contemporaine.jpg',
    gallery: [],
    status: 'ongoing',
    featured: true,
    tags: [
      'Résidentiel',
      'Architecture contemporaine',
      'Verre',
      'Bois',
      'Végétation',
    ],
  },
  {
    id: 'project-002',
    slug: 'signature-triart',
    title: 'SIGNATURE TRIART',
    category: 'commercial',
    location: 'Marcory Zone 4, Abidjan',
    year: 2026,
    description:
      'Une architecture aux lignes organiques, caractérisée par des formes courbes, des volumes elliptiques et de larges surfaces vitrées.',
    coverImage: '/images/projects/espace-de-travail.jpg',
    gallery: [],
    area: 598,
    status: 'ongoing',
    featured: true,
    tags: [
      'Architecture contemporaine',
      'Formes organiques',
      'Façade vitrée',
      'Protection solaire',
    ],
  },
  {
    id: 'project-003',
    slug: 'sci-mediatel',
    title: 'SCI MEDIATEL',
    category: 'residential',
    location: 'Marcory Zone 4, Abidjan',
    year: 2026,
    description:
      'Un projet architectural marqué par des balcons sinueux, des niveaux ondulants, un éclairage périphérique et une végétation intégrée.',
    coverImage: '/images/projects/maison-patio.jpg',
    gallery: [],
    area: 2095,
    status: 'ongoing',
    featured: true,
    tags: [
      'Architecture contemporaine',
      'Balcons sculpturaux',
      'Végétation intégrée',
      'Éclairage architectural',
    ],
  },
  {
    id: 'project-004',
    slug: 'villa-tropical',
    title: 'VILLA TROPICAL',
    category: 'residential',
    location: 'Cocody Dokui, Abidjan',
    description:
      'Un projet résidentiel à l’expression déconstructiviste, associant des volumes affirmés et des matières chaleureuses, notamment le bois.',
    coverImage: '/images/projects/residence-contemporaine.jpg',
    gallery: [],
    status: 'upcoming',
    featured: false,
    tags: [
      'Résidentiel',
      'Architecture contemporaine',
      'Bois',
      'Volumes déconstructivistes',
    ],
  },
  {
    id: 'project-005',
    slug: 'la-villa-zenith',
    title: 'LA VILLA ZÉNITH',
    category: 'residential',
    location: 'Assinie, Côte d’Ivoire',
    description:
      'Une résidence contemporaine associant toiture en bois aux lignes flottantes, textures minérales et piscine à débordement.',
    coverImage: '/images/projects/maison-patio.jpg',
    gallery: [],
    status: 'upcoming',
    featured: false,
    tags: [
      'Résidentiel',
      'Résidence contemporaine',
      'Bois',
      'Béton texturé',
      'Piscine à débordement',
    ],
  },
  {
    id: 'project-006',
    slug: 'le-w-hotel',
    title: 'LE W HOTEL',
    category: 'hospitality',
    location: 'Marcory, Abidjan',
    description:
      'Un projet hôtelier caractérisé par une tour habillée d’un moucharabieh en terre cuite, une faille vitrée aux lignes sinueuses et un rez-de-chaussée intégrant la végétation.',
    coverImage: '/images/projects/lieu-de-vie.jpg',
    gallery: [],
    status: 'upcoming',
    featured: false,
    tags: [
      'Hôtellerie',
      'Architecture contemporaine',
      'Terre cuite',
      'Façade vitrée',
      'Végétation',
    ],
  },
];

/** Retourne les projets mis en avant. */
export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

/** Recherche un projet par son slug. */
export function getProjectBySlug(
  slug: string,
): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

/** Filtre les projets par catégorie. */
export function getProjectsByCategory(
  category: Project['category'] | 'all',
): Project[] {
  if (category === 'all') {
    return projects;
  }

  return projects.filter((project) => project.category === category);
}
