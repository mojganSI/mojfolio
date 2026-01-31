import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext.jsx";
import ProjectsSection from "./ProjectsSection.jsx";
import WebProjectsSection from "./WebProjectsSection.jsx";
import Footer from "./Footer.jsx";

function ProjetsPage() {
  const { locale, setLocale, t } = useLanguage();
  const [activeTab, setActiveTab] = useState("ai");

  return (
    <div className="app">
      <div className="page-header">
        <Link to="/" className="back-link">
          ← {t("home")}
        </Link>
        <div className="lang-switcher">
          <button
            type="button"
            className={`lang-btn ${locale === "fr" ? "active" : ""}`}
            onClick={() => setLocale("fr")}
          >
            FR
          </button>
          <button
            type="button"
            className={`lang-btn ${locale === "en" ? "active" : ""}`}
            onClick={() => setLocale("en")}
          >
            EN
          </button>
        </div>
      </div>

      <main>
        <div className="home-tabs">
          <button
            type="button"
            className={`home-tab-btn ${activeTab === "ai" ? "active" : ""}`}
            onClick={() => setActiveTab("ai")}
          >
            IA / Data
          </button>
          <button
            type="button"
            className={`home-tab-btn ${activeTab === "web" ? "active" : ""}`}
            onClick={() => setActiveTab("web")}
          >
            Web / Applications
          </button>
        </div>

        {activeTab === "ai" ? <ProjectsSection /> : <WebProjectsSection />}
      </main>

      <Footer />
    </div>
  );
}

export default ProjetsPage;
