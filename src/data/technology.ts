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
    id: "ai-intelligence",
    categoryName: "AI & Intelligence",
    description:
      "Core artificial intelligence capabilities engineered around institutional challenges and local operational realities.",
    items: [
      {
        name: "Machine Learning",
        description:
          "Custom predictive models for forecasting, pattern recognition, classification, and data-driven decision support.",
        iconName: "Brain",
      },
      {
        name: "Deep Learning",
        description:
          "Tailored neural architectures for complex patterns, satellite imagery, medical diagnostics, and multi-modal datasets.",
        iconName: "Layers",
      },
      {
        name: "Natural Language Processing",
        description:
          "Localized language intelligence for enterprise documents, speech processing, knowledge retrieval, and multilingual applications.",
        iconName: "FileCode",
      },
      {
        name: "Computer Vision",
        description:
          "Visual intelligence for inspection, monitoring, agricultural applications, security, and operational environments.",
        iconName: "Scan",
      },
      {
        name: "Generative AI",
        description:
          "Generative intelligence integrated into institutional workflows for knowledge assistance, content generation, and intelligent interaction.",
        iconName: "Sparkles",
      },
    ],
  },

  {
    id: "data-intelligence",
    categoryName: "Data & Intelligence",
    description:
      "Data foundations that transform institutional information into usable intelligence while respecting governance and operational requirements.",
    items: [
      {
        name: "Data Engineering",
        description:
          "Structured data pipelines that connect organizational sources and prepare information for reliable AI and analytics.",
        iconName: "Workflow",
      },
      {
        name: "Data Analytics",
        description:
          "Descriptive, diagnostic, predictive, and decision-support analytics built around institutional priorities.",
        iconName: "BarChart",
      },
      {
        name: "Knowledge Systems",
        description:
          "Structured representations of institutional knowledge that support intelligent search, reasoning, and decision assistance.",
        iconName: "Network",
      },
      {
        name: "Intelligent Search",
        description:
          "Semantic retrieval systems that help organizations discover relevant information across documents and knowledge repositories.",
        iconName: "Search",
      },
    ],
  },

  {
    id: "software-architecture",
    categoryName: "Software & Architecture",
    description:
      "Scalable software foundations that connect AI capabilities with existing organizational systems and operational workflows.",
    items: [
      {
        name: "APIs & System Integration",
        description:
          "Secure service interfaces that allow AI capabilities to connect with existing enterprise applications and workflows.",
        iconName: "Code",
      },
      {
        name: "Cloud Architecture",
        description:
          "Cloud-ready architectures supporting scalable deployment while accommodating local infrastructure and sovereignty requirements.",
        iconName: "Cloud",
      },
      {
        name: "Microservices",
        description:
          "Modular service architectures designed for maintainability, scalability, and independent evolution of system capabilities.",
        iconName: "Boxes",
      },
      {
        name: "Secure Architecture",
        description:
          "Security-conscious system design aligned with institutional data protection, access control, and governance requirements.",
        iconName: "Lock",
      },
    ],
  },

  {
    id: "sovereign-infrastructure",
    categoryName: "Sovereign Infrastructure",
    description:
      "Deployment approaches designed to keep institutional data and AI capabilities under appropriate organizational control.",
    items: [
      {
        name: "Local Cloud",
        description:
          "AI and software architectures compatible with secure local cloud environments, including Ethio Telecom cloud.",
        iconName: "Cloud",
      },
      {
        name: "On-Premise AI",
        description:
          "Custom deployment architectures for institutions requiring controlled infrastructure and local data environments.",
        iconName: "Building",
      },
      {
        name: "Data Sovereignty",
        description:
          "Architectures designed to support institutional control over sensitive data, models, and operational intelligence.",
        iconName: "Lock",
      },
      {
        name: "Enterprise Integration",
        description:
          "AI capabilities connected directly to existing institutional systems instead of operating as isolated technology products.",
        iconName: "Globe",
      },
    ],
  },
];