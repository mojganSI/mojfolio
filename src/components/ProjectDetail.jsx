import React from "react";
import { useParams, Link } from "react-router-dom";
import { getProjectById } from "../data/projects.js";
import { useLanguage } from "../context/LanguageContext.jsx";
import Footer from "./Footer.jsx";

function ProjectDetail() {
  const { id } = useParams();
  const project = getProjectById(id);
  const { locale, setLocale, t } = useLanguage();

  const localize = (value) => {
    if (typeof value === "string") return value;
    if (!value) return "";
    return value[locale] ?? value.fr ?? "";
  };

  if (!project) {
    return (
      <div className="app">
        <div className="section">
          <h2>{t("projectNotFound")}</h2>
          <Link to="/" className="btn primary">
            {t("backHome")}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      {/* Header avec navigation */}
      <div className="project-header">
        <Link to="/" className="back-link">
          {t("backToPortfolio")}
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

      {/* Section de présentation du projet */}
      <section className="project-overview">
        <div className="project-overview-content">
          <div className="project-title-section">
            <h1 className="project-title">{localize(project.title)}</h1>
            <p className="project-category-detail">
              {localize(project.category)}
            </p>
            <p className="project-description-detail">
              {localize(project.description)}
            </p>
          </div>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="github-link"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          )}
        </div>

        {/* Stats si disponibles */}
        {project.stats && Object.keys(project.stats).length > 0 && (
          <div className="project-stats">
            {Object.entries(project.stats).map(([key, value]) => (
              <div key={key} className="stat-box">
                <div className="stat-icon">📊</div>
                <div className="stat-label">
                  {key === "train"
                    ? "Train"
                    : key === "test"
                    ? "Test"
                    : key === "validation"
                    ? "Validation"
                    : key === "total"
                    ? "Total"
                    : key === "precision"
                    ? "Précision"
                    : key === "villes"
                    ? "Villes couvertes"
                    : key === "precisionNLP"
                    ? "Précision NLP"
                    : key === "cheminOptimal"
                    ? "Chemin optimal trouvé"
                    : key}
                </div>
                <div className="stat-value">{value}</div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Section Vidéo/Démo (si disponible) */}
      {project.videoUrl && (
        <section className="project-demo">
          <h2 className="section-title">
            {t("demo")}
          </h2>
          <div className="video-container">
            <iframe
              src={project.videoUrl}
              title={project.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>
      )}

      {/* Section Spécificités */}
      {project.specificites && project.specificites.length > 0 && (
        <section className="project-section">
          <h2 className="section-title">
            {t("specificities")}
          </h2>
          <p className="section-intro">
            {project.id === "jeu-vr-spatial"
              ? "Le joueur se retrouve à bord d'un vaisseau spatial endommagé et doit accomplir diverses missions de réparation grâce à des interactions VR réalistes sur Meta Quest 3. Le jeu inclut:"
              : "Les fonctionnalités principales du projet incluent:"}
          </p>
          <div className="features-grid">
            {(Array.isArray(project.specificites)
              ? project.specificites
              : project.specificites[locale] || project.specificites.fr || []
            ).map((spec, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">⚙️</div>
                <p>{spec}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Section Étapes techniques */}
      {project.etapesTechniques && project.etapesTechniques.length > 0 && (
        <section className="project-section">
          <h2 className="section-title">
            {t("technicalSteps")}
          </h2>
          <div className="steps-grid">
            {project.etapesTechniques.map((etape) => (
              <div key={etape.number} className="step-card">
                <div className="step-number">{etape.number}</div>
                <h3 className="step-title">{localize(etape.title)}</h3>
                <ul className="step-details">
                  {(Array.isArray(etape.details)
                    ? etape.details
                    : etape.details[locale] || etape.details.fr || []
                  ).map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Section Contributions */}
      {project.contributions && project.contributions.length > 0 && (
        <section className="project-section">
          <h2 className="section-title">
            {t("myContributions")}
          </h2>
          <div className="contributions-grid">
            {(Array.isArray(project.contributions)
              ? project.contributions
              : project.contributions[locale] ||
                project.contributions.fr ||
                []
            ).map((contribution, index) => (
              <div key={index} className="contribution-card">
                {/* <div className="contribution-icon">📝</div> */}
                <p>{contribution}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Section Ce que j'ai appris */}
      {project.apprentissages && project.apprentissages.length > 0 && (
        <section className="project-section learnings-section">
          <h2 className="section-title learnings-title">
            {t("whatILearned")}
          </h2>
          <ul className="learnings-list">
            {(Array.isArray(project.apprentissages)
              ? project.apprentissages
              : project.apprentissages[locale] ||
                project.apprentissages.fr ||
                []
            ).map((apprentissage, index) => (
              <li key={index}>
                {/* <span className="star-icon">⭐</span> */}
                {apprentissage}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Section Technologies */}
      {project.technologies && project.technologies.length > 0 && (
        <section className="project-section">
          <h2 className="section-title">
            {t("technologies")}
          </h2>
          <div className="technologies-list">
            {project.technologies.map((tech, index) => (
              <span key={index} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}

export default ProjectDetail;
