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
    id: "co-innovation-discovery",
    title: "Understand the Challenge",
    clientCategory: "STEP 01 • DISCOVERY",
    summary:
      "Every Ornix engagement begins by understanding the institution, its operational environment, existing systems, data, and long-term objectives.",
    challenge:
      "Organizations often operate across fragmented systems, legacy infrastructure, complex workflows, and data environments that cannot be addressed effectively with generic, off-the-shelf technology.",
    approach:
      "Ornix works directly with institutional stakeholders, technical teams, and domain experts to identify the highest-value challenges and translate them into a practical AI roadmap.",
    technology: [
      "Requirements & Workflow Analysis",
      "Data Assessment",
      "AI Readiness Evaluation",
      "Domain Knowledge Mapping",
    ],
    implementation:
      "The discovery process connects business objectives, technical constraints, available data, security requirements, and infrastructure realities before a solution architecture is defined.",
    outcome:
      "A shared understanding of the institutional challenge and a clear foundation for building an AI solution around the organization's actual needs.",
    metrics: [
      { label: "Focus", value: "Institution-Specific" },
      { label: "Approach", value: "Collaborative" },
      { label: "Architecture", value: "Needs-Driven" },
    ],
  },

  {
    id: "co-innovation-engineering",
    title: "Co-Engineer the Solution",
    clientCategory: "STEP 02 • CO-INNOVATION",
    summary:
      "Ornix moves beyond software delivery by co-engineering AI systems together with the teams who understand the organization's operational reality.",
    challenge:
      "Rigid technology products can create gaps between what a system was designed to do and what an Ethiopian institution actually needs.",
    approach:
      "Ornix combines machine learning, deep learning, NLP, computer vision, expert systems, autonomous technologies, and adaptive cognitive systems according to the specific challenge being addressed.",
    technology: [
      "Machine Learning",
      "Deep Learning",
      "Natural Language Processing",
      "Computer Vision",
      "Expert Systems",
      "Autonomous Systems",
    ],
    implementation:
      "Solutions are designed around existing workflows and infrastructure, with internal teams participating throughout development, testing, integration, and refinement.",
    outcome:
      "A locally grounded AI architecture that fits the institution rather than forcing the institution to adapt to a pre-packaged technology product.",
    metrics: [
      { label: "Model Strategy", value: "Custom-Built" },
      { label: "Development", value: "Co-Engineered" },
      { label: "Integration", value: "Workflow-Aligned" },
    ],
  },

  {
    id: "sovereign-ai-deployment",
    title: "Deploy & Build Capability",
    clientCategory: "STEP 03 • SOVEREIGN DEPLOYMENT",
    summary:
      "Ornix delivers AI with data sovereignty, security, local infrastructure compatibility, and long-term capability building at the center of implementation.",
    challenge:
      "Sensitive institutional data and critical operational systems require infrastructure that respects local security, governance, and operational requirements.",
    approach:
      "Ornix supports local cloud compatibility, including Ethio Telecom cloud, as well as custom on-premise and controlled deployment architectures where institutional requirements demand them.",
    technology: [
      "Local Cloud Infrastructure",
      "On-Premise AI",
      "Secure Microservices",
      "Controlled Data Environments",
      "Model Monitoring",
    ],
    implementation:
      "Deployment is performed alongside internal technical and business teams, with knowledge transfer integrated into implementation rather than treated as an afterthought.",
    outcome:
      "Organizations retain greater control over their data, understand the systems they operate, and develop the internal capability required for long-term digital independence.",
    metrics: [
      { label: "Data Governance", value: "Sovereign" },
      { label: "Deployment", value: "Local-Compatible" },
      { label: "Knowledge Transfer", value: "Built-In" },
    ],
  },

  {
    id: "continuous-co-evolution",
    title: "Continuously Evolve Intelligence",
    clientCategory: "STEP 04 • CONTINUOUS CO-EVOLUTION",
    summary:
      "AI should evolve with the organization. Ornix treats implementation as the beginning of an ongoing relationship rather than the end of a software deployment.",
    challenge:
      "Operational environments, market conditions, institutional priorities, and available data change continuously. Static AI systems can quickly become disconnected from the environments they serve.",
    approach:
      "Ornix continuously evaluates, tunes, and adapts models alongside institutional teams as new data, requirements, and operational knowledge become available.",
    technology: [
      "Continuous Model Tuning",
      "Performance Monitoring",
      "Data Feedback Loops",
      "Adaptive AI Systems",
      "Human-in-the-Loop Intelligence",
    ],
    implementation:
      "Feedback from real operational environments is incorporated into ongoing model refinement, workflow improvement, and system evolution.",
    outcome:
      "A continuously improving AI capability that evolves with the institution and remains grounded in its changing operational environment.",
    metrics: [
      { label: "Model Lifecycle", value: "Continuous" },
      { label: "Adaptation", value: "Context-Aware" },
      { label: "Partnership", value: "Long-Term" },
    ],
  },
];