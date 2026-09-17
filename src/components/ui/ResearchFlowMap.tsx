"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { RESEARCH_PIPELINE_STEPS } from "@/data/research";
import { ArrowRight, CheckCircle } from "lucide-react";

export const ResearchFlowMap: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const currentStepData = RESEARCH_PIPELINE_STEPS.find((s) => s.step === activeStep) || RESEARCH_PIPELINE_STEPS[0];

  return (
    <div className="w-full flex flex-col gap-8">
      {/* Horizontal Flow Steps Bar */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
        {RESEARCH_PIPELINE_STEPS.map((step) => {
          const isActive = step.step === activeStep;
          return (
            <button
              key={step.step}
              onClick={() => setActiveStep(step.step)}
              className={`p-4 rounded-2xl border text-left transition-all duration-300 relative cursor-pointer ${
                isActive
                  ? "bg-ornix-yellow text-ornix-navy-950 border-ornix-yellow font-bold shadow-lg shadow-ornix-yellow/20"
                  : "glass-panel text-white hover:border-white/30"
              }`}
            >
              <span className="text-xs font-mono opacity-80 block mb-1">0{step.step}</span>
              <span className="text-sm font-heading font-bold block">{step.label}</span>
              {isActive && (
                <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-ornix-navy-850 animate-ping" />
              )}
            </button>
          );
        })}
      </div>

      {/* Active Step Details Panel */}
      <motion.div
        key={activeStep}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="glass-panel rounded-3xl p-6 md:p-8 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6"
      >
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-ornix-yellow/20 border border-ornix-yellow/40 flex items-center justify-center font-bold text-ornix-yellow font-mono text-lg shrink-0">
            0{currentStepData.step}
          </div>
          <div>
            <h4 className="text-xl font-bold font-heading text-white mb-1">
              Phase {currentStepData.step}: {currentStepData.label}
            </h4>
            <p className="text-ornix-slate-300 text-sm md:text-base leading-relaxed max-w-2xl">
              {currentStepData.description}
            </p>
          </div>
        </div>

        <div className="shrink-0 flex items-center gap-2 text-xs font-mono text-ornix-yellow bg-ornix-yellow/10 px-4 py-2 rounded-full border border-ornix-yellow/20">
          <CheckCircle className="w-4 h-4" />
          <span>Peer-Reviewed Validation Standard</span>
        </div>
      </motion.div>
    </div>
  );
};
