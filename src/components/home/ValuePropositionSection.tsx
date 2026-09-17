"use client";

import React from "react";
import { Sparkles, Shield, Cpu, Flame, ArrowRight } from "lucide-react";
import { SlideUp, FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";

export const ValuePropositionSection: React.FC = () => {
  return (
    <section
      id="strategic-vision"
      className="py-24 bg-gradient-to-b from-ornix-navy-900 via-ornix-navy-850 to-ornix-navy-900 text-white relative overflow-hidden border-t border-b border-white/10"
    >
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-ornix-yellow/10 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <SlideUp delay={0.1}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ornix-yellow/20 border border-ornix-yellow/40 text-ornix-yellow text-xs font-semibold uppercase tracking-wider mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              CORE VALUE PROPOSITION
            </div>
          </SlideUp>

          <SlideUp delay={0.2}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight mb-8">
              Leading Africa’s AI Revolution Through{" "}
              <span className="text-ornix-yellow">Sovereign Co-Innovation</span>
            </h2>
          </SlideUp>

          {/* Grand Quote Callout */}
          <SlideUp delay={0.3}>
            <div className="p-8 sm:p-12 rounded-3xl glass-panel border border-ornix-yellow/30 relative shadow-2xl overflow-hidden mb-12">
              <div className="absolute top-0 right-0 w-64 h-64 bg-ornix-yellow/10 rounded-full blur-3xl pointer-events-none" />

              <p className="text-lg sm:text-2xl md:text-3xl text-white font-medium leading-relaxed drop-shadow">
                "Ornix AI seeks to lead Africa’s AI revolution by acting as Ethiopia’s long-term co-innovation partner—delivering sovereign, full-spectrum artificial intelligence tailored to local enterprise needs."
              </p>

              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-mono text-ornix-slate-300">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-ornix-yellow" />
                  <span>Sovereign Data Governance</span>
                </div>
                <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-ornix-yellow" />
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-ornix-yellow" />
                  <span>Full-Spectrum Intelligence</span>
                </div>
                <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-ornix-yellow" />
                <div className="flex items-center gap-2">
                  <Flame className="w-4 h-4 text-ornix-yellow" />
                  <span>Locally Grounded Solutions</span>
                </div>
              </div>
            </div>
          </SlideUp>

          {/* 3 Core Drivers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <SlideUp delay={0.4}>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-ornix-yellow/40 transition-all h-full flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono text-ornix-yellow uppercase tracking-widest block mb-2">
                    01 • SOVEREIGNTY
                  </span>
                  <h3 className="text-lg font-bold font-heading text-white mb-2">
                    Zero Foreign Data Dependency
                  </h3>
                  <p className="text-sm text-ornix-slate-300 leading-relaxed">
                    Models run in-country on Ethio Telecom Cloud or private air-gapped on-premise hardware, ensuring enterprise and state data remains sovereign.
                  </p>
                </div>
              </div>
            </SlideUp>

            <SlideUp delay={0.5}>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-ornix-yellow/40 transition-all h-full flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono text-ornix-yellow uppercase tracking-widest block mb-2">
                    02 • CO-INNOVATION
                  </span>
                  <h3 className="text-lg font-bold font-heading text-white mb-2">
                    Shared Engineering Journey
                  </h3>
                  <p className="text-sm text-ornix-slate-300 leading-relaxed">
                    We co-design neural architectures alongside your internal technical units, transferring code and deep capabilities instead of creating lock-in.
                  </p>
                </div>
              </div>
            </SlideUp>

            <SlideUp delay={0.6}>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-ornix-yellow/40 transition-all h-full flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono text-ornix-yellow uppercase tracking-widest block mb-2">
                    03 • LOCAL FLUENCY
                  </span>
                  <h3 className="text-lg font-bold font-heading text-white mb-2">
                    Built for Ethiopian Reality
                  </h3>
                  <p className="text-sm text-ornix-slate-300 leading-relaxed">
                    Native foundation models for Amharic, Afaan Oromo, Tigrinya, and Somali engineered to navigate local economic patterns and infrastructure constraints.
                  </p>
                </div>
              </div>
            </SlideUp>
          </div>
        </div>
      </div>
    </section>
  );
};
