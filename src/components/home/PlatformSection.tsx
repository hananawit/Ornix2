"use client";

import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PlatformArchitecture } from "@/components/ui/PlatformArchitecture";
import { SlideUp } from "@/components/ui/FadeIn";

export const PlatformSection: React.FC = () => {
  return (
    <section className="py-24 bg-ornix-navy-850 text-white relative overflow-hidden border-t border-b border-white/10">
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-ornix-yellow/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="ARCHITECTURE OVERVIEW"
          title="One Intelligence Layer for Modern Healthcare"
          highlightText="Intelligence Layer"
          subtitle="From raw unstructured patient streams to verified physician decisions, ORNIX connects every stage of healthcare operations into a seamless intelligent loop."
        />

        <SlideUp delay={0.2}>
          <PlatformArchitecture />
        </SlideUp>
      </div>
    </section>
  );
};
