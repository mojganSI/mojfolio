import React, { createContext, useContext, useState, useEffect } from "react";

const translations = {
  fr: {
    heroSubtitle: "Ingénieure en Intelligence Artificielle • Data Scientist • Développeuse Full Stack",
    heroText: "Développeuse IA et full stack, passionnée par le Machine Learning, le Deep Learning et le NLP. J'aime transformer les données en solutions concrètes pour les entreprises.",
    welcomeTitle: "Bienvenue sur mon site",
    aboutMe: "À propos",
    aboutText: "Ingénieure IA et Data Scientist, je conçois des solutions techniques et des applications web. Découvrez mes compétences et mes réalisations.",
    downloadCV: "Télécharger le CV",
    viewProjects: "Voir mes projets",
    contactMe: "Me contacter",
    skills: "Compétences",
    projects: "Projets",
    home: "Accueil",
    viewSite: "→ Voir le site",
    viewMore: "Voir plus",
    footerContact: "Me contacter",
    footerCopy: "Portfolio Mojgan Sigarchian",
    backToPortfolio: "← Portfolio - Mojgan Sigarchian",
    projectNotFound: "Projet non trouvé",
    backHome: "Retour à l'accueil",
    demo: "Démo",
    specificities: "Spécificités",
    technicalSteps: "Étapes techniques",
    myContributions: "Mes contributions",
    whatILearned: "Ce que j'ai appris",
    technologies: "Technologies",
    skillsIa: "IA & Data Science",
    skillsDev: "Développement",
    skillsDb: "Base de données",
    skillsTools: "Méthodologies & Outils",
  },
  en: {
    heroSubtitle: "AI Engineer • Data Scientist • Full Stack Developer",
    heroText: "AI and full stack developer, passionate about Machine Learning, Deep Learning and NLP. I like turning data into concrete solutions for businesses.",
    welcomeTitle: "Welcome to my website",
    aboutMe: "About me",
    aboutText: "AI Engineer and Data Scientist, I design technical solutions and web applications. Discover my skills and projects.",
    downloadCV: "Download CV",
    viewProjects: "View my projects",
    contactMe: "Contact me",
    skills: "Skills",
    projects: "Projects",
    home: "Home",
    viewSite: "→ View site",
    viewMore: "See more",
    footerContact: "Contact me",
    footerCopy: "Mojgan Sigarchian Portfolio",
    backToPortfolio: "← Portfolio - Mojgan Sigarchian",
    projectNotFound: "Project not found",
    backHome: "Back to home",
    demo: "Demo",
    specificities: "Specificities",
    technicalSteps: "Technical steps",
    myContributions: "My contributions",
    whatILearned: "What I learned",
    technologies: "Technologies",
    skillsIa: "AI & Data Science",
    skillsDev: "Development",
    skillsDb: "Databases",
    skillsTools: "Methodologies & Tools",
  },
};

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [locale, setLocaleState] = useState(() => {
    return localStorage.getItem("portfolio-lang") || "fr";
  });

  useEffect(() => {
    localStorage.setItem("portfolio-lang", locale);
  }, [locale]);

  const setLocale = (lang) => {
    if (lang === "fr" || lang === "en") setLocaleState(lang);
  };

  const t = (key) => translations[locale][key] ?? key;

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
