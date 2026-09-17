"use client";

import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SlideUp, StaggerChildren } from "@/components/ui/FadeIn";

const WHY_ORNIX_PILLARS = [
  {
    num: "01",
    title: "Sovereign AI & Strict Data Security",
    desc: "Complete data sovereignty through local hosting compatibility, including Ethio Telecom cloud, and custom on-premise deployments compliant with local financial and public security standards.",
  },
  {
    num: "02",
    title: "Full-Spectrum Technical Mastery",
    desc: "Mastery across all 7 branches of Artificial Intelligence, enabling complete end-to-end architectures tailored to institutional challenges.",
  },
  {
    num: "03",
    title: "Deep Local Context",
    desc: "Solutions built by Ethiopian engineers living and working within the local environment, navigating regional supply chains and local language dialects.",
  },
  {
    num: "04",
    title: "Ethical & Reasonable AI",
    desc: "Transparent decision-making, unbiased local representation, and resource-efficient AI models engineered to run reliably within local infrastructure constraints.",
  },
  {
    num: "05",
    title: "Knowledge Transfer & Capability Building",
    desc: "Working shoulder-to-shoulder with internal IT and business units to transfer technical skills and foster long-term digital independence.",
  },
];
export const WhyOrnix: React.FC = () => {
  return (
    <section className="py-24 bg-white text-ornix-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<SectionHeading
  theme="light"
  badge="THE ORNIX DIFFERENCE"
  title="Built for Sovereign, Local, Full-Spectrum AI"
  subtitle="Ornix combines technical depth, local context, data sovereignty, ethical AI, and long-term capability building to solve complex institutional challenges."
/>
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_ORNIX_PILLARS.map((pillar) => (
            <SlideUp key={pillar.num}>
              <div className="bg-ornix-slate-50 p-8 rounded-3xl border border-ornix-slate-200 hover:border-ornix-navy-800/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full group">
                <div>
                  <span className="text-4xl font-extrabold font-mono text-ornix-yellow group-hover:scale-110 transition-transform block mb-4">
                    {pillar.num}
                  </span>
                  <h3 className="text-xl font-bold font-heading text-ornix-slate-900 mb-3 group-hover:text-ornix-navy-900 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-ornix-slate-600 text-sm leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            </SlideUp>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
};
