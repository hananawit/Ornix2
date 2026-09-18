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
  <main className="pt-20">    
    {/* Banner */}
{/* About Hero */}
{/* About Hero */}
<section className="relative overflow-hidden bg-white text-ornix-navy-900 border-b border-ornix-navy-900/10">
  {/* Subtle background grid */}
  <div className="absolute inset-0 grid-background opacity-[0.045]" />

  {/* Soft yellow accent */}
  <div className="absolute -top-32 right-0 w-[500px] h-[500px] rounded-full bg-ornix-yellow/[0.08] blur-[140px] pointer-events-none" />

  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="min-h-[560px] md:min-h-[620px] flex items-center py-20 md:py-24">

      <div className="w-full grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-14 lg:gap-20 items-center">

        {/* LEFT — Main Hero Content */}
        <div className="max-w-3xl text-left">

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ornix-yellow/10 border border-ornix-yellow/30 text-ornix-yellow text-xs font-semibold uppercase tracking-[0.18em] mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-ornix-yellow animate-pulse" />
            ABOUT ORNIX
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold tracking-tight leading-[0.98] text-ornix-navy-900">
            About Ornix
            <span className="block text-ornix-navy-900">
              AI Solutions PLC
            </span>
          </h1>

          <div className="h-1 w-16 bg-ornix-yellow rounded-full mt-8 mb-7" />

          <p className="text-lg sm:text-xl md:text-2xl text-ornix-slate-600 leading-relaxed max-w-2xl">
            Redefining AI in Ethiopia through sovereign technology,
            local intelligence, and strategic co-innovation.
          </p>

          <p className="mt-6 text-sm sm:text-base text-ornix-slate-500 leading-relaxed max-w-xl">
            We build artificial intelligence around the operational,
            linguistic, institutional, and technological realities of
            Ethiopia.
          </p>

        </div>

        {/* RIGHT — ORNIX Identity Panel */}
        <div className="relative w-full max-w-md lg:justify-self-end">

          <div className="relative rounded-[2rem] border border-ornix-navy-900/10 bg-ornix-slate-50 p-7 md:p-8 shadow-xl shadow-ornix-navy-900/5 overflow-hidden">

            {/* Decorative accent */}
            <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-ornix-yellow/10 blur-3xl pointer-events-none" />

            <div className="relative z-10">

              {/* ORNIX mark */}
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-ornix-navy-900 flex items-center justify-center">
                    <span className="text-ornix-yellow font-bold text-lg">
                      O
                    </span>
                  </div>

                  <div>
                    <p className="text-sm font-bold tracking-[0.2em] text-ornix-navy-900">
                      ORNIX
                    </p>
                    <p className="text-[10px] uppercase tracking-[0.16em] text-ornix-slate-500">
                      AI Solutions PLC
                    </p>
                  </div>
                </div>

                <div className="w-2.5 h-2.5 rounded-full bg-ornix-yellow shadow-lg shadow-ornix-yellow/40" />
              </div>

              {/* Main statement */}
              <div className="border-l-2 border-ornix-yellow pl-5 mb-8">
                <p className="text-sm uppercase tracking-[0.16em] font-semibold text-ornix-slate-500 mb-2">
                  OUR APPROACH
                </p>

                <p className="text-xl md:text-2xl font-heading font-bold text-ornix-navy-900 leading-tight">
                  Sovereign AI.
                  <br />
                  Local Context.
                  <br />
                  Long-Term Partnership.
                </p>
              </div>

              {/* Capability indicators */}
              <div className="grid grid-cols-2 gap-3">

                <div className="rounded-2xl bg-white border border-ornix-navy-900/10 p-4">
                  <div className="w-2 h-2 rounded-full bg-ornix-yellow mb-3" />
                  <p className="text-xs font-semibold text-ornix-navy-900">
                    Local Intelligence
                  </p>
                  <p className="text-xs text-ornix-slate-500 mt-1">
                    Built around context
                  </p>
                </div>

                <div className="rounded-2xl bg-white border border-ornix-navy-900/10 p-4">
                  <div className="w-2 h-2 rounded-full bg-ornix-yellow mb-3" />
                  <p className="text-xs font-semibold text-ornix-navy-900">
                    Data Sovereignty
                  </p>
                  <p className="text-xs text-ornix-slate-500 mt-1">
                    Designed for control
                  </p>
                </div>

                <div className="rounded-2xl bg-white border border-ornix-navy-900/10 p-4">
                  <div className="w-2 h-2 rounded-full bg-ornix-yellow mb-3" />
                  <p className="text-xs font-semibold text-ornix-navy-900">
                    Full-Spectrum AI
                  </p>
                  <p className="text-xs text-ornix-slate-500 mt-1">
                    End-to-end capability
                  </p>
                </div>

                <div className="rounded-2xl bg-white border border-ornix-navy-900/10 p-4">
                  <div className="w-2 h-2 rounded-full bg-ornix-yellow mb-3" />
                  <p className="text-xs font-semibold text-ornix-navy-900">
                    Co-Innovation
                  </p>
                  <p className="text-xs text-ornix-slate-500 mt-1">
                    Built alongside institutions
                  </p>
                </div>

              </div>

            </div>
          </div>

          {/* Small floating accent */}
          <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-2xl bg-ornix-yellow flex items-center justify-center shadow-lg">
            <div className="w-3 h-3 rounded-full bg-ornix-navy-900" />
          </div>

        </div>

      </div>
    </div>
  </div>
