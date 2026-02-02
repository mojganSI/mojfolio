import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext.jsx";
import Footer from "./Footer.jsx";
import logo from "../assets/A.png";

function Home() {
  const { locale, setLocale, t } = useLanguage();

  return (
    <div className="app app-home">
      <header className="home-header">
        <div className="home-logo">
          <img src={logo} alt="Mojgan Sigarchian" />
        </div>
        <div className="lang-switcher lang-switcher-hero">
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
      </header>

      <main className="hero-three-cols">
        {/* Colonne gauche : accueil simple comme avant */}
        <div className="hero-col hero-col-left">
          <h1 className="hero-welcome-title">{t("welcomeTitle")}</h1>
          <p className="hero-welcome-text">{t("heroText")}</p>
          <div className="hero-actions">
            <Link to="/competences" className="btn btn-hero-solid">
              {t("skills")}
            </Link>
            <Link to="/projets" className="btn btn-hero-outline">
              {t("projects")}
            </Link>
          </div>
        </div>

        {/* Colonne centrale : illustration / logo */}
        <div className="hero-col hero-col-center">
          <div className="hero-illustration-wrap">
            <img
              src={logo}
              alt="Mojgan Sigarchian"
              className="hero-illustration"
            />
          </div>
        </div>

        {/* Colonne droite : à propos simple comme avant */}
        <div className="hero-col hero-col-right">
          <h2 className="hero-about-title">{t("aboutMe")}</h2>
          <p className="hero-about-text">{t("aboutText")}</p>
          <a
            href="/CV.pdf"
            className="btn btn-hero-solid"
            download="CV_Mojgan_Sigarchian.pdf"
            target="_blank"
            rel="noreferrer noopener"
          >
            {t("downloadCV")}
          </a>
        </div>
      </main>

      <Footer variant="home" />
    </div>
  );
}

export default Home;
