import React from "react";
import { Hero } from "@/components/home/Hero";
import { TrustedIntro } from "@/components/home/TrustedIntro";
import { SolutionsSection } from "@/components/home/SolutionsSection";
import { PlatformSection } from "@/components/home/PlatformSection";
import { HealthcareGrid } from "@/components/home/HealthcareGrid";
import { ResearchSection } from "@/components/home/ResearchSection";
import { ResponsibleAI } from "@/components/home/ResponsibleAI";
import { WhyOrnix } from "@/components/home/WhyOrnix";
import { ImpactMetrics } from "@/components/home/ImpactMetrics";
import { CaseStudiesSection } from "@/components/home/CaseStudiesSection";
import { TechnologySection } from "@/components/home/TechnologySection";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedIntro />
      <SolutionsSection />
      <PlatformSection />
      <HealthcareGrid />
      <ResearchSection />
      <ResponsibleAI />
      <WhyOrnix />
      <ImpactMetrics />
      <CaseStudiesSection />
      <TechnologySection />

      {/* Global Bottom CTA Section */}
      <section className="py-24 bg-gradient-to-b from-ornix-navy-900 to-ornix-navy-950 text-white relative overflow-hidden border-t border-white/10 text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-ornix-yellow/10 rounded-full blur-[180px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ornix-yellow/20 border border-ornix-yellow/40 text-ornix-yellow text-xs font-semibold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            BUILD THE FUTURE OF HEALTHCARE
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight mb-6 leading-tight">
            Let's Build the Future of <br className="hidden sm:block" />
            Healthcare Together.
          </h2>

          <p className="text-base sm:text-lg text-ornix-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Partner with ORNIX to deploy clinical-grade artificial intelligence, harmonize health data streams, and build intelligent digital health systems.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact" variant="accent" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
              Get Started with ORNIX
            </Button>
            <Button href="/solutions" variant="glass" size="lg">
              Explore Solutions Suite
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
