import React from "react";

function EducationSection() {
  return (
    <section id="formation" className="section">
      <h2 className="section-title">Formation académique</h2>
      <div className="timeline">
        <div className="timeline-item">
          <h3>Bac +5 en Intelligence Artificielle</h3>
          <p className="timeline-place">Epitech - École informatique Paris</p>
          <p className="timeline-date">09/2023 – 07/2025 • Paris, France</p>
        </div>
        <div className="timeline-item">
          <h3>B.U.T. Informatique, réalisation d&apos;applications</h3>
          <p className="timeline-place">IUT Paris Cité</p>
          <p className="timeline-date">09/2022 – 08/2023 • Paris, France</p>
        </div>
        <div className="timeline-item">
          <h3>Licence 2 Math-Info</h3>
          <p className="timeline-place">Université de Strasbourg</p>
          <p className="timeline-date">09/2019 – 07/2022 • Strasbourg, France</p>
        </div>
        <div className="timeline-item">
          <h3>Diplôme d&apos;études en langue française</h3>
          <p className="timeline-place">Université de Strasbourg</p>
          <p className="timeline-date">09/2017 – 05/2019 • Strasbourg, France</p>
        </div>
      </div>
    </section>
  );
}

export default EducationSection;

