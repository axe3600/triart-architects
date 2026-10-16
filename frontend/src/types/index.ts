
/**
 * TRIART ARCHITECTS
 * Types TypeScript partagés dans l'application.
 */

/* ─────────────────────────────────────────
   PROJETS ARCHITECTURAUX
───────────────────────────────────────── */

export type ProjectCategory =
  | 'residential'
  | 'commercial'
  | 'hospitality'
  | 'public'
  | 'interior'
  | 'urban';

export type ProjectStatus = 'completed' | 'ongoing' | 'upcoming';

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: ProjectCategory;
  location: string;
  year?: number;
  description: string;
  coverImage: string;
  gallery?: string[];
  area?: number;
  status: ProjectStatus;
  featured: boolean;
  tags?: string[];
}

/* ─────────────────────────────────────────
   SERVICES ET EXPERTISES
───────────────────────────────────────── */

export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  icon?: string;
  features: string[];
  featured: boolean;
}

/* ─────────────────────────────────────────
   ACTUALITÉS ET ARTICLES
───────────────────────────────────────── */

export type ArticleCategory =
  | 'architecture'
  | 'design'
  | 'innovation'
  | 'sustainability'
  | 'studio';

export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: ArticleCategory;
  author?: string;
  publishedAt: string;
  readingTime?: number;
  featured: boolean;
}

/* ─────────────────────────────────────────
   NAVIGATION
───────────────────────────────────────── */

export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

/* ─────────────────────────────────────────
   FORMULAIRES DE CONTACT ET DE DEVIS
───────────────────────────────────────── */

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export interface QuoteFormData extends ContactFormData {
  projectType: string;
  location: string;
  estimatedBudget?: string;
  expectedTimeline?: string;
}

/* ─────────────────────────────────────────
   INFORMATIONS DU CABINET
───────────────────────────────────────── */

export interface StudioInfo {
  name: string;
  tagline: string;
  description: string;
  email: string;
  phone?: string;
  address?: string;
  city?: string;
  country?: string;
  socialLinks?: {
    instagram?: string;
    linkedin?: string;
    facebook?: string;
  };
}

/* ─────────────────────────────────────────
   FILTRES ET INTERFACE
───────────────────────────────────────── */

export interface ProjectFilters {
  category: ProjectCategory | 'all';
  status?: ProjectStatus | 'all';
  search?: string;
}

export interface SelectOption {
  label: string;
  value: string;
}
