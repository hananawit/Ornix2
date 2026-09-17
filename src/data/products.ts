export interface ProductPlatform {
  id: string;
  name: string;
  tagline: string;
  badge: string;
  description: string;
  iconName: string;
  keyFeatures: { title: string; desc: string }[];
  targetAudience: string;
  architectureLayer: string;
}

export const PRODUCT_PLATFORMS: ProductPlatform[] = [
  {
    id: "ornix-intelligence",
    name: "ORNIX Intelligence",
    tagline: "The Core AI Engine for Clinical & Operational Decision Support",
    badge: "Enterprise Platform",
    description: "A centralized, HIPAA-compliant machine learning platform that ingests streaming hospital telemetry, EHR data, and laboratory feeds to generate real-time predictive insights.",
    iconName: "Brain",
    keyFeatures: [
      { title: "Real-time Telemetry Parsing", desc: "Processes 10,000+ data points per second from bedside monitors." },
      { title: "Multi-Modal Inference Engine", desc: "Combines text, numerical telemetry, and image features in unified model passes." },
      { title: "Explainable AI Outputs", desc: "Generates step-by-step clinical rationale and feature importance weights." }
    ],
    targetAudience: "Hospitals, ICU Departments, Health Systems",
    architectureLayer: "Core Model Engine Layer"
  },
  {
    id: "ornix-assist",
    name: "ORNIX Assist",
    tagline: "Ambient AI Documentation & Physician Co-Pilot",
    badge: "Clinical Co-Pilot",
    description: "An ambient clinical assistant that listens to patient encounters, synthesizes structured SOAP notes, and suggests ICD-10 codes in real time.",
    iconName: "UserCheck",
    keyFeatures: [
      { title: "Ambient Encounter Recording", desc: "Captures natural conversation and isolates clinical terminology." },
      { title: "EHR Direct Integration", desc: "Injects structured notes directly into major EHR software without manual copy-paste." },
      { title: "Clinical Decision Suggestions", desc: "Flags potential medication contraindications during live dictation." }
    ],
    targetAudience: "Physicians, Ambulatory Clinics, Primary Care Providers",
    architectureLayer: "User Interaction Layer"
  },
  {
    id: "ornix-analytics",
    name: "ORNIX Analytics",
    tagline: "Population Health & Operational Predictive Intelligence",
    badge: "Analytics Suite",
    description: "Comprehensive analytical dashboard transforming raw health system metrics into predictive population risk heatmaps and resource utilization forecasts.",
    iconName: "BarChart3",
    keyFeatures: [
      { title: "Readmission Risk Modeling", desc: "Predicts 30-day readmissions across patient cohorts." },
      { title: "Bed Capacity Forecasting", desc: "Forecasts emergency department traffic and bed availability 72 hours out." },
      { title: "Cost & Outcome Correlation", desc: "Correlates clinical pathways with length of stay and treatment costs." }
    ],
    targetAudience: "Healthcare Executives, Population Health Directors",
    architectureLayer: "Analytics & Intelligence Layer"
  },
  {
    id: "ornix-vision",
    name: "ORNIX Vision",
    tagline: "Advanced Computer Vision for Diagnostic Radiology & Pathology",
    badge: "Imaging Suite",
    description: "State-of-the-art diagnostic vision toolkit aiding radiologists and pathologists with automated pre-screening, volumetric segmentation, and anomaly detection.",
    iconName: "Eye",
    keyFeatures: [
      { title: "DICOM Native Pipeline", desc: "Zero-latency DICOM viewer integration with instant bounding-box overlays." },
      { title: "Volumetric Tumor Tracking", desc: "Measures lesion dimensions across sequential MRI/CT scans automatically." },
      { title: "Pathology Cell Quantification", desc: "Counts mitotic figures and biomarker stains in digital tissue slides." }
    ],
    targetAudience: "Radiology Groups, Diagnostic Labs, Imaging Centers",
    architectureLayer: "Specialized Inference Engine"
  },
  {
    id: "ornix-flow",
    name: "ORNIX Flow",
    tagline: "Automated Administrative & Claims Workflow Orchestration",
    badge: "Workflow Engine",
    description: "Intelligent workflow automation bridging clinical guidelines with payer criteria to eliminate prior authorization delays and claims friction.",
    iconName: "Zap",
    keyFeatures: [
      { title: "Prior Authorization Automation", desc: "Extracts clinical necessity evidence and matches payer policy rules." },
      { title: "Claims Denial Mitigation", desc: "Identifies coding inconsistencies before claim submission." },
      { title: "HL7/FHIR Integration", desc: "Seamless event-driven API triggers for enterprise hospital workflows." }
    ],
    targetAudience: "Revenue Cycle Teams, Payer Operations, Billing Coordinators",
    architectureLayer: "Integration & Workflow Layer"
  }
];
