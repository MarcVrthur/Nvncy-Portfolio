import { Code2, Database, Server, Cpu, Terminal, Wrench } from 'lucide-react';

export const SKILLS = [
  { category: "Analyse & Visualisation", items: ["Power BI", "Talend", "Excel avancé"], icon: <Terminal className="w-5 h-5 text-brand-cyan" /> },
  { category: "Langages", items: ["Python", "Pandas", "NumPy", "Matplotlib", "SQL", "PostgreSQL", "MySQL", "MongoDB"], icon: <Code2 className="w-5 h-5 text-brand-cyan" /> },
  { category: "Traitement des données", items: ["ETL", "Nettoyage de données", "Web scraping", "Automatisation"], icon: <Database className="w-5 h-5 text-brand-purple" /> },
  { category: "Machine Learning (notions)", items: ["TensorFlow", "PyTorch", "AWS"], icon: <Cpu className="w-5 h-5 text-brand-cyan" /> },
  { category: "Outils", items: ["Git", "GitHub", "Odoo ERP", "Figma", "CI/CD"], icon: <Wrench className="w-5 h-5 text-brand-purple" /> },
  { category: "Langues", items: ["Français (maternelle)", "Anglais (intermédiaire)"], icon: <Server className="w-5 h-5 text-brand-purple" /> },
];

export const PROJECTS = [
  {
    id: "rag-data-afrique",
    title: "RAG-DataAfriqueHub",
    description: "Système RAG modulaire et configurable pour le contexte africain, offline-first.",
    metric: "RAG Déployé",
    tags: ["Python", "FastAPI", "LangChain", "Pinecone/Chroma"],
    status: "LIVE",
    client: "Data Afrique Hub",
    startDate: "Janvier 2026",
    endDate: "Aujourd'hui",
    fullContent: `
      En tant que Lead Data Architect & AI Engineer bénévole pour Data Afrique Hub, j'ai piloté la conception d'un système RAG (Retrieval-Augmented Generation) modulaire. Ce projet est spécifiquement pensé pour le contexte africain, avec une approche offline-first et le support des langues locales.
      
      **Architecture technique :**
      Le développement implique l'utilisation de Python, FastAPI pour exposer l'API, LangChain pour l'orchestration des LLM et Pinecone/Chroma pour les bases de données vectorielles. Configuration complète via YAML/JSON.
      
      **Impact & Leadership :**
      Bénéficiant d'une architecture modulaire et extensible, le projet a été présenté lors d'un webinaire communautaire. J'ai coordonné l'équipe technique, défini les standards de code et assuré le mentorat.
    `
  },
  {
    id: "ia-conversationnelle",
    title: "IA Conversationnelle Interactive",
    description: "Système de Chatbot NLP avec intégration de la reconnaissance vocale et synthèse vocale.",
    metric: "Voice-to-Text",
    tags: ["Python", "Rasa", "DeepSpeech", "NLP"],
    status: "PROD",
    client: "Orange CI",
    startDate: "Juin 2022",
    endDate: "Décembre 2022",
    fullContent: `
      Développement d'un assistant conversationnel capable de comprendre des requêtes en langage naturel et d'y répondre vocalement pour améliorer l'expérience utilisateur.
      
      **Architecture technique :**
      Pipeline hybride combinant la compréhension du langage naturel (NLU) avec Rasa, la reconnaissance vocale avec DeepSpeech de Mozilla, et la synthèse vocale. Fine-tuning sur corpus métier.
      
      **Résultats :**
      Une IA fonctionnelle validée par des tests rigoureux, offrant une interaction "voice-to-text" et "text-to-speech" pour les services internes.
    `
  },
  {
    id: "analyse-images-medicales",
    title: "Analyse d'Images Médicales par IA",
    description: "Analyse exploratoire de données et entraînement de modèles de classification pour images oculaires.",
    metric: "Déploiement AWS",
    tags: ["Python", "TensorFlow", "OpenCV", "AWS"],
    status: "LIVE",
    client: "Orange CI",
    startDate: "Juillet 2024",
    endDate: "Octobre 2024",
    fullContent: `
      Projet de santé numérique consistant à analyser des données médicales visuelles pour détecter des anomalies oculaires, allant de l'exploration au déploiement.
      
      **Architecture technique :**
      Analyse exploratoire, nettoyage, augmentations des données avec Pandas et OpenCV. Modélisation via Scikit-Learn et TensorFlow/Keras, suivie du déploiement en production sur AWS.
      
      **Résultats :**
      Le modèle permet de classifier des pathologies, documenté par des rapports de visualisations claires pour faciliter la prise de décision par les équipes médicales.
    `
  },
  {
    id: "dashboards-powerbi",
    title: "Dashboards Power BI & Reporting",
    description: "Tableaux de bord multi-dimensionnels et automatisation du reporting commercial.",
    metric: "KPIs Temps Réel",
    tags: ["Power BI", "DAX", "Talend", "SQL"],
    status: "PROD",
    client: "TAFI SA",
    startDate: "Décembre 2024",
    endDate: "Mars 2026",
    fullContent: `
      Centralisation et structuration des données commerciales pour produire des indicateurs clés de performance fiables (CA, croissance, KPIs produits) à destination du management.
      
      **Méthodologie & Technique :**
      Modélisation de données en étoile, intégration et transformation avec Talend + Power Query, et définition des mesures en DAX. Automatisation de l'ensemble du flux des rapports de performance.
      
      **Résultats :**
      Des reportings hebdomadaires 100% automatisés, offrant une vue claire de la performance stratégique et permettant d'améliorer drastiquement les délais de prise de décision.
    `
  },
  {
    id: "webapp-agricole",
    title: "Application Web Agricole",
    description: "Design UI/UX et développement d'une application pour le secteur agricole avec ERP.",
    metric: "Intégration Odoo",
    tags: ["Figma", "HTML/CSS/JS", "Odoo ERP"],
    status: "PROD",
    client: "Koura Technologie",
    startDate: "Mai 2023",
    endDate: "Novembre 2023",
    fullContent: `
      Digitalisation de processus de gestion pour des acteurs agricoles, mixant recherche UX et développement front-end / back-office collaboratif.
      
      **Méthodologie & Technique :**
      Réflexions UI/UX avec prototypage Figma. Développement de l'interface en technologies Web standard, et connexion/paramétrage direct à un système ERP open-source Odoo.
      
      **Résultats :**
      Livraison réussie d'une application ergonomique connectée avec des processus métiers rigoureux.
    `
  },
  {
    id: "analyse-scenes-dl",
    title: "Analyse de Scènes par Deep Learning",
    description: "Conception d'un prototype d'analyse vidéo pour la protection des enfants.",
    metric: "Prototype R&D",
    tags: ["Python", "TensorFlow", "CNN", "OpenCV"],
    status: "COMPLETED",
    client: "UPB (Mémoire Master)",
    startDate: "2023",
    endDate: "2023",
    fullContent: `
      Projet de recherche individuel (Mémoire de Master en Data Science) sur la construction d'un système automatisé identifiant des contenus inadaptés au sein de flux vidéos.
      
      **Architecture technique :**
      Analyse frame par frame combinant transfert d'apprentissage, réseaux de neurones convolutifs (CNN) sous TensorFlow/Keras, et extraction vidéo via OpenCV. Détection de personnes et classification de scènes.
      
      **Résultats :**
      Un pipeline complet documentant la démarche scientifique à travers un mémoire de fin de Master. 
    `
  }
];

