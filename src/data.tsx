import { Code2, Database, Server, Cpu, Terminal } from 'lucide-react';

export const SKILLS = [
  { category: "Langages", items: ["Python", "SQL", "R", "Scala"], icon: <Code2 className="w-5 h-5 text-brand-cyan" /> },
  { category: "Data Engineering", items: ["Apache Spark", "Airflow", "dbt", "Kafka"], icon: <Server className="w-5 h-5 text-brand-purple" /> },
  { category: "ML / IA", items: ["TensorFlow", "Scikit-learn", "PyTorch", "MLflow"], icon: <Cpu className="w-5 h-5 text-brand-cyan" /> },
  { category: "Cloud & Data Warehouses", items: ["GCP (BigQuery)", "AWS (Redshift)", "Snowflake"], icon: <Database className="w-5 h-5 text-brand-purple" /> },
  { category: "Visualisation", items: ["Power BI", "Tableau", "Plotly", "Streamlit"], icon: <Terminal className="w-5 h-5 text-brand-cyan" /> },
  { category: "Outils & DevOps", items: ["Git", "Docker", "Kubernetes", "Jupyter"], icon: <Terminal className="w-5 h-5 text-brand-purple" /> },
];

export const PROJECTS = [
  {
    id: "churn-prediction",
    title: "Prédiction de Churn Client",
    description: "Pipeline ml complet pour identifier les clients à risque. Modélisation via XGBoost et orchestration avec Airflow sur données BigQuery.",
    metric: "-23% taux de résiliation",
    tags: ["Python", "Airflow", "BigQuery", "XGBoost"],
    status: "PROD",
    client: "Teleco Corp",
    startDate: "Janvier 2023",
    endDate: "Avril 2023",
    fullContent: `
      Ce projet visait à anticiper les départs clients en analysant les comportements passés et les données transactionnelles.
      
      **Architecture technique :**
      Le pipeline ingère les données depuis différentes sources vers BigQuery via Apache Airflow. Les données sont ensuite nettoyées et transformées.
      Le modèle de Machine Learning est construit avec XGBoost, optimisé par recherche d'hyperparamètres et versionné via MLflow.
      
      **Résultats :**
      Le modèle offre une précision de 87% et a permis de cibler les campagnes de rétention, entraînant une diminution de 23% du taux d'attrition.
    `
  },
  {
    id: "realtime-sales",
    title: "Dashboard Temps Réel des Ventes",
    description: "Système de streaming de bout en bout pour l'analyse des ventes instantanées, monitoré sur Streamlit.",
    metric: "50k events/min",
    tags: ["Kafka", "Spark Streaming", "Streamlit"],
    status: "LIVE",
    client: "Retail Solutions",
    startDate: "Juin 2023",
    endDate: "Septembre 2023",
    fullContent: `
      Conception d'une architecture orientée événements pour capturer et analyser les transactions commerciales à la volée.
      
      **Architecture technique :**
      Kafka est utilisé comme broker principal pour absorber les pics de charge (jusqu'à 50k événements/minute). 
      Les données sont consommées et agrégées par Spark Streaming avant d'être poussées dans une base de données en mémoire.
      
      **Résultats :**
      Un Dashboard interactif Streamlit affiche les KPIs aux équipes métiers avec un décalage inférieur à 2 secondes, permettant des ajustements de prix dynamiques.
    `
  },
  {
    id: "ecommerce-recommendation",
    title: "Système de Recommandation E-commerce",
    description: "Moteur de recommandation basé sur le filtrage collaboratif mis en conteneur Docker et exposé via FastAPI.",
    metric: "+18% conversion",
    tags: ["Collaborative filtering", "FastAPI", "Docker"],
    status: "BETA",
    client: "E-shop Global",
    startDate: "Novembre 2023",
    endDate: "Février 2024",
    fullContent: `
      Amélioration de l'expérience d'achat via la création d'un système suggérant des produits hautement pertinents pour chaque profil d'utilisateur.
      
      **Architecture technique :**
      Implémentation d'un algorithme de filtrage collaboratif. Le modèle entraîné est servi par une API RESTful avec FastAPI pour garantir des temps de réponse faibles (<50ms).
      Le tout est packagé à l'aide de Docker pour un déploiement fluide sur Kubernetes.
      
      **Résultats :**
      En test A/B sur un sous-ensemble d'utilisateurs, le système a montré une augmentation de +18% du taux de conversion et du panier moyen.
    `
  }
];

export const EXPERIENCES = [
  {
    role: "Data Engineer",
    company: "Entreprise Tech",
    period: "2022 - Présent",
    description: "Conception, développement et maintenance d'infrastructures de données à grande échelle. Mise en place de pipelines ETL robustes."
  },
  {
    role: "Data Analyst",
    company: "Agence Data",
    period: "2020 - 2022",
    description: "Création de tableaux de bord interactifs pour aide à la décision. Nettoyage de données massives et tests A/B."
  }
];
