"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ResearchFlowMap } from "@/components/ui/ResearchFlowMap";
import { Button } from "@/components/ui/Button";
import { SlideUp, FadeIn } from "@/components/ui/FadeIn";

export const ResearchSection: React.FC = () => {
  return (
    <section className="py-24 bg-ornix-navy-900 text-white relative overflow-hidden grid-background">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-ornix-navy-700/20 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="TRANSLATIONAL AI RESEARCH"
          title="Research That Moves Healthcare Forward"
          highlightText="Moves Healthcare Forward"
          subtitle="At ORNIX, scientific research is directly coupled with clinical utility. We bridge theoretical machine learning with validated healthcare applications."
        />

        <SlideUp delay={0.2}>
          <div className="mb-12">
            <h3 className="text-xs font-mono uppercase tracking-widest text-ornix-yellow mb-4 text-center">
              INTERACTIVE RESEARCH TO APPLICATION ROADMAP
            </h3>
            <ResearchFlowMap />
          </div>
        </SlideUp>

        <FadeIn delay={0.4}>
          <div className="flex justify-center mt-10">
            <Button href="/research" variant="accent" icon={<ArrowRight className="w-4 h-4" />}>
              Explore Full Research Hub
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
