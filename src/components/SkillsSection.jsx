import React from "react";
import { useLanguage } from "../context/LanguageContext.jsx";

function SkillsSection() {
  const { t } = useLanguage();
  return (
    <section id="competences" className="section">
      <h2 className="section-title">{t("skills")}</h2>
      <div className="grid grid-2">
        <div className="card">
          <h3>{t("skillsIa")}</h3>
          <p>Machine Learning, Deep Learning, NLP, LLM</p>
        </div>
        <div className="card">
          <h3>{t("skillsDev")}</h3>
          <p>Python, JavaScript, Java, PHP</p>
        </div>
        <div className="card">
          <h3>{t("skillsDb")}</h3>
          <p>PostgreSQL, MongoDB, MySQL, phpMyAdmin</p>
        </div>
        <div className="card">
          <h3>{t("skillsTools")}</h3>
          <p>Agile (Scrum, Kanban), Git/GitHub, Jira, Docker, CI/CD, AWS</p>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;

