import { Metadata } from "next";
import {
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Layers,
  Languages,
  Eye,
  Bot,
  ShieldCheck,
  Cpu,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { AI_SOLUTIONS } from "@/data/solutions";

export const metadata: Metadata = {
  title: "AI Solutions | Ornix AI Solutions PLC",
  description:
    "Explore Ornix's full-spectrum artificial intelligence capabilities across machine learning, deep learning, language, vision, robotics, expert systems, and cognitive intelligence.",
};

const ICON_MAP: Record<string, LucideIcon> = {
  TrendingUp,
  Layers,
  Languages,
  Eye,
  Bot,
  ShieldCheck,
  Cpu,
};

export default function SolutionsPage() {
  return (
    <main className="pt-[76px] bg-white text-ornix-navy-900">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-white border-b border-ornix-navy-900/10">
        {/* Subtle structure */}
        <div className="absolute inset-0 grid-background opacity-[0.035]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="min-h-[560px] md:min-h-[620px] flex items-center py-20 md:py-24">
            <div className="w-full">
              <div className="max-w-5xl text-left">
                {/* Label */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ornix-navy-900/[0.04] border border-ornix-navy-900/10 text-ornix-navy-900 text-xs font-semibold uppercase tracking-[0.18em] mb-7">
                  <span className="w-1.5 h-1.5 rounded-full bg-ornix-yellow" />
                  ORNIX AI CAPABILITIES
                </div>

                {/* Heading */}
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold tracking-tight leading-[0.98] text-ornix-navy-900 max-w-4xl">
                  Mastering the
                  <span className="block">Full Spectrum of AI.</span>
                </h1>

                {/* Accent */}
                <div className="h-1 w-16 bg-ornix-yellow rounded-full mt-8 mb-7" />

                {/* Main statement */}
                <p className="text-lg sm:text-xl md:text-2xl text-ornix-slate-600 leading-relaxed max-w-3xl">
                  Seven branches of artificial intelligence. One locally
                  grounded approach to solving complex institutional
                  challenges.
                </p>

                {/* Supporting text */}
                <p className="mt-6 text-sm sm:text-base text-ornix-slate-500 leading-relaxed max-w-2xl">
                  Ornix combines machine learning, deep learning, language
                  intelligence, computer vision, autonomous systems, expert
                  systems, and cognitive intelligence into practical,
                  sovereign AI architectures.
                </p>

                {/* HERO ACTIONS */}
                <div className="flex flex-wrap items-center gap-4 mt-9">
                  <Button
                    href="#ai-branches"
                    variant="accent"
                    size="lg"
                    icon={<ArrowRight className="w-5 h-5" />}
                  >
                    Explore AI Capabilities
                  </Button>

                  <Button
                    href="/contact"
                    variant="outline"
                    size="lg"
                    icon={<ArrowRight className="w-5 h-5" />}
                  >
                    Discuss Your Challenge
                  </Button>
                </div>

                {/* Small capability line */}
                <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-10 pt-7 border-t border-ornix-navy-900/10 max-w-4xl">
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-ornix-slate-500">
                    Machine Learning
                  </span>

                  <span className="w-1 h-1 rounded-full bg-ornix-slate-300" />

                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-ornix-slate-500">
                    Deep Learning
                  </span>

                  <span className="w-1 h-1 rounded-full bg-ornix-slate-300" />

                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-ornix-slate-500">
                    Natural Language Processing
                  </span>

                  <span className="w-1 h-1 rounded-full bg-ornix-slate-300" />

                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-ornix-slate-500">
                    Computer Vision
                  </span>
                  <span className="w-1 h-1 rounded-full bg-ornix-slate-300" />

                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-ornix-slate-500">
                    Robotics
                  </span>
                  <span className="w-1 h-1 rounded-full bg-ornix-slate-300" />

                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-ornix-slate-500">
                    Expert System
                  </span>
                  <span className="w-1 h-1 rounded-full bg-ornix-slate-300" />

                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-ornix-slate-500">
                    Cognitive Systems                  </span>


                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRODUCTION
      ========================================================= */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-ornix-yellow font-semibold">
              FULL-SPECTRUM INTELLIGENCE
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-ornix-navy-900 mt-4 leading-[1.1]">
              From Data to Intelligence to Action
            </h2>

            <p className="text-base md:text-lg text-ornix-slate-600 leading-relaxed mt-6">
              Different institutional challenges require different forms of
              intelligence. Ornix combines multiple AI disciplines into
              complete architectures designed around organizational data,
              workflows, infrastructure, and long-term objectives.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          AI BRANCHES
      ========================================================= */}
      <section
        id="ai-branches"
        className="bg-ornix-slate-50 py-20 md:py-24 border-y border-ornix-navy-900/5"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-3xl mb-12 md:mb-14">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-ornix-yellow font-semibold">
              SEVEN BRANCHES OF AI
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-ornix-navy-900 mt-4 leading-[1.1]">
              Built to Solve Complex Challenges
            </h2>

            <p className="text-base md:text-lg text-ornix-slate-600 leading-relaxed mt-5 max-w-2xl">
              Each branch contributes a distinct form of intelligence, while
              Ornix integrates them into practical, sovereign, and locally
              grounded solutions.
            </p>
          </div>

          {/* Solutions */}
          <div className="space-y-6 md:space-y-8">
            {AI_SOLUTIONS.map((solution, index) => {
              const Icon = ICON_MAP[solution.iconName];

              return (
                <article
                  key={solution.id}
                  id={solution.id}
                  className="relative overflow-hidden rounded-3xl bg-white border border-ornix-navy-900/10 shadow-sm hover:shadow-lg hover:border-ornix-navy-900/20 transition-all duration-300"
                >
                  {/* Restrained accent */}
                  <div className="absolute top-0 left-0 w-1 h-full bg-ornix-navy-900" />

                  <div className="p-6 md:p-8 lg:p-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                      {/* Main Content */}
                      <div className="lg:col-span-8">
                        <div className="flex items-start gap-5 mb-6">
                          <div className="w-14 h-14 md:w-16 md:h-16 shrink-0 rounded-2xl bg-ornix-navy-900 flex items-center justify-center">
                            {Icon && (
                              <Icon className="w-7 h-7 text-white" />
                            )}
                          </div>

                          <div>
                            <span className="text-xs font-mono uppercase tracking-widest text-ornix-slate-500 font-semibold">
                              {String(index + 1).padStart(2, "0")} • AI BRANCH
                            </span>

                            <h3 className="text-2xl sm:text-3xl font-bold font-heading text-ornix-navy-900 mt-1">
                              {solution.title}
                            </h3>
                          </div>
                        </div>

                        <p className="text-base md:text-lg text-ornix-slate-600 leading-relaxed mb-8">
                          {solution.fullDesc}
                        </p>

                        <div className="pt-6 border-t border-ornix-navy-900/10">
                          <h4 className="text-xs font-mono uppercase tracking-wider text-ornix-slate-500 mb-4">
                            Core Capabilities
                          </h4>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {solution.capabilities.map((cap, idx) => (
                              <div
                                key={idx}
                                className="flex items-start gap-2.5 text-sm text-ornix-slate-600"
                              >
                                <CheckCircle2 className="w-4 h-4 text-ornix-navy-900 shrink-0 mt-0.5" />
                                <span>{cap}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Ornix Approach */}
                      <div className="lg:col-span-4">
                        <div className="h-full rounded-2xl bg-ornix-slate-50 border border-ornix-navy-900/10 p-6 md:p-7 flex flex-col justify-between">
                          <div>
                            <div className="flex items-center gap-2 mb-4">
                              <div className="w-2 h-2 rounded-full bg-ornix-yellow" />

                              <span className="text-xs font-mono uppercase tracking-wider text-ornix-navy-900 font-semibold">
                                ORNIX APPROACH
                              </span>
                            </div>

                            <p className="text-sm text-ornix-slate-600 leading-relaxed">
                              {solution.impactMetric}
                            </p>
                          </div>

                          <div className="pt-6 mt-8 border-t border-ornix-navy-900/10">
                            <Button
                              href="/contact"
                              variant="outline" size="sm"
                              icon={<ArrowRight className="w-4 h-4" />}
                            >
                              Discuss This Capability
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          INTEGRATED INTELLIGENCE — MAJOR NAVY SECTION
      ========================================================= */}
      <section className="relative overflow-hidden bg-ornix-navy-900 text-white py-20 md:py-28">
        <div className="absolute inset-0 grid-background opacity-[0.025]" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-ornix-yellow font-semibold">
              INTEGRATED INTELLIGENCE
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mt-4 leading-[1.1]">
              One Architecture.
              <span className="block text-white">
                Multiple Forms of Intelligence.
              </span>
            </h2>

            <p className="text-base md:text-lg text-ornix-slate-300 leading-relaxed mt-6 max-w-3xl">
              Ornix does not treat AI branches as isolated technologies. We
              combine the disciplines required to address each institution&apos;s
              specific operational challenge while keeping data,
              infrastructure, security, and knowledge transfer at the center.
            </p>
          </div>

          {/* Integration Principles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-7 hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300">
              <ShieldCheck className="w-7 h-7 text-ornix-yellow mb-5" />

              <h3 className="text-xl font-heading font-bold mb-3">
                Sovereign by Design
              </h3>

              <p className="text-sm text-ornix-slate-400 leading-relaxed">
                AI architectures designed around data control, security,
                governance, and the realities of local infrastructure.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-7 hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300">
              <Layers className="w-7 h-7 text-ornix-yellow mb-5" />

              <h3 className="text-xl font-heading font-bold mb-3">
                Integrated Intelligence
              </h3>

              <p className="text-sm text-ornix-slate-400 leading-relaxed">
                Multiple AI disciplines brought together into architectures
                that support real workflows and institutional objectives.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-7 hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300">
              <Cpu className="w-7 h-7 text-ornix-yellow mb-5" />

              <h3 className="text-xl font-heading font-bold mb-3">
                Built to Evolve
              </h3>

              <p className="text-sm text-ornix-slate-400 leading-relaxed">
                Solutions designed for continuous improvement, capability
                building, adaptation, and long-term institutional value.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-wrap items-center gap-4 mt-12">
            <Button
              href="/sectors"
              variant="outline" size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Explore Our Sectors
            </Button>

            <Button
              href="/contact"
              variant="accent"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Start a Conversation
            </Button>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="bg-white text-ornix-navy-900 py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-ornix-navy-900/[0.04] border border-ornix-navy-900/10 text-ornix-navy-900 text-xs font-semibold uppercase tracking-[0.18em] mb-6">
            BUILD WITH ORNIX
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-[1.1]">
            The Right AI Starts With the Right Problem.
          </h2>

          <p className="max-w-2xl mx-auto mt-6 text-base md:text-lg text-ornix-slate-600 leading-relaxed">
            Bring us your institutional challenge, operational requirement,
            or AI opportunity. Together, we can identify the intelligence,
            architecture, and capabilities needed to move it forward.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Button
              href="/contact"
              variant="accent"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Talk to ORNIX
            </Button>

            <Button
              href="/sectors"
              variant="outline"
              size="lg"
            >
              Explore Sectors
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
