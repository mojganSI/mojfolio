import React from "react";

function ExperienceSection() {
  return (
    <section id="experience" className="section">
      <h2 className="section-title">Expérience professionnelle</h2>

      <div className="experience-card">
        <div className="experience-header">
          <div>
            <h3>Agence REVO — Développeuse full stack</h3>
            <p className="experience-location">Paris, France • 04/2023 – 07/2025</p>
          </div>
        </div>
        <p className="experience-subtitle">
          Service Développement Web &amp; App. Digitalisation des secteurs
          médicaux et administratifs, automatisation de la gestion des données.
        </p>
        <div className="experience-columns">
          <div>
            <h4>Réalisations</h4>
            <ul>
              <li>Développement d&apos;applications web</li>
              <li>Sécurisation et gestion des accès</li>
              <li>Interfaces ergonomiques et accessibles</li>
            </ul>
            <h4>Résultats clés</h4>
            <ul>
              <li>Optimisation des services médicaux</li>
              <li>Réduction des erreurs via automatisation</li>
              <li>Déploiement d&apos;applications robustes</li>
            </ul>
          </div>
          <div>
            <h4>Outils &amp; technologies</h4>
            <p>
              Vue.js, Symfony, phpMyAdmin, Docker, API REST, sécurité des
              données, gestion des accès
            </p>
          </div>
        </div>
      </div>

      <div className="experience-card">
        <h3>Projets IA — Agence REVO</h3>
        <p className="experience-subtitle">
          Développement d&apos;algorithmes IA pour différents domaines (santé,
          finance, logistique, mobilité).
        </p>
        <div className="experience-columns">
          <div>
            <h4>Réalisations</h4>
            <ul>
              <li>Conception et entraînement de modèles IA</li>
              <li>Optimisation des performances via réglage des hyperparamètres</li>
              <li>Expérimentation sur modèles pré-entraînés et vierges</li>
            </ul>
          </div>
          <div>
            <h4>Technologies</h4>
            <p>
              Python, TensorFlow, PyTorch, Scikit-learn, Transformers, Docker,
              AWS, CI/CD
            </p>
          </div>
        </div>
      </div>

      <div className="experience-card">
        <div className="experience-header">
          <div>
            <h3>Hôpital PARS — Développeuse web</h3>
            <p className="experience-location">Pasht, Iran • 01/2015 – 03/2017</p>
          </div>
        </div>
        <p className="experience-subtitle">
          Digitalisation de la gestion hospitalière et optimisation de l’accès
          aux données médicales et administratives.
        </p>
        <div className="experience-columns">
          <div>
            <h4>Réalisations</h4>
            <ul>
              <li>Maintenance du site web de l&apos;hôpital</li>
              <li>
                Formation du personnel à un logiciel de gestion des données
                démographiques
              </li>
            </ul>
          </div>
          <div>
            <h4>Résultats clés</h4>
            <ul>
              <li>Optimisation des flux de travail du personnel hospitalier</li>
              <li>Réduction des coûts liés au papier et aux erreurs manuelles</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;

