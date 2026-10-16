
import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'

type SplashScreenProps = {
    onEnter: () => void
}

export default function SplashScreen({ onEnter }: SplashScreenProps) {
    const [leaving, setLeaving] = useState(false)

    const handleEnter = () => {
        if (leaving) return

        setLeaving(true)

        window.setTimeout(() => {
            onEnter()
        }, 650)
    }

    return (
        <AnimatePresence>
            {!leaving && (
                <motion.main
                    className="fixed inset-0 z-[100] flex min-h-[100svh] items-center justify-center overflow-y-auto bg-triart-cream px-6 py-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 1.01 }}
                    transition={{ duration: 0.65, ease: 'easeInOut' }}
                >
                    <div className="flex w-full max-w-2xl flex-col items-center text-center">

                        {/* Logo officiel */}
                        <motion.img
                            src="/logo/triart-logo.png"
                            alt="TriArt — De la confusion à la clarté"
                            className="block h-auto w-[min(68vw,150px)] object-contain"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                        />

                        {/* Signature */}
                        <motion.p
                            className="mt-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-triart-green sm:mt-2 sm:text-[10px] sm:tracking-[0.22em]"
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                        >
                           Construction · Architecture · Conseil
                        </motion.p>

                        {/* Ligne dorée */}
                        <motion.div
                            className="mt-10 h-px w-full max-w-[280px] origin-center bg-[#B68A35] sm:mt-12"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ delay: 0.35, duration: 0.8 }}
                        />

                        {/* Bouton Entrer */}
                        <motion.button
                            type="button"
                            onClick={handleEnter}
                            disabled={leaving}
                            className="group mt-7 inline-flex min-h-[48px] min-w-[150px] items-center justify-center gap-3 rounded-full border border-[#B68A35] px-7 text-[10px] font-semibold tracking-[0.16em] text-triart-green transition-colors duration-300 hover:bg-triart-green hover:text-triart-cream focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-triart-green disabled:pointer-events-none sm:mt-8"
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                        >
                            ENTRER
                            <ArrowRight
                                size={15}
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </motion.button>
                    </div>
                </motion.main>
            )}
        </AnimatePresence>
    )
}
