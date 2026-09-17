"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Database, Cpu, BrainCircuit, Workflow, UserCheck, ArrowDown, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface ArchitectureLayer {
  id: string;
  step: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  description: string;
  inputs: string[];
  outputs: string[];
}

const LAYERS: ArchitectureLayer[] = [
  {
    id: "data",
    step: "01",
    title: "DATA LAYER",
    subtitle: "Ingestion & Normalization",
    icon: <Database className="w-6 h-6 text-ornix-yellow" />,
    description: "Multi-modal health data streams from legacy EHRs, FHIR endpoints, bedside vitals, DICOM radiology, and pathology labs ingested in real time.",
    inputs: ["HL7 v2/v3 Streams", "FHIR R4 Resources", "DICOM Imaging", "Lab Vitals Telemetry"],
    outputs: ["Unified FHIR Graph", "Anonymized Patient Vectors", "Normalized Signal Registry"],
  },
  {
    id: "ai-engine",
    step: "02",
    title: "AI ENGINE LAYER",
    subtitle: "Model Inference & Analysis",
    icon: <Cpu className="w-6 h-6 text-ornix-yellow" />,
    description: "Domain-tailored machine learning, temporal deep learning, and vision networks evaluate incoming streams for anomalies, signals, and patterns.",
    inputs: ["Normalized FHIR Graph", "Patient Signal Vectors"],
    outputs: ["Risk Confidence Scores", "Sub-millimeter Image Masks", "Entity Links"],
  },
  {
    id: "intelligence",
    step: "03",
    title: "INTELLIGENCE LAYER",
    subtitle: "Context & Reasoning",
    icon: <BrainCircuit className="w-6 h-6 text-ornix-yellow" />,
    description: "Translates raw inference vectors into clinical context, cross-referencing guideline medical ontologies, patient historical trends, and pharmacological contraindications.",
    inputs: ["Inference Confidence Scores", "Medical Guideline Knowledge"],
    outputs: ["Explainable Clinical Rationale", "Priority Alerts", "Synthesized Notes"],
  },
  {
    id: "workflow",
    step: "04",
    title: "WORKFLOW LAYER",
    subtitle: "Orchestration & Delivery",
    icon: <Workflow className="w-6 h-6 text-ornix-yellow" />,
    description: "Routes decision support metrics directly into hospital EHR interfaces, clinician mobile devices, prior authorization queues, and ICU alert boards.",
    inputs: ["Clinical Rationale & Alerts", "EHR System Trigger Hooks"],
    outputs: ["Native EHR Notes", "Real-time Telemetry Push", "Prior-Auth Packets"],
  },
  {
    id: "human-decision",
    step: "05",
    title: "HUMAN DECISION LAYER",
    subtitle: "Physician Oversight & Care",
    icon: <UserCheck className="w-6 h-6 text-ornix-yellow" />,
    description: "Empowers healthcare providers, radiologists, and care teams with actionable intelligence while keeping human clinicians fully in control of every medical decision.",
    inputs: ["Actionable Clinical Alerts", "Ambient Note Drafts"],
    outputs: ["Verified Physician Signature", "Validated Treatment Plan", "Optimized Patient Outcome"],
  },
];

export const PlatformArchitecture: React.FC = () => {
  const [activeLayerId, setActiveLayerId] = useState<string>("intelligence");

  const activeLayer = LAYERS.find((l) => l.id === activeLayerId) || LAYERS[2];

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Interactive Layer Flow Column */}
      <div className="lg:col-span-6 flex flex-col gap-4">
        {LAYERS.map((layer, index) => {
          const isActive = layer.id === activeLayerId;
          return (
            <React.Fragment key={layer.id}>
              <motion.div
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                onClick={() => setActiveLayerId(layer.id)}
                className={cn(
                  "cursor-pointer rounded-2xl p-5 transition-all duration-300 border flex items-center justify-between",
                  isActive
                    ? "bg-ornix-navy-800 border-ornix-yellow shadow-xl shadow-ornix-yellow/10"
                    : "bg-ornix-navy-850/60 border-white/10 hover:border-white/20 hover:bg-ornix-navy-800/50"
                )}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={cn(
                      "w-12 h-12 rounded-xl flex items-center justify-center border transition-colors",
                      isActive
                        ? "bg-ornix-yellow/20 border-ornix-yellow"
                        : "bg-ornix-navy-900 border-white/10"
                    )}
                  >
                    {layer.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-semibold text-ornix-yellow">{layer.step}</span>
                      <h4 className="text-base font-bold text-white font-heading">{layer.title}</h4>
                    </div>
                    <p className="text-xs text-ornix-slate-400 mt-0.5">{layer.subtitle}</p>
                  </div>
                </div>

                <div
                  className={cn(
                    "w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all",
                    isActive ? "bg-ornix-yellow text-ornix-navy-950" : "text-ornix-slate-500"
                  )}
                >
                  →
                </div>
              </motion.div>

              {/* Animated Connecting Line between layers */}
              {index < LAYERS.length - 1 && (
                <div className="flex justify-center py-0.5">
                  <ArrowDown className="w-4 h-4 text-ornix-yellow/40 animate-pulse" />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Active Layer Details Card */}
      <div className="lg:col-span-6 sticky top-28">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeLayer.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="rounded-3xl glass-panel p-6 md:p-8 border border-ornix-yellow/30 relative overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 right-0 px-4 py-2 bg-ornix-yellow/10 border-b border-l border-ornix-yellow/30 text-ornix-yellow text-xs font-mono rounded-bl-2xl">
              LAYER {activeLayer.step} OF 05
            </div>

            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-2xl bg-ornix-yellow/20 border border-ornix-yellow/40">
                {activeLayer.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white font-heading">{activeLayer.title}</h3>
                <p className="text-sm text-ornix-yellow font-medium">{activeLayer.subtitle}</p>
              </div>
            </div>

            <p className="text-ornix-slate-300 text-sm md:text-base leading-relaxed mb-6">
              {activeLayer.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-white/10">
              <div>
                <h5 className="text-xs font-mono uppercase tracking-wider text-ornix-slate-400 mb-3">Inputs</h5>
                <ul className="space-y-2">
                  {activeLayer.inputs.map((inp, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-ornix-slate-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-ornix-yellow" />
                      {inp}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h5 className="text-xs font-mono uppercase tracking-wider text-ornix-slate-400 mb-3">Outputs</h5>
                <ul className="space-y-2">
                  {activeLayer.outputs.map((out, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-white font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-ornix-yellow" />
                      {out}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
