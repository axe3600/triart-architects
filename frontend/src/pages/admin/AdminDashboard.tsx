// src/pages/admin/AdminDashboard.tsx
// Tableau de bord administratif de démonstration pour TriArt Architects.
// Les données sont locales : aucune authentification ni sauvegarde backend.

import { Link } from "react-router";
import {
  ArrowUpRight,
  FolderKanban,
  Newspaper,
  BriefcaseBusiness,
  ExternalLink,
} from "lucide-react";
import PageTransition from "../../components/layout/PageTransition";
import { projects } from "../../data/projects";
import { services } from "../../data/services";
import { news } from "../../data/news";

// Raccourcis vers les principales pages publiques du site.
const shortcuts = [
  {
    label: "Voir le portfolio",
    description: "Consulter les projets affichés sur le site.",
    href: "/projets",
    icon: FolderKanban,
  },
  {
    label: "Voir les services",
    description: "Parcourir les domaines d'intervention.",
    href: "/services",
    icon: BriefcaseBusiness,
  },
  {
    label: "Voir les actualités",
    description: "Consulter les articles publiés en démonstration.",
    href: "/actualites",
    icon: Newspaper,
  },
];

export default function AdminDashboard() {
  // Indicateurs calculés à partir des données locales du projet.
  const stats = [
    {
      label: "Projets",
      value: projects.length,
      icon: FolderKanban,
    },
    {
      label: "Services",
      value: services.length,
      icon: BriefcaseBusiness,
    },
    {
      label: "Articles",
      value: news.length,
      icon: Newspaper,
    },
  ];

  return (
    <PageTransition>
      <main className="min-h-screen bg-[#F6F2EA] px-5 pb-20 pt-32 text-[#17211D] sm:px-8 md:pt-40 lg:px-16">
        <div className="mx-auto max-w-7xl">
          {/* En-tête du tableau de bord */}
          <div className="flex flex-col justify-between gap-6 border-b border-[#D9D4C9] pb-8 sm:flex-row sm:items-end">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#667766]">
                Espace de gestion
              </p>

              <h1 className="text-4xl font-light sm:text-6xl">
                Tableau de bord
              </h1>

              <p className="mt-4 max-w-xl text-sm leading-7 text-[#59635A]">
                Retrouvez un aperçu des contenus de démonstration
                et accédez rapidement aux différentes sections du site.
              </p>
            </div>

            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm transition-colors hover:text-[#667766]"
            >
              Voir le site
              <ExternalLink size={16} />
            </Link>
          </div>

          {/* Avertissement sur le mode de démonstration */}
          <div className="mt-8 border border-[#D9D4C9] bg-[#EEE8DC] p-5 sm:p-6">
            <p className="text-sm font-medium">
              Mode démonstration
            </p>

            <p className="mt-2 text-sm leading-7 text-[#59635A]">
              Cet espace n'est pas encore sécurisé par une authentification
              et ne permet pas de modifier durablement les données.
              Un backend et des droits d'accès seront nécessaires
              pour une utilisation réelle.
            </p>
          </div>

          {/* Indicateurs du contenu existant */}
          <section className="mt-10 grid gap-5 sm:grid-cols-3">
            {stats.map((stat) => {
              const Icon = stat.icon;

              return (
                <article
                  key={stat.label}
                  className="border border-[#D9D4C9] p-6 sm:p-8"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-[#667766]">
                      {stat.label}
                    </p>

                    <Icon
                      size={21}
                      strokeWidth={1.4}
                      className="text-[#667766]"
                    />
                  </div>

                  <p className="mt-6 text-4xl font-light">
                    {stat.value}
                  </p>

                  <p className="mt-2 text-xs text-[#667766]">
                    Éléments présents dans les données locales
                  </p>
                </article>
              );
            })}
          </section>

          {/* Raccourcis de navigation */}
          <section className="mt-14">
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#667766]">
              Navigation rapide
            </p>

            <h2 className="mb-8 text-3xl font-light sm:text-4xl">
              Accès aux contenus.
            </h2>

            <div className="grid gap-4 md:grid-cols-3">
              {shortcuts.map((shortcut) => {
                const Icon = shortcut.icon;

                return (
                  <Link
                    key={shortcut.href}
                    to={shortcut.href}
                    className="group border border-[#D9D4C9] p-6 transition-colors hover:border-[#263D32] sm:p-8"
                  >
                    <div className="flex items-center justify-between">
                      <Icon
                        size={23}
                        strokeWidth={1.4}
                        className="text-[#667766]"
                      />

                      <ArrowUpRight
                        size={19}
                        className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </div>

                    <h3 className="mt-8 text-xl font-light">
                      {shortcut.label}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#59635A]">
                      {shortcut.description}
                    </p>
                  </Link>
                );
              })}
            </div>
          </section>

          {/* Retour vers le site public */}
          <div className="mt-12 border-t border-[#D9D4C9] pt-8">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-sm underline underline-offset-4"
            >
              Accéder à la page de contact
            </Link>
          </div>
        </div>
      </main>
    </PageTransition>
  );
}