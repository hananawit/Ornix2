import React from "react";
import Image from "next/image";
import { TEAM_MEMBERS } from "@/data/team";
import { SectionHeading } from "@/components/ui/SectionHeading";import {
  Linkedin,
  
  Target,
  Eye,
  ShieldCheck,
  Brain,
  Users,
  Globe,
} from "lucide-react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "About Ornix AI Solutions PLC",
  description:
    "Learn about Ornix AI Solutions PLC, a home-grown artificial intelligence company focused on sovereign AI, local context, and long-term co-innovation in Ethiopia.",
};const VALUES = [
  {
    title: "Sovereign AI & Strict Data Security",
    desc: "Complete data sovereignty through local hosting compatibility, including Ethio Telecom cloud, and custom on-premise deployments compliant with local financial and public security standards.",
    icon: <ShieldCheck className="w-6 h-6 text-ornix-yellow" />,
  },
  {
    title: "Full-Spectrum Technical Mastery",
    desc: "Mastery across all 7 branches of Artificial Intelligence, enabling complete end-to-end architectures tailored to institutional challenges.",
    icon: <Brain className="w-6 h-6 text-ornix-yellow" />,
  },
  {
    title: "Deep Local Context",
    desc: "Solutions built by Ethiopian engineers living and working within the local environment, navigating regional supply chains and local language dialects.",
    icon: <Globe className="w-6 h-6 text-ornix-yellow" />,
  },
  {
    title: "Ethical & Reasonable AI",
    desc: "Transparent decision-making, unbiased local representation, and resource-efficient AI models engineered to run reliably within local infrastructure constraints.",
    icon: <Eye className="w-6 h-6 text-ornix-yellow" />,
  },
  {
    title: "Knowledge Transfer & Capability Building",
    desc: "Working shoulder-to-shoulder with internal IT and business units to transfer technical skills and foster long-term digital independence.",
    icon: <Users className="w-6 h-6 text-ornix-yellow" />,
  },
];

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20 bg-ornix-navy-900 text-white min-h-screen">
      {/* Banner */}
      <section className="py-16 bg-ornix-navy-850 border-b border-white/10 grid-background text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
       <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ornix-yellow/20 border border-ornix-yellow/40 text-ornix-yellow text-xs font-semibold uppercase tracking-wider mb-4">
  ABOUT ORNIX
</div>

<h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-white tracking-tight mb-4">
  About Ornix AI Solutions PLC
</h1>

<p className="text-base sm:text-lg text-ornix-slate-300 leading-relaxed max-w-3xl mx-auto">
  Redefining AI in Ethiopia: Beyond Vendor Relationships, Towards Strategic
  Co-Innovation
</p>
        </div>
      </section>
{/* Who We Are */}
<section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className="glass-panel p-8 md:p-12 rounded-3xl border border-white/10">
    <span className="text-xs font-mono uppercase tracking-widest text-ornix-yellow">
      WHO WE ARE
    </span>

    <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mt-3 mb-6">
      Artificial Intelligence as Continuous Institutional Evolution
    </h2>

    <div className="space-y-5 text-ornix-slate-300 leading-relaxed">
      <p>
        At Ornix AI Solutions PLC, we believe that artificial intelligence is
        not a product you buy off the shelf—it is a continuous institutional
        evolution.
      </p>

      <p>
        In a rapidly transforming global economy, off-the-shelf software and
        generic foreign algorithms often fail to address the unique operational,
        linguistic, and regulatory realities of the Ethiopian market. Ornix AI
        was founded to close this gap.
      </p>

      <p>
        We are a home-grown artificial intelligence company engineered to serve
        as a long-term co-innovation partner for Ethiopia&apos;s leading
        enterprise and public institutions.
      </p>
    </div>
  </div>
