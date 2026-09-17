"use client";

import React, { useState } from "react";
import { AI_BRANCHES } from "@/data/ornixVision";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SlideUp, StaggerChildren } from "@/components/ui/FadeIn";
import {
  TrendingUp,
  Layers,
  Languages,
  Eye,
  Bot,
  ShieldCheck,
  Cpu,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { cn } from "@/lib/utils";

const ICON_MAP: Record<string, React.ReactNode> = {
  TrendingUp: <TrendingUp className="w-5 h-5 text-ornix-yellow" />,
  Layers: <Layers className="w-5 h-5 text-ornix-yellow" />,
  Languages: <Languages className="w-5 h-5 text-ornix-yellow" />,
  Eye: <Eye className="w-5 h-5 text-ornix-yellow" />,
  Bot: <Bot className="w-5 h-5 text-ornix-yellow" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-ornix-yellow" />,
  Cpu: <Cpu className="w-5 h-5 text-ornix-yellow" />,
};

export const SevenBranchesSection: React.FC = () => {
  const [selectedBranchId, setSelectedBranchId] = useState<string>("ml");

  const selectedBranch =
    AI_BRANCHES.find((b) => b.id === selectedBranchId) || AI_BRANCHES[0];

  return (
    <section className="py-24 bg-ornix-navy-900 text-white relative overflow-hidden grid-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="FULL-SPECTRUM TECHNICAL MASTERY"
          title="Mastering All 7 Branches of Artificial Intelligence"
          subtitle="Delivering complete, end-to-end architectures tailored to institutional challenges across Ethiopia and Africa."
        />

        {/* Tab selector */}
        <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {AI_BRANCHES.map((b) => {
            const isActive = b.id === selectedBranchId;
            return (
              <button
                key={b.id}
                onClick={() => setSelectedBranchId(b.id)}
                className={cn(
                  "px-4 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 border cursor-pointer flex items-center gap-2",
                  isActive
                    ? "bg-ornix-yellow text-ornix-navy-950 border-ornix-yellow font-bold shadow-lg shadow-ornix-yellow/20"
                    : "glass-panel text-ornix-slate-300 border-white/10 hover:border-white/20 hover:text-white"
                )}
              >
                {b.branch.split(" (")[0]}
              </button>
            );
          })}
        </div>

        {/* Highlighted Branch Active Card */}
        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/15 mb-10 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-ornix-yellow/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-4 flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-ornix-navy-800 border border-ornix-yellow/40 flex items-center justify-center shrink-0">
                {ICON_MAP[selectedBranch.iconName]}
              </div>
              <div>
                <span className="text-xs font-mono text-ornix-yellow uppercase tracking-widest block mb-1">
                  CORE AI BRANCH
                </span>
                <h3 className="text-2xl font-bold font-heading text-white">
                  {selectedBranch.branch}
                </h3>
              </div>
            </div>

            <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-white/10 pt-4 lg:pt-0 lg:pl-8">
              <span className="text-xs font-mono text-ornix-slate-400 uppercase tracking-wider block mb-2">
                FOCUS AREA & CAPABILITIES
              </span>
              <p className="text-ornix-slate-200 text-sm leading-relaxed">
                {selectedBranch.focusArea}
              </p>
            </div>

            <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-white/10 pt-4 lg:pt-0 lg:pl-8">
              <span className="text-xs font-mono text-ornix-yellow uppercase tracking-wider block mb-2 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-ornix-yellow" />
                ORNIX CO-INNOVATION APPROACH
              </span>
              <p className="text-white text-sm font-medium leading-relaxed">
                {selectedBranch.coInnovationApproach}
              </p>
            </div>
          </div>
        </div>

        {/* 7 Branches Overview Grid */}
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {AI_BRANCHES.map((branch, idx) => {
            const isCurrent = branch.id === selectedBranchId;
            return (
              <SlideUp key={branch.id}>
                <div
                  onClick={() => setSelectedBranchId(branch.id)}
                  className={cn(
                    "p-6 rounded-2xl border transition-all duration-300 cursor-pointer h-full flex flex-col justify-between group",
                    isCurrent
                      ? "bg-white/10 border-ornix-yellow shadow-xl scale-[1.02]"
                      : "glass-panel border-white/10 hover:border-white/25 hover:bg-white/5"
                  )}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-ornix-navy-800 border border-white/10 flex items-center justify-center">
                        {ICON_MAP[branch.iconName]}
                      </div>
                      <span className="text-xs font-mono text-ornix-slate-400">0{idx + 1}</span>
                    </div>
                    <h4 className="text-base font-bold font-heading text-white mb-2 group-hover:text-ornix-yellow transition-colors">
                      {branch.branch}
                    </h4>
                    <p className="text-xs text-ornix-slate-300 leading-relaxed line-clamp-3 mb-4">
                      {branch.focusArea}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/10 text-[11px] font-mono text-ornix-yellow flex items-center justify-between">
                    <span>Co-Innovation Ready</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </SlideUp>
            );
          })}
        </StaggerChildren>
      </div>
    </section>
  );
};
