"use client";

import React, { useState } from "react";
import { CASE_STUDIES } from "@/data/caseStudies";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerChildren, SlideUp } from "@/components/ui/FadeIn";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export const CaseStudiesSection: React.FC = () => {
  const [selectedCaseId, setSelectedCaseId] = useState<string>(CASE_STUDIES[0].id);

  const selectedCase = CASE_STUDIES.find((c) => c.id === selectedCaseId) || CASE_STUDIES[0];

  return (
    <section className="py-24 bg-ornix-slate-50 text-ornix-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          theme="light"
          badge="CASE STUDY ARCHITECTURE"
          title="Clinical Implementation Architecture"
          subtitle="Explore how ORNIX technology frameworks address real-world health system challenges using configurable placeholder case studies."
        />

        {/* Case Selector Tabs */}
        <div className="flex items-center gap-3 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {CASE_STUDIES.map((cs) => {
            const isActive = cs.id === selectedCaseId;
            return (
              <button
                key={cs.id}
                onClick={() => setSelectedCaseId(cs.id)}
                className={cn(
                  "px-5 py-3 rounded-full text-xs md:text-sm font-semibold whitespace-nowrap transition-all duration-200 border cursor-pointer",
                  isActive
                    ? "bg-ornix-navy-900 text-white border-ornix-navy-900 shadow-md"
                    : "bg-white text-ornix-slate-700 border-ornix-slate-200 hover:bg-ornix-slate-100"
                )}
              >
                {cs.title}
              </button>
            );
          })}
        </div>

        {/* Active Case Study Detail Box */}
        <SlideUp key={selectedCase.id}>
          <div className="bg-white rounded-3xl p-8 md:p-10 border border-ornix-slate-200 shadow-xl">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8 pb-6 border-b border-ornix-slate-100">
              <div>
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-ornix-navy-800 bg-ornix-yellow/20 px-3 py-1 rounded-full">
                  {selectedCase.clientCategory}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold font-heading text-ornix-slate-900 mt-3">
                  {selectedCase.title}
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Challenge & Approach */}
              <div className="lg:col-span-8 flex flex-col gap-6">
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-ornix-navy-900 mb-2 font-heading">
                    The Challenge
                  </h4>
                  <p className="text-ornix-slate-600 text-sm leading-relaxed">
                    {selectedCase.challenge}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-ornix-navy-900 mb-2 font-heading">
                    The Approach
                  </h4>
                  <p className="text-ornix-slate-600 text-sm leading-relaxed">
                    {selectedCase.approach}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-ornix-navy-900 mb-2 font-heading">
                    Implementation & Outcome
                  </h4>
                  <p className="text-ornix-slate-600 text-sm leading-relaxed mb-4">
                    {selectedCase.implementation}
                  </p>
                  <div className="p-4 rounded-2xl bg-ornix-slate-50 border border-ornix-slate-200">
                    <p className="text-xs font-semibold text-ornix-slate-900 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-ornix-navy-800 shrink-0" />
                      <span>{selectedCase.outcome}</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Technology & Key Metrics Sidebar */}
              <div className="lg:col-span-4 bg-ornix-navy-850 text-white rounded-2xl p-6 flex flex-col justify-between">
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest text-ornix-yellow mb-4">
                    Technology Deployed
                  </h4>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {selectedCase.technology.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-white/10 text-ornix-slate-200 px-3 py-1 rounded-full border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <h4 className="text-xs font-mono uppercase tracking-widest text-ornix-yellow mb-4">
                    Key Outcomes
                  </h4>
                  <div className="space-y-3">
                    {selectedCase.metrics.map((m, idx) => (
                      <div key={idx} className="flex items-center justify-between text-xs pb-2 border-b border-white/10">
                        <span className="text-ornix-slate-400">{m.label}</span>
                        <span className="font-bold text-white font-mono">{m.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SlideUp>
      </div>
    </section>
  );
};
