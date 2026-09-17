"use client";

import React from "react";
import { STRATEGIC_TRIAD } from "@/data/ornixVision";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SlideUp, StaggerChildren } from "@/components/ui/FadeIn";
import { Target, Compass, Lightbulb, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const TRIAD_ICONS = {
  goal: <Target className="w-8 h-8 text-ornix-yellow" />,
  strategy: <Compass className="w-8 h-8 text-ornix-yellow" />,
  solution: <Lightbulb className="w-8 h-8 text-ornix-yellow" />,
};

const TRIAD_DETAILS = {
  goal: [
    "Positioning Ethiopia at the forefront of the African AI revolution",
    "Client-first engineering aligned with national digital mandates",
    "Establishing benchmarks for African institutional autonomy",
  ],
  strategy: [
    "Shifting away from rigid, one-size-fits-all software licensing",
    "Embedding long-term co-innovation squads alongside client IT",
    "Continuous upskilling and sovereign technology capability transfer",
  ],
  solution: [
    "Sovereign data hosting on domestic cloud and on-premise setups",
    "Built-from-scratch native LLMs for Ethiopia's major languages",
    "End-to-end architectures across all 7 branches of AI",
  ],
};

export const StrategicTriadSection: React.FC = () => {
  return (
    <section className="py-24 bg-white text-ornix-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          theme="light"
          badge="STRATEGIC BLUEPRINT"
          title="The Goal, The Strategy, and The Solution"
          subtitle="Our systematic framework designed to redefine institutional artificial intelligence across Ethiopia."
        />

        <StaggerChildren className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          {STRATEGIC_TRIAD.map((item, idx) => (
            <SlideUp key={item.id}>
              <div className="bg-ornix-slate-50 p-8 sm:p-10 rounded-3xl border border-ornix-slate-200 hover:border-ornix-navy-800/40 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between h-full group">
                <div>
                  {/* Header Icon & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-ornix-navy-900 border border-ornix-navy-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {TRIAD_ICONS[item.id]}
                    </div>
                    <span className="text-xs font-mono font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-ornix-yellow/20 text-ornix-navy-900 border border-ornix-yellow/40">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold font-heading text-ornix-slate-900 mb-4 group-hover:text-ornix-navy-900 transition-colors">
                    {item.title}
                  </h3>

                  {/* Main Core Text */}
                  <div className="p-4 rounded-2xl bg-white border border-ornix-slate-200 mb-6 shadow-sm">
                    <p className="text-base text-ornix-navy-900 font-semibold leading-relaxed">
                      "{item.description}"
                    </p>
                  </div>

                  {/* Supporting points */}
                  <ul className="space-y-3 mb-6">
                    {TRIAD_DETAILS[item.id].map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-ornix-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-ornix-navy-800 shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-ornix-slate-200 flex items-center justify-between">
                  <span className="text-xs font-mono text-ornix-slate-500 font-semibold">
                    Blueprint Pillar 0{idx + 1}
                  </span>
                  <Link
                    href="/about"
                    className="text-xs font-bold text-ornix-navy-900 hover:text-ornix-yellow transition-colors inline-flex items-center gap-1.5"
                  >
                    Explore In Depth
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </SlideUp>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
};
