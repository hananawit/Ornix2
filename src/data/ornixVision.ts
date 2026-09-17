export interface TriadItem {
  id: "goal" | "strategy" | "solution";
  badge: string;
  title: string;
  description: string;
}

export const STRATEGIC_TRIAD: TriadItem[] = [
  {
    id: "goal",
    badge: "The Goal",
    title: "Forefront of Africa's AI Revolution",
    description:
      "Position Ethiopia at the forefront of the African AI revolution through client-first technology.",
  },
  {
    id: "strategy",
    badge: "The Strategy",
    title: "Dedicated Long-Term Co-Innovation",
    description:
      "Shift from transactional software sales to dedicated, long-term co-innovation.",
  },
  {
    id: "solution",
    badge: "The Solution",
    title: "Sovereign, Full-Spectrum Intelligence",
    description:
      "Deliver sovereign, locally grounded, full-spectrum AI built alongside clients to solve complex sector challenges.",
  },
];

export interface DifferenceComparison {
  dimension: string;
  traditional: string;
  ornix: string;
}

export const ORNIX_DIFFERENCE: DifferenceComparison[] = [
  {
    dimension: "Approach",
    traditional: "Sells pre-packaged, \"one-size-fits-all\" tools",
    ornix: "Co-engineers solutions around your specific operational roadmap",
  },
  {
    dimension: "Language & Context",
    traditional: "Western-centric models with retrofitted translation",
    ornix: "Built-from-scratch native LLMs for Amharic, Afaan Oromo, Tigrinya, and Somali",
  },
  {
    dimension: "Data Control",
    traditional: "Hosted on distant, black-box foreign servers",
    ornix: "100% Data Sovereignty via local cloud or air-gapped on-premise infrastructure",
  },
  {
    dimension: "Knowledge Transfer",
    traditional: "Creates vendor lock-in and long-term dependency",
    ornix: "Trains and upskills your internal team to understand and co-manage system output",
  },
  {
    dimension: "Long-Term Support",
    traditional: "Static maintenance contracts",
    ornix: "Continuous model tuning and adaptation as market conditions evolve",
  },
];

export interface FoundationalBelief {
  number: string;
  title: string;
  summary: string;
  highlight: string;
}

export const FOUNDATIONAL_BELIEFS: FoundationalBelief[] = [
  {
    number: "01",
    title: "Sovereign AI & Strict Data Security",
    summary:
      "Complete data sovereignty through local hosting compatibility (including Ethio Telecom cloud) and custom on-premise deployments compliant with local financial and public security standards.",
    highlight: "Ethio Telecom Cloud Compatible & Air-Gapped",
  },
  {
    number: "02",
    title: "Full-Spectrum Technical Mastery",
    summary:
      "Mastery across all 7 branches of Artificial Intelligence—delivering complete, end-to-end architectures tailored to institutional challenges.",
    highlight: "Comprehensive 7-Branch Architecture",
  },
  {
    number: "03",
    title: "Deep Local Context & Multilingual Fluency",
    summary:
      "Solutions built by Ethiopian engineers living and working within the local environment, navigating regional supply chains and local language dialects.",
    highlight: "Amharic, Afaan Oromo, Tigrinya & Somali",
  },
  {
    number: "04",
    title: "Ethical & Reasonable AI",
    summary:
      "Transparent decision-making, unbiased local representation, and resource-efficient AI models engineered to run reliably within local infrastructure constraints.",
    highlight: "Transparent, Unbiased & Resource-Efficient",
  },
  {
    number: "05",
    title: "Knowledge Transfer & Capability Building",
    summary:
      "Working shoulder-to-shoulder with internal IT and business units to transfer technical skills and foster long-term digital independence.",
    highlight: "Fostering National Digital Independence",
  },
];

export interface AIBranch {
  id: string;
  branch: string;
  focusArea: string;
  coInnovationApproach: string;
  iconName: string;
}

