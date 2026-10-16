
import { useEffect, useState } from 'react'
import { BrowserRouter, useLocation } from 'react-router'
import SplashScreen from './components/SplashScreen'
import AppRoutes from './routes/AppRoutes'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import ScrollToTop from './components/ui/ScrollToTop'

type GTranslateWindow = Window & {
  gtranslateSettings?: {
    default_language: string
    languages: string[]
    wrapper_selector: string
  }
  doGTranslate?: (languagePair: string) => void
}

type LanguageChangeEvent = CustomEvent<{
  language: 'FR' | 'EN' | 'ES'
}>

const languageCodes = {
  FR: 'fr',
  EN: 'en',
  ES: 'es',
} as const

function AppContent() {
  const { pathname } = useLocation()

  // Le splash est nécessaire uniquement sur la page d'accueil.
  const isHomePage = pathname === '/'

  const [entered, setEntered] = useState(() => !isHomePage)

  const showSplash = isHomePage && !entered

  // Chargement du traducteur automatique.
  useEffect(() => {
    const translatorWindow = window as GTranslateWindow

    translatorWindow.gtranslateSettings = {
      default_language: 'fr',
      languages: ['fr', 'es', 'en'],
      wrapper_selector: '.gtranslate_wrapper',
    }

    let script = document.getElementById(
      'triart-gtranslate-script',
    ) as HTMLScriptElement | null

    const applyLanguage = (language: 'FR' | 'EN' | 'ES') => {
      const targetLanguage = languageCodes[language]

      if (translatorWindow.doGTranslate) {
        translatorWindow.doGTranslate(`fr|${targetLanguage}`)
      }
    }

    const handleLanguageChange = (event: Event) => {
      const customEvent = event as LanguageChangeEvent
      applyLanguage(customEvent.detail.language)
    }

    window.addEventListener(
      'triart-language-change',
      handleLanguageChange,
    )

    if (!script) {
      script = document.createElement('script')
      script.id = 'triart-gtranslate-script'
      script.src = 'https://cdn.gtranslate.net/widgets/latest/float.js'
      script.defer = true

      script.onload = () => {
        const savedLanguage = localStorage.getItem('triart-language')
        const language =
          savedLanguage === 'EN' || savedLanguage === 'ES'
            ? savedLanguage
            : 'FR'

        applyLanguage(language)
      }

      document.body.appendChild(script)
    }

    return () => {
      window.removeEventListener(
        'triart-language-change',
        handleLanguageChange,
      )
    }
  }, [])

  return (
    <>
      {/* Conteneur technique du traducteur : aucun widget visible ajouté. */}
      <div className="hidden" aria-hidden="true">
        <div className="gtranslate_wrapper" />
      </div>

      {showSplash && (
        <SplashScreen onEnter={() => setEntered(true)} />
      )}

      <div
        className={
          showSplash ? 'invisible h-0 overflow-hidden' : 'block'
        }
        aria-hidden={showSplash}
      >
        <ScrollToTop />
        <Header />
        <AppRoutes />
        <Footer />
      </div>
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}
