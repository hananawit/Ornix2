import React from "react";
import { Metadata } from "next";
import { AI_SOLUTIONS, HEALTHCARE_SECTORS } from "@/data/solutions";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedCard } from "@/components/ui/AnimatedCard";
import { Button } from "@/components/ui/Button";
import { Stethoscope, Database, Bot, TrendingUp, Eye, BrainCircuit, Workflow, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Healthcare Solutions | ORNIX",
  description: "Explore ORNIX artificial intelligence solutions designed specifically for clinical environments, medical data normalization, imaging, and hospital automation.",
};

const ICON_MAP: Record<string, React.ReactNode> = {
  Stethoscope: <Stethoscope className="w-8 h-8 text-ornix-yellow" />,
  Database: <Database className="w-8 h-8 text-ornix-yellow" />,
  Bot: <Bot className="w-8 h-8 text-ornix-yellow" />,
  TrendingUp: <TrendingUp className="w-8 h-8 text-ornix-yellow" />,
  Eye: <Eye className="w-8 h-8 text-ornix-yellow" />,
  BrainCircuit: <BrainCircuit className="w-8 h-8 text-ornix-yellow" />,
  Workflow: <Workflow className="w-8 h-8 text-ornix-yellow" />,
};

export default function SolutionsPage() {
  return (
    <div className="pt-28 pb-20 bg-ornix-navy-900 text-white min-h-screen">
      {/* Header Banner */}
      <section className="py-16 bg-ornix-navy-950 border-b border-white/10 grid-background text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ornix-yellow/20 border border-ornix-yellow/40 text-ornix-yellow text-xs font-semibold uppercase tracking-wider mb-4">
            INTELLIGENT HEALTHCARE CAPABILITIES
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-white tracking-tight mb-4">
            AI Solutions Built for Clinical Precision
          </h1>
          <p className="text-base sm:text-lg text-ornix-slate-300 leading-relaxed max-w-2xl mx-auto">
            Bridge complex patient telemetry, multi-modal diagnostics, and administrative workflows with specialized artificial intelligence models.
          </p>
        </div>
      </section>

      {/* Solutions Detailed Breakdown */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {AI_SOLUTIONS.map((solution, index) => (
            <div
              key={solution.id}
              id={solution.id}
              className="glass-panel p-8 md:p-12 rounded-3xl border border-white/10 hover:border-ornix-yellow/40 transition-all duration-300 relative overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-8 flex flex-col items-start">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-2xl bg-ornix-navy-800 border border-white/10">
                      {ICON_MAP[solution.iconName]}
                    </div>
                    <div>
                      <span className="text-xs font-mono uppercase tracking-widest text-ornix-yellow">
                        {solution.category} SOLUTION
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white">{solution.title}</h2>
                    </div>
                  </div>

                  <p className="text-ornix-slate-200 text-base md:text-lg leading-relaxed mb-6">
                    {solution.fullDesc}
                  </p>

                  <div className="w-full pt-6 border-t border-white/10">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-ornix-slate-400 mb-4">
                      Core Technical Capabilities
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {solution.capabilities.map((cap, idx) => (
                        <div key={idx} className="flex items-center gap-2.5 text-sm text-ornix-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-ornix-yellow shrink-0" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-4 bg-ornix-navy-950 p-6 rounded-2xl border border-white/10 flex flex-col justify-between h-full">
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-ornix-yellow mb-2">
                      Primary Impact
                    </h4>
                    <p className="text-lg font-bold text-white mb-6 font-heading">
                      {solution.impactMetric}
                    </p>

                    <p className="text-xs text-ornix-slate-400 leading-relaxed mb-6">
                      Deployable on-premises, within sovereign health cloud infrastructure, or as direct EHR-embedded microservices.
                    </p>
                  </div>

                  <Button href="/contact" variant="accent" size="sm" icon={<ArrowRight className="w-4 h-4" />}>
                    Inquire About {solution.title}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Target Sectors Grid Section */}
      <section className="py-20 bg-white text-ornix-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            theme="light"
            badge="INSTITUTIONAL TARGETS"
            title="Tailored Across Healthcare Ecosystems"
            subtitle="Explore how ORNIX technology integrates into specific healthcare environments."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {HEALTHCARE_SECTORS.map((sector) => (
              <div key={sector.id} className="bg-ornix-slate-50 p-6 rounded-2xl border border-ornix-slate-200">
                <h3 className="text-lg font-bold font-heading text-ornix-slate-900 mb-2">{sector.title}</h3>
                <p className="text-xs text-ornix-slate-600 mb-4">{sector.description}</p>
                <div className="space-y-1">
                  {sector.keyUseCases.map((uc, i) => (
                    <span key={i} className="inline-block text-[11px] bg-white text-ornix-slate-700 px-2.5 py-1 rounded-md border border-ornix-slate-200 mr-1 mb-1 font-mono">
                      {uc}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
