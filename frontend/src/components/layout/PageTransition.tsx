
import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';

interface PageTransitionProps {
  children: ReactNode;
  className?: string;
}

export default function PageTransition({
  children,
  className = '',
}: PageTransitionProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={
        shouldReduceMotion
          ? false
          : { opacity: 0, y: 10 }
      }
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.45,
        ease: 'easeOut',
      }}
    >
      {children}
    </motion.div>
  );
}
