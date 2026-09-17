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
    id: "clinical-intelligence",
    title: "Clinical Intelligence",
    shortDesc: "Transforming complex patient telemetry and clinical records into real-time actionable insights for care providers.",
    fullDesc: "ORNIX Clinical Intelligence analyzes unstructured electronic health records (EHR), physiological signals, and clinical notes in real time, delivering diagnostic assistance and treatment recommendations to clinical staff without disrupting workflow.",
    iconName: "Stethoscope",
    capabilities: [
      "Real-time diagnostic assistance",
      "EHR narrative synthesis",
      "Clinical guideline cross-referencing",
      "Symptom progression modeling"
    ],
    impactMetric: "Accelerated decision-making efficiency",
    category: "clinical"
  },
  {
    id: "medical-data-intelligence",
    title: "Medical Data Intelligence",
    shortDesc: "Harmonizing fragmented health data across legacy EHRs, FHIR endpoints, and multi-modal diagnostic databases.",
    fullDesc: "Our proprietary data normalization pipeline converts disparate medical data formats into unified FHIR-compliant knowledge graphs, enabling seamless interoperability and longitudinal analytics.",
    iconName: "Database",
    capabilities: [
      "Multi-modal FHIR data synthesis",
      "Semantic medical entity recognition",
      "Cross-institution data federation",
      "Automated de-identification & anonymization"
    ],
    impactMetric: "Seamless data interoperability",
    category: "data"
  },
  {
    id: "intelligent-assistants",
    title: "Intelligent Assistants",
    shortDesc: "Empowering physicians and healthcare staff with specialized AI co-pilots for documentation and triage.",
    fullDesc: "Built on HIPAA-aligned foundation models, ORNIX Intelligent Assistants automate administrative documentation, draft clinical notes, summarize patient chart histories, and assist with triage routing.",
    iconName: "Bot",
    capabilities: [
      "Ambient clinical documentation",
      "Automated triage decision support",
      "Intelligent patient inquiry routing",
      "Multi-lingual clinical communication"
    ],
    impactMetric: "Reduction in administrative burden",
    category: "automation"
  },
  {
    id: "predictive-analytics",
    title: "Predictive Analytics",
    shortDesc: "Early warning systems predicting patient deterioration, readmission risks, and population health trends.",
    fullDesc: "Leveraging temporal deep learning architectures, ORNIX Predictive Analytics monitors patient vital telemetry to flag early signs of sepsis, acute cardiac events, and preventable hospital readmissions hours before clinical onset.",
    iconName: "TrendingUp",
    capabilities: [
      "Early warning telemetry monitoring",
      "30-day readmission risk scoring",
      "ICU stay duration optimization",
      "Chronic disease progression modeling"
    ],
    impactMetric: "Early risk detection window",
    category: "predictive"
  },
  {
    id: "computer-vision",
    title: "Computer Vision",
    shortDesc: "High-precision AI analysis for medical imaging including X-rays, MRIs, CT scans, and histopathology.",
    fullDesc: "Deep convolutional networks trained on annotated radiology and pathology datasets assist specialists in detecting subtle anomalies, volumetric segmentations, and lesion tracking across longitudinal scans.",
    iconName: "Eye",
    capabilities: [
      "Radiology anomaly classification",
      "Volumetric organ & tumor segmentation",
      "Histopathology cell counting",
      "Longitudinal lesion change tracking"
    ],
    impactMetric: "Sub-millimeter detection accuracy",
    category: "clinical"
  },
  {
    id: "natural-language-ai",
    title: "Natural Language AI",
    shortDesc: "Domain-specific NLP extracting structured clinical knowledge from unstructured medical research and charts.",
    fullDesc: "Extract valuable clinical variables, adverse drug events, and ICD/CPT codes from handwritten notes, dictated reports, and peer-reviewed medical literature using healthcare-tuned transformer models.",
    iconName: "BrainCircuit",
    capabilities: [
      "Automated ICD-10 & CPT coding",
      "Pharmacovigilance signal detection",
      "Clinical trial matching & screening",
      "Medical literature knowledge extraction"
    ],
    impactMetric: "High-fidelity medical entity extraction",
    category: "data"
  },
  {
    id: "healthcare-automation",
    title: "Healthcare Automation",
    shortDesc: "Streamlining prior authorization, revenue cycle management, and operational hospital workflows.",
    fullDesc: "End-to-end intelligent workflow automation that bridges clinical criteria with payer requirements, reducing prior authorization delays and optimizing operational throughput across hospital departments.",
    iconName: "Workflow",
    capabilities: [
      "Automated prior authorization generation",
      "Claims denial analysis & remediation",
      "OR & bed allocation scheduling",
      "Supply chain consumption prediction"
    ],
    impactMetric: "Turnaround time reduction",
    category: "automation"
  }
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