</section>
{/* Mission & Vision Section */}
<section
  id="mission"
  className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* Mission */}
    <div className="glass-panel p-8 md:p-10 rounded-3xl border border-white/10 relative overflow-hidden">
      <div className="w-12 h-12 rounded-2xl bg-ornix-yellow/20 border border-ornix-yellow/40 flex items-center justify-center mb-6">
        <Target className="w-6 h-6 text-ornix-yellow" />
      </div>

      <span className="text-xs font-mono uppercase tracking-widest text-ornix-yellow block mb-2">
        OUR MISSION
      </span>

      <h2 className="text-2xl md:text-3xl font-bold font-heading text-white mb-4">
        AI Adoption Requires a Strategic Partner
      </h2>

      <p className="text-ornix-slate-300 text-base leading-relaxed">
        To prove to Ethiopian enterprises and institutions that successful AI
        adoption requires more than transactional software—it demands a
        dedicated, long-term strategic partner equipped to solve complex
        sector challenges through sovereign, full-spectrum artificial
        intelligence built alongside them.
      </p>
    </div>

    {/* Vision */}
    <div className="glass-panel p-8 md:p-10 rounded-3xl border border-white/10 relative overflow-hidden">
      <div className="w-12 h-12 rounded-2xl bg-ornix-yellow/20 border border-ornix-yellow/40 flex items-center justify-center mb-6">
        <Eye className="w-6 h-6 text-ornix-yellow" />
      </div>

      <span className="text-xs font-mono uppercase tracking-widest text-ornix-yellow block mb-2">
        OUR VISION
      </span>

      <h2 className="text-2xl md:text-3xl font-bold font-heading text-white mb-4">
        Ethiopia at the Forefront of African AI
      </h2>

      <p className="text-ornix-slate-300 text-base leading-relaxed">
        To position Ethiopia at the forefront of the African AI revolution by
        establishing a benchmark for client-first technology, sovereign data
        governance, and locally grounded co-innovation.
      </p>
    </div>
  </div>