export const EXPERIENCES = [
  {
    role: "Stagiaire Data Analyst",
    company: "SACO – Barry Callebaut",
    location: "Marcory Zone 4, Abidjan",
    period: "Mai 2026 – En cours",
    description: "Assistance au contrôleur opérationnel dans les reportings de sourcing et traçabilité. Suivi des indicateurs opérationnels (qualité fèves, volumes). Assistance aux prévisions d'achats. Harmonisation des bases de données et conception de dashboards pertinents."
  },
  {
    role: "Data Analyst",
    company: "TAFI SA",
    location: "Abidjan",
    period: "Décembre 2024 – Mars 2026",
    description: "Collecte, nettoyage et exploitation de données commerciales pour produire des KPIs fiables. Conception et maintenance de dashboards Power BI multi-dimensionnels pour la performance commerciale. Analyse des tendances et mise en place d'automatisations de rapports."
  },
  {
    role: "Stagiaire Data Scientist",
    company: "Orange CI",
    location: "Abidjan",
    period: "Juillet – Octobre 2024",
    description: "Analyse exploratoire de données médicales (images oculaires). Préparation et nettoyage de datasets complexes pour la modélisation Machine Learning. Visualisations pour les équipes métier et participation au déploiement d'un modèle d'IA sur AWS."
  },
  {
    role: "Consultante Informatique",
    company: "Teiik",
    location: "Attoban",
    period: "Janvier – Juin 2024",
    description: "Analyse des besoins clients et recommandation de solutions de gestion adaptées. Développement d'applications personnalisées aver Odoo ERP."
  },
  {
    role: "Stagiaire Développeur Web",
    company: "Koura Technologie",
    location: "Angré",
    period: "Mai – Novembre 2023",
    description: "Analyse des données utilisateurs pour améliorer l'expérience produit. Développement d'une application web collaboratif et intégration de l'ERP Odoo."
  },
  {
    role: "Stagiaire Développeur",
    company: "Orange CI",
    location: "Abidjan",
    period: "Juin – Décembre 2022",
    description: "Développement d'une IA conversationnelle NLP (Rasa) et reconnaissance vocale (DeepSpeech). Entraînement et fine-tuning de modèles."
  }
];

export const EDUCATION = [
  {
    degree: "Certificat en Data Science",
    school: "DataAcademy (Cohorte 2)",
    period: "2025",
    description: "Data Analysis, Data Engineering, Machine Learning, Déploiement d'applications",
  },
  {
    degree: "Master en Data Science",
    school: "Université Polytechnique de Bingerville (UPB)",
    period: "2022 – 2024",
    description: "",
  },
  {
    degree: "Licence MIAGE",
    school: "Université Polytechnique de Bingerville (UPB)",
    period: "2019 – 2022",
    description: "",
  },
  {
    degree: "Baccalauréat Scientifique (Série D)",
    school: "Lycée Moderne Bad de Yamoussoukro",
    period: "2018 – 2019",
    description: "",
  }
];

export const SOFT_SKILLS = [
  "Capacité d'apprentissage rapide",
  "Rigueur et organisation",
  "Communication claire des insights",
  "Esprit d'analyse et sens du détail",
  "Travail en équipe"
];

