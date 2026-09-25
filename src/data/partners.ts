export interface Partner {
  id: string;
  name: string;
  type: string;
  logo: string;
  website?: string;
  placeholder?: boolean;
}

export const PARTNERS: Partner[] = [
  {
    id: "eaii",
    name: "Ethiopian Artificial Intelligence Institute",
    type: "Strategic AI Partner",
    logo: "/partners/EAII.png",
  },
  {
    id: "moh",
    name: "Ministry of Health",
    type: "Government Institution",
    logo: "/partners/MOH.png",
  },
  {
    id: "moe",
    name: "Ministry of Education",
    type: "Government Institution",
    logo: "/partners/moe.png",
  },
  {
    id: "moa",
    name: "Ministry of Agriculture",
    type: "Government Institution",
    logo: "/partners/MOA.png",
  },
  {
    id: "ephi",
    name: "Ethiopian Public Health Institute",
    type: "National Research Institution",
    logo: "/partners/EPHI.jpeg",
  },
  {
    id: "tatariy",
    name: "TATARIY LLC",
    type: "Technology Partner",
    logo: "/partners/Tatariy.jpeg",
  },
  {
    id: "amref",
    name: "AMREF Health Africa",
    type: "International Organization",
    logo: "/partners/amref.png",
  },
  {
    id: "medafra",
    name: "Medafra IT Solutions",
    type: "Technology & Digital Solutions",
    logo: "/partners/medafra.jpeg",
  },
  {
    id: "future-1",
    name: "Strategic Partner",
    type: "Future Collaboration",
    logo: "",
    placeholder: true,
  },
  {
    id: "future-2",
    name: "Technology Partner",
    type: "Future Collaboration",
    logo: "",
    placeholder: true,
  },
  {
    id: "future-3",
    name: "Institutional Partner",
    type: "Future Collaboration",
    logo: "",
    placeholder: true,
  },
];
