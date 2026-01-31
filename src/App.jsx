import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext.jsx";
import Home from "./components/Home.jsx";
import CompetencesPage from "./components/CompetencesPage.jsx";
import ProjetsPage from "./components/ProjetsPage.jsx";
import ProjectDetail from "./components/ProjectDetail.jsx";

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/competences" element={<CompetencesPage />} />
          <Route path="/projets" element={<ProjetsPage />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;

