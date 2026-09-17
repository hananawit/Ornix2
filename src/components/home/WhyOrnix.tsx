"use client";

import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SlideUp, StaggerChildren } from "@/components/ui/FadeIn";

const WHY_ORNIX_PILLARS = [
  {
    num: "01",
    title: "AI Expertise",
    desc: "Built by machine learning scientists pushing boundaries in multi-modal transformers, temporal deep learning, and clinical computer vision.",
  },
  {
    num: "02",
    title: "Healthcare Understanding",
    desc: "Deep integration with clinical workflows, EHR protocols, medical ontologies, and regulatory standards like HIPAA and FHIR R4.",
  },
  {
    num: "03",
    title: "Research Driven",
    desc: "Grounding algorithm architecture in peer-reviewed clinical validation, rigorous benchmarking, and transparent model attribution.",
  },
  {
    num: "04",
    title: "Engineering Excellence",
    desc: "High-throughput microservices architecture engineered for enterprise uptime, zero latency telemetry, and cloud redundancy.",
  },
  {
    num: "05",
    title: "Human-Centered Design",
    desc: "Intuitively designed clinician interfaces that simplify complex data representations, reducing cognitive fatigue for care providers.",
  },
];

export const WhyOrnix: React.FC = () => {
  return (
    <section className="py-24 bg-white text-ornix-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          theme="light"
          badge="OUR CORE DIFFERENTIATORS"
          title="Built at the Intersection of Technology and Healthcare"
          subtitle="Why healthcare organizations trust ORNIX to deploy critical artificial intelligence infrastructure."
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
