"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, HeartPulse, Database, FlaskConical, Cpu, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SlideUp, FadeIn } from "@/components/ui/FadeIn";
import { cn } from "@/lib/utils";

interface Pillar {
  id: string;
  name: string;
  tagline: string;
  icon: React.ReactNode;
  description: string;
}

const PILLARS: Pillar[] = [
  {
    id: "ai",
    name: "Artificial Intelligence",
    tagline: "Domain-Tuned Machine Intelligence",
    icon: <Brain className="w-6 h-6 text-ornix-yellow" />,
    description: "Deep neural networks and foundation models trained specifically on medical ontologies, clinical notes, and multi-parametric vital telemetry.",
  },
  {
    id: "healthcare",
    name: "Healthcare Expertise",
    tagline: "Clinical-First Integration",
    icon: <HeartPulse className="w-6 h-6 text-ornix-yellow" />,
    description: "Designed alongside physicians and medical researchers to ensure every algorithmic output respects clinical workflows and patient care standards.",
  },
  {
    id: "data",
    name: "Data Engineering",
    tagline: "FHIR-Native Interoperability",
    icon: <Database className="w-6 h-6 text-ornix-yellow" />,
    description: "Harmonizing fragmented legacy hospital databases into unified real-time FHIR graphs for seamless cross-institution insights.",
  },
  {
    id: "research",
    name: "Translational Research",
    tagline: "Evidence-Based Machine Learning",
    icon: <FlaskConical className="w-6 h-6 text-ornix-yellow" />,
    description: "Pioneering peer-reviewed algorithms validated through rigorous retrospective and prospective clinical trials.",
  },
  {
    id: "engineering",
    name: "Systems Engineering",
    tagline: "HIPAA-Compliant Scale",
    icon: <Cpu className="w-6 h-6 text-ornix-yellow" />,
    description: "High-throughput microservices architecture delivering sub-second inference latency with zero-trust encryption at rest and in transit.",
  },
];

export const TrustedIntro: React.FC = () => {
  const [activePillarId, setActivePillarId] = useState<string>("ai");

  const activePillar = PILLARS.find((p) => p.id === activePillarId) || PILLARS[0];

  return (
    <section className="py-24 bg-white text-ornix-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          theme="light"
          badge="FOUNDATIONAL PHILOSOPHY"
          title="Where Intelligence Meets Healthcare"
          subtitle="Healthcare generates enormous amounts of information. ORNIX connects that information with artificial intelligence, analytics, and intelligent software to help organizations understand complexity and build better digital systems."
        />

        {/* 5 Interactive Pillars Bar */}
        <SlideUp delay={0.2}>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-8">
            {PILLARS.map((pillar) => {
              const isActive = pillar.id === activePillarId;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setActivePillarId(pillar.id)}
                  onMouseEnter={() => setActivePillarId(pillar.id)}
                  className={cn(
                    "p-4 rounded-2xl border text-left transition-all duration-300 flex flex-col items-start gap-3 cursor-pointer",
                    isActive
                      ? "bg-ornix-navy-900 border-ornix-navy-900 text-white shadow-xl shadow-ornix-navy-900/20 scale-[1.02]"
                      : "bg-ornix-slate-50 border-ornix-slate-200 text-ornix-slate-700 hover:bg-ornix-slate-100"
                  )}
                >
                  <div
                    className={cn(
                      "p-2.5 rounded-xl border transition-colors",
                      isActive
                        ? "bg-ornix-yellow/20 border-ornix-yellow/40 text-ornix-yellow"
                        : "bg-white border-ornix-slate-200 text-ornix-slate-800"
                    )}
                  >
                    {pillar.icon}
                  </div>
                  <div>
                    <h4 className={cn("text-sm font-bold font-heading", isActive ? "text-white" : "text-ornix-slate-900")}>
                      {pillar.name}
                    </h4>
                    <p className={cn("text-xs mt-0.5 font-medium", isActive ? "text-ornix-yellow" : "text-ornix-slate-500")}>
                      {pillar.tagline}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </SlideUp>

        {/* Selected Pillar Detail Card */}
        <FadeIn delay={0.3}>
          <div className="bg-ornix-slate-900 text-white rounded-3xl p-8 md:p-10 border border-ornix-slate-800 relative overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-start gap-6">
              <div className="p-4 rounded-2xl bg-ornix-yellow/20 border border-ornix-yellow/40 shrink-0">
                {activePillar.icon}
              </div>
              <div>
                <span className="text-xs font-mono text-ornix-yellow uppercase tracking-widest block mb-1">
                  PILLAR EXPLORATION
                </span>
                <h3 className="text-2xl font-bold font-heading text-white mb-2">{activePillar.name}</h3>
                <p className="text-ornix-slate-300 text-base leading-relaxed max-w-2xl">
                  {activePillar.description}
                </p>
              </div>
            </div>

            <div className="shrink-0">
              <a
                href="#solutions"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ornix-yellow text-ornix-navy-950 font-semibold text-sm hover:bg-ornix-yellow-hover transition-colors"
              >
                <span>Learn How We Apply This</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
