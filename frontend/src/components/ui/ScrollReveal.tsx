
import {
  type ReactNode,
  type CSSProperties,
  useEffect,
  useRef,
  useState,
} from 'react';

type RevealDirection = 'up' | 'left' | 'right' | 'zoom' | 'none';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  direction?: RevealDirection;
  delay?: number;
  duration?: number;
  once?: boolean;
  threshold?: number;
}

export default function ScrollReveal({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  duration = 800,
  once = false,
  threshold = 0.15,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (
      reduceMotion ||
      typeof IntersectionObserver === 'undefined'
    ) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;

        if (entry.isIntersecting) {
          setIsVisible(true);

          if (once) {
            observer.unobserve(element);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -30px 0px',
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [once, threshold]);

  const offsets: Record<RevealDirection, string> = {
    up: 'translate3d(0, 42px, 0)',
    left: 'translate3d(-56px, 0, 0)',
    right: 'translate3d(56px, 0, 0)',
    zoom: 'scale(0.94)',
    none: 'none',
  };

  const style: CSSProperties = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'none' : offsets[direction],
    transitionProperty: 'opacity, transform',
    transitionDuration: `${duration}ms`,
    transitionDelay: isVisible ? `${delay}ms` : '0ms',
    transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
  };

  return (
    <div
      ref={ref}
      className={className}
      style={style}
    >
      {children}
    </div>
  );
}
