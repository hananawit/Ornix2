export interface ImpactMetric {
  id: string;
  value: string;
  suffix: string;
  label: string;
  description: string;
}

export const IMPACT_METRICS: ImpactMetric[] = [
  {
    id: "projects",
    value: "[XX]",
    suffix: "+",
    label: "Healthcare Projects",
    description: "Configurable placeholder for active health-tech implementations."
  },
  {
    id: "solutions",
    value: "[XX]",
    suffix: "+",
    label: "AI Solutions Deployed",
    description: "Configurable placeholder for specialized AI modules in production."
  },
  {
    id: "research",
    value: "[XX]",
    suffix: "+",
    label: "Research Initiatives",
    description: "Configurable placeholder for ongoing clinical AI research studies."
  },
  {
    id: "organizations",
    value: "[XX]",
    suffix: "+",
    label: "Partner Organizations",
    description: "Configurable placeholder for hospitals, labs, and research institutions."
  }
];
