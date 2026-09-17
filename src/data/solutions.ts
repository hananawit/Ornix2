export interface SolutionItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  capabilities: string[];
  impactMetric?: string;
  category: "clinical" | "data" | "automation" | "predictive";
}

export interface SectorItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  keyUseCases: string[];
}
export const AI_SOLUTIONS: SolutionItem[] = [
  {
    id: "machine-learning",
    title: "Machine Learning",
    shortDesc:
      "Predictive analytics and pattern recognition for market forecasting and credit risk scoring.",
    fullDesc:
      "Ornix co-develops custom models using internal data for accurate crop, credit, and market forecasting.",
    iconName: "TrendingUp",
    capabilities: [
      "Predictive analytics",
      "Market forecasting",
      "Credit risk scoring",
      "Pattern recognition",
    ],
    impactMetric: "Data-driven decision intelligence",
    category: "predictive",
  },
  {
    id: "deep-learning",
    title: "Deep Learning",
    shortDesc:
      "Advanced processing for satellite imagery, medical diagnostics, and multi-modal datasets.",
    fullDesc:
      "Ornix engineers tailored neural architectures integrated into existing operational workflows.",
    iconName: "BrainCircuit",
    capabilities: [
      "Satellite imagery analysis",
      "Advanced diagnostics",
      "Multi-modal data processing",
      "Custom neural architectures",
    ],
    impactMetric: "Advanced pattern intelligence",
    category: "predictive",
  },
  {
    id: "natural-language-processing",
    title: "Natural Language Processing",
    shortDesc:
      "Enterprise speech processing and local language intelligence.",
    fullDesc:
      "Ornix co-creates localized language engines across Amharic, Afaan Oromo, Tigrinya, and Somali.",
    iconName: "Bot",
    capabilities: [
      "Local language intelligence",
      "Enterprise speech processing",
      "Multilingual AI",
      "Document intelligence",
    ],
    impactMetric: "Locally grounded language intelligence",
    category: "automation",
  },
  {
    id: "computer-vision",
    title: "Computer Vision",
    shortDesc:
      "Visual inspection systems for monitoring, quality control, and security.",
    fullDesc:
      "Ornix deploys edge-level visual intelligence customized for agricultural pests, factory floors, and logistics hubs.",
    iconName: "Eye",
    capabilities: [
      "Agricultural pest detection",
      "Visual quality inspection",
      "Operational monitoring",
      "Edge AI deployment",
    ],
    impactMetric: "Real-time visual intelligence",
    category: "clinical",
  },
  {
    id: "robotics-autonomous-systems",
    title: "Robotics & Autonomous Systems",
    shortDesc:
      "Intelligent automation software for logistics hubs and manufacturing facilities.",
    fullDesc:
      "Ornix integrates smart automation software directly into facility legacy supply chain setups.",
    iconName: "Workflow",
    capabilities: [
      "Intelligent automation",
      "Logistics optimization",
      "Manufacturing automation",
      "Legacy system integration",
    ],
    impactMetric: "Operational automation",
    category: "automation",
  },
  {
    id: "expert-systems",
    title: "Expert Systems",
    shortDesc:
      "Automated decision trees codifying institutional knowledge for compliance.",
    fullDesc:
      "Ornix codifies institutional knowledge into automated compliance and regulatory frameworks.",
    iconName: "Database",
    capabilities: [
      "Institutional knowledge codification",
      "Automated decision trees",
      "Compliance frameworks",
      "Regulatory intelligence",
    ],
    impactMetric: "Institutional knowledge at scale",
    category: "data",
  },
  {
    id: "fuzzy-cognitive-systems",
    title: "Fuzzy Logic & Cognitive Systems",
    shortDesc:
      "Adaptive logic systems engineered to make precise operational decisions under ambiguous data.",
    fullDesc:
      "Ornix architects adaptive logic systems engineered specifically to navigate regional data gaps.",
    iconName: "BrainCircuit",
    capabilities: [
      "Adaptive decision systems",
      "Ambiguous data processing",
      "Regional data gap handling",
      "Cognitive operational intelligence",
    ],
    impactMetric: "Adaptive decision intelligence",
    category: "predictive",
  },
];

export const HEALTHCARE_SECTORS: SectorItem[] = [
  {
    id: "hospitals",
    title: "Hospitals & Health Systems",
    description: "Enterprise AI infrastructure that integrates directly into inpatient workflows, emergency rooms, and intensive care units.",
    iconName: "Building2",
    keyUseCases: ["ICU Predictive Telemetry", "Ambient EHR Documentation", "Capacity Management"]
  },
  {
    id: "clinics",
    title: "Outpatient Clinics",
    description: "Streamlined AI clinical co-pilots tailored for high-volume primary care and specialist ambulatory practices.",
    iconName: "Activity",
    keyUseCases: ["Pre-visit Intake Synthesis", "Automated Coding", "Patient Follow-up Tracking"]
  },
  {
    id: "laboratories",
    title: "Diagnostic Laboratories",
    description: "High-throughput computer vision and molecular data analysis pipeline accelerating diagnostic turnaround.",
    iconName: "Microscope",
    keyUseCases: ["Automated Slide Screening", "Genomic Sequence Parsing", "Quality Control Automation"]
  },
  {
    id: "pharmacies",
    title: "Pharmacies & Therapeutics",
    description: "Intelligent medication safety, drug interaction monitoring, and personalized dosage optimization.",
    iconName: "Pill",
    keyUseCases: ["Drug-Drug Interaction Detection", "Adherence Analytics", "Compounding Verification"]
  },
  {
    id: "public-health",
    title: "Public Health Agencies",
    description: "Epidemiological modeling and disease surveillance platforms synthesizing regional health data streams.",
    iconName: "Globe2",
    keyUseCases: ["Outbreak Signal Detection", "Resource Allocation Models", "Population Risk Mapping"]
  },
  {
    id: "health-insurance",
    title: "Health Insurance & Payers",
    description: "Automated medical necessity reviews, claims processing, and value-based care risk modeling.",
    iconName: "ShieldCheck",
    keyUseCases: ["Prior Authorization Verification", "Risk Adjustment Scoring", "Fraud Detection"]
  },
  {
    id: "research-institutions",
    title: "Research Institutions",
    description: "Advanced machine learning toolkits for clinical trial acceleration, biomarker discovery, and biobanking.",
    iconName: "FlaskConical",
    keyUseCases: ["Synthetic Cohort Generation", "Target Identification", "Trial Cohort Screening"]
  },
  {
    id: "government-health",
    title: "Government Health Systems",
    description: "Secure, sovereign health AI infrastructure built for defense, veterans health, and public healthcare programs.",
    iconName: "Landmark",
    keyUseCases: ["Sovereign Health AI Deployment", "National Registry Parsing", "Policy Simulation"]
  }
];
