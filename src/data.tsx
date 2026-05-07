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
    title: "Système RAG Modulaire",
    description: "Conception d'un système RAG modulaire adapté au contexte africain (offline-first, langues locales).",
    metric: "RAG Déployé",
    tags: ["Python", "FastAPI", "LangChain", "Pinecone/Chroma"],
    status: "LIVE",
    client: "Data Afrique Hub",
    startDate: "Janvier 2026",
    endDate: "Aujourd'hui",
    fullContent: `
      En tant que Lead Data Architect & AI Engineer bénévole pour Data Afrique Hub, j'ai piloté la conception d'un système RAG (Retrieval-Augmented Generation) modulaire. Ce projet est spécifiquement pensé pour le contexte africain, avec une approche offline-first et le support des langues locales.
      
      **Architecture technique :**
      Le développement de RAG-DataAfriqueHub implique l'utilisation de Python, FastAPI pour exposer l'API, LangChain pour l'orchestration des Large Language Models (LLM) et Pinecone ou Chroma pour les bases de données vectorielles.
      
      **Impact & Leadership :**
      Au-delà de la conception architecturale, j'ai coordonné une équipe technique pluridisciplinaire. Mon rôle incluait des revues de code rigoureuses, du mentorat pour la montée en compétence des membres de l'équipe et l'animation de webinaires à destination de la communauté.
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

