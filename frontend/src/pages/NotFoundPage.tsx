// src/pages/NotFoundPage.tsx
// Page affichée lorsqu'une URL ne correspond à aucune route connue.

import { Link } from "react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import PageTransition from "../components/layout/PageTransition";

export default function NotFoundPage() {
  return (
    <PageTransition>
      <main className="flex min-h-screen items-center justify-center bg-[#F6F2EA] px-5 py-20 text-[#17211D] sm:px-8">
        <section className="w-full max-w-3xl text-center">
          {/* Signature visuelle de la page d'erreur */}
          <p className="font-serif text-8xl italic text-[#A9B8A6] sm:text-9xl">
            404
          </p>

          <p className="mt-6 text-xs uppercase tracking-[0.3em] text-[#667766]">
            Page introuvable
          </p>

          <h1 className="mt-5 text-4xl font-light leading-tight sm:text-6xl">
            Cette page a pris
            <br />
            un autre chemin.
          </h1>

          <p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-[#59635A] sm:text-base">
            L'adresse demandée est incorrecte ou la page n'est plus
            disponible. Vous pouvez retourner à l'accueil ou explorer
            les projets du cabinet.
          </p>

          {/* Liens de navigation utiles */}
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[#263D32] px-6 py-3 text-sm text-[#F6F2EA] transition-colors hover:bg-[#17211D]"
            >
              <ArrowLeft size={16} />
              Retour à l'accueil
            </Link>

            <Link
              to="/projets"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-[#D2CCBF] px-6 py-3 text-sm transition-colors hover:border-[#263D32]"
            >
              Explorer les projets
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Signature du cabinet */}
          <div className="mt-16 border-t border-[#D9D4C9] pt-6">
            <p className="text-xs uppercase tracking-[0.25em] text-[#667766]">
              TriArt Architects
            </p>

            <p className="mt-2 text-xs text-[#667766]">
              Architecture · Conception · Innovation
            </p>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}