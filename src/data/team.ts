export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatarPlaceholder: string;
  linkedin: string;
  category: "leadership" | "research" | "engineering" | "clinical";
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "team-1",
    name: "[Executive Leader Name]",
    role: "Chief Executive Officer & Co-Founder",
    bio: "Placeholder bio: Experienced executive bridging artificial intelligence research, healthcare software delivery, and enterprise scale.",
    avatarPlaceholder: "CEO",
    linkedin: "https://linkedin.com",
    category: "leadership"
  },
  {
    id: "team-2",
    name: "[Chief Medical Officer Name]",
    role: "Chief Medical Officer",
    bio: "Placeholder bio: Board-certified clinical specialist guiding ORNIX model safety, validation protocols, and physician integration.",
    avatarPlaceholder: "CMO",
    linkedin: "https://linkedin.com",
    category: "clinical"
  },
  {
    id: "team-3",
    name: "[VP AI Research Name]",
    role: "VP of Artificial Intelligence Research",
    bio: "Placeholder bio: Machine learning scientist specializing in multi-modal healthcare transformers and temporal deep learning models.",
    avatarPlaceholder: "VPR",
    linkedin: "https://linkedin.com",
    category: "research"
  },
  {
    id: "team-4",
    name: "[VP Engineering Name]",
    role: "VP of Engineering & Systems",
    bio: "Placeholder bio: Enterprise system architect leading secure FHIR data pipelines, microservices, and cloud infrastructure.",
    avatarPlaceholder: "VPE",
    linkedin: "https://linkedin.com",
    category: "engineering"
  }
];
