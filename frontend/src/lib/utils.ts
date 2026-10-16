
/**
 * TRIART ARCHITECTS
 * Fonctions utilitaires partagées.
 */

/**
 * Combine plusieurs classes CSS.
 * Ignore les valeurs vides, nulles ou indéfinies.
 *
 * Exemple :
 * cn('text-lg', isActive && 'font-bold')
 */
export function cn(
  ...classes: Array<string | false | null | undefined>
): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Formate une date en français.
 *
 * Exemple :
 * formatDate('2026-10-15') => '15 octobre 2026'
 */
export function formatDate(
  date: string | Date,
  options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  },
): string {
  const parsedDate = date instanceof Date ? date : new Date(date);

  if (Number.isNaN(parsedDate.getTime())) {
    return '';
  }

  return new Intl.DateTimeFormat('fr-FR', options).format(parsedDate);
}

/**
 * Formate un nombre avec les conventions françaises.
 *
 * Exemple :
 * formatNumber(12500) => '12 500'
 */
export function formatNumber(value: number): string {
  return new Intl.NumberFormat('fr-FR').format(value);
}

/**
 * Transforme un texte en slug pour les URL.
 *
 * Exemple :
 * slugify('Architecture intérieure') => 'architecture-interieure'
 */
export function slugify(value: string): string {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Tronque un texte à une longueur donnée.
 *
 * Exemple :
 * truncateText('Un texte assez long', 10) => 'Un texte...'
 */
export function truncateText(
  text: string,
  maxLength: number,
): string {
  const normalizedText = text.trim();

  if (maxLength <= 0) {
    return '';
  }

  if (normalizedText.length <= maxLength) {
    return normalizedText;
  }

  if (maxLength <= 3) {
    return '.'.repeat(maxLength);
  }

  return `${normalizedText.slice(0, maxLength - 3).trimEnd()}...`;
}

/**
 * Vérifie si une adresse e-mail possède un format plausible.
 * La validation définitive devra aussi être faite côté serveur.
 */
export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

/**
 * Attend un nombre de millisecondes.
 * Utile pour certaines animations ou opérations asynchrones.
 */
export function delay(milliseconds: number): Promise<void> {
  return new Promise((resolve) => {
    window.setTimeout(resolve, milliseconds);
  });
}

/**
 * Retourne une valeur de secours si le texte est vide.
 */
export function withFallback(
  value: string | null | undefined,
  fallback = 'Information à compléter',
): string {
  const normalizedValue = value?.trim();

  return normalizedValue ? normalizedValue : fallback;
}