</section>
{/* Who We Are */}
<section className="bg-white text-ornix-navy-900 py-20 md:py-24">
  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-4xl">
      <span className="text-xs font-mono uppercase tracking-[0.18em] text-ornix-yellow font-semibold">
        WHO WE ARE
      </span>

      <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mt-4 mb-8 leading-[1.12]">
        Artificial Intelligence as Continuous Institutional Evolution
      </h2>

      <div className="space-y-6 text-ornix-slate-600 text-base md:text-lg leading-relaxed">
        <p>
          At Ornix AI Solutions PLC, we believe that artificial intelligence is
          not a product you buy off the shelf—it is a continuous institutional
          evolution.
        </p>

        <p>
          In a rapidly transforming global economy, off-the-shelf software and
          generic foreign algorithms often fail to address the unique
          operational, linguistic, and regulatory realities of the Ethiopian
          market. Ornix AI was founded to close this gap.
        </p>

        <p>
          We are a home-grown artificial intelligence company engineered to
          serve as a long-term co-innovation partner for Ethiopia&apos;s leading
          enterprise and public institutions.
        </p>
      </div>

      <div className="mt-10 h-px w-24 bg-ornix-yellow" />
    </div>
  </div>
</section>
{/* Mission & Vision Section */}
{/* Mission & Vision */}
<section
  id="mission"
  className="bg-ornix-navy-900 text-white py-20 md:py-24"
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">

      {/* Mission */}
      <div className="relative p-8 md:p-10 lg:p-12 rounded-3xl bg-ornix-navy-850 border border-white/10 overflow-hidden group">
        <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-ornix-yellow/5 blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <div className="w-12 h-12 rounded-2xl bg-ornix-yellow/10 border border-ornix-yellow/30 flex items-center justify-center mb-7">
            <Target className="w-6 h-6 text-ornix-yellow" />
          </div>

          <span className="text-xs font-mono uppercase tracking-[0.18em] text-ornix-yellow block mb-3">
            OUR MISSION
          </span>

          <h2 className="text-2xl md:text-3xl font-heading font-bold leading-tight mb-5">
            AI Adoption Requires a Strategic Partner
          </h2>

          <p className="text-ornix-slate-300 text-base md:text-lg leading-relaxed">
            To prove to Ethiopian enterprises and institutions that successful
            AI adoption requires more than transactional software—it demands a
            dedicated, long-term strategic partner equipped to solve complex
            sector challenges through sovereign, full-spectrum artificial
            intelligence built alongside them.
          </p>
        </div>
      </div>

      {/* Vision */}
      <div className="relative p-8 md:p-10 lg:p-12 rounded-3xl bg-white text-ornix-navy-900 overflow-hidden group">
        <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-ornix-yellow/10 blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <div className="w-12 h-12 rounded-2xl bg-ornix-navy-900/5 border border-ornix-navy-900/10 flex items-center justify-center mb-7">
            <Eye className="w-6 h-6 text-ornix-yellow" />
          </div>

          <span className="text-xs font-mono uppercase tracking-[0.18em] text-ornix-yellow block mb-3">
            OUR VISION
          </span>

          <h2 className="text-2xl md:text-3xl font-heading font-bold leading-tight mb-5">
            Ethiopia at the Forefront of African AI
          </h2>

          <p className="text-ornix-slate-600 text-base md:text-lg leading-relaxed">
            To position Ethiopia at the forefront of the African AI revolution
            by establishing a benchmark for client-first technology, sovereign
            data governance, and locally grounded co-innovation.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>

