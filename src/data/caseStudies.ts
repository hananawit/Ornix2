export interface CaseStudy {
  id: string;
  title: string;
  clientCategory: string;
  summary: string;
  challenge: string;
  approach: string;
  technology: string[];
  implementation: string;
  outcome: string;
  metrics: { label: string; value: string }[];
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "case-study-regional-health",
    title: "Multi-Hospital Health System Clinical Data Normalization",
    clientCategory: "Enterprise Health System (Placeholder)",
    summary: "Harmonizing fragmented legacy EHR databases across 12 acute care facilities into a single real-time FHIR data intelligence layer.",
    challenge: "Disparate legacy EHR platforms across regional hospital sites led to fragmented patient charts, delayed inter-hospital transfers, and un-unified clinical telemetry.",
    approach: "Deploys ORNIX Data Intelligence platform to parse, transform, and normalize unstructured clinical records and HL7 streams into a unified real-time FHIR knowledge graph.",
    technology: ["ORNIX Intelligence Core", "Medical NLP Engine", "FHIR Data Pipeline", "Secure Microservices"],
    implementation: "Phased 6-month deployment integrating edge data nodes at each medical center with zero downtime to legacy EHR operations.",
    outcome: "Achieved unified patient chart access across all facilities, streamlined clinical documentation workflow, and created a foundation for predictive telemetry alerts.",
    metrics: [
      { label: "Data Pipeline Throughput", value: "Real-time" },
      { label: "EHR Interoperability Rate", value: "Unified" },
      { label: "Data Quality Accuracy", value: "Verified" }
    ]
  },
  {
    id: "case-study-radiology-group",
    title: "High-Volume Diagnostic Radiology Workflow Acceleration",
    clientCategory: "Outpatient Imaging Network (Placeholder)",
    summary: "Integrating automated computer vision pre-screening to prioritize urgent CT and MRI scan readings for on-call radiologists.",
    challenge: "Surging diagnostic imaging volumes created reading backlogs, increasing turnaround time for critical emergency room CT scans.",
    approach: "Integrated ORNIX Vision zero-latency DICOM plugin to automatically triage incoming scans and highlight potential sub-millimeter anomalies.",
    technology: ["ORNIX Vision AI", "Deep Convolutional Networks", "DICOM Native Plugin", "HIPAA Cloud Engine"],
    implementation: "Deployed across 8 imaging sites with automated routing triggers sending high-risk anomaly flags directly to duty radiologists.",
    outcome: "Accelerated urgent scan prioritization, reduced review latency for time-sensitive emergency cases, and enhanced diagnostic reader confidence.",
    metrics: [
      { label: "Scan Triage Latency", value: "< 30 sec" },
      { label: "DICOM Integration", value: "Native" },
      { label: "Reader Satisfaction", value: "High" }
    ]
  },
  {
    id: "case-study-ambulatory-network",
    title: "Ambient Physician Documentation & EHR Copilot Integration",
    clientCategory: "Ambulatory Primary Care Network (Placeholder)",
    summary: "Reducing physician administrative burnout by automating patient encounter documentation through ambient AI listening.",
    challenge: "Primary care physicians were spending upwards of 2.5 hours per night completing EHR chart documentation after clinic hours.",
    approach: "Piloted ORNIX Assist ambient AI across 45 primary care exam rooms to record encounters, draft clinical notes, and suggest billing codes.",
    technology: ["ORNIX Assist", "Ambient Audio Processing", "Medical Transformer NLP", "Direct EHR Injector"],
    implementation: "Rolled out via lightweight mobile application with clinician-in-the-loop review interface before EHR signature.",
    outcome: "Dramatically reduced after-hours chart documentation time, allowing physicians to focus entirely on direct patient interaction during visits.",
    metrics: [
      { label: "Documentation Time", value: "Streamlined" },
      { label: "Physician Adoption", value: "Extensive" },
      { label: "Note Accuracy Rate", value: "Clinical-grade" }
    ]
  }
];
