
import { useEffect, useState, type FormEvent } from 'react'
import { Link, useLocation } from 'react-router'
import {
  Menu,
  X,
  ArrowUpRight,
  ArrowRight,
  CheckCircle2,
  ClipboardList,
} from 'lucide-react'

const navigation = [
  { label: 'Le cabinet', href: '/#cabinet' },
  { label: 'Construction', href: '/construction' },
  { label: 'Architecture', href: '/architecture' },
  { label: 'Conseil', href: '/conseil' },
  { label: 'Projets', href: '/#projets' },
  { label: 'Engagements', href: '/#engagements' },
]

export default function Header() {
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  const isQuotePage = location.pathname === '/devis'

  const [menuOpen, setMenuOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [language, setLanguage] = useState<'FR' | 'EN' | 'ES'>(() => {
    if (typeof window === 'undefined') return 'FR'
    const savedLanguage = window.localStorage.getItem('triart-language')
    return savedLanguage === 'EN' || savedLanguage === 'ES' ? savedLanguage : 'FR'
  })

  const changeLanguage = (nextLanguage: 'FR' | 'EN' | 'ES') => {
    setLanguage(nextLanguage)
    window.localStorage.setItem('triart-language', nextLanguage)
    window.dispatchEvent(new CustomEvent('triart-language-change', {
      detail: { language: nextLanguage },
    }))
  }

  const textColor = isHomePage ? 'text-white/95' : 'text-triart-ink'
  const menuBorder = isHomePage ? 'border-white/40' : 'border-triart-ink/20'
  const menuButtonColor = isHomePage ? 'text-white' : 'text-triart-ink'

  const ctaColor = isHomePage
    ? 'bg-triart-cream text-triart-ink hover:bg-triart-sand'
    : 'bg-triart-green text-triart-cream hover:bg-triart-ink'

  // Fermer le menu et gérer les liens vers les sections de l'accueil.
  useEffect(() => {
    setMenuOpen(false)

    if (!location.hash) return

    const sectionId = decodeURIComponent(location.hash.slice(1))
    let attempts = 0
    let frameId = 0

    const scrollToSection = () => {
      const section = document.getElementById(sectionId)

      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }

      // La page peut avoir besoin d'un instant pour afficher ses sections.
      if (attempts < 20) {
        attempts += 1
        frameId = window.requestAnimationFrame(scrollToSection)
      }
    }

    frameId = window.requestAnimationFrame(scrollToSection)

    return () => window.cancelAnimationFrame(frameId)
  }, [location.pathname, location.hash])

  // Bloquer le défilement de la page derrière la fenêtre modale.
  useEffect(() => {
    if (!modalOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setModalOpen(false)
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [modalOpen])

  const openProjectModal = () => {
    setMenuOpen(false)
    setSubmitted(false)
    setModalOpen(true)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  const handleNavigationClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    setMenuOpen(false)

    // Si l'on clique sur une section déjà présente sur l'accueil,
    // on évite une navigation inutile.
    if (href.startsWith('/#') && location.pathname === '/') {
      const sectionId = href.split('#')[1]
      const section = document.getElementById(sectionId)

      if (section) {
        event.preventDefault()
        window.history.replaceState(null, '', href)
        section.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }

  return (
    <>
      <header className={`absolute inset-x-0 top-0 z-40 ${textColor}`}>
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-5 px-6 py-5 md:px-12 md:py-6 lg:px-16">
          {/* Logo */}
          <Link
            to="/"
            aria-label="TriArt Architects - Accueil"
            onClick={() => setMenuOpen(false)}
            className="relative z-50 flex shrink-0 items-center transition-transform duration-300 hover:scale-105"
          >
            <img
              src="/logo/triart-symbol.png"
              alt="TriArt"
              className="h-12 w-auto object-contain md:h-16"
            />
          </Link>

          {/* Navigation desktop */}
          <nav className="hidden items-center gap-7 text-sm lg:flex xl:gap-9">
            {navigation.map((item, index) => (
              <Link
                key={item.label}
                to={item.href}
                onClick={(event) => handleNavigationClick(event, item.href)}
                className="group relative py-2 transition-colors duration-300 hover:text-triart-sand"
                style={{
                  animation: `headerFadeIn 500ms ease-out ${index * 100}ms both`,
                }}
              >
                {item.label}
                <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-triart-sand transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>

          {/* Sélecteur de langue desktop */}
          <div
            className={`hidden shrink-0 items-center gap-0.5 rounded-full border p-1 text-[11px] font-semibold tracking-wide md:flex ${
              isHomePage ? 'border-white/30 bg-black/10' : 'border-triart-ink/15 bg-white/35'
            }`}
            role="group"
            aria-label="Choisir la langue du site"
          >
            {(['FR', 'EN', 'ES'] as const).map((option) => (
              <button
                key={option}
                type="button"
                aria-pressed={language === option}
                onClick={() => changeLanguage(option)}
                className={`min-w-8 rounded-full px-2 py-1.5 transition-all duration-300 ${
                  language === option
                    ? isHomePage
                      ? 'bg-triart-cream text-triart-ink shadow-sm'
                      : 'bg-triart-green text-triart-cream shadow-sm'
                    : 'opacity-75 hover:opacity-100'
                }`}
              >
                {option}
              </button>
            ))}
          </div>

          {/* Bouton desktop */}
          {!isQuotePage && (
            <button
              type="button"
              onClick={openProjectModal}
              className={`hidden items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg md:flex ${ctaColor}`}
            >
              Parlons de votre projet
              <ArrowUpRight size={16} />
            </button>
          )}

          {/* Bouton du menu mobile */}
          <button
            type="button"
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
            className={`relative z-50 rounded-full border p-3 transition hover:border-triart-sand hover:bg-white/10 lg:hidden ${menuBorder} ${menuButtonColor}`}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>

        {/* Navigation mobile */}
        <div
          id="mobile-navigation"
          aria-hidden={!menuOpen}
          className={`absolute inset-x-0 top-0 -z-10 bg-triart-green px-6 pb-8 pt-24 text-triart-cream shadow-xl transition-all duration-300 lg:hidden ${
            menuOpen
              ? 'visible translate-y-0 opacity-100'
              : 'invisible -translate-y-3 opacity-0'
          }`}
        >
          <nav className="flex flex-col">
            {navigation.map((item, index) => (
              <Link
                key={item.label}
                to={item.href}
                tabIndex={menuOpen ? 0 : -1}
                onClick={(event) => handleNavigationClick(event, item.href)}
                className="border-b border-white/15 py-4 text-lg transition-all duration-200 hover:pl-2 hover:text-triart-sand"
                style={{
                  transitionDelay: menuOpen ? `${index * 50}ms` : '0ms',
                }}
              >
                {item.label}
              </Link>
            ))}

            {/* Sélecteur de langue mobile */}
            <div className="mt-6 border-t border-white/15 pt-5">
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-white/60">
                Langue / Language / Idioma
              </p>
              <div
                className="flex w-fit items-center gap-1 rounded-full border border-white/20 bg-white/5 p-1"
                role="group"
                aria-label="Choisir la langue du site"
              >
                {(['FR', 'EN', 'ES'] as const).map((option) => (
                  <button
                    key={option}
                    type="button"
                    aria-pressed={language === option}
                    tabIndex={menuOpen ? 0 : -1}
                    onClick={() => changeLanguage(option)}
                    className={`min-w-12 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                      language === option
                        ? 'bg-triart-cream text-triart-ink'
                        : 'text-white/75 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            {/* Bouton mobile */}
            {!isQuotePage && (
              <button
                type="button"
                onClick={openProjectModal}
                className="mt-6 flex items-center justify-between rounded-full bg-triart-cream px-5 py-4 text-left font-semibold text-triart-ink transition hover:bg-triart-sand"
              >
                Parlons de votre projet
                <ArrowUpRight size={19} />
              </button>
            )}
          </nav>
        </div>
      </header>

      {/* Fenêtre de demande de projet */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-[#101A15]/75 p-3 backdrop-blur-md animate-in fade-in duration-300 sm:p-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setModalOpen(false)
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            className="modal-scrollbar-hidden relative my-auto grid max-h-[93dvh] w-full max-w-5xl overflow-y-auto overflow-x-hidden rounded-2xl bg-triart-cream shadow-2xl animate-in zoom-in-95 slide-in-from-bottom-3 duration-300 md:grid-cols-[0.8fr_1.2fr]"
          >
            {/* Panneau éditorial */}
            <div className="relative hidden flex-col justify-between overflow-hidden bg-triart-green p-9 text-triart-cream md:flex lg:p-12">
              <div className="pointer-events-none absolute -right-24 -top-20 h-72 w-72 rounded-full border border-white/10" />
              <div className="pointer-events-none absolute -right-12 -top-8 h-48 w-48 rounded-full border border-white/10" />

              <div className="relative">
                <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-triart-sand">
                  <span className="h-px w-7 bg-triart-sand" />
                  Votre projet commence ici
                </span>

                <h2 className="mt-9 font-display text-4xl leading-tight lg:text-5xl">
                  Imaginons
                  <br />
                  <span className="italic text-triart-sand">
                    votre espace.
                  </span>
                </h2>

                <p className="mt-6 max-w-sm text-sm leading-7 text-white/75">
                  Chaque lieu possède son potentiel. Parlons de votre idée,
                  de vos besoins et de ce que nous pouvons imaginer ensemble.
                </p>
              </div>

              <div className="relative mt-12 border-t border-white/15 pt-6">
                <ClipboardList size={24} className="mb-4 text-triart-sand" />
                <p className="font-medium">Un premier échange</p>
                <p className="mt-2 text-sm leading-6 text-white/65">
                  Présentez-nous les grandes lignes de votre projet pour
                  préparer la suite.
                </p>
              </div>
            </div>

            {/* Formulaire */}
            <div className="relative p-6 sm:p-9 lg:p-12">
              <button
                type="button"
                aria-label="Fermer la fenêtre"
                onClick={() => setModalOpen(false)}
                className="absolute right-4 top-4 z-10 rounded-full border border-triart-ink/10 bg-triart-cream p-2 text-triart-ink transition hover:rotate-90 hover:bg-triart-green hover:text-white sm:right-6 sm:top-6"
              >
                <X size={19} />
              </button>

              {submitted ? (
                <div className="flex min-h-[390px] flex-col items-center justify-center text-center">
                  <CheckCircle2 size={48} className="text-triart-green" />

                  <h3 className="mt-6 font-display text-3xl text-triart-ink">
                    Formulaire prêt
                  </h3>

                  <p className="mt-4 max-w-sm text-sm leading-7 text-triart-ink/70">
                    Cette démonstration n'a pas envoyé votre demande.
                    Pour la transmettre réellement, le formulaire doit être
                    connecté au service de réception du cabinet.
                  </p>

                  <Link
                    to="/devis"
                    onClick={() => setModalOpen(false)}
                    className="mt-7 inline-flex items-center gap-2 rounded-full bg-triart-green px-6 py-3 text-sm font-semibold text-white transition hover:bg-triart-ink"
                  >
                    Accéder au formulaire complet
                    <ArrowRight size={16} />
                  </Link>

                  <button
                    type="button"
                    onClick={() => setModalOpen(false)}
                    className="mt-4 text-sm text-triart-ink/60 underline underline-offset-4 hover:text-triart-green"
                  >
                    Fermer
                  </button>
                </div>
              ) : (
                <>
                  <p className="text-xs uppercase tracking-[0.2em] text-triart-green">
                    Parlons ensemble
                  </p>

                  <h3
                    id="project-modal-title"
                    className="mt-4 max-w-md pr-8 font-display text-3xl leading-tight text-triart-ink sm:text-4xl"
                  >
                    Décrivez-nous votre projet.
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-triart-ink/65">
                    Quelques informations suffisent pour commencer la
                    conversation.
                  </p>

                  <form onSubmit={handleSubmit} className="mt-7 space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <label className="block text-xs font-semibold text-triart-ink">
                        Votre nom *
                        <input
                          name="name"
                          required
                          autoComplete="name"
                          placeholder="Nom et prénom"
                          className="mt-2 w-full border-0 border-b border-triart-ink/20 bg-transparent px-0 py-3 text-sm font-normal outline-none transition placeholder:text-triart-ink/35 focus:border-triart-green focus:ring-0"
                        />
                      </label>

                      <label className="block text-xs font-semibold text-triart-ink">
                        Votre e-mail *
                        <input
                          name="email"
                          type="email"
                          required
                          autoComplete="email"
                          placeholder="vous@exemple.com"
                          className="mt-2 w-full border-0 border-b border-triart-ink/20 bg-transparent px-0 py-3 text-sm font-normal outline-none transition placeholder:text-triart-ink/35 focus:border-triart-green focus:ring-0"
                        />
                      </label>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <label className="block text-xs font-semibold text-triart-ink">
                        Téléphone
                        <input
                          name="phone"
                          type="tel"
                          autoComplete="tel"
                          placeholder="Votre numéro"
                          className="mt-2 w-full border-0 border-b border-triart-ink/20 bg-transparent px-0 py-3 text-sm font-normal outline-none transition placeholder:text-triart-ink/35 focus:border-triart-green focus:ring-0"
                        />
                      </label>

                      <label className="block text-xs font-semibold text-triart-ink">
                        Type de projet *
                        <select
                          name="projectType"
                          required
                          defaultValue=""
                          className="mt-2 w-full border-0 border-b border-triart-ink/20 bg-transparent px-0 py-3 text-sm font-normal outline-none focus:border-triart-green focus:ring-0"
                        >
                          <option value="" disabled>
                            Choisir un sujet
                          </option>
                          <option value="residential">Résidentiel</option>
                          <option value="commercial">Commercial</option>
                          <option value="interior">Architecture intérieure</option>
                          <option value="renovation">Rénovation</option>
                          <option value="other">Autre projet</option>
                        </select>
                      </label>
                    </div>

                    <label className="block text-xs font-semibold text-triart-ink">
                      Votre message *
                      <textarea
                        name="message"
                        required
                        rows={3}
                        placeholder="Parlez-nous de votre projet..."
                        className="mt-2 w-full resize-y border-0 border-b border-triart-ink/20 bg-transparent px-0 py-3 text-sm font-normal outline-none transition placeholder:text-triart-ink/35 focus:border-triart-green focus:ring-0"
                      />
                    </label>

                    <div className="flex flex-col gap-4 pt-1 sm:flex-row sm:items-center sm:justify-between">
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center gap-3 rounded-full bg-triart-green px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-triart-ink"
                      >
                        Préparer ma demande
                        <ArrowRight size={17} />
                      </button>

                      <Link
                        to="/devis"
                        onClick={() => setModalOpen(false)}
                        className="inline-flex items-center gap-2 text-sm text-triart-ink/65 transition hover:text-triart-green"
                      >
                        Formulaire complet
                        <ArrowUpRight size={15} />
                      </Link>
                    </div>

                    <p className="text-[11px] leading-5 text-triart-ink/50">
                      * Champs obligatoires. Prototype frontend : aucune
                      donnée n'est transmise ni enregistrée.
                    </p>
                  </form>
                </>
              )}
            </div>
          </section>
        </div>
      )}
    </>
  )
}