export const AI_BRANCHES: AIBranch[] = [
  {
    id: "ml",
    branch: "Machine Learning (ML)",
    focusArea:
      "Predictive analytics and pattern recognition for market forecasting and credit risk scoring.",
    coInnovationApproach:
      "Co-develops custom models using internal data for accurate crop, credit, and market forecasting.",
    iconName: "TrendingUp",
  },
  {
    id: "dl",
    branch: "Deep Learning",
    focusArea:
      "Advanced processing for satellite imagery, medical diagnostics, and multi-modal datasets.",
    coInnovationApproach:
      "Engineers tailored neural architectures integrated into existing operational workflows.",
    iconName: "Layers",
  },
  {
    id: "nlp",
    branch: "Natural Language Processing (NLP)",
    focusArea:
      "Enterprise speech processing and local language intelligence.",
    coInnovationApproach:
      "Co-creates localized language engines across Amharic, Afaan Oromo, Tigrinya, and Somali.",
    iconName: "Languages",
  },
  {
    id: "cv",
    branch: "Computer Vision",
    focusArea:
      "Visual inspection systems for monitoring, quality control, and security.",
    coInnovationApproach:
      "Deploys edge-level visual intelligence customized for agricultural pests, factory floors, and logistics hubs.",
    iconName: "Eye",
  },
  {
    id: "robotics",
    branch: "Robotics & Autonomous Systems",
    focusArea:
      "Intelligent automation software for logistics hubs and manufacturing facilities.",
    coInnovationApproach:
      "Integrates smart automation software directly into facility legacy supply chain setups.",
    iconName: "Bot",
  },
  {
    id: "expert-systems",
    branch: "Expert Systems",
    focusArea:
      "Automated decision trees codifying institutional knowledge for compliance.",
    coInnovationApproach:
      "Codifies institutional knowledge into automated compliance and regulatory frameworks.",
    iconName: "ShieldCheck",
  },
  {
    id: "fuzzy-logic",
    branch: "Fuzzy Logic & Cognitive Systems",
    focusArea:
      "Adaptive logic systems engineered to make precise operational decisions under ambiguous data.",
    coInnovationApproach:
      "Architects adaptive logic systems engineered specifically to navigate regional data gaps.",
    iconName: "Cpu",
  },
];

export interface EconomicPillar {
  id: string;
  name: string;
  headline: string;
  commitment: string;
  iconName: string;
}

export const ECONOMIC_PILLARS: EconomicPillar[] = [
  {
    id: "agritech",
    name: "AgriTech",
    headline: "Agricultural Productivity & Food Security",
    commitment:
      "Empowering agricultural co-ops and farmers with mobile computer vision for disease detection and satellite-driven yield forecasting.",
    iconName: "Sprout",
  },
  {
    id: "fintech",
    name: "FinTech & Banking",
    headline: "Financial Inclusion & Sovereign Security",
    commitment:
      "Co-developing localized fraud prevention, alternative credit scoring, and automated document processing systems.",
    iconName: "Landmark",
  },
  {
    id: "healthcare",
    name: "Healthcare",
    headline: "Universal Care & Clinical Accuracy",
    commitment:
      "Integrating diagnostic assistance tools and patient flow management into regional hospital networks.",
    iconName: "HeartPulse",
  },
  {
    id: "manufacturing",
    name: "Manufacturing & Logistics",
    headline: "Industrial Automation & Supply Chain Optimization",
    commitment:
      "Installing predictive maintenance sensor networks and optimizing supply chain routes across regional corridors.",
    iconName: "Factory",
  },
  {
    id: "public-sector",
    name: "Public Sector",
    headline: "Digital Governance & Citizen Access",
    commitment:
      "Assisting government agencies in deploying multilingual citizen service portals and smart resource mapping systems.",
    iconName: "Building2",
  },
];

export interface PartnershipPillar {
  title: string;
  description: string;
  badge: string;
}

export const PARTNERSHIP_PILLARS: PartnershipPillar[] = [
  {
    badge: "Data Sovereignty",
    title: "100% Local Sovereignty",
    description:
      "Enterprise data stays local, hosted on secure local cloud or on-premise infrastructure.",
  },
  {
    badge: "Knowledge Autonomy",
    title: "Shared Capability Transfer",
    description:
      "We build alongside your internal teams so your organization retains core technical knowledge.",
  },
  {
    badge: "Long-Term Value",
    title: "Continuous Co-Evolution",
    description:
      "Models trained and fine-tuned continuously to adapt to changing Ethiopian market conditions.",
  },
];

export interface AllianceEntity {
  name: string;
  category: string;
  description: string;
  badge: string;
}

export const STRATEGIC_ALLIANCE_ENTITIES: AllianceEntity[] = [
  {
    name: "EAII (Ethiopian Artificial Intelligence Institute)",
    category: "National AI Research & Ethics",
    description: "Aligning research guidelines, ethical frameworks, and national AI benchmarks.",
    badge: "Research & Governance",
  },
  {
    name: "Ministry of Innovation & Technology (MInT)",
    category: "Digital Ethiopia 2025 Strategy",
    description: "Fostering sovereign digital infrastructure and public sector digital transformation.",
    badge: "National Strategy",
  },
  {
    name: "Local Enterprise Partners",
    category: "Industry Leaders",
    description: "Co-engineering tailored operational AI pipelines across commerce, telecom, and services.",
    badge: "Enterprise Co-Innovation",
  },
  {
    name: "Financial Institutions",
    category: "Commercial & Development Banks",
    description: "Localized alternative credit assessment, fraud analytics, and sovereign compliance.",
    badge: "Banking & FinTech",
  },
  {
    name: "Cloud Infrastructure Collaborators",
    category: "Ethio Telecom Cloud & Datacenters",
    description: "Ensuring 100% in-country data residency, sub-second latency, and air-gapped readiness.",
    badge: "Sovereign Infrastructure",
  },
];
