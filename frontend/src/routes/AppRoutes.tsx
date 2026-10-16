
import { Route, Routes } from "react-router";

import HomePage from "../pages/HomePage";
import CabinetPage from "../pages/CabinetPage";
import ServicesPage from "../pages/ServicesPage";
import ServiceDetailPage from "../pages/ServiceDetailPage";
import ProjectsPage from "../pages/ProjectsPage";
import ProjectDetailPage from "../pages/ProjectDetailPage";
import ExpertisePage from "../pages/ExpertisePage";
import NewsPage from "../pages/NewsPage";
import ArticlePage from "../pages/ArticlePage";
import ContactPage from "../pages/ContactPage";
import QuotePage from "../pages/QuotePage";
import LegalPage from "../pages/LegalPage";
import PrivacyPage from "../pages/PrivacyPage";
import NotFoundPage from "../pages/NotFoundPage";
import AdminDashboard from "../pages/admin/AdminDashboard";

// Nouvelles pages des activités
import ConstructionPage from "../pages/ConstructionPage";
import ArchitecturePage from "../pages/ArchitecturePage";
import ConseilPage from "../pages/ConseilPage";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Accueil */}
      <Route path="/" element={<HomePage />} />

      {/* Présentation du cabinet */}
      <Route path="/cabinet" element={<CabinetPage />} />
      <Route path="/expertises" element={<ExpertisePage />} />

      {/* Activités TriArt */}
      <Route path="/construction" element={<ConstructionPage />} />
      <Route path="/architecture" element={<ArchitecturePage />} />
      <Route path="/conseil" element={<ConseilPage />} />

      {/* Services existants */}
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/services/:slug" element={<ServiceDetailPage />} />

      {/* Portfolio et détail d'un projet */}
      <Route path="/projets" element={<ProjectsPage />} />
      <Route path="/projets/:slug" element={<ProjectDetailPage />} />

      {/* Actualités et détail d'un article */}
      <Route path="/actualites" element={<NewsPage />} />
      <Route path="/actualites/:slug" element={<ArticlePage />} />

      {/* Contact et demandes de devis */}
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/devis" element={<QuotePage />} />

      {/* Informations légales */}
      <Route path="/mentions-legales" element={<LegalPage />} />
      <Route path="/confidentialite" element={<PrivacyPage />} />

      {/* Tableau de bord provisoire */}
      <Route path="/admin" element={<AdminDashboard />} />

      {/* Toute URL inconnue */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
