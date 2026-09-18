import { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { ECONOMIC_PILLARS } from "@/data/ornixVision";
import {
  ArrowRight,
  CheckCircle2,
  Sprout,
  Landmark,
  HeartPulse,
  Factory,
  Building2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Sectors | Ornix AI Solutions PLC",
  description:
    "Locally grounded artificial intelligence solutions designed around Ethiopia's key economic and institutional sectors.",
};

const SECTOR_ICONS = {
  agritech: Sprout,
  fintech: Landmark,
  healthcare: HeartPulse,
  manufacturing: Factory,
  "public-sector": Building2,
};

export default function SectorsPage() {
  return (
    <main className="pt-[76px] bg-white text-ornix-navy-900">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-white border-b border-ornix-navy-900/10">
        {/* Subtle structure */}
        <div className="absolute inset-0 grid-background opacity-[0.035]" />

        <div className="absolute -top-32 right-0 w-[500px] h-[500px] rounded-full bg-ornix-yellow/[0.07] blur-[140px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="min-h-[560px] md:min-h-[620px] flex items-center py-20 md:py-24">
            <div className="w-full">
              <div className="max-w-4xl text-left">

                {/* Label */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ornix-navy-900/[0.04] border border-ornix-navy-900/10 text-ornix-navy-900 text-xs font-semibold uppercase tracking-[0.18em] mb-7">
                  <span className="w-1.5 h-1.5 rounded-full bg-ornix-yellow" />
                  SECTORS
                </div>

                {/* Heading */}
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold tracking-tight leading-[0.98] text-ornix-navy-900 max-w-4xl">
                  AI Built Around
                  <span className="block">
                    Ethiopia&apos;s Growth Pillars.
                  </span>
                </h1>

                {/* Accent */}
                <div className="h-1 w-16 bg-ornix-yellow rounded-full mt-8 mb-7" />

                {/* Main statement */}
                <p className="text-lg sm:text-xl md:text-2xl text-ornix-slate-600 leading-relaxed max-w-3xl">
                  Locally grounded intelligence for complex sector
                  challenges—designed around the data, workflows, and
                  operational realities of Ethiopia.
                </p>

                {/* Supporting statement */}
                <p className="mt-6 text-sm sm:text-base text-ornix-slate-500 leading-relaxed max-w-2xl">
                  From agriculture and financial services to healthcare,
                  manufacturing, and public institutions, Ornix applies the
                  full spectrum of AI where local context matters most.
                </p>

                {/* Hero actions */}
                <div className="flex flex-wrap items-center gap-4 mt-9">
                  <Button
                    href="#economic-pillars"
                    variant="accent"
                    size="lg"
                    icon={<ArrowRight className="w-5 h-5" />}
                  >
                    Explore Our Sectors
                  </Button>

                  <Button
                    href="/contact"
variant="outline"
                    size="lg"
                    icon={<ArrowRight className="w-5 h-5" />}
                  >
                    Discuss Your Sector
                  </Button>
                </div>

                {/* Sector line */}
                <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-10 pt-7 border-t border-ornix-navy-900/10 max-w-4xl">
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-ornix-slate-500">
                    Agriculture
                  </span>

                  <span className="w-1 h-1 rounded-full bg-ornix-slate-300" />

                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-ornix-slate-500">
                    Financial Services
                  </span>

                  <span className="w-1 h-1 rounded-full bg-ornix-slate-300" />

                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-ornix-slate-500">
                    Healthcare
                  </span>

                  <span className="w-1 h-1 rounded-full bg-ornix-slate-300" />

                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-ornix-slate-500">
                    Manufacturing
                  </span>

                  <span className="w-1 h-1 rounded-full bg-ornix-slate-300" />

                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-ornix-slate-500">
                    Public Sector
                  </span>
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
              SECTOR-FOCUSED AI
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-ornix-navy-900 mt-4 leading-[1.1]">
              Intelligence Designed for Real Institutional Needs
            </h2>

            <p className="text-base md:text-lg text-ornix-slate-600 leading-relaxed mt-6">
              Different sectors face different data environments, workflows,
              regulations, and operational constraints. Ornix works alongside
              institutions to design AI systems around those realities rather
              than forcing organizations into generic technology models.
            </p>

          </div>
        </div>
      </section>


      {/* =========================================================
          ECONOMIC PILLARS — MAJOR NAVY SECTION
      ========================================================= */}
      <section
        id="economic-pillars"
        className="relative overflow-hidden bg-ornix-navy-900 text-white py-20 md:py-28"
      >
        {/* Very subtle structure */}
        <div className="absolute inset-0 grid-background opacity-[0.025]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section heading */}
          <div className="max-w-3xl mb-12 md:mb-14">

            <span className="text-xs font-mono uppercase tracking-[0.2em] text-ornix-yellow font-semibold">
              ETHIOPIA&apos;S ECONOMIC PILLARS
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mt-4 leading-[1.1]">
              AI Across Ethiopia&apos;s Growth Pillars
            </h2>

            <p className="mt-5 text-base md:text-lg text-ornix-slate-300 leading-relaxed max-w-3xl">
              Ornix applies the full spectrum of artificial intelligence
              across agriculture, finance, healthcare, industry, and public
              services—grounding each solution in local data, operational
              realities, and institutional needs.
            </p>

          </div>


          {/* Sector cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5 md:gap-6">

            {ECONOMIC_PILLARS.map((sector, idx) => {
              const Icon =
                SECTOR_ICONS[
                  sector.id as keyof typeof SECTOR_ICONS
                ];

              return (
                <article
                  key={sector.id}
                  id={sector.id}
                  className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-6 md:p-7 transition-all duration-300 hover:bg-white/[0.055] hover:border-white/20 ${
                    idx < 3
                      ? "lg:col-span-2"
                      : "lg:col-span-3"
                  }`}
                >
                  <div className="relative z-10">

                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-ornix-yellow/10 group-hover:border-ornix-yellow/30">
                      {Icon && (
                        <Icon className="w-6 h-6 text-ornix-yellow" />
                      )}
                    </div>

                    {/* Sector name */}
                    <h3 className="text-xl md:text-2xl font-heading font-bold text-white mb-2">
                      {sector.name}
                    </h3>

                    {/* Headline */}
                    <p className="text-sm font-semibold text-ornix-yellow mb-4">
                      {sector.headline}
                    </p>

                    {/* Description */}
                    <p className="text-sm md:text-base leading-relaxed text-ornix-slate-300">
                      {sector.commitment}
                    </p>

                    {/* Footer */}
                    <div className="pt-5 mt-6 border-t border-white/10 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-ornix-yellow shrink-0" />

                      <span className="text-xs font-mono uppercase tracking-wider text-ornix-slate-400">
                        Locally Grounded AI
                      </span>
                    </div>

                  </div>
                </article>
              );
            })}

          </div>
        </div>
      </section>


      {/* =========================================================
          CLOSING CTA
      ========================================================= */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-ornix-navy-900/[0.04] border border-ornix-navy-900/10 text-ornix-navy-900 text-xs font-semibold uppercase tracking-[0.18em]">
            CO-INNOVATION
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-ornix-navy-900 mt-6 leading-[1.1]">
            Your Sector. Your Data.
            <span className="block">
              Your Intelligence.
            </span>
          </h2>

          <p className="max-w-2xl mx-auto mt-6 text-base md:text-lg text-ornix-slate-600 leading-relaxed">
            Ornix works with institutions to translate sector-specific
            challenges into sovereign, locally grounded AI solutions.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">

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
  Explore AI Capabilities
</Button>
          </div>

        </div>
      </section>

    </main>
  );
}