{/* Core Values */}
<section className="bg-white text-ornix-navy-900 py-20 md:py-24">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <SectionHeading
      badge="GUIDING PRINCIPLES"
      title="Our Core Values"
      subtitle="The principles that guide how Ornix builds sovereign AI, works with institutions, and develops long-term technological capability."
    />

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
      {VALUES.map((val, idx) => (
        <div
          key={idx}
          className="group bg-white p-7 md:p-8 rounded-3xl border border-ornix-navy-900/10 hover:border-ornix-yellow/60 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
          <div className="w-12 h-12 rounded-2xl bg-ornix-navy-900 flex items-center justify-center mb-6 group-hover:bg-ornix-yellow transition-colors duration-300">
            <div className="group-hover:[&>svg]:text-ornix-navy-900 transition-colors">
              {val.icon}
            </div>
          </div>

          <h3 className="text-xl font-bold font-heading text-ornix-navy-900 mb-3">
            {val.title}
          </h3>

          <p className="text-sm md:text-base text-ornix-slate-600 leading-relaxed">
            {val.desc}
          </p>
        </div>
      ))}
    </div>

  </div>
</section>

      {/* Team Showcase */}
   {/* Team Showcase */}
<section className="relative bg-ornix-navy-900 text-white py-20 md:py-24 overflow-hidden">
  <div className="absolute inset-0 grid-background opacity-20" />

  <div className="absolute -top-40 -right-40 w-[420px] h-[420px] rounded-full bg-ornix-yellow/10 blur-[120px] pointer-events-none" />

  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <SectionHeading
      badge="THE ORNIX TEAM"
      title="The People Behind ORNIX"
      subtitle="A multidisciplinary team bringing together artificial intelligence, software engineering, data, cybersecurity, finance, healthcare, and institutional expertise."
    />

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12">
      {TEAM_MEMBERS.map((member, idx) => (
        <div
          key={idx}
          className="group relative bg-ornix-navy-850/80 border border-white/10 rounded-3xl p-6 md:p-7 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-ornix-yellow/40 hover:shadow-2xl"
        >
          {/* Accent */}
          <div className="absolute top-0 left-0 w-full h-1 bg-ornix-yellow/0 group-hover:bg-ornix-yellow transition-all duration-300" />

          {/* Profile */}
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-6">
              <div className="absolute inset-0 rounded-full bg-ornix-yellow/20 blur-xl scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-ornix-yellow/60 transition-colors duration-300">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <h3 className="text-xl font-heading font-bold text-white mb-1">
              {member.name}
            </h3>

            <p className="text-sm font-medium text-ornix-yellow mb-4">
              {member.role}
            </p>

            <p className="text-sm md:text-base text-ornix-slate-300 leading-relaxed">
              {member.bio}
            </p>

            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${member.name} LinkedIn profile`}
                className="mt-6 inline-flex items-center justify-center w-10 h-10 rounded-xl border border-white/10 text-ornix-slate-300 hover:text-ornix-navy-900 hover:bg-ornix-yellow hover:border-ornix-yellow transition-all duration-300"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
      {/* Why Our Team Stands Out */}
{/* Why Our Team Stands Out */}
<section className="bg-white text-ornix-navy-900 py-20 md:py-24">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <SectionHeading
      badge="WHY OUR TEAM STANDS OUT"
      title="Multidisciplinary by Design"
      subtitle="Ornix brings together technical, financial, cybersecurity, ICT, healthcare, and applied AI expertise to understand institutional challenges from multiple perspectives."
    />

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 mt-12">

      {/* Multidisciplinary */}
      <div className="group relative bg-ornix-slate-50 border border-ornix-navy-900/10 rounded-3xl p-7 md:p-8 hover:border-ornix-yellow/60 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        <div className="w-12 h-12 rounded-2xl bg-ornix-navy-900 flex items-center justify-center mb-6 group-hover:bg-ornix-yellow transition-colors duration-300">
          <Users className="w-6 h-6 text-ornix-yellow group-hover:text-ornix-navy-900 transition-colors duration-300" />
        </div>

        <h3 className="text-xl font-heading font-bold mb-3">
          Multidisciplinary
        </h3>

        <p className="text-sm md:text-base text-ornix-slate-600 leading-relaxed">
          Bringing together diverse technical and sector expertise to approach
          complex institutional challenges from multiple perspectives.
        </p>
      </div>

      {/* Collaborative */}
      <div className="group relative bg-ornix-slate-50 border border-ornix-navy-900/10 rounded-3xl p-7 md:p-8 hover:border-ornix-yellow/60 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        <div className="w-12 h-12 rounded-2xl bg-ornix-navy-900 flex items-center justify-center mb-6 group-hover:bg-ornix-yellow transition-colors duration-300">
          <Users className="w-6 h-6 text-ornix-yellow group-hover:text-ornix-navy-900 transition-colors duration-300" />
        </div>

        <h3 className="text-xl font-heading font-bold mb-3">
          Collaborative
        </h3>

        <p className="text-sm md:text-base text-ornix-slate-600 leading-relaxed">
          Working closely with clients, internal teams, and stakeholders to
          co-create solutions rather than simply delivering technology.
        </p>
      </div>

      {/* Locally Grounded */}
      <div className="group relative bg-ornix-slate-50 border border-ornix-navy-900/10 rounded-3xl p-7 md:p-8 hover:border-ornix-yellow/60 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        <div className="w-12 h-12 rounded-2xl bg-ornix-navy-900 flex items-center justify-center mb-6 group-hover:bg-ornix-yellow transition-colors duration-300">
          <Globe className="w-6 h-6 text-ornix-yellow group-hover:text-ornix-navy-900 transition-colors duration-300" />
        </div>

        <h3 className="text-xl font-heading font-bold mb-3">
          Locally Grounded
        </h3>

        <p className="text-sm md:text-base text-ornix-slate-600 leading-relaxed">
          Combining global AI capabilities with firsthand understanding of
          Ethiopia&apos;s institutions, languages, infrastructure, and operating
          environment.
        </p>
      </div>

      {/* Impact-Driven */}
      <div className="group relative bg-ornix-slate-50 border border-ornix-navy-900/10 rounded-3xl p-7 md:p-8 hover:border-ornix-yellow/60 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        <div className="w-12 h-12 rounded-2xl bg-ornix-navy-900 flex items-center justify-center mb-6 group-hover:bg-ornix-yellow transition-colors duration-300">
          <Target className="w-6 h-6 text-ornix-yellow group-hover:text-ornix-navy-900 transition-colors duration-300" />
        </div>

        <h3 className="text-xl font-heading font-bold mb-3">
          Impact-Driven
        </h3>

        <p className="text-sm md:text-base text-ornix-slate-600 leading-relaxed">
          Focused on measurable institutional value, sustainable capability,
          and solutions that create meaningful long-term impact.
        </p>
      </div>

    </div>
  </div>
</section>
{/* Why Co-Innovation Matters */}
{/* Why Co-Innovation Matters */}
<section className="relative bg-ornix-navy-900 text-white py-20 md:py-24 overflow-hidden">
  <div className="absolute inset-0 grid-background opacity-20" />

  <div className="absolute -bottom-40 -left-40 w-[450px] h-[450px] rounded-full bg-ornix-yellow/10 blur-[130px] pointer-events-none" />

  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <SectionHeading
      badge="THE ORNIX DIFFERENCE"
      title="Why Co-Innovation Matters"
      subtitle="The difference between purchasing technology and building lasting institutional capability."
    />

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mt-12">

      {/* Traditional Vendor */}
      <div className="rounded-3xl border border-white/10 bg-white/[0.04] overflow-hidden">
        <div className="px-7 md:px-9 py-7 border-b border-white/10">
          <span className="text-xs font-mono uppercase tracking-[0.18em] text-ornix-slate-400">
            TRADITIONAL VENDOR MODEL
          </span>

          <h3 className="text-2xl md:text-3xl font-heading font-bold mt-2">
            Transactional Technology
          </h3>

          <p className="text-sm text-ornix-slate-400 mt-3">
            Technology delivered as a product, often separated from the
            institution&apos;s long-term strategic evolution.
          </p>
        </div>

        <div className="divide-y divide-white/10">
          {[
            {
              title: "Approach",
              text: "Sells pre-packaged, one-size-fits-all tools.",
            },
            {
              title: "Language & Context",
              text: "Uses Western-centric models with retrofitted translation.",
            },
            {
              title: "Data Control",
              text: "Relies on distant, black-box foreign servers.",
            },
            {
              title: "Knowledge Transfer",
              text: "Can create vendor lock-in and long-term dependency.",
            },
            {
              title: "Long-Term Support",
              text: "Focuses on static maintenance contracts.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="px-7 md:px-9 py-5 flex gap-4"
            >
              <div className="mt-1 w-2 h-2 rounded-full bg-ornix-slate-500 shrink-0" />

              <div>
                <h4 className="text-sm font-semibold text-white mb-1">
                  {item.title}
                </h4>

                <p className="text-sm text-ornix-slate-400 leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Ornix */}
      <div className="relative rounded-3xl border border-ornix-yellow/40 bg-white overflow-hidden text-ornix-navy-900 shadow-2xl">

        <div className="absolute top-0 right-0 w-56 h-56 bg-ornix-yellow/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative px-7 md:px-9 py-7 border-b border-ornix-navy-900/10">
          <span className="text-xs font-mono uppercase tracking-[0.18em] text-ornix-yellow font-semibold">
            ORNIX CO-INNOVATION MODEL
          </span>

          <h3 className="text-2xl md:text-3xl font-heading font-bold mt-2">
            Strategic Partnership
          </h3>

          <p className="text-sm text-ornix-slate-600 mt-3">
            Technology engineered alongside institutions and continuously
            adapted to their operational and strategic needs.
          </p>
        </div>

        <div className="divide-y divide-ornix-navy-900/10">
          {[
            {
              title: "Approach",
              text: "Co-engineers solutions around your specific operational roadmap.",
            },
            {
              title: "Language & Context",
              text: "Builds localized language intelligence for Amharic, Afaan Oromo, Tigrinya, Somali.",
            },
            {
              title: "Data Control",
              text: "Supports local cloud and controlled on-premise infrastructure for data sovereignty.",
            },
            {
              title: "Knowledge Transfer",
              text: "Trains and upskills internal teams to understand and co-manage system output.",
            },
            {
              title: "Long-Term Support",
              text: "Continuously tunes and adapts models as market and institutional conditions evolve.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="px-7 md:px-9 py-5 flex gap-4"
            >
              <div className="mt-1 w-2 h-2 rounded-full bg-ornix-yellow shrink-0" />

              <div>
                <h4 className="text-sm font-semibold text-ornix-navy-900 mb-1">
                  {item.title}
                </h4>

                <p className="text-sm text-ornix-slate-600 leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>

    {/* Bottom statement */}
    <div className="mt-10 rounded-2xl border border-ornix-yellow/20 bg-ornix-yellow/5 px-6 py-5 md:px-8 md:py-6 text-center">
      <p className="text-sm md:text-base text-ornix-slate-300 leading-relaxed">
        Ornix&apos;s approach is designed around continuous collaboration,
        institutional knowledge transfer, and long-term technological
        independence.
      </p>
    </div>

  </div>
</section>
{/* Final CTA */}
<section className="relative bg-white text-ornix-navy-900 py-20 md:py-24 overflow-hidden">
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full bg-ornix-yellow/10 blur-[120px]" />
  </div>

  <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

    <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-ornix-yellow/10 border border-ornix-yellow/30 text-ornix-navy-900 text-xs font-semibold uppercase tracking-[0.18em] mb-6">
      BUILD WITH ORNIX
    </span>

    <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-[1.1] tracking-tight">
      Let&apos;s Build the Future of AI in Ethiopia Together
    </h2>

    <p className="max-w-2xl mx-auto mt-6 text-base md:text-lg text-ornix-slate-600 leading-relaxed">
      Whether you are exploring your first AI initiative or scaling an
      institution-wide transformation, Ornix is ready to work alongside your
      team from strategy and architecture to implementation, capability
      building, and continuous innovation.
    </p>

    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-9">

      <a
        href="/contact"
        className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-ornix-navy-900 text-white font-semibold hover:bg-ornix-navy-850 transition-colors duration-300"
      >
        Start a Conversation
      </a>

      <a
        href="/services"
        className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl border border-ornix-navy-900/15 text-ornix-navy-900 font-semibold hover:border-ornix-yellow hover:bg-ornix-yellow/10 transition-all duration-300"
      >
        Explore Our Solutions
      </a>

    </div>

    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-sm text-ornix-slate-500">
      <a
        href="tel:+251912055505"
        className="hover:text-ornix-navy-900 transition-colors"
      >
        +251 912 055 505
      </a>

      <span className="hidden sm:block w-1 h-1 rounded-full bg-ornix-yellow" />

      <a
        href="mailto:contact@Ornix.com.et"
        className="hover:text-ornix-navy-900 transition-colors"
      >
        contact@Ornix.com.et
      </a>
    </div>

  </div>
</section>
    </main>
  );
}
