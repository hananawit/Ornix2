import { Hero } from "@/components/home/Hero";
import { TrustedIntro } from "@/components/home/TrustedIntro";
import { SolutionsSection } from "@/components/home/SolutionsSection";
import { PlatformSection } from "@/components/home/PlatformSection";
// import { HealthcareGrid } from "@/components/home/HealthcareGrid";
import { ResponsibleAI } from "@/components/home/ResponsibleAI";
import { WhyOrnix } from "@/components/home/WhyOrnix";
// import { ImpactMetrics } from "@/components/home/ImpactMetrics";
import { CaseStudiesSection } from "@/components/home/CaseStudiesSection";
import { TechnologySection } from "@/components/home/TechnologySection";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Sparkles } from "lucide-react";
import { CollaborationSection } from "@/components/home/CollaborationSection";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedIntro />
      <SolutionsSection />
      <PlatformSection />
      {/* <HealthcareGrid /> */}
      <ResponsibleAI />
      <WhyOrnix />
      {/* <ImpactMetrics /> */}
      <CaseStudiesSection />
      <TechnologySection />
      <CollaborationSection />

  {/* =========================================================
    GLOBAL BOTTOM CTA — HOMEPAGE
========================================================= */}
<section className="relative overflow-hidden bg-ornix-navy-900 text-white border-t border-white/10">
  {/* Subtle structure */}
  <div className="absolute inset-0 grid-background opacity-[0.025]" />

  {/* Restrained ambient accent */}
  <div className="absolute -top-40 right-[8%] w-[420px] h-[420px] rounded-full bg-ornix-yellow/[0.05] blur-[140px] pointer-events-none" />

  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="min-h-[420px] md:min-h-[480px] flex items-center justify-center py-20 md:py-24">

      <div className="w-full max-w-4xl mx-auto text-center">

        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-ornix-yellow text-xs font-semibold uppercase tracking-[0.18em] mb-7">
          <span className="w-1.5 h-1.5 rounded-full bg-ornix-yellow" />
          BUILD THE FUTURE WITH ORNIX
        </div>

        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight leading-[0.98] text-white">
          Let&apos;s build intelligent
          <span className="block">
            solutions together.
          </span>
        </h2>

        {/* Accent */}
        <div className="h-1 w-16 bg-ornix-yellow rounded-full mx-auto mt-8 mb-7" />

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl text-ornix-slate-300 leading-relaxed max-w-2xl mx-auto">
          Transforming your organization with artificial intelligence
          doesn&apos;t start with buying software — it starts with a
          conversation about your long-term goals.
        </p>

        {/* Actions */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-9">
          <Button
            href="/contact"
            variant="accent"
            size="lg"
            icon={<ArrowRight className="w-5 h-5" />}
          >
            Start a Conversation
          </Button>

<Button
  href="/solutions"
  variant="outline"
  size="lg"
>
  Explore Our Capabilities
</Button>
        </div>

      </div>
    </div>
  </div>
</section>
    </>
  );
}
