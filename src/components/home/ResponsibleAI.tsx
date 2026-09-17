"use client";

import React from "react";
import { UserCheck, Lock, Shield, Eye, CheckCircle2, Scale } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerChildren, SlideUp } from "@/components/ui/FadeIn";
const RESPONSIBLE_PILLARS = [
  {
    title: "Transparent Decision-Making",
    desc: "AI systems designed to make their decision processes understandable and accountable to the people and institutions using them.",
    icon: <Eye className="w-6 h-6 text-ornix-yellow" />,
  },
  {
    title: "Unbiased Local Representation",
    desc: "Models engineered to reflect Ethiopia's diverse contexts and reduce bias through locally grounded data and continuous evaluation.",
    icon: <Scale className="w-6 h-6 text-ornix-yellow" />,
  },
  {
    title: "Resource-Efficient AI",
    desc: "AI models engineered to run reliably within local infrastructure constraints without unnecessary computational overhead.",
    icon: <CheckCircle2 className="w-6 h-6 text-ornix-yellow" />,
  },
  {
    title: "Data Sovereignty",
    desc: "Complete data sovereignty through local hosting compatibility and custom on-premise deployments aligned with institutional security requirements.",
    icon: <Lock className="w-6 h-6 text-ornix-yellow" />,
  },
  {
    title: "Secure AI Systems",
    desc: "AI architectures designed around institutional security requirements, controlled access, and responsible handling of sensitive organizational data.",
    icon: <Shield className="w-6 h-6 text-ornix-yellow" />,
  },
  {
    title: "Human Capability",
    desc: "Working alongside internal teams to transfer technical knowledge and build long-term organizational independence.",
    icon: <UserCheck className="w-6 h-6 text-ornix-yellow" />,
  },
];
export const ResponsibleAI: React.FC = () => {
  return (
    <section className="py-24 bg-ornix-navy-850 text-white relative overflow-hidden border-t border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<SectionHeading
  badge="ETHICAL & REASONABLE AI"
  title="Intelligence With Responsibility"
  highlightText="Responsibility"
  subtitle="Transparent decision-making, unbiased local representation, and resource-efficient AI models engineered to run reliably within local infrastructure constraints."
/>
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {RESPONSIBLE_PILLARS.map((pillar, idx) => (
            <SlideUp key={idx}>
              <div className="glass-panel p-8 rounded-3xl border border-white/10 hover:border-ornix-yellow/40 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-2xl bg-ornix-navy-900 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-bold font-heading text-white mb-3 group-hover:text-ornix-yellow transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-ornix-slate-300 text-sm leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </SlideUp>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
};
