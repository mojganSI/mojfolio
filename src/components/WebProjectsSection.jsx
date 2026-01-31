import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext.jsx";
import { webProjects } from "../data/webProjects.js";

function WebProjectsSection() {
  const { locale, t } = useLanguage();
  const [activeProject, setActiveProject] = useState(null);

  const localize = (value) => {
    if (typeof value === "string") return value;
    if (!value) return "";
    return value[locale] ?? value.fr ?? "";
  };

  return (
    <section id="web-projects" className="section">
      <h2 className="section-title">
        {locale === "fr" ? "Projets Web & Applications" : "Web & App Projects"}
      </h2>
      <div className="grid grid-3">
        {webProjects.map((project) => (
          <div key={project.id} className="project-card-wrapper">
            <article
              className={`project-card project-${
                project.color || "green"
              }`}
            >
              <h3>{localize(project.title)}</h3>
              <p className="project-category">{localize(project.role)}</p>
              <p className="project-category">{localize(project.context)}</p>
              <p className="project-description">
                <strong>Description :</strong>
                {localize(project.description)}
              </p>
              <button
                type="button"
                className="project-card-more"
                onClick={() => setActiveProject(project)}
              >
                {t("viewMore")}
              </button>
            </article>
          </div>
        ))}
      </div>

      {activeProject && (
        <div
          className="modal-backdrop"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="modal-close"
              onClick={() => setActiveProject(null)}
            >
              ×
            </button>
            {/* <h3 className="modal-title">{localize(activeProject.title)}</h3> */}
            {/* <p className="modal-subtitle">{localize(activeProject.role)}</p> */}
            {/* <p className="modal-context">{localize(activeProject.context)}</p> */}
            {activeProject.contributions && activeProject.contributions[locale] ? (
              <ul className="modal-contributions">
                {activeProject.contributions[locale].map((contribution, index) => (
                  <li key={index}>{contribution}</li>
                ))}
              </ul>
            ) : (
              <p className="modal-description">
                {localize(activeProject.description)}
              </p>
            )}
            <p className="modal-tech">
              <strong>Tech :</strong> {activeProject.technologies}
            </p>
            {activeProject.githubUrl && (
              <a
                href={activeProject.githubUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="btn primary"
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default WebProjectsSection;

