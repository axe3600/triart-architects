
import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: reduceMotion ? 'auto' : 'smooth',
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Revenir en haut de la page"
      title="Retour en haut"
      className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-triart-green text-triart-cream shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:bg-triart-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-triart-green"
    >
      <ArrowUp size={20} />
    </button>
  );
}
