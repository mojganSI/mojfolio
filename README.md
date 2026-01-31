# Portfolio - Mojgan Sigarchian

Portfolio professionnel en React pour présenter mes compétences et projets en Intelligence Artificielle, Data Science et Développement Full Stack.

## 🚀 Installation et lancement

1. **Installer les dépendances** :
   ```bash
   npm install
   ```

2. **Lancer le serveur de développement** :
   ```bash
   npm run dev
   ```

3. **Ouvrir dans le navigateur** :
   Le site sera accessible sur `http://localhost:5173` (ou un autre port si celui-ci est occupé)

## 📦 Build pour production

Pour créer une version optimisée pour la production :

```bash
npm run build
```

Les fichiers seront générés dans le dossier `dist/`.

## 🛠️ Technologies utilisées

- **React 18** - Bibliothèque JavaScript pour l'interface utilisateur
- **Vite** - Outil de build rapide et moderne
- **CSS** - Styles personnalisés pour un design moderne et professionnel

## 📁 Structure du projet

```
Portfolio/
├── index.html          # Point d'entrée HTML
├── package.json        # Configuration npm et dépendances
├── vite.config.js      # Configuration Vite
├── src/
│   ├── main.jsx        # Point d'entrée React
│   ├── App.jsx         # Composant principal
│   ├── styles.css      # Styles globaux
│   └── components/     # Composants React
│       ├── ProfileSection.jsx
│       ├── SkillsSection.jsx
│       ├── ExperienceSection.jsx
│       ├── EducationSection.jsx
│       ├── ProjectsSection.jsx
│       └── Footer.jsx
└── README.md
```

## 🎨 Personnalisation

Pour personnaliser le portfolio :

- **Couleurs** : Modifier les variables CSS dans `src/styles.css` (section `:root`)
- **Contenu** : Modifier les composants dans `src/components/`
- **Photo de profil** : Remplacer le `.avatar` dans `App.jsx` par une vraie image

## 📝 Sections du portfolio

- **Profil** : Présentation personnelle et objectifs professionnels
- **Compétences** : Technologies et outils maîtrisés
- **Expérience professionnelle** : Postes occupés et réalisations
- **Projets marquants** : Projets phares avec descriptions
- **Formation académique** : Parcours éducatif
- **Contact** : Coordonnées et liens sociaux

## 🌐 Déploiement

Le portfolio peut être déployé sur :
- **Vercel** : `vercel --prod`
- **Netlify** : Glisser-déposer le dossier `dist/` après build
- **GitHub Pages** : Configurer GitHub Actions pour déployer automatiquement

---

© 2025 - Portfolio Mojgan Sigarchian
