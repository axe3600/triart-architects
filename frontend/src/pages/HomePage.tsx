// frontend/src/pages/HomePage.tsx

import Hero from '../sections/Hero'
import AboutPreview from '../sections/AboutPreview'
import FeaturedProjects from '../sections/FeaturedProjects'
import Expertise from '../sections/Expertise'
import ContactCTA from '../sections/ContactCTA'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-triart-cream">
      {/* 1. Bannière principale : conservée pour le moment */}
      <Hero />

      {/* 2. Présentation de l'univers TriArt */}
      <AboutPreview />

      {/* 3. Sélection des projets */}
      <FeaturedProjects />

      {/* 4. Domaines d'expertise */}
      <Expertise />

      {/* 5. Engagements du cabinet */}
      <section
        id="engagements"
        className="bg-[#EAE5DA] px-6 py-20 md:px-12 md:py-28 lg:px-16"
      >
        <div className="mx-auto max-w-[1600px]">
          <p className="text-sm uppercase tracking-[0.2em] text-triart-green">
            Notre approche
          </p>

          <h2 className="mt-5 max-w-4xl font-display text-4xl leading-tight text-triart-ink md:text-6xl">
            Concevoir avec responsabilité.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-triart-ink/70 md:text-lg">
            Chaque projet mérite une réflexion attentive sur les usages,
            les matériaux, la lumière et l'intégration dans son environnement.
          </p>
        </div>
      </section>

      {/* 6. Invitation à prendre contact */}
      <ContactCTA />
    </main>
  )
}