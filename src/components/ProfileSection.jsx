import React from "react";

function ProfileSection() {
  return (
    <section id="profil" className="section">
      <h2 className="section-title">Profil</h2>
      <p className="section-text">
        Développeuse IA récemment diplômée (Master 2 – Epitech Paris), j&apos;ai
        mené pendant 4 ans divers projets IA / data, dont 2 ans axés sur le{" "}
        <strong>Machine Learning</strong>, le <strong>Deep Learning</strong> et
        le <strong>NLP</strong>. J&apos;ai contribué à la création et au
        déploiement de modèles prédictifs en{" "}
        <strong>Python (PyTorch, TensorFlow, scikit-learn)</strong> et à la
        mise en place de premiers éléments <strong>MLOps</strong> (Docker, Git,
        CI/CD, AWS). Je souhaite rejoindre une équipe{" "}
        <strong>IA / Data Science</strong> pour continuer à apprendre,
        approfondir mes compétences et transformer les données en solutions
        fiables.
      </p>
    </section>
  );
}

export default ProfileSection;

