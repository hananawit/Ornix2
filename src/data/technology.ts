export interface TechCategory {
  id: string;
  categoryName: string;
  description: string;
  items: {
    name: string;
    description: string;
    iconName: string;
  }[];
}

export const TECH_CATEGORIES: TechCategory[] = [
  {
    id: "ai-ml",
    categoryName: "AI & Machine Learning",
    description: "Domain-specific architectures optimized for clinical telemetry, medical images, and natural language.",
    items: [
      { name: "Machine Learning", description: "Supervised and self-supervised model architectures tuned on clinical corpuses.", iconName: "Brain" },
      { name: "Deep Learning", description: "Multi-layered convolutional networks and temporal sequence models.", iconName: "Layers" },
      { name: "Generative AI", description: "HIPAA-aligned foundation models for clinical note synthesis and summarization.", iconName: "Sparkles" },
      { name: "NLP", description: "Domain-specific entity extraction and ICD/CPT medical code mapping.", iconName: "FileCode" },
      { name: "Computer Vision", description: "Sub-millimeter anomaly detection in DICOM radiological scans and pathology.", iconName: "Scan" }
    ]
  },
  {
    id: "data-engineering",
    categoryName: "Data Infrastructure",
    description: "Robust data pipelines handling high-velocity hospital stream telemetry and FHIR endpoints.",
    items: [
      { name: "Data Engineering", description: "Streaming event pipelines parsing 10k+ data points per second.", iconName: "Workflow" },
      { name: "Analytics", description: "Real-time population health trends and patient readmission risk scoring.", iconName: "BarChart" },
      { name: "Knowledge Graphs", description: "Semantic medical ontology networks linking symptoms, diagnoses, and lab values.", iconName: "Network" },
      { name: "Vector Search", description: "High-dimensional vector indexing for clinical literature semantic retrieval.", iconName: "Search" }
    ]
  },
  {
    id: "engineering-cloud",
    categoryName: "Secure Engineering",
    description: "Enterprise-grade cloud infrastructure meeting strict medical data compliance standards.",
    items: [
      { name: "APIs & SDKs", description: "RESTful and gRPC endpoints for rapid EHR and hospital software integration.", iconName: "Code" },
      { name: "Cloud Architecture", description: "Multi-region redundant cloud and sovereign hybrid-cloud deployments.", iconName: "Cloud" },
      { name: "Microservices", description: "Decoupled, containerized inference workers with automated scaling.", iconName: "Boxes" },
      { name: "Secure Architecture", description: "End-to-end AES-256 encryption in transit and at rest with zero-trust RBAC.", iconName: "Lock" }
    ]
  },
  {
    id: "integration-interop",
    categoryName: "Healthcare Integration",
    description: "Interoperability adapters for legacy and modern digital health ecosystems.",
    items: [
      { name: "Healthcare Systems", description: "HL7 v2/v3, FHIR R4/R5, and DICOM native protocol adapters.", iconName: "Heart" },
      { name: "Enterprise Systems", description: "Integration with major ERPs, revenue cycle managers, and payer platforms.", iconName: "Building" },
      { name: "External Data", description: "Secure synchronization with public health registries and genomic databases.", iconName: "Globe" }
    ]
  }
];