</section>

      {/* Core Values Section */}
      <section className="py-20 bg-ornix-navy-850 border-t border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="GUIDING PRINCIPLES"
            title="Our Core Values"
            subtitle="The principles that guide how Ornix builds sovereign AI, works with institutions, and develops long-term technological capability."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {VALUES.map((val, idx) => (
              <div key={idx} className="glass-panel p-8 rounded-3xl border border-white/10 hover:border-ornix-yellow/40 transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-ornix-navy-900 border border-white/10 flex items-center justify-center mb-6">
                  {val.icon}
                </div>
                <h3 className="text-xl font-bold font-heading text-white mb-3">{val.title}</h3>
                <p className="text-sm text-ornix-slate-300 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Showcase */}
      <section id="team" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="THE ORNIX TEAM"
          title="The People Behind ORNIX"
subtitle="A multidisciplinary team bringing together artificial intelligence, software engineering, data, cybersecurity, finance, healthcare, and institutional expertise."        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM_MEMBERS.map((member) => (
            <div key={member.id} className="glass-panel p-6 rounded-3xl border border-white/10 text-center flex flex-col justify-between">
              <div>
<div className="w-20 h-20 rounded-full bg-ornix-navy-800 border border-ornix-yellow/30 mx-auto flex items-center justify-center overflow-hidden mb-4 shadow-inner">
  <Image
    src={member.image}
    alt={member.name}
    width={80}
    height={80}
    className="w-full h-full object-cover"
  />
</div>
                <h3 className="text-lg font-bold font-heading text-white mb-1">{member.name}</h3>
                <p className="text-xs font-semibold text-ornix-yellow mb-3">{member.role}</p>
                <p className="text-xs text-ornix-slate-300 leading-relaxed mb-4">{member.bio}</p>
              </div>
<div className="pt-4 border-t border-white/10 flex justify-center">
  {member.linkedin && (
    <a
      href={
        member.linkedin.startsWith("http")
          ? member.linkedin
          : `https://${member.linkedin}`
      }
      target="_blank"
      rel="noreferrer"
      className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-ornix-slate-300 hover:text-ornix-yellow hover:bg-white/10 transition-colors"
      aria-label={`${member.name} LinkedIn Profile`}
    >
      <Linkedin className="w-4 h-4" />
    </a>
  )}
</div>
            </div>
          ))}
        </div>
      </section>
      {/* Why Our Team Stands Out */}
<section className="py-20 bg-ornix-navy-850 border-t border-white/10">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <SectionHeading
      badge="WHY OUR TEAM STANDS OUT"
      title="Multidisciplinary by Design"
      subtitle="Ornix brings together technical, financial, cybersecurity, ICT, healthcare, and applied AI expertise to understand institutional challenges from multiple perspectives."
    />

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        {
          title: "Multidisciplinary",
          description:
            "Different areas of expertise work together to understand complex institutional challenges beyond a single technical perspective.",
        },
        {
          title: "Collaborative",
          description:
            "We believe effective AI is built through collaboration between technical teams, domain experts, and the institutions we serve.",
        },
        {
          title: "Locally Grounded",
          description:
            "Our team works within the Ethiopian environment and understands the operational, institutional, and contextual realities that shape local technology needs.",
        },
        {
          title: "Impact-Driven",
          description:
            "We focus on applying technology to meaningful organizational and sector challenges rather than building technology for its own sake.",
        },
      ].map((item) => (
        <div
          key={item.title}
          className="glass-panel p-7 rounded-3xl border border-white/10 hover:border-ornix-yellow/40 transition-all duration-300"
        >
          <h3 className="text-xl font-bold font-heading text-white mb-3">
            {item.title}
          </h3>
          <p className="text-sm text-ornix-slate-300 leading-relaxed">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>
{/* Why Co-Innovation Matters */}
<section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <SectionHeading
    badge="THE ORNIX DIFFERENCE"
    title="Why Co-Innovation Matters"
    subtitle="Most technology providers operate on a transactional vendor model. Ornix treats technology implementation as a shared journey built around the institution."
  />

  <div className="glass-panel rounded-3xl border border-white/10 overflow-hidden">
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="p-8 md:p-10 bg-white/[0.02]">
        <span className="text-xs font-mono uppercase tracking-widest text-ornix-slate-400">
          Traditional Vendor Model
        </span>

        <h3 className="text-2xl font-bold font-heading text-white mt-3 mb-6">
          Transactional Technology
        </h3>

        <div className="space-y-5">
          {[
            ["Approach", "Sells pre-packaged, one-size-fits-all tools."],
            ["Language & Context", "Uses Western-centric models with retrofitted translation."],
            ["Data Control", "Relies on distant, black-box foreign servers."],
            ["Knowledge Transfer", "Can create vendor lock-in and long-term dependency."],
            ["Long-Term Support", "Focuses on static maintenance contracts."],
          ].map(([title, description]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-white mb-1">
                {title}
              </h4>
              <p className="text-sm text-ornix-slate-300 leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="p-8 md:p-10 border-t md:border-t-0 md:border-l border-white/10 bg-ornix-yellow/[0.03]">
        <span className="text-xs font-mono uppercase tracking-widest text-ornix-yellow">
          Ornix Co-Innovation Model
        </span>

        <h3 className="text-2xl font-bold font-heading text-white mt-3 mb-6">
          Strategic Partnership
        </h3>

        <div className="space-y-5">
          {[
            ["Approach", "Co-engineers solutions around your specific operational roadmap."],
            ["Language & Context", "Builds localized language intelligence for Amharic, Afaan Oromo, Tigrinya, and Somali."],
            ["Data Control", "Supports local cloud and controlled on-premise infrastructure for data sovereignty."],
            ["Knowledge Transfer", "Trains and upskills internal teams to understand and co-manage system output."],
            ["Long-Term Support", "Continuously tunes and adapts models as market and institutional conditions evolve."],
          ].map(([title, description]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-ornix-yellow mb-1">
                {title}
              </h4>
              <p className="text-sm text-ornix-slate-300 leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  );
}
