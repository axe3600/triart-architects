
import type { NewsArticle } from '../types';

/**
 * TRIART ARCHITECTS
 * Articles de démonstration.
 * Remplacer les exemples avant la mise en production.
 */

export const news: NewsArticle[] = [
  {
    id: 'news-001',
    slug: 'penser-architecture-durable',
    title: 'Penser une architecture plus durable',
    excerpt:
      'Explorer des approches de conception qui prennent en compte les ressources, les usages et le contexte.',
    content:
      'Cet article de démonstration présente une réflexion sur la conception architecturale durable. Le contenu définitif devra être rédigé et validé par le cabinet.',
    coverImage: '/images/studio/architecture-durable.jpg',
    category: 'sustainability',
    author: 'Équipe TriArt',
    publishedAt: '2026-01-15',
    readingTime: 4,
    featured: true,
  },
  {
    id: 'news-002',
    slug: 'la-lumiere-comme-matiere',
    title: 'La lumière comme matière architecturale',
    excerpt:
      'Comprendre comment la lumière naturelle participe à l’atmosphère et à la perception des espaces.',
    content:
      'Cet article de démonstration explore le rôle de la lumière naturelle dans la conception des espaces. Le texte définitif reste à compléter.',
    coverImage: '/images/studio/lumiere-architecture.jpg',
    category: 'architecture',
    author: 'Équipe TriArt',
    publishedAt: '2026-02-10',
    readingTime: 3,
    featured: true,
  },
  {
    id: 'news-003',
    slug: 'matiere-et-sens',
    title: 'Matière et sens : choisir avec intention',
    excerpt:
      'Les matériaux contribuent à l’identité visuelle, au confort et à la perception d’un lieu.',
    content:
      'Cet article de démonstration aborde les matières et leur place dans une réflexion architecturale. Le contenu final sera défini par le cabinet.',
    coverImage: '/images/studio/matieres-architecture.jpg',
    category: 'design',
    author: 'Équipe TriArt',
    publishedAt: '2026-03-05',
    readingTime: 5,
    featured: false,
  },
];

export function getFeaturedNews(): NewsArticle[] {
  return news.filter((article) => article.featured);
}

export function getNewsBySlug(
  slug: string,
): NewsArticle | undefined {
  return news.find((article) => article.slug === slug);
}

export function getNewsByCategory(
  category: NewsArticle['category'] | 'all',
): NewsArticle[] {
  if (category === 'all') {
    return news;
  }

  return news.filter((article) => article.category === category);
}
