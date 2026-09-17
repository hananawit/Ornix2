"use client";

import React, { useState } from "react";
import { TECH_CATEGORIES } from "@/data/technology";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerChildren, SlideUp } from "@/components/ui/FadeIn";
import { Brain, Layers, Sparkles, FileCode, Scan, Workflow, BarChart, Network, Search, Code, Cloud, Boxes, Lock, Heart, Building, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

const TECH_ICON_MAP: Record<string, React.ReactNode> = {
  Brain: <Brain className="w-5 h-5 text-ornix-yellow" />,
  Layers: <Layers className="w-5 h-5 text-ornix-yellow" />,
  Sparkles: <Sparkles className="w-5 h-5 text-ornix-yellow" />,
  FileCode: <FileCode className="w-5 h-5 text-ornix-yellow" />,
  Scan: <Scan className="w-5 h-5 text-ornix-yellow" />,
  Workflow: <Workflow className="w-5 h-5 text-ornix-yellow" />,
  BarChart: <BarChart className="w-5 h-5 text-ornix-yellow" />,
  Network: <Network className="w-5 h-5 text-ornix-yellow" />,
  Search: <Search className="w-5 h-5 text-ornix-yellow" />,
  Code: <Code className="w-5 h-5 text-ornix-yellow" />,
  Cloud: <Cloud className="w-5 h-5 text-ornix-yellow" />,
  Boxes: <Boxes className="w-5 h-5 text-ornix-yellow" />,
  Lock: <Lock className="w-5 h-5 text-ornix-yellow" />,
  Heart: <Heart className="w-5 h-5 text-ornix-yellow" />,
  Building: <Building className="w-5 h-5 text-ornix-yellow" />,
  Globe: <Globe className="w-5 h-5 text-ornix-yellow" />,
};

export const TechnologySection: React.FC = () => {
  const [activeCategoryId, setActiveCategoryId] = useState<string>("ai-ml");

  const activeCategory = TECH_CATEGORIES.find((c) => c.id === activeCategoryId) || TECH_CATEGORIES[0];

  return (
    <section className="py-24 bg-ornix-navy-900 text-white relative overflow-hidden grid-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="TECH STACK & INFRASTRUCTURE"
          title="The Technology Behind ORNIX"
          highlightText="Technology Behind ORNIX"
          subtitle="Explore the underlying machine learning models, data engineering pipelines, and cloud security frameworks driving the platform."
        />

        {/* Category Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {TECH_CATEGORIES.map((cat) => {
            const isActive = cat.id === activeCategoryId;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategoryId(cat.id)}
                className={cn(
                  "px-6 py-3 rounded-full text-xs md:text-sm font-semibold transition-all duration-200 border cursor-pointer",
                  isActive
                    ? "bg-ornix-yellow text-ornix-navy-950 border-ornix-yellow font-bold shadow-lg shadow-ornix-yellow/20"
                    : "glass-panel text-ornix-slate-300 border-white/10 hover:border-white/20"
                )}
              >
                {cat.categoryName}
              </button>
            );
          })}
        </div>

        {/* Selected Category Grid */}
        <StaggerChildren key={activeCategory.id} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeCategory.items.map((item, idx) => (
            <SlideUp key={idx}>
              <div className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-ornix-yellow/40 transition-all duration-300 group">
                <div className="w-10 h-10 rounded-xl bg-ornix-navy-800 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {TECH_ICON_MAP[item.iconName] || <Brain className="w-5 h-5 text-ornix-yellow" />}
                </div>
                <h4 className="text-lg font-bold font-heading text-white mb-2 group-hover:text-ornix-yellow transition-colors">
                  {item.name}
                </h4>
                <p className="text-ornix-slate-300 text-xs leading-relaxed">
                  {item.description}
                </p>
              </div>
            </SlideUp>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
};
