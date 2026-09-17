import React from "react";
import { Metadata } from "next";
import { TEAM_MEMBERS } from "@/data/team";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Linkedin, Target, Eye, ShieldCheck, HeartPulse, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About ORNIX | Mission, Vision & Team",
  description: "Learn about ORNIX: Building the intelligence layer for tomorrow's healthcare through artificial intelligence, research, and human-centered design.",
};

const VALUES = [
  {
    title: "Clinical Rigor First",
    desc: "Every model we deploy undergoes prospective validation to ensure patient safety and diagnostic reliability.",
    icon: <HeartPulse className="w-6 h-6 text-ornix-yellow" />,
  },
  {
    title: "Human-Centered Design",
    desc: "Intelligent tools must reduce cognitive fatigue for healthcare providers rather than adding administrative complexity.",
    icon: <Sparkles className="w-6 h-6 text-ornix-yellow" />,
  },
  {
    title: "Absolute Data Sovereignty",
    desc: "Uncompromising commitment to HIPAA compliance, zero trust security, and ethical data governance.",
    icon: <ShieldCheck className="w-6 h-6 text-ornix-yellow" />,
  },
];

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20 bg-ornix-navy-900 text-white min-h-screen">
      {/* Banner */}
      <section className="py-16 bg-ornix-navy-950 border-b border-white/10 grid-background text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ornix-yellow/20 border border-ornix-yellow/40 text-ornix-yellow text-xs font-semibold uppercase tracking-wider mb-4">
            ABOUT ORNIX
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-white tracking-tight mb-4">
            Building the Intelligence Layer for Tomorrow's Healthcare
          </h1>
          <p className="text-base sm:text-lg text-ornix-slate-300 leading-relaxed max-w-2xl mx-auto">
            ORNIX brings artificial intelligence, healthcare domain expertise, and data-driven innovation together to solve the most complex challenge in modern medicine: converting vast data into actionable clarity.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section id="mission" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-panel p-8 md:p-10 rounded-3xl border border-white/10 relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-ornix-yellow/20 border border-ornix-yellow/40 flex items-center justify-center mb-6">
              <Target className="w-6 h-6 text-ornix-yellow" />
            </div>
            <span className="text-xs font-mono uppercase tracking-widest text-ornix-yellow block mb-2">OUR MISSION</span>
            <h2 className="text-2xl md:text-3xl font-bold font-heading text-white mb-4">
              Actionable Intelligence for Every Healthcare Decision
            </h2>
            <p className="text-ornix-slate-300 text-base leading-relaxed">
              "Build intelligent technologies that help healthcare organizations transform data and complexity into meaningful action."
            </p>
          </div>

          <div className="glass-panel p-8 md:p-10 rounded-3xl border border-white/10 relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-ornix-yellow/20 border border-ornix-yellow/40 flex items-center justify-center mb-6">
              <Eye className="w-6 h-6 text-ornix-yellow" />
            </div>
            <span className="text-xs font-mono uppercase tracking-widest text-ornix-yellow block mb-2">OUR VISION</span>
            <h2 className="text-2xl md:text-3xl font-bold font-heading text-white mb-4">
              A Smarter, Connected Health Ecosystem
            </h2>
            <p className="text-ornix-slate-300 text-base leading-relaxed">
              "A healthcare ecosystem where intelligent technology makes knowledge more accessible, systems more efficient, and human decisions better informed."
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-ornix-navy-950 border-t border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="GUIDING PRINCIPLES"
            title="Our Core Values"
            subtitle="The fundamental commitments guiding our model engineering, clinical collaborations, and institutional partnerships."
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
          badge="LEADERSHIP & SCIENTISTS"
          title="The People Behind ORNIX"
          subtitle="Multi-disciplinary leaders in artificial intelligence, clinical medicine, health data systems, and ethical governance."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM_MEMBERS.map((member) => (
            <div key={member.id} className="glass-panel p-6 rounded-3xl border border-white/10 text-center flex flex-col justify-between">
              <div>
                <div className="w-20 h-20 rounded-full bg-ornix-navy-800 border border-ornix-yellow/30 mx-auto flex items-center justify-center font-bold text-ornix-yellow text-lg mb-4 shadow-inner">
                  {member.avatarPlaceholder}
                </div>
                <h3 className="text-lg font-bold font-heading text-white mb-1">{member.name}</h3>
                <p className="text-xs font-semibold text-ornix-yellow mb-3">{member.role}</p>
                <p className="text-xs text-ornix-slate-300 leading-relaxed mb-4">{member.bio}</p>
              </div>

              <div className="pt-4 border-t border-white/10 flex justify-center">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-ornix-slate-300 hover:text-ornix-yellow hover:bg-white/10 transition-colors"
                  aria-label={`${member.name} LinkedIn Profile`}
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
