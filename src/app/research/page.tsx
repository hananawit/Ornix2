import React from "react";
import { Metadata } from "next";
import { RESEARCH_AREAS, FEATURED_PUBLICATIONS } from "@/data/research";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ResearchFlowMap } from "@/components/ui/ResearchFlowMap";
import { Button } from "@/components/ui/Button";
import { ArrowRight, BookOpen, Sparkles, FileText, CheckCircle2, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "AI & Clinical Research Hub | ORNIX",
  description: "Explore ORNIX scientific research in clinical artificial intelligence, multi-modal machine learning, medical NLP, and algorithmic safety.",
};

export default function ResearchPage() {
  return (
    <div className="pt-28 pb-20 bg-ornix-navy-900 text-white min-h-screen">
      {/* Banner */}
      <section className="py-16 bg-ornix-navy-950 border-b border-white/10 grid-background text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ornix-yellow/20 border border-ornix-yellow/40 text-ornix-yellow text-xs font-semibold uppercase tracking-wider mb-4">
            TRANSLATIONAL SCIENCE & INNOVATION
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-white tracking-tight mb-4">
            Research That Moves Healthcare Forward
          </h1>
          <p className="text-base sm:text-lg text-ornix-slate-300 leading-relaxed max-w-2xl mx-auto">
            Our research initiative bridges fundamental computational biology and deep learning with prospective clinical validation and ethical governance.
          </p>
        </div>
      </section>

      {/* Interactive Research Roadmap */}
      <section id="pipeline" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="RESEARCH METHODOLOGY"
          title="From Novel Hypothesis to Clinical Application"
          subtitle="Our 6-phase research workflow ensures scientific rigor, reproducibility, and safety at every stage."
        />
        <ResearchFlowMap />
      </section>

      {/* Research Areas Grid */}
      <section id="focus-areas" className="py-20 bg-ornix-navy-950 border-t border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="EXPLORATION DOMAINS"
            title="Ten Pillars of Healthcare AI Research"
            subtitle="Core scientific domains investigated by our multi-disciplinary team of ML scientists, clinicians, and health data engineers."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {RESEARCH_AREAS.map((area) => (
              <div key={area.id} className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-ornix-yellow/40 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-ornix-navy-800 border border-white/10 flex items-center justify-center text-ornix-yellow mb-4 font-bold text-sm">
                  AI
                </div>
                <h3 className="text-xl font-bold font-heading text-white mb-2">{area.title}</h3>
                <p className="text-xs text-ornix-slate-300 leading-relaxed mb-4">{area.description}</p>
                <div className="space-y-1">
                  {area.keyProjects.map((proj, i) => (
                    <div key={i} className="flex items-center gap-2 text-[11px] text-ornix-yellow font-mono">
                      <span className="w-1 h-1 rounded-full bg-ornix-yellow" />
                      <span>{proj}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Publications */}
      <section id="publications" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="PEER-REVIEWED OUTPUTS"
          title="Featured Research Publications"
          subtitle="Selected papers and pre-prints advancing machine learning applications in clinical care."
        />

        <div className="space-y-6">
          {FEATURED_PUBLICATIONS.map((pub) => (
            <div key={pub.id} className="glass-panel p-8 rounded-3xl border border-white/10 hover:border-ornix-yellow/40 transition-all duration-300 flex flex-col md:flex-row items-start justify-between gap-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-mono font-semibold uppercase text-ornix-yellow bg-ornix-yellow/10 px-3 py-1 rounded-full border border-ornix-yellow/20">
                    {pub.category}
                  </span>
                  <span className="text-xs text-ornix-slate-400 font-mono">{pub.journal} • {pub.year}</span>
                </div>
                <h3 className="text-xl font-bold font-heading text-white mb-2">{pub.title}</h3>
                <p className="text-xs font-medium text-ornix-slate-400 mb-4">{pub.authors}</p>
                <p className="text-sm text-ornix-slate-300 leading-relaxed max-w-3xl">{pub.abstract}</p>
              </div>

              <div className="shrink-0">
                <Button href="/contact" variant="outline" size="sm" icon={<BookOpen className="w-4 h-4" />}>
                  Request Full Paper
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
