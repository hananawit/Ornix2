"use client";

import React from "react";
import Link from "next/link";
import {
  Building2,
  Activity,
  Microscope,
  Pill,
  Globe2,
  ShieldCheck,
  FlaskConical,
  Landmark,
  ArrowRight,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HEALTHCARE_SECTORS } from "@/data/solutions";
import { StaggerChildren, SlideUp } from "@/components/ui/FadeIn";

const SECTOR_ICONS: Record<string, React.ReactNode> = {
  Building2: <Building2 className="w-5 h-5 text-ornix-navy-900" />,
  Activity: <Activity className="w-5 h-5 text-ornix-navy-900" />,
  Microscope: <Microscope className="w-5 h-5 text-ornix-navy-900" />,
  Pill: <Pill className="w-5 h-5 text-ornix-navy-900" />,
  Globe2: <Globe2 className="w-5 h-5 text-ornix-navy-900" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-ornix-navy-900" />,
  FlaskConical: <FlaskConical className="w-5 h-5 text-ornix-navy-900" />,
  Landmark: <Landmark className="w-5 h-5 text-ornix-navy-900" />,
};

export const HealthcareGrid: React.FC = () => {
  return (
    <section className="py-24 bg-ornix-slate-50 text-ornix-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          theme="light"
          badge="HEALTHCARE DOMAIN ADAPTATION"
          title="Technology Designed Around Healthcare"
          subtitle="Every sector of healthcare operates under unique regulatory frameworks and workflows. ORNIX tailors AI capabilities for specialized institutional environments."
        />

        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {HEALTHCARE_SECTORS.map((sector) => (
            <SlideUp key={sector.id}>
              <Link href={`/solutions#${sector.id}`}>
                <div className="bg-white rounded-2xl p-6 border border-ornix-slate-200 hover:border-ornix-navy-800/30 hover:shadow-xl hover:shadow-ornix-slate-200/60 transition-all duration-300 h-full flex flex-col justify-between group">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-ornix-yellow flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      {SECTOR_ICONS[sector.iconName] || <Building2 className="w-5 h-5 text-ornix-navy-900" />}
                    </div>

                    <h3 className="text-lg font-bold font-heading text-ornix-slate-900 mb-2 group-hover:text-ornix-navy-800 transition-colors">
                      {sector.title}
                    </h3>

                    <p className="text-ornix-slate-600 text-xs leading-relaxed mb-4">
                      {sector.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-ornix-slate-100 flex items-center justify-between text-xs font-semibold text-ornix-navy-900 group-hover:text-ornix-yellow-hover">
                    <span>View Applications</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </SlideUp>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
};
