"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Stethoscope,
  Database,
  Bot,
  TrendingUp,
  Eye,
  BrainCircuit,
  Workflow,
  ArrowRight,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedCard } from "@/components/ui/AnimatedCard";
import { AI_SOLUTIONS } from "@/data/solutions";
import { StaggerChildren, SlideUp } from "@/components/ui/FadeIn";

const ICON_MAP: Record<string, React.ReactNode> = {
  Stethoscope: <Stethoscope className="w-6 h-6 text-ornix-yellow" />,
  Database: <Database className="w-6 h-6 text-ornix-yellow" />,
  Bot: <Bot className="w-6 h-6 text-ornix-yellow" />,
  TrendingUp: <TrendingUp className="w-6 h-6 text-ornix-yellow" />,
  Eye: <Eye className="w-6 h-6 text-ornix-yellow" />,
  BrainCircuit: <BrainCircuit className="w-6 h-6 text-ornix-yellow" />,
  Workflow: <Workflow className="w-6 h-6 text-ornix-yellow" />,
};

export const SolutionsSection: React.FC = () => {
  return (
    <section id="solutions" className="py-24 bg-ornix-navy-900 text-white relative overflow-hidden grid-background">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-ornix-navy-700/40 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Specialized AI Solutions"
          title="AI Built for Real Healthcare"
          highlightText="Healthcare"
          subtitle="Designed specifically for complex medical environments, our AI solutions convert raw telemetry, patient records, and diagnostics into actionable clinical clarity."
        />

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {AI_SOLUTIONS.map((solution) => (
            <SlideUp key={solution.id}>
              <Link href={`/solutions#${solution.id}`}>
                <AnimatedCard className="h-full flex flex-col justify-between group">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-ornix-navy-800 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-ornix-yellow/40 transition-all duration-300">
                        {ICON_MAP[solution.iconName] || <BrainCircuit className="w-6 h-6 text-ornix-yellow" />}
                      </div>
                      <span className="text-xs font-mono uppercase tracking-wider text-ornix-slate-400 bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
                        {solution.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold font-heading text-white mb-3 group-hover:text-ornix-yellow transition-colors">
                      {solution.title}
                    </h3>

                    <p className="text-ornix-slate-300 text-sm leading-relaxed mb-6">
                      {solution.shortDesc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-ornix-yellow group-hover:translate-x-1 transition-transform">
                    <span>Explore Capabilities</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </AnimatedCard>
              </Link>
            </SlideUp>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
};
