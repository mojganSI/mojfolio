export const projects = [
  {
    id: "classification-scans-pulmonaires",
    title: {
      fr: "Classification de scanners pulmonaires",
      en: "Lung scan classification",
    },
    category: {
      fr: "Data Science • Machine Learning • Deep Learning",
      en: "Data Science • Machine Learning • Deep Learning",
    },
    description: {
      fr: "Ce projet vise à classifier des scans pulmonaires en différentes catégories en utilisant des techniques de machine learning et de deep learning. L'objectif principal est de réaliser un benchmark de plusieurs modèles afin de sélectionner le plus performant pour la classification d'images médicales.",
      en: "This project classifies lung X-ray scans into several categories using machine learning and deep learning techniques. The main goal is to benchmark multiple models and select the best one for medical image classification.",
    },
    shortDescription: {
      fr: "Classifier des scans pulmonaires (sain, pneumonie bactérienne, pneumonie virale) avec plusieurs modèles de deep learning.",
      en: "Classify lung scans (healthy, bacterial pneumonia, viral pneumonia) with several deep learning models.",
    },
    color: "purple",
    githubUrl: "https://github.com/EpitechMscProPromo2025/T-DEV-810-PAR_26",
    videoUrl: "",
    specificites: {
      fr: [
        "Classification multi-classes (sain, pneumonie bactérienne, pneumonie virale)",
        "Benchmark de plusieurs modèles (Random Forest, SVC avec PCA, CNN)",
        "Prétraitement d'images médicales (normalisation, augmentation de données)",
        "Gestion de datasets déséquilibrés avec pondération des classes",
        "Métriques adaptées pour l'évaluation (précision, AUC, F1 Macro)",
        "Interface interactive pour tester le modèle avec upload d'images",
      ],
      en: [
        "Multi-class classification (healthy, bacterial pneumonia, viral pneumonia)",
        "Benchmark of several models (Random Forest, SVC with PCA, CNN)",
        "Preprocessing of medical images (normalisation, data augmentation)",
        "Handling imbalanced datasets with class weighting",
        "Appropriate metrics for evaluation (accuracy, AUC, F1 Macro)",
        "Interactive interface to test the model with uploaded images",
      ],
    },
    etapesTechniques: [
      {
        number: 1,
        title: {
          fr: "Collecte et préparation des données",
          en: "Data collection and preparation",
        },
        details: {
          fr: [
            "Import d'un dataset de scans pulmonaires (X-ray)",
            "Séparation train/test/validation (4099/879/878 images)",
            "Normalisation et redimensionnement des images",
          ],
          en: [
            "Import of a lung X-ray dataset",
            "Train/test/validation split (4099/879/878 images)",
            "Image normalisation and resizing",
          ],
        },
      },
      {
        number: 2,
        title: {
          fr: "Prétraitement des images",
          en: "Image preprocessing",
        },
        details: {
          fr: [
            "Normalisation des valeurs de pixels",
            "Augmentation de données (rotation, zoom, flip)",
            "Gestion du déséquilibre des classes",
          ],
          en: [
            "Normalisation of pixel values",
            "Data augmentation (rotation, zoom, flip)",
            "Handling class imbalance",
          ],
        },
      },
      {
        number: 3,
        title: {
          fr: "Extraction de features",
          en: "Feature extraction",
        },
        details: {
          fr: [
            "PCA pour réduction de dimensionnalité",
            "Features manuelles pour modèles classiques",
            "Features automatiques via CNN",
          ],
          en: [
            "PCA for dimensionality reduction",
            "Hand-crafted features for classic models",
            "Automatic features via CNN",
          ],
        },
      },
      {
        number: 4,
        title: {
          fr: "Entraînement des modèles",
          en: "Model training",
        },
        details: {
          fr: [
            "Random Forest avec hyperparamètres optimisés",
            "SVC (Support Vector Classifier) avec PCA",
            "Réseaux de neurones convolutifs (CNN)",
          ],
          en: [
            "Random Forest with tuned hyperparameters",
            "SVC (Support Vector Classifier) with PCA",
            "Convolutional Neural Networks (CNN)",
          ],
        },
      },
      {
        number: 5,
        title: {
          fr: "Évaluation et benchmark",
          en: "Evaluation and benchmark",
        },
        details: {
          fr: [
            "Calcul de métriques (précision, AUC, F1 Macro)",
            "Comparaison des performances des modèles",
            "Analyse des erreurs de classification",
          ],
          en: [
            "Computation of metrics (accuracy, AUC, F1 Macro)",
            "Comparison of model performances",
            "Analysis of misclassifications",
          ],
        },
      },
      {
        number: 6,
        title: {
          fr: "Optimisation",
          en: "Optimisation",
        },
        details: {
          fr: [
            "Réglage des hyperparamètres",
            "Amélioration de la précision globale",
            "Réduction des faux positifs/négatifs",
          ],
          en: [
            "Hyperparameter tuning",
            "Improving overall accuracy",
            "Reducing false positives/negatives",
          ],
        },
      },
    ],
    contributions: {
      fr: [
        "Conception et implémentation du pipeline de prétraitement",
        "Développement et entraînement de plusieurs modèles de classification",
        "Création d'une interface interactive pour tester le modèle",
        "Analyse comparative des performances et sélection du meilleur modèle",
      ],
      en: [
        "Designed and implemented the preprocessing pipeline",
        "Developed and trained several classification models",
        "Built an interactive interface to test the model",
        "Compared model performances and selected the best one",
      ],
    },
    apprentissages: {
      fr: [
        "Prétraiter des images médicales pour le machine learning",
        "Implémenter et comparer plusieurs modèles de classification",
        "Analyser les performances avec des métriques adaptées",
        "Utiliser des techniques d'augmentation de données pour la robustesse",
        "Travailler avec des datasets déséquilibrés",
      ],
      en: [
        "Preprocess medical images for machine learning",
        "Implement and compare several classification models",
        "Analyse performance using appropriate metrics",
        "Use data augmentation techniques to improve robustness",
        "Work with imbalanced datasets",
      ],
    },
    technologies: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "Pandas", "NumPy"],
    stats: {
      train: 4099,
      test: 879,
      validation: 878,
      total: 5856,
      precision: "96%",
    },
  },
  {
    id: "travel-order-resolver",
    title: {
      fr: "Travel Order Resolver",
      en: "Travel Order Resolver",
    },
    category: {
      fr: "Data Science • NLP • Algorithme",
      en: "Data Science • NLP • Algorithm",
    },
    description: {
      fr: "Ce projet consiste à générer et exploiter des données, en combinant NLP et ML, pour produire automatiquement les éléments nécessaires à la détermination du trajet le plus court.",
      en: "This project generates and uses data by combining NLP and ML to automatically provide everything needed to compute the shortest travel route.",
    },
    shortDescription: {
      fr: "Générer et exploiter des données textuelles pour déterminer automatiquement le plus court trajet de voyage.",
      en: "Generate and process textual data to automatically determine the shortest travel route.",
    },
    color: "green",
    githubUrl: "https://github.com/EpitechMscProPromo2025/T-AIA-901-PAR_18",
    videoUrl: "",
    specificites: {
      fr: [
        "Extraction de texte depuis plusieurs sources (texte direct, fichiers .txt, audio transcrit)",
        "Import et traitement des données SNCF (stops, stop_times, trips, routes, calendar_dates)",
        "Création d'un dataset varié pour l'entraînement NLP",
        "Analyse NLP avec spaCy pour extraction d'entités (villes)",
        "Construction d'un graphe de villes et gares avec poids temporels",
        "Algorithme de plus court chemin (Dijkstra) pour trouver l'itinéraire optimal",
        "Gestion des cas particuliers (phrases non-françaises, villes inconnues, routes impossibles)",
      ],
      en: [
        "Text extraction from multiple sources (direct text, .txt files, transcribed audio)",
        "Import and processing of SNCF data (stops, stop_times, trips, routes, calendar_dates)",
        "Creation of a diverse dataset for NLP training",
        "NLP analysis with spaCy to extract entities (cities)",
        "Graph construction of cities and stations with time-weighted edges",
        "Shortest path algorithm (Dijkstra) to find the optimal route",
        "Handling edge cases (non-French sentences, unknown cities, impossible routes)",
      ],
    },
    etapesTechniques: [
      {
        number: 1,
        title: {
          fr: "Extraction du texte",
          en: "Text extraction",
        },
        details: {
          fr: [
            "Texte saisi directement",
            "Fichier texte (.txt) uploadé",
            "Audio transcrit via un backend (pydub + speech_recognition)",
          ],
          en: [
            "Text entered directly",
            "Uploaded text file (.txt)",
            "Audio transcribed via a backend (pydub + speech_recognition)",
          ],
        },
      },
      {
        number: 2,
        title: {
          fr: "Import des données SNCF",
          en: "Import SNCF data",
        },
        details: {
          fr: [
            "Import des CSV SNCF (stops, stop_times, trips, routes, calendar_dates)",
            "Fusion, déduplication et normalisation des noms de gares",
          ],
          en: [
            "Import SNCF CSV files (stops, stop_times, trips, routes, calendar_dates)",
            "Merge, deduplicate and normalise station names",
          ],
        },
      },
      {
        number: 3,
        title: {
          fr: "Création et nettoyage du dataset",
          en: "Dataset creation and cleaning",
        },
        details: {
          fr: [
            "Génération de datasets variés avec ChatGPT",
            "Ajout de villes avec gares SNCF",
            "Nettoyage et normalisation des phrases",
          ],
          en: [
            "Generation of diverse datasets with ChatGPT",
            "Adding cities served by SNCF stations",
            "Cleaning and normalising sentences",
          ],
        },
      },
      {
        number: 4,
        title: {
          fr: "Analyse NLP",
          en: "NLP analysis",
        },
        details: {
          fr: [
            "Entraînement d'un modèle spaCy pour extraction d'entités (villes)",
            "Deuxième modèle pour détecter ville de départ, connexion et destination",
          ],
          en: [
            "Training a spaCy model to extract entities (cities)",
            "Second model to detect departure city, connections and destination",
          ],
        },
      },
      {
        number: 5,
        title: {
          fr: "Construction du graphe",
          en: "Graph construction",
        },
        details: {
          fr: ["Villes/gares comme nœuds", "Trajets comme arêtes pondérées par le temps"],
          en: ["Cities/stations as nodes", "Trips as time-weighted edges"],
        },
      },
      {
        number: 6,
        title: {
          fr: "Algorithme du plus court chemin",
          en: "Shortest path algorithm",
        },
        details: {
          fr: [
            "Implémentation de l'algorithme de Dijkstra",
            "Recherche du chemin optimal",
          ],
          en: ["Implementation of Dijkstra's algorithm", "Search for the optimal route"],
        },
      },
      {
        number: 7,
        title: {
          fr: "Gestion des cas particuliers",
          en: "Handling special cases",
        },
        details: {
          fr: [
            "Phrases non-françaises",
            "Villes inconnues",
            "Routes impossibles",
            "Autres erreurs spécifiques",
          ],
          en: [
            "Non-French sentences",
            "Unknown cities",
            "Impossible routes",
            "Other specific errors",
          ],
        },
      },
      {
        number: 8,
        title: {
          fr: "Résultat",
          en: "Result",
        },
        details: {
          fr: ["Itinéraire ordonné", "Durée totale", "Détails des connexions"],
          en: ["Ordered itinerary", "Total duration", "Details of connections"],
        },
      },
    ],
    contributions: {
      fr: [
        "Conception et implémentation du pipeline NLP complet",
        "Développement de l'algorithme de plus court chemin",
        "Création du dataset d'entraînement pour les modèles NLP",
        "Gestion des cas particuliers et erreurs",
      ],
      en: [
        "Designed and implemented the full NLP pipeline",
        "Developed the shortest path algorithm",
        "Created the training dataset for NLP models",
        "Handled edge cases and error scenarios",
      ],
    },
    apprentissages: {
      fr: [
        "Créer un dataset NLP from scratch pour entraîner et tester des modèles",
        "Manipuler spaCy et construire des pipelines audio+texte",
        "Implémenter des algorithmes de graphes",
        "Diriger une petite équipe (4 personnes)",
        "Organiser le travail et gérer les priorités entre data, développement et recherche",
      ],
      en: [
        "Create an NLP dataset from scratch to train and test models",
        "Use spaCy and build audio+text pipelines",
        "Implement graph algorithms",
        "Lead a small team (4 people)",
        "Organise work and manage priorities across data, dev and research",
      ],
    },
    technologies: ["Python", "spaCy", "NLP", "Dijkstra", "Pandas", "NetworkX", "Speech Recognition"],
    stats: {
      villes: "3000+",
      precisionNLP: "96%",
      cheminOptimal: "99%",
    },
  },
  {
    id: "jeu-vr-spatial",
    title: {
      fr: "Jeu VR Spatial",
      en: "Space VR Game",
    },
    category: {
      fr: "VR • Unity • C#",
      en: "VR • Unity • C#",
    },
    description: {
      fr: "Jeu de survie et réparation en réalité virtuelle. Explorez un vaisseau spatial endommagé en VR et effectuez des tâches de survie et de réparation via des interactions immersives.",
      en: "Survival and repair VR game. Explore a damaged spaceship in VR and perform survival and repair tasks through immersive interactions.",
    },
    shortDescription: {
      fr: "Jeu d'exploration spatiale en réalité virtuelle avec interactions immersives pour la réparation d'un vaisseau.",
      en: "VR space exploration game with immersive interactions to repair a spaceship.",
    },
    color: "orange",
    githubUrl: null,
    videoUrl: "",
    specificites: {
      fr: [
        "Système de lumière interactif (click and light)",
        "Bracelet de géolocalisation avec points lumineux indiquant les zones d'interaction",
        "Panneau électrique à réparer : ouverture, récupération d'objets cassés, réparation et remise en place",
        "Pièce d'observation avec store levable révélant le système solaire (planètes en rotation et voie lactée)",
        "Système d'ouverture de portes avec énigmes et codes à déchiffrer",
        "Mécanisme de cartes colorées cachées au sol pour débloquer les portes",
        "Portes automatiques s'ouvrant et se fermant à l'approche du joueur",
        "Micro-ondes de réparation : réparez des objets électroniques avec du scotch",
        "Feedback audio immersif pour guider le joueur",
      ],
      en: [
        "Interactive light system (click and light)",
        "Geolocation bracelet with light points indicating interaction zones",
        "Electrical panel to repair: open, recover broken objects, fix and replace",
        "Observation room with blind revealing the solar system (rotating planets and milky way)",
        "Door system with puzzles and codes to decrypt",
        "Colored card mechanism hidden on the floor to unlock doors",
        "Automatic doors opening and closing as the player approaches",
        "Repair microwave: fix electronic objects with tape",
        "Immersive audio feedback to guide the player",
      ],
    },
    etapesTechniques: [
      {
        number: 1,
        title: {
          fr: "Conception de l'expérience VR",
          en: "VR experience design",
        },
        details: {
          fr: [
            "Définition des mécaniques de jeu",
            "Design des interactions VR immersives",
            "Planification des zones et des énigmes",
          ],
          en: [
            "Definition of game mechanics",
            "Design of immersive VR interactions",
            "Planning of areas and puzzles",
          ],
        },
      },
      {
        number: 2,
        title: {
          fr: "Modélisation 3D",
          en: "3D modelling",
        },
        details: {
          fr: [
            "Modélisation du vaisseau spatial",
            "Adaptation des modèles pour VR",
          ],
          en: [
            "Modelling of the spaceship",
            "Adapting models for VR",
          ],
        },
      },
      {
        number: 3,
        title: {
          fr: "Développement Unity",
          en: "Unity development",
        },
        details: {
          fr: [
            "Configuration du projet VR pour Meta Quest 3",
            "Implémentation des interactions",
            "Intégration des assets 3D",
          ],
          en: [
            "Configuring the VR project for Meta Quest 3",
            "Implementing interactions",
            "Integrating 3D assets",
          ],
        },
      },
      {
        number: 4,
        title: {
          fr: "Systèmes interactifs",
          en: "Interactive systems",
        },
        details: {
          fr: [
            "Système de lumière interactif",
            "Mécanismes de réparation",
          ],
          en: [
            "Interactive light system",
            "Repair mechanisms",
          ],
        },
      },
      {
        number: 5,
        title: {
          fr: "Optimisation",
          en: "Optimisation",
        },
        details: {
          fr: [
            "Optimisation des performances pour VR",
            "Réduction de la latence",
            "Amélioration de l'expérience utilisateur",
          ],
          en: [
            "Performance optimisation for VR",
            "Latency reduction",
            "Improving user experience",
          ],
        },
      },
    ],
    contributions: {
      fr: [
        "Conception et implémentation du système d'ouverture de portes (énigmes, codes, cartes colorées)",
        "Développement du mécanisme de portes automatiques réagissant à la proximité du joueur",
        "Création du micro-ondes de réparation avec logique de scotch et feedback audio",
        "Participation à la réparation du panneau électrique (partie la plus intuitive du projet)",
      ],
      en: [
        "Designed and implemented the door-opening system (puzzles, codes, coloured cards)",
        "Developed the automatic door mechanism reacting to player proximity",
        "Created the repair microwave with tape logic and audio feedback",
        "Contributed to repairing the electrical panel (most intuitive part of the project)",
      ],
    },
    apprentissages: {
      fr: [
        "Développer des interactions VR réalistes et intuitives",
        "Maîtriser Unity et les outils VR pour Meta Quest 3",
        "Concevoir une expérience utilisateur immersive en VR",
        "Collaborer efficacement en équipe avec répartition claire des tâches",
        "Intégrer logique spatiale, physique et design d'interaction",
        "Optimiser les performances pour une expérience VR fluide",
      ],
      en: [
        "Develop realistic and intuitive VR interactions",
        "Use Unity and VR tools for Meta Quest 3",
        "Design an immersive user experience in VR",
        "Collaborate efficiently in a team with clear task sharing",
        "Combine spatial logic, physics and interaction design",
        "Optimise performance for a smooth VR experience",
      ],
    },
    technologies: ["Unity", "C#", "Meta Quest 3", "VR Toolkit"],
    stats: {},
  },
  {
    id: "spartainvest",
    title: {
      fr: "SpartaInvest",
      en: "SpartaInvest",
    },
    category: {
      fr: "Projet IA • Investissement boursier",
      en: "AI project • Stock investment",
    },
    description: {
      fr: "Plateforme de conseils pour l'investissement boursier basés sur l'IA.",
      en: "Platform providing stock investment advice powered by AI.",
    },
    shortDescription: {
      fr: "Créer des conseils pour l'investissement boursier basés sur l'IA.",
      en: "Generate AI-based recommendations for stock investment.",
    },
    color: "pink",
    externalUrl: "https://spartainvest.fr/landing",
    githubUrl: null,
    videoUrl: null,
    specificites: { fr: [], en: [] },
    etapesTechniques: [],
    contributions: { fr: [], en: [] },
    apprentissages: { fr: [], en: [] },
    technologies: [],
    stats: {},
  },
  {
    id: "kafka-postgres-data-pipeline",
    title: {
      fr: "Pipeline Kafka & PostgreSQL",
      en: "Kafka & PostgreSQL Data Pipeline",
    },
    category: {
      fr: "Data Engineering • Streaming",
      en: "Data Engineering • Streaming",
    },
    description: {
      fr: "Mise en place d'un pipeline de données en temps quasi-réel basé sur Kafka et PostgreSQL pour collecter, nettoyer et stocker des données de cryptomonnaies avant visualisation dans un dashboard.",
      en: "Implementation of a near real-time data pipeline using Kafka and PostgreSQL to collect, clean and store cryptocurrency data before visualisation in a dashboard.",
    },
    shortDescription: {
      fr: "Pipeline Kafka + PostgreSQL pour produire, consommer et nettoyer des données crypto envoyées vers un dashboard.",
      en: "Kafka + PostgreSQL pipeline to produce, consume and clean crypto data sent to a dashboard.",
    },
    color: "green",
    githubUrl: "https://github.com/EpitechMscProPromo2025/T-DAT-901-PAR_22",
    videoUrl: "",
    specificites: {
      fr: [
        "Producteur Kafka pour générer et envoyer des messages de données crypto",
        "Consommateur Kafka écrivant les messages dans une table PostgreSQL `crypto`",
        "Étape de nettoyage et de normalisation des données avant exploitation",
        "Utilisation de Docker / docker-compose pour orchestrer Kafka, Zookeeper, PostgreSQL et l'application Python",
        "Configuration complète via variables d'environnement (.env) pour Postgres, PGAdmin et Kafka",
      ],
      en: [
        "Kafka producer generating and sending crypto data messages",
        "Kafka consumer writing messages into a PostgreSQL `crypto` table",
        "Data cleaning and normalisation stage before consumption",
        "Docker / docker-compose orchestration for Kafka, Zookeeper, PostgreSQL and the Python app",
        "Full configuration through environment variables (.env) for Postgres, PGAdmin and Kafka",
      ],
    },
    etapesTechniques: [
      {
        number: 1,
        title: {
          fr: "Scraping & production de données",
          en: "Scraping & data production",
        },
        details: {
          fr: [
            "Récupération de données de marché crypto via API / scraping",
            "Transformation des données vers un format de message Kafka",
            "Envoi périodique configurable via `FETCH_INTERVAL_SECONDS`",
          ],
          en: [
            "Fetch crypto market data via API / scraping",
            "Transform data into Kafka message format",
            "Periodic sending controlled by `FETCH_INTERVAL_SECONDS`",
          ],
        },
      },
      {
        number: 2,
        title: {
          fr: "Kafka Producteur & Consommateur",
          en: "Kafka Producer & Consumer",
        },
        details: {
          fr: [
            "Configuration du broker Kafka et du topic `KAFKA_TOPIC`",
            "Producteur Kafka publiant les messages de données brutes",
            "Consommateur Kafka lisant les messages et les insérant dans PostgreSQL",
          ],
          en: [
            "Configure Kafka broker and `KAFKA_TOPIC`",
            "Kafka producer publishing raw data messages",
            "Kafka consumer reading messages and inserting them into PostgreSQL",
          ],
        },
      },
      {
        number: 3,
        title: {
          fr: "PostgreSQL & structuration des données",
          en: "PostgreSQL & data structuring",
        },
        details: {
          fr: [
            "Création de la table `crypto` pour stocker les données brutes",
            "Indexation sur le symbole pour accélérer les requêtes",
            "Paramétrage des accès via variables d'environnement (user, password, host, port)",
          ],
          en: [
            "Create `crypto` table to store raw data",
            "Index on symbol to speed up queries",
            "Configure access via environment variables (user, password, host, port)",
          ],
        },
      },
      {
        number: 4,
        title: {
          fr: "Nettoyage & normalisation des données",
          en: "Data cleaning & normalisation",
        },
        details: {
          fr: [
            "Nettoyage des champs bruts (formats, types, valeurs manquantes)",
            "Uniformisation des symboles et des unités",
            "Préparation des données pour le dashboard",
          ],
          en: [
            "Clean raw fields (formats, types, missing values)",
            "Standardise symbols and units",
            "Prepare cleaned data for the dashboard",
          ],
        },
      },
      {
        number: 5,
        title: {
          fr: "Conteneurisation & orchestration",
          en: "Containerisation & orchestration",
        },
        details: {
          fr: [
            "Mise en place de `docker-compose` pour Kafka, Zookeeper, PostgreSQL et l'application",
            "Commandes standardisées : `docker compose up --build`, `docker compose down`",
            "Intégration d'un README/rapport généré en PDF avec pandoc",
          ],
          en: [
            "Setup of `docker-compose` for Kafka, Zookeeper, PostgreSQL and the app",
            "Standard commands: `docker compose up --build`, `docker compose down`",
            "Integration of a README/report exported to PDF with pandoc",
          ],
        },
      },
    ],
    contributions: {
      fr: [
        "Développement complet de la partie Kafka (producteur et consommateur)",
        "Mise en place du scraping des données et de la production vers Kafka",
        "Conception du schéma PostgreSQL et insertion des données dans la table `crypto`",
        "Implémentation du nettoyage et de la normalisation des données avant l'affichage sur le dashboard",
        "Configuration Docker et variables d'environnement pour l'environnement de développement et de production",
      ],
      en: [
        "Implemented the full Kafka workflow (producer and consumer)",
        "Built data scraping and production pipeline to Kafka",
        "Designed PostgreSQL schema and inserted data into the `crypto` table",
        "Implemented cleaning and normalisation of data before it is used in the dashboard",
        "Configured Docker and environment variables for both development and production",
      ],
    },
    apprentissages: {
      fr: [
        "Mettre en place un pipeline de streaming de données avec Kafka",
        "Connecter Kafka à PostgreSQL pour persister les données",
        "Nettoyer et normaliser des données brutes avant analyse",
        "Utiliser Docker / docker-compose pour orchestrer plusieurs services data",
        "Gérer la configuration d'environnements via des fichiers .env",
      ],
      en: [
        "Set up a streaming data pipeline with Kafka",
        "Connect Kafka to PostgreSQL to persist data",
        "Clean and normalise raw data before analysis",
        "Use Docker / docker-compose to orchestrate multiple data services",
        "Manage environment configuration using .env files",
      ],
    },
    technologies: ["Python", "Kafka", "PostgreSQL", "Docker", "docker-compose"],
    stats: {},
  },
  {
    id: "taxi-rl-trainer",
    title: {
      fr: "Taxi Trainer",
      en: "Taxi Trainer",
    },
    category: {
      fr: "IA • Reinforcement Learning",
      en: "AI • Reinforcement Learning",
    },
    description: {
      fr: "Application Streamlit complète pour entraîner, jouer et évaluer des agents de reinforcement learning (Q-Learning, SARSA, DQN) sur l'environnement Taxi-v3 de Gymnasium. Inclut une interface multi-pages pour le training, le jeu et l'évaluation avec export des métriques.",
      en: "Complete Streamlit application to train, play and evaluate reinforcement learning agents (Q-Learning, SARSA, DQN) on the Taxi-v3 Gymnasium environment. Includes a multi-page UI for training, playing and evaluating with metrics export.",
    },
    shortDescription: {
      fr: "Application RL pour entraîner, jouer et comparer des agents Q-Learning, SARSA et DQN sur Taxi-v3.",
      en: "RL app to train, play and compare Q-Learning, SARSA and DQN agents on Taxi-v3.",
    },
    color: "purple",
    githubUrl: "https://github.com/EpitechMscProPromo2025/T-AIA-902-PAR_3/tree/taxi-demo",
    videoUrl: "",
    specificites: {
      fr: [
        "Interface Streamlit multi-pages (Training, Play, Evaluation)",
        "Entraînement de trois algorithmes : Q-Learning, SARSA et DQN (PyTorch)",
        "Sauvegarde et rechargement des modèles (Q-table .npy, modèles DQN .pth)",
        "Évaluation automatique des modèles et génération d'un CSV comparatif",
        "Génération de graphiques de récompense moyenne et du nombre moyen de steps",
      ],
      en: [
        "Multi-page Streamlit UI (Training, Play, Evaluation)",
        "Training of three algorithms: Q-Learning, SARSA and DQN (PyTorch)",
        "Saving and loading models (Q-table .npy, DQN models .pth)",
        "Automatic model evaluation and generation of a comparative CSV",
        "Generation of bar charts for average reward and average steps",
      ],
    },
    etapesTechniques: [
      {
        number: 1,
        title: {
          fr: "Structure du projet & environnement Taxi-v3",
          en: "Project structure & Taxi-v3 environment",
        },
        details: {
          fr: [
            "Organisation du code en modules (train, play, eval, utils)",
            "Utilisation de Gymnasium pour l'environnement Taxi-v3",
            "Définition des espaces d'états et d'actions pour l'agent",
          ],
          en: [
            "Organised code into modules (train, play, eval, utils)",
            "Used Gymnasium for the Taxi-v3 environment",
            "Defined state and action spaces for the agent",
          ],
        },
      },
      {
        number: 2,
        title: {
          fr: "Implémentation Q-Learning & SARSA",
          en: "Q-Learning & SARSA implementation",
        },
        details: {
          fr: [
            "Q-table tabulaire stockée sous forme de tableau NumPy",
            "Mise à jour des Q-values selon les formules Q-Learning et SARSA",
            "Gestion de l'exploration/exploitation (epsilon-greedy)",
          ],
          en: [
            "Tabular Q-table stored as NumPy array",
            "Update of Q-values using Q-Learning and SARSA formulas",
            "Exploration/exploitation management (epsilon-greedy)",
          ],
        },
      },
      {
        number: 3,
        title: {
          fr: "Implémentation DQN (Deep Q-Network)",
          en: "DQN (Deep Q-Network) implementation",
        },
        details: {
          fr: [
            "Réseau de neurones PyTorch pour approximer la fonction Q",
            "Optimisation via descente de gradient et loss adapté",
            "Sauvegarde/chargement du modèle en .pth",
          ],
          en: [
            "PyTorch neural network to approximate the Q-function",
            "Optimisation via gradient descent and appropriate loss",
            "Model save/load in .pth format",
          ],
        },
      },
      {
        number: 4,
        title: {
          fr: "Interface Streamlit (Training, Play, Evaluation)",
          en: "Streamlit interface (Training, Play, Evaluation)",
        },
        details: {
          fr: [
            "Page Training : choix de l'algorithme, hyperparamètres et lancement de l'entraînement",
            "Page Play : chargement d'un modèle sauvegardé et visualisation des épisodes",
            "Page Evaluation : exécution de plusieurs runs et agrégation des métriques",
          ],
          en: [
            "Training page: choose algorithm, hyperparameters and start training",
            "Play page: load a saved model and visualise episodes",
            "Evaluation page: run multiple episodes and aggregate metrics",
          ],
        },
      },
      {
        number: 5,
        title: {
          fr: "Export des résultats & visualisation",
          en: "Results export & visualisation",
        },
        details: {
          fr: [
            "Génération d'un fichier evaluation.csv (récompense moyenne, steps moyens)",
            "Création de graphiques comparatifs (reward, steps) sous forme d'images",
            "Organisation des sorties dans les dossiers /models et /results",
          ],
          en: [
            "Generated evaluation.csv (average reward, average steps)",
            "Created comparative charts (reward, steps) saved as images",
            "Organised outputs into /models and /results folders",
          ],
        },
      },
    ],
    contributions: {
      fr: [
        "Implémentation complète de la logique RL (Q-Learning, SARSA, DQN)",
        "Mise en place de l'application Streamlit multi-pages (training, play, evaluation)",
        "Conception du pipeline d'évaluation et des exports CSV/graphes",
      ],
      en: [
        "Implemented the full RL logic (Q-Learning, SARSA, DQN)",
        "Built the multi-page Streamlit app (training, play, evaluation)",
        "Designed the evaluation pipeline and CSV/plot exports",
      ],
    },
    apprentissages: {
      fr: [
        "Approfondissement des algorithmes de reinforcement learning (tabulaires et DQN)",
        "Mise en pratique de Gymnasium pour expérimenter un environnement RL standard",
        "Construction d'une interface Streamlit utilisable par des non-spécialistes",
      ],
      en: [
        "Deepened understanding of RL algorithms (tabular and DQN)",
        "Used Gymnasium to experiment with a standard RL environment",
        "Built a Streamlit interface usable by non-experts",
      ],
    },
    technologies: ["Python", "Gymnasium", "Streamlit", "NumPy", "PyTorch"],
    stats: {},
  },
];

export const getProjectById = (id) => {
  return projects.find((project) => project.id === id);
};
