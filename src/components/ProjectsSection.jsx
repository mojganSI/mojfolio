import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext.jsx";
import { projects } from "../data/projects.js";

function ProjectsSection() {
  const { t, locale } = useLanguage();

  const localize = (value) => {
    if (typeof value === "string") return value;
    if (!value) return "";
    return value[locale] ?? value.fr ?? "";
  };

  return (
    <section id="projets" className="section">
      <h2 className="section-title">{t("projects")}</h2>
      <div className="grid grid-3">
        {projects.map((project) => (
          <div key={project.id} className="project-card-wrapper">
            <article className={`project-card project-${project.color}`}>
              <h3>{localize(project.title)}</h3>
              <p className="project-category">
                {localize(project.category)}
              </p>
              <p className="project-description">
                {localize(project.shortDescription)}
              </p>
              {project.externalUrl ? (
                <a
                  href={project.externalUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="project-card-more"
                >
                  {t("viewSite")}
                </a>
              ) : (
                <Link
                  to={`/project/${project.id}`}
                  className="project-card-more"
                >
                  {t("viewMore")}
                </Link>
              )}
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;

