export const webProjects = [
  {
    id: "fiscal-app-expats",
    color: "purple",
    title: {
      fr: "Application fiscale pour expatriés",
      en: "Tax application for expats",
    },
    context: {
      fr: "Application web Symfony/Twig pour la déclaration fiscale des expatriés (multi-exercices, données sensibles).",
      en: "Symfony/Twig web app for expats' tax declarations (multi-year, sensitive data).",
    },
    role: {
      fr: "Développeuse Full-Stack Symfony/Twig",
      en: "Full-Stack Symfony/Twig Developer",
    },
    description: {
      fr: "Évolution des parcours utilisateurs, duplication conditionnelle des données entre exercices, formulaires dynamiques, i18n FR/EN et conformité RGPD.",
      en: "Worked on user journeys, conditional data duplication across fiscal years, dynamic forms, FR/EN i18n and GDPR compliance.",
    },
    technologies: "Symfony, Twig, Doctrine, FormEvents, YAML, LexikTranslationBundle, GitLab, Docker",
    githubUrl: null,
    contributions: {
      fr: [
        "Implémentation d'un mécanisme de duplication conditionnelle des données entre exercices fiscaux (règles métier, contrôles de cohérence).",
        "Conception et refonte de formulaires dynamiques (champs conditionnels, validations, contraintes) pour fiabiliser la saisie.",
        "Industrialisation de l'i18n (centralisation YAML, cohérence des clés, maintenance des traductions) via LexikTranslationBundle.",
        "Mise en place d'indicateurs de complétude et d'aides à la saisie (badges, messages contextualisés) pour améliorer l'UX.",
        "Optimisation des performances sur écrans à fort volume (profiling, réduction des requêtes Doctrine, ajustements de chargement).",
        "Renforcement de la sécurité et de la conformité (contrôles d'accès, masquage, gestion du cycle de conservation des données).",
        "Débogage et correction d'anomalies en préproduction/production (cache de formulaires, états incohérents) via Xdebug/Symfony Profiler.",
      ],
      en: [
        "Implemented a conditional data duplication mechanism between fiscal years (business rules, consistency checks).",
        "Designed and refactored dynamic forms (conditional fields, validations, constraints) to ensure reliable data entry.",
        "Industrialized i18n (YAML centralization, key consistency, translation maintenance) via LexikTranslationBundle.",
        "Set up completeness indicators and input aids (badges, contextual messages) to improve UX.",
        "Optimized performance on high-volume screens (profiling, reduction of Doctrine queries, loading adjustments).",
        "Strengthened security and compliance (access controls, masking, data retention cycle management).",
        "Debugged and corrected anomalies in pre-production/production (form cache, inconsistent states) via Xdebug/Symfony Profiler.",
      ],
    },
  },
  {
    id: "pool-health-book",
    color: "green",
    title: {
      fr: "Carnet sanitaire numérique pour piscines",
      en: "Digital sanitary logbook for swimming pools",
    },
    context: {
      fr: "Application Vue.js tablette terrain pour le suivi qualité d’eau, interventions et alertes.",
      en: "Vue.js tablet app for water quality monitoring, interventions and alerts.",
    },
    role: {
      fr: "Développeuse Front-End Vue.js",
      en: "Front-End Vue.js Developer",
    },
    description: {
      fr: "Écrans de saisie, dashboards, QR codes, formulaires avancés et optimisation UX tablette.",
      en: "Built input screens, dashboards, QR codes, advanced forms and optimised tablet UX.",
    },
    technologies: "Vue.js, Vuex, Vue Router, Axios, Chart.js, QR codes, SSO, API REST Symfony, GitLab, Docker",
    githubUrl: null,
    contributions: {
      fr: [
        "Développement de l'interface Vue.js (écrans de saisie, interventions, alertes) avec composants réutilisables et UI responsive.",
        "Structuration du store Vuex (modules, actions/mutations) pour synchroniser les flux et limiter les effets de bord.",
        "Intégration d'API REST (Axios) avec gestion d'erreurs, feedback utilisateur, et sécurisation des accès selon profils.",
        "Mise en place de formulaires avancés (validation, contrôles de cohérence métier, saisie guidée) pour réduire les erreurs terrain.",
        "Implémentation de dashboards et courbes d'historique via Chart.js (filtres temporels, lecture rapide des anomalies).",
        "Génération / intégration de QR codes pour accès public et partage des informations (export image/PDF).",
        "Contribution à l'intégration SSO et stabilisation des parcours de connexion (redirections, synchronisation d'état).",
        "Optimisation de l'ergonomie tablette (pagination, lazy-loading, performance de rendu sur listes volumineuses).",
      ],
      en: [
        "Developed Vue.js interface (input screens, interventions, alerts) with reusable components and responsive UI.",
        "Structured Vuex store (modules, actions/mutations) to synchronize flows and limit side effects.",
        "Integrated REST API (Axios) with error handling, user feedback, and access security based on profiles.",
        "Implemented advanced forms (validation, business consistency checks, guided input) to reduce field errors.",
        "Built dashboards and historical curves via Chart.js (temporal filters, quick anomaly reading).",
        "Generated / integrated QR codes for public access and information sharing (image/PDF export).",
        "Contributed to SSO integration and stabilization of connection flows (redirections, state synchronization).",
        "Optimized tablet ergonomics (pagination, lazy-loading, rendering performance on large lists).",
      ],
    },
  },
  {
    id: "medical-interns-pwa",
    color: "orange",
    title: {
      fr: "PWA de suivi d’activité pour internes en médecine",
      en: "Activity tracking PWA for medical interns",
    },
    context: {
      fr: "Application web mobile-first (Vue.js / PWA) pour gérer vacations, géolocalisation, notes et historique.",
      en: "Mobile-first web app (Vue.js / PWA) to manage shifts, geolocation, notes and history.",
    },
    role: {
      fr: "Développeuse Front-End Vue.js / PWA",
      en: "Front-End Vue.js / PWA Developer",
    },
    description: {
      fr: "Timer persistant, PWA offline, géolocalisation Google Maps et synchronisation à la reconnexion.",
      en: "Implemented persistent timer, offline PWA, Google Maps geolocation and sync on reconnect.",
    },
    technologies: "Vue.js, Vuex, Vue Router, JWT, Google Maps API, LocalStorage, PWA, API REST Symfony",
    githubUrl: null,
    contributions: {
      fr: [
        "Conception d'une interface mobile-first Vue.js et des parcours de saisie (timer, notes, historique) avec composants réutilisables.",
        "Mise en place de l'authentification JWT côté client (gestion de session, gardes de routes, contrôle d'accès).",
        "Intégration Google Maps API / géolocalisation (permissions, fallback, précision) au début et à la fin des sessions.",
        "Implémentation d'un timer persistant (sauvegarde locale, reprise après fermeture, gestion de la dérive) via LocalStorage.",
        "Mise en œuvre PWA (manifest, service worker, stratégies de cache) pour continuité de service en mobilité.",
        "Synchronisation à la reconnexion et gestion d'une file d'attente locale pour éviter les pertes de données.",
        "Instrumentation analytics (Google Analytics) et ajustements UX basés sur les usages réels.",
      ],
      en: [
        "Designed a mobile-first Vue.js interface and input flows (timer, notes, history) with reusable components.",
        "Implemented client-side JWT authentication (session management, route guards, access control).",
        "Integrated Google Maps API / geolocation (permissions, fallback, precision) at the beginning and end of sessions.",
        "Implemented a persistent timer (local saving, resumption after closing, drift management) via LocalStorage.",
        "Implemented PWA (manifest, service worker, caching strategies) for service continuity on mobile.",
        "Synchronization on reconnection and management of a local queue to prevent data loss.",
        "Analytics instrumentation (Google Analytics) and UX adjustments based on real usage.",
      ],
    },
  },
  {
    id: "pedagogic-platform",
    color: "pink",
    title: {
      fr: "Plateforme de suivi pédagogique",
      en: "Pedagogical tracking platform",
    },
    context: {
      fr: "Plateforme Symfony de suivi des compétences, évaluations et référentiels avec rôles multiples.",
      en: "Symfony platform to track skills, evaluations and curricula with multiple roles.",
    },
    role: {
      fr: "Développeuse Full-Stack Symfony/Twig",
      en: "Full-Stack Symfony/Twig Developer",
    },
    description: {
      fr: "Modélisation des données, écrans Twig, sécurisation des accès, exports Excel et optimisation des performances.",
      en: "Data modelling, Twig screens, access control, Excel exports and performance optimisation.",
    },
    technologies: "Symfony, Twig, Doctrine, Sécurité/Rôles, Export Excel, GitLab, Docker",
    githubUrl: null,
    contributions: {
      fr: [
        "Modélisation et évolution du schéma de données (Doctrine) : promotions, années, référentiels, compétences imbriquées.",
        "Développement des écrans Twig (consultation, saisie, synthèse) avec logique métier et parcours différenciés.",
        "Implémentation des droits et sécurisation des accès selon profil utilisateur (RBAC, contrôles serveur).",
        "Mise en place d'exports Excel pour le reporting pédagogique (filtres, mise en forme, consolidation).",
        "Optimisation des requêtes et pagination sur listes volumineuses (profiling, réduction N+1).",
        "Débogage et correction d'anomalies en préproduction/production (Xdebug, Symfony Profiler) et stabilisation des releases.",      ],
      en: [
        "Modelled and evolved data schema (Doctrine): promotions, years, curricula, nested skills.",
        "Developed Twig screens (consultation, input, summary) with business logic and differentiated flows.",
        "Implemented rights and access security based on user profile (RBAC, server controls).",
        "Set up Excel exports for pedagogical reporting (filters, formatting, consolidation).",
        "Optimized queries and pagination on large lists (profiling, N+1 reduction).",
        "Debugged and corrected anomalies in pre-production/production (Xdebug, Symfony Profiler) and stabilized releases.",
      ],
    },
  },
  {
    id: "museum-react-native",
    color: "purple",
    title: {
      fr: "Application mobile musée (React Native)",
      en: "Museum mobile app (React Native)",
    },
    context: {
      fr: "Application mobile pour enrichir la visite (expositions, actualités, carte, infos pratiques).",
      en: "Mobile app to enrich museum visits (exhibitions, news, map, practical info).",
    },
    role: {
      fr: "Développeuse Mobile Front-End React Native",
      en: "Mobile Front-End React Native Developer",
    },
    description: {
      fr: "Architecture du front, navigation, carte interactive, préparation de visite et synchro avec API Symfony.",
      en: "Built front architecture, navigation, interactive map, visit planning and sync with Symfony API.",
    },
    technologies: "React Native, TypeScript, React Navigation, REST API Symfony, Google Maps, Android/iOS",
    githubUrl: null,
    contributions: {
      fr: [
        "Réalisation complète du front-end mobile en React Native : architecture, navigation, structuration des écrans et composants réutilisables.",
        "Intégration des contenus dynamiques (expositions temporaires/permanentes, actualités, publications) : listes, filtres, recherche et pages de détail.",
        "Implémentation d'une carte interactive d'orientation sur site : points d'intérêt, affichage contextuel et parcours de consultation.",
        "Développement du module \"informations pratiques\" (horaires, tarifs, accès, contacts) avec mise à jour via API.",
        "Mise en place d'une fonctionnalité de préparation de visite personnalisée : favoris / sélection de contenus et gestion d'un parcours utilisateur.",
        "Connexion et synchronisation avec l'API Symfony existante (Système de cartels) : consommation REST, gestion des erreurs, compatibilité avec le schéma de données établi.",
        "Gestion des médias (images/ressources) et optimisation UX mobile (chargement progressif, pagination, feedback utilisateur).",
        "Stabilisation de l'application (edge cases, états réseau) et amélioration de la qualité via refactor et normalisation des composants.",
      ],
      en: [
        "Complete implementation of mobile front-end in React Native: architecture, navigation, screen structuring, and reusable components.",
        "Integration of dynamic content (temporary/permanent exhibitions, news, publications): lists, filters, search, and detail pages.",
        "Implementation of an interactive on-site orientation map: points of interest, contextual display, and consultation paths.",
        "Development of the \"practical information\" module (schedules, prices, access, contacts) with API-driven updates.",
        "Implementation of a personalized visit preparation feature: favorites / content selection and user journey management.",
        "Connection and synchronization with the existing Symfony API (Cartel system): REST consumption, error handling, compatibility with the established data schema.",
        "Media management (images/resources) and mobile UX optimization (progressive loading, pagination, user feedback).",
        "Application stabilization (edge cases, network states) and quality improvement via refactor and component normalization.",
      ],
    },
  },
  {
    id: "crm-artisans",
    color: "green",
    title: {
      fr: "CRM cabinet d’affaires d’artisans",
      en: "CRM for craftsmen business office",
    },
    context: {
      fr: "CRM multi-profils (Vue.js 3 / NestJS) pour gestion client, documents et visibilité en ligne.",
      en: "Multi-profile CRM (Vue.js 3 / NestJS) for client management, documents and online visibility.",
    },
    role: {
      fr: "Développeuse Full-Stack (Vue.js 3 / NestJS)",
      en: "Full-Stack Developer (Vue.js 3 / NestJS)",
    },
    description: {
      fr: "UX/UI, CRUD, RBAC, page artisan publique, gestion documentaire, e-mailing et géolocalisation.",
      en: "UX/UI, CRUD, RBAC, public artisan page, document management, emailing and geolocation.",
    },
    technologies:
      "Vue.js 3, TypeScript, Pinia, Vue Router, NestJS, JWT, RBAC, Upload/Download, Mailing, Google Maps, Docker",
    githubUrl: null,
    contributions: {
      fr: [
        "Conception UX/UI et intégration d'un design system (composants, formulaires, modales, tables) pour une application homogène.",
        "Développement en Vue.js 3 (router, gestion d'état) : écrans CRUD, recherche, filtres, pagination et tri.",
        "Implémentation d'un modèle d'autorisations (RBAC) : accès par rôles aux modules (clients, documents, avis, administration).",
        "Création du module \"page artisan\" configurable (contenu, médias, coordonnées) avec prévisualisation avant publication.",
        "Gestion documentaire : upload/download sécurisé, permissions d'accès, métadonnées, et organisation par dossiers.",
        "Mise en place d'un système d'avis/commentaires (modération, signalement, affichage public/privé).",
        "Implémentation d'un système d'e-mailing (templates, triggers, notifications) pour les échanges client/artisan.",
        "Intégration de la géolocalisation (carte, coordonnées, recherche par zone) pour faciliter la mise en relation.",
      ],
      en: [
        "UX/UI design and integration of a design system (components, forms, modals, tables) for a homogeneous application.",
        "Development in Vue.js 3 (router, state management): CRUD screens, search, filters, pagination and sorting.",
        "Implementation of an authorization model (RBAC): role-based access to modules (clients, documents, reviews, administration).",
        "Creation of a configurable \"artisan page\" module (content, media, contact details) with preview before publication.",
        "Document management: secure upload/download, access permissions, metadata, and folder organization.",
        "Implementation of a review/comment system (moderation, reporting, public/private display).",
        "Implementation of an emailing system (templates, triggers, notifications) for client/artisan exchanges.",
        "Integration of geolocation (map, coordinates, area search) to facilitate connections.",
      ],
    },
  },
  {
    id: "crm-insurance",
    color: "orange",
    title: {
      fr: "CRM assurance",
      en: "Insurance CRM",
    },
    context: {
      fr: "CRM métier pour cabinets d’assurance : gestion prospects/clients, contrats, tâches, documents et reporting.",
      en: "Business CRM for insurance offices: leads/clients, contracts, tasks, documents and reporting.",
    },
    role: {
      fr: "Développeuse Full-Stack (Vue.js / NestJS)",
      en: "Full-Stack Developer (Vue.js / NestJS)",
    },
    description: {
      fr: "Vue.js front, pipeline commercial Kanban, workflows, exports, notifications et refactor qualité.",
      en: "Vue.js front, Kanban pipeline, workflows, exports, notifications and quality refactor.",
    },
    technologies:
      "Vue.js, TypeScript, Vue Router, Pinia/Vuex, NestJS, JWT, RBAC, Document management, Mailing, Docker",
    githubUrl: null,
    contributions: {
      fr: [
        "Développement d'écrans Vue.js (tableaux, formulaires, vues détaillées) avec recherche multicritère, filtres et pagination.",
        "Implémentation d'un pipeline commercial (Kanban) et de workflows (tâches, relances) avec statuts et règles métier.",
        "Intégration des endpoints API NestJS (CRUD) et gestion des erreurs/droits côté front.",
        "Gestion documentaire : upload/download, classement, contrôle d'accès par rôles et gestion des pièces liées aux dossiers.",
        "Mise en place d'exports (Excel/PDF) pour le reporting et le partage avec les équipes.",
        "Implémentation de notifications e-mail / in-app pour relances et échéances (templates, événements).",
        "Amélioration de la qualité : refactor, composants réutilisables, revue de code et normalisation du style.",
      ],
      en: [
        "Developed Vue.js screens (tables, forms, detailed views) with multi-criteria search, filters and pagination.",
        "Implemented a commercial pipeline (Kanban) and workflows (tasks, follow-ups) with statuses and business rules.",
        "Integrated NestJS API endpoints (CRUD) and error/rights management on the front-end.",
        "Document management: upload/download, classification, role-based access control and management of documents linked to files.",
        "Set up exports (Excel/PDF) for reporting and sharing with teams.",
        "Implemented email / in-app notifications for follow-ups and deadlines (templates, events).",
        "Quality improvement: refactor, reusable components, code review and style normalization.",
      ],
    },
  },
  {
    id: "cryptovis",
    color: "purple",
    title: {
      fr: "CryptoVis – Visualisation de cryptomonnaies",
      en: "CryptoVis – Cryptocurrency visualisation",
    },
    context: {
      fr: "Projet académique pour développement d’un tableau de bord interactif pour l’analyse et la visualisation de données de cryptomonnaies à partir de l’API CoinGecko.",
      en: "Academic project to develop an interactive dashboard for the analysis and visualisation of cryptocurrency data from the CoinGecko API.",
    },
    role: {
      fr: "Développeuse Vue.js / Front",
      en: "Vue.js / Front-end Developer",
    },
    description: {
      fr: "Visualisation des prix et indicateurs clés des cryptomonnaies (graphiques, filtres, comparaisons).",
      en: "Visualisation of crypto prices and key indicators (charts, filters, comparisons).",
    },
    technologies: "Vue.js, TypeScript, Vue Router, Pinia/Vuex, Axios, Chart.js, Docker",
    githubUrl: "https://github.com/EpitechMscProPromo2025/T-WEB-700-PAR_33/tree/main",
  },
  {
    id: "pictsmanager",
    color: "pink",
    title: {
      fr: "PictsManager – Application mobile",
      en: "PictsManager – Mobile app",
    },
    context: {
      fr: "Projet académique d’application mobile pour gestion de photos.",
      en: "Academic mobile app project for photo management.",
    },
    role: {
      fr: "Développeuse Mobile",
      en: "Mobile Developer",
    },
    description: {
      fr: "Gestion de photos (capture, liste, détail) avec stockage local et UX mobile.",
      en: "Handles photos (capture, list, detail) with local storage and mobile UX.",
    },
    technologies: "Mobile (React Native), stockage local",
    githubUrl: "https://github.com/EpitechMscProPromo2025/T-DEV-800-PAR_26",
  },
];

