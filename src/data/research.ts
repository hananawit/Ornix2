export interface ResearchArea {
  id: string;
  title: string;
  description: string;
  iconName: string;
  keyProjects: string[];
}

export interface ResearchPublication {
  id: string;
  title: string;
  authors: string;
  journal: string;
  year: string;
  category: string;
  abstract: string;
  link: string;
}

export const RESEARCH_AREAS: ResearchArea[] = [
  {
    id: "artificial-intelligence",
    title: "Artificial Intelligence",
    description: "Developing foundational reasoning architectures tailored for multi-modal clinical decision environments.",
    iconName: "Sparkles",
    keyProjects: ["Clinical Reasoning Engines", "Multi-modal Knowledge Integration"]
  },
  {
    id: "machine-learning",
    title: "Machine Learning",
    description: "Advanced deep neural models robust against clinical noise, missing signals, and domain shifts.",
    iconName: "Cpu",
    keyProjects: ["Self-supervised Telemetry Representation", "Robust Domain Adaptation"]
  },
  {
    id: "medical-ai",
    title: "Medical AI Systems",
    description: "Translation of machine learning frameworks into FDA/CE regulation compliant clinical decision tools.",
    iconName: "HeartPulse",
    keyProjects: ["Regulatory Compliance Frameworks", "Software as a Medical Device (SaMD)"]
  },
  {
    id: "nlp",
    title: "Natural Language Processing",
    description: "Custom healthcare transformer architectures trained on anonymized medical corpuses and clinical guidelines.",
    iconName: "FileText",
    keyProjects: ["Biomedical Entity Linking", "EHR Narrative Summarization"]
  },
  {
    id: "computer-vision",
    title: "Computer Vision",
    description: "Precision visual models for multi-dimensional medical imaging, volumetric CT segmentations, and pathology.",
    iconName: "Eye",
    keyProjects: ["Micro-lesion Segmentation", "Zero-shot Radiology Parsing"]
  },
  {
    id: "health-data-science",
    title: "Health Data Science",
    description: "Heterogeneous health dataset integration, longitudinal graph networks, and FHIR semantic mapping.",
    iconName: "Database",
    keyProjects: ["Longitudinal Knowledge Graphs", "Synthetic Data Generation"]
  },
  {
    id: "predictive-modeling",
    title: "Predictive Modeling",
    description: "Temporal deep learning for disease progression modeling, acute deterioration alerts, and mortality risk.",
    iconName: "LineChart",
    keyProjects: ["ICU Sepsis Early Warning", "Chronic Heart Failure Trajectory"]
  },
  {
    id: "responsible-ai",
    title: "Responsible & Ethical AI",
    description: "Rigorous frameworks ensuring algorithmic fairness, clinical safety, bias mitigation, and transparency.",
    iconName: "ShieldAlert",
    keyProjects: ["Algorithmic Bias Audit Systems", "Explainable AI (XAI) Attribution"]
  },
  {
    id: "digital-health",
    title: "Digital Health Architecture",
    description: "Edge computing architectures for continuous wearable telemetry parsing and remote patient monitoring.",
    iconName: "Smartphone",
    keyProjects: ["Wearable Biosensor Synchronization", "Edge ML Inference"]
  },
  {
    id: "healthcare-analytics",
    title: "Healthcare Analytics",
    description: "Macro-level healthcare utilization, epidemiological trend modeling, and resource planning frameworks.",
    iconName: "PieChart",
    keyProjects: ["Hospital Capacity Optimization", "Value-based Outcome Attribution"]
  }
];

export const RESEARCH_PIPELINE_STEPS = [
  { step: 1, label: "Research", description: "Formulating novel hypotheses in clinical AI and computational biology." },
  { step: 2, label: "Data", description: "Curating multi-modal, anonymized medical datasets and FHIR feeds." },
  { step: 3, label: "Models", description: "Training domain-specific foundation architectures and transformer models." },
  { step: 4, label: "Validation", description: "Rigorous prospective clinical validation and algorithmic bias auditing." },
  { step: 5, label: "Knowledge", description: "Distilling model inferences into explainable clinical knowledge graphs." },
  { step: 6, label: "Application", description: "Deploying secure, real-time AI solutions into production hospital workflows." }
];

export const FEATURED_PUBLICATIONS: ResearchPublication[] = [
  {
    id: "pub-1",
    title: "Multi-Modal Deep Learning for Early Sepsis Alerting in Intensive Care Telemetry",
    authors: "ORNIX Research Team, AI & Clinical Sciences Division",
    journal: "Journal of Medical AI & Health Data",
    year: "2025",
    category: "Predictive Modeling",
    abstract: "We present a temporal deep learning model evaluating streaming multi-parametric vitals to forecast clinical sepsis 6 hours prior to clinical diagnostic criteria.",
    link: "#"
  },
  {
    id: "pub-2",
    title: "Explainable Ambient NLP in High-Volume Emergency Department Encounters",
    authors: "ORNIX Language Intelligence Lab",
    journal: "International Conference on Health Informatics",
    year: "2025",
    category: "Natural Language Processing",
    abstract: "Evaluating the efficacy of specialized healthcare transformer models in reducing physician EHR note completion duration by 42% while maintaining diagnostic fidelity.",
    link: "#"
  },
  {
    id: "pub-3",
    title: "Mitigating Algorithmic Bias in Multi-Ethnic Cardiovascular Risk Prediction Models",
    authors: "ORNIX Responsible AI Taskforce",
    journal: "Ethics in Digital Health & AI",
    year: "2024",
    category: "Responsible AI",
    abstract: "A novel loss function formulation designed to equalize true positive rates across diverse demographic patient cohorts in automated risk scoring.",
    link: "#"
  }
];
