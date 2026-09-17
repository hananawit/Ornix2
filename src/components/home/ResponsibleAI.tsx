"use client";

import React from "react";
import { UserCheck, Lock, Shield, Eye, CheckCircle2, Scale } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerChildren, SlideUp } from "@/components/ui/FadeIn";

const RESPONSIBLE_PILLARS = [
  {
    title: "Human Oversight",
    desc: "Clinicians remain final decision-makers; models function strictly as explainable co-pilots.",
    icon: <UserCheck className="w-6 h-6 text-ornix-yellow" />,
  },
  {
    title: "Privacy",
    desc: "Zero patient data retention without authorization; continuous anonymization & de-identification.",
    icon: <Lock className="w-6 h-6 text-ornix-yellow" />,
  },
  {
    title: "Security",
    desc: "End-to-end AES-256 encryption, zero-trust RBAC, and HIPAA compliance audited continuously.",
    icon: <Shield className="w-6 h-6 text-ornix-yellow" />,
  },
  {
    title: "Transparency",
    desc: "Step-by-step feature importance attribution and model rationale for every recommendation.",
    icon: <Eye className="w-6 h-6 text-ornix-yellow" />,
  },
  {
    title: "Reliability",
    desc: "Rigorous stress-testing against clinical domain shifts, missing signals, and noisy telemetry.",
    icon: <CheckCircle2 className="w-6 h-6 text-ornix-yellow" />,
  },
  {
    title: "Equity",
    desc: "Proactive algorithmic bias auditing across diverse demographic patient populations.",
    icon: <Scale className="w-6 h-6 text-ornix-yellow" />,
  },
];

export const ResponsibleAI: React.FC = () => {
  return (
    <section className="py-24 bg-ornix-navy-850 text-white relative overflow-hidden border-t border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="ETHICAL GOVERNANCE"
          title="Intelligence With Responsibility"
          highlightText="Responsibility"
          subtitle="Deploying artificial intelligence in medical environments demands absolute adherence to ethical standards, transparency, and patient safety."
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
