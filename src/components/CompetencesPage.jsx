import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext.jsx";
import SkillsSection from "./SkillsSection.jsx";
import WebSkillsSection from "./WebSkillsSection.jsx";
import Footer from "./Footer.jsx";
import moiImg from "../assets/moi.png";

function CompetencesPage() {
  const { locale, setLocale, t } = useLanguage();
  const [activeTab, setActiveTab] = useState("ai");

  return (
    <div
      className="app page-with-bg"
      style={{ backgroundImage: `url(${moiImg})` }}
    >
      <div className="page-with-bg-overlay" />
      <div className="page-with-bg-content">
        <div className="page-header">
          <nav className="page-breadcrumb">
            <Link to="/" className="breadcrumb-link">← {t("home")}</Link>
            <span className="breadcrumb-sep"> / </span>
            <Link to="/competences" className="breadcrumb-link">
              {locale === "fr" ? "Compétences" : "Skills"}
            </Link>
          </nav>
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

          {activeTab === "ai" ? <SkillsSection /> : <WebSkillsSection />}
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default CompetencesPage;
