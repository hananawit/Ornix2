"use client";

import React from "react";
import { IMPACT_METRICS } from "@/data/metrics";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerChildren, SlideUp } from "@/components/ui/FadeIn";

export const ImpactMetrics: React.FC = () => {
  return (
    <section className="py-20 bg-ornix-navy-900 text-white relative overflow-hidden border-t border-b border-white/10 grid-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="SCALABLE IMPACT"
          title="Measured Healthcare Innovation"
          subtitle="Configurable operational benchmarks demonstrating our commitment to measurable clinical outcomes."
        />

        <StaggerChildren className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {IMPACT_METRICS.map((metric) => (
            <SlideUp key={metric.id}>
              <div className="glass-panel rounded-3xl p-6 md:p-8 text-center border border-white/10 hover:border-ornix-yellow/40 transition-all duration-300">
                <div className="text-4xl md:text-5xl font-extrabold font-heading text-ornix-yellow mb-2 tracking-tight">
                  {metric.value}{metric.suffix}
                </div>
                <h4 className="text-base font-bold text-white mb-1 font-heading">{metric.label}</h4>
                <p className="text-xs text-ornix-slate-400 max-w-xs mx-auto">{metric.description}</p>
              </div>
            </SlideUp>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
};
