import React from "react";

function WebSkillsSection() {
  return (
    <section id="web-skills" className="section">
      <h2 className="section-title">Compétences Web & Applications</h2>
      <div className="grid grid-2">
        <div className="card">
          <h3>Back-end Web</h3>
          <p>Symfony, Twig, Doctrine, FormEvents, API REST, NestJS</p>
        </div>
        <div className="card">
          <h3>Front-end Web</h3>
          <p>Vue.js (2/3), Vuex/Pinia, Vue Router, React, React Native</p>
        </div>
        <div className="card">
          <h3>Mobile & PWA</h3>
          <p>React Native, PWA, Responsive / Mobile-first</p>
        </div>
        <div className="card">
          <h3>Architecture & Outils</h3>
          <p>JWT, RBAC, Docker, Git/GitLab, Google Maps API, Chart.js</p>
        </div>
      </div>
    </section>
  );
}

export default WebSkillsSection;

