export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatarPlaceholder: string;
  linkedin: string;
  category: "leadership" | "research" | "engineering" | "clinical";
  image: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "team-1",
    name: "Tigistu Tafa",
    role: "Information System Security Manager",
    bio: "Cybersecurity & Systems",
    avatarPlaceholder: "TT",
    linkedin: "",
    category: "engineering",
    image: "/team/tigistu.jpg",
  },
  {
    id: "team-2",
    name: "Henok T. Molla",
    role: "Finance Manager",
    bio: "Strategy & Finance",
    avatarPlaceholder: "HM",
    linkedin: "",
    category: "leadership",
    image: "/team/henok.jpg",
  },
  {
    id: "team-3",
    name: "Yeabsra Tamirat",
    role: "Senior ICT Expert",
    bio: "ICT Architecture",
    avatarPlaceholder: "YT",
    linkedin: "",
    category: "engineering",
    image: "/team/yeabsra.jpg",
  },
  {
    id: "team-4",
    name: "Dr. Messay Tesfaye",
    role: "Health Sector Expert / Health Domain Expert",
    bio: "Pediatric Dermatology",
    avatarPlaceholder: "MT",
    linkedin: "",
    category: "clinical",
    image: "/team/messay.jpg",
  },
  {
    id: "team-5",
    name: "Dr. Hasset",
    role: "Health Sector Expert / Health Domain Expert",
    bio: "Clinical Nutrition",
    avatarPlaceholder: "DH",
    linkedin: "",
    category: "clinical",
    image: "/team/hasset.jpg",
  },
  {
    id: "team-6",
    name: "Hanan Temam",
    role: "AI & Machine Learning Enthusiast, Developer",
    bio: "Applied AI",
    avatarPlaceholder: "HT",
    linkedin: "",
    // linkedin: "www.linkedin.com/in/hanan-temam-42b7b4172",
    category: "research",
    image: "/team/image.png",
  },
    {
    id: "team-7",
    name: "Meron Tessema",
    role: "Software Engineer & Digital Systems Officer ",
    bio: "Software Development",
    avatarPlaceholder: "MT",
    linkedin: "",
    category: "research",
    image: "/team/Meron.jpg",
  },
];