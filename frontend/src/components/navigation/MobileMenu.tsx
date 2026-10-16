
import { useEffect } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight, X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const navigationLinks = [
  { label: 'Accueil', href: '/' },
  { label: 'Le cabinet', href: '/cabinet' },
  { label: 'Expertises', href: '/expertises' },
  { label: 'Services', href: '/services' },
  { label: 'Projets', href: '/projets' },
  { label: 'Actualités', href: '/actualites' },
];

export default function MobileMenu({
  isOpen,
  onClose,
}: MobileMenuProps) {
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.button
            type="button"
            aria-label="Fermer le menu"
            className="fixed inset-0 z-[80] cursor-default bg-triart-ink/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.25,
            }}
            onClick={onClose}
          />

          <motion.aside
            id="triart-mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navigation"
            className="fixed inset-y-0 right-0 z-[90] flex w-full max-w-md flex-col overflow-y-auto bg-triart-cream px-7 py-8 text-triart-ink sm:px-10"
            initial={
              shouldReduceMotion ? false : { x: '100%' }
            }
            animate={{ x: 0 }}
            exit={shouldReduceMotion ? undefined : { x: '100%' }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.35,
              ease: 'easeInOut',
            }}
          >
            <div className="flex items-center justify-between border-b border-triart-ink/10 pb-6">
              <a
                href="/"
                onClick={onClose}
                className="font-display text-xl font-extrabold tracking-[0.16em]"
              >
                TriArt
                <span className="mt-1 block text-[9px] font-medium tracking-[0.25em]">
                  ARCHITECTS
                </span>
              </a>

              <button
                type="button"
                onClick={onClose}
                aria-label="Fermer le menu"
                className="rounded-full border border-triart-ink/15 p-3 transition-colors hover:bg-triart-green hover:text-triart-cream"
              >
                <X size={20} />
              </button>
            </div>

            <nav
              aria-label="Navigation principale mobile"
              className="flex flex-1 flex-col justify-center py-10"
            >
              <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.22em] text-triart-green/60">
                Explorer TriArt
              </p>

              <ul className="space-y-1">
                {navigationLinks.map((link, index) => (
                  <motion.li
                    key={link.href}
                    initial={
                      shouldReduceMotion
                        ? false
                        : { opacity: 0, x: 12 }
                    }
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: shouldReduceMotion ? 0 : index * 0.045,
                    }}
                  >
                    <a
                      href={link.href}
                      onClick={onClose}
                      className="block border-b border-triart-ink/10 py-4 font-display text-2xl transition-colors hover:text-triart-green sm:text-3xl"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>

            <div className="border-t border-triart-ink/10 pt-6">
              <a
                href="/contact"
                onClick={onClose}
                className="flex items-center justify-between rounded-full bg-triart-green px-6 py-4 text-sm font-semibold text-triart-cream transition-colors hover:bg-triart-ink"
              >
                Parlons de votre projet
                <ArrowUpRight size={18} />
              </a>

              <p className="mt-5 text-[10px] uppercase tracking-[0.18em] text-triart-ink/45">
                Architecture · Conception · Innovation
              </p>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
