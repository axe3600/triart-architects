import { Link } from 'react-router'
import { ArrowUpRight, MessageCircle } from 'lucide-react'

const footerLinks = [
  { label: 'Le cabinet', href: '/cabinet' },
  { label: 'Expertises', href: '/expertises' },
  { label: 'Nos projets', href: '/projets' },
  { label: 'Actualités', href: '/actualites' },
  { label: 'Contact', href: '/contact' },
]

const legalLinks = [
  { label: 'Mentions légales', href: '/mentions-legales' },
  { label: 'Confidentialité', href: '/confidentialite' },
]

// IMPORTANT : remplace ce numéro par le numéro WhatsApp professionnel de TriArt.
// Format international sans +, sans espace et sans tiret. Exemple Côte d'Ivoire : 2250700000000.
const whatsappNumber = '2250700000000'
const whatsappMessage =
  'Bonjour TriArt Architects, je vous contacte depuis votre site web au sujet de mon projet.'

const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#17211D] text-[#F6F2EA]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-36 -top-40 h-[28rem] w-[28rem] rounded-full border border-white/[0.06]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-24 h-[20rem] w-[20rem] rounded-full border border-white/[0.06]"
      />

      <div className="relative mx-auto max-w-[1600px] px-6 pb-7 pt-14 sm:px-10 md:px-14 md:pt-20 lg:px-20">
        <div className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-[1fr_0.85fr] lg:grid-cols-[1.25fr_0.7fr_1.05fr] lg:gap-20">
          {/* Identité */}
          <div>
            <a
              href="/"
              aria-label="TriArt Architects — Accueil"
              className="group inline-flex flex-col"
            >
              <img
                src="/logo/triart-logo.png"
                alt="TriArt Architects"
                className="h-auto w-32 object-contain transition-transform duration-300 group-hover:scale-[1.03]"
              />
              <span className="mt-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#A9B8A6]">
                Construction · Architecture · Conseil
              </span>
            </a>

            <p className="mt-6 max-w-sm text-sm leading-7 text-white/65">
              Des espaces pensés avec sens, précision et caractère. Une vision
              architecturale à construire ensemble.
            </p>

          </div>

          {/* Navigation */}
          <nav aria-label="Navigation de pied de page">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D9C8AC]">
              Navigation
            </h2>
            <ul className="mt-6 space-y-4">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-white/65 transition-colors duration-200 hover:text-[#F6F2EA]"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight
                      size={13}
                      aria-hidden="true"
                      className="opacity-0 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact et réseaux */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D9C8AC]">
              Restons en contact
            </h2>
            <p className="mt-6 max-w-sm text-sm leading-7 text-white/65">
              Vous avez une idée, une question ou un projet à explorer ?
              Échangeons autour de votre vision.
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex max-w-sm items-center gap-3 rounded-2xl border border-[#A9B8A6]/25 bg-white/[0.04] p-4 transition duration-300 hover:border-[#A9B8A6]/60 hover:bg-white/[0.07] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A9B8A6]"
              aria-label="Contacter TriArt Architects sur WhatsApp"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#25D366]/15 text-[#55DF86]">
                <MessageCircle size={21} aria-hidden="true" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-semibold text-[#F6F2EA]">
                  WhatsApp professionnel
                </span>
                <span className="mt-1 block text-xs leading-5 text-white/55">
                  Écrivez-nous directement
                </span>
              </span>
              <ArrowUpRight size={17} aria-hidden="true" className="shrink-0 text-white/60" />
            </a>

            <div className="mt-3 grid max-w-sm gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Retrouver TriArt sur Instagram"
                className="group flex min-w-0 items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.025] p-3.5 transition duration-300 hover:-translate-y-0.5 hover:border-[#D9C8AC]/45 hover:bg-white/[0.055] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D9C8AC]"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/75 transition-colors group-hover:text-[#D9C8AC]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
                  </svg>
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-semibold text-[#F6F2EA]">Instagram</span>
                  <span className="mt-1 block text-xs text-white/50">Nos inspirations</span>
                </span>
                <ArrowUpRight size={15} aria-hidden="true" className="ml-auto shrink-0 text-white/45 transition-colors group-hover:text-[#D9C8AC]" />
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Retrouver TriArt sur LinkedIn"
                className="group flex min-w-0 items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.025] p-3.5 transition duration-300 hover:-translate-y-0.5 hover:border-[#D9C8AC]/45 hover:bg-white/[0.055] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D9C8AC]"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/75 transition-colors group-hover:text-[#D9C8AC]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M8 10v7" />
                    <path d="M8 7v.01" />
                    <path d="M12 17v-7" />
                    <path d="M12 13a3 3 0 0 1 6 0v4" />
                  </svg>
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-semibold text-[#F6F2EA]">LinkedIn</span>
                  <span className="mt-1 block text-xs text-white/50">Notre actualité</span>
                </span>
                <ArrowUpRight size={15} aria-hidden="true" className="ml-auto shrink-0 text-white/45 transition-colors group-hover:text-[#D9C8AC]" />
              </a>
            </div>
          </div>
        </div>

        {/* Bas de page */}
        <div className="flex flex-col gap-4 pt-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} TriArt Architects. Tous droits réservés.
          </p>

          <nav
            aria-label="Informations légales"
            className="flex flex-wrap gap-x-5 gap-y-2"
          >
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="group relative inline-flex overflow-hidden py-1 transition-colors duration-300 hover:text-[#F6F2EA] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D9C8AC]"
              >
                <span className="transition-transform duration-300 group-hover:-translate-y-0.5">
                  {link.label}
                </span>
                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-[#D9C8AC] transition-transform duration-300 ease-out group-hover:scale-x-100"
                />
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
