"use client";

import React from "react";
import { ECONOMIC_PILLARS } from "@/data/ornixVision";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SlideUp, StaggerChildren } from "@/components/ui/FadeIn";
import { Sprout, Landmark, HeartPulse, Factory, Building2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const ICON_MAP: Record<string, React.ReactNode> = {
  Sprout: <Sprout className="w-6 h-6 text-ornix-yellow" />,
  Landmark: <Landmark className="w-6 h-6 text-ornix-yellow" />,
  HeartPulse: <HeartPulse className="w-6 h-6 text-ornix-yellow" />,
  Factory: <Factory className="w-6 h-6 text-ornix-yellow" />,
  Building2: <Building2 className="w-6 h-6 text-ornix-yellow" />,
};

export const EconomicPillarsSection: React.FC = () => {
  return (
    <section className="py-24 bg-white text-ornix-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          theme="light"
          badge="STRATEGIC FOCUS"
          title="Commitment to Ethiopia's Key Economic Pillars"
          subtitle="We co-engineer AI architectures tailored to national priorities, creating durable economic multiplier effects across foundational sectors."
        />

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {ECONOMIC_PILLARS.map((pillar, idx) => (
            <SlideUp key={pillar.id}>
              <div className="bg-ornix-slate-50 p-7 rounded-3xl border border-ornix-slate-200 hover:border-ornix-navy-800/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full group">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-ornix-navy-900 border border-ornix-navy-800 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    {ICON_MAP[pillar.iconName]}
                  </div>
                  <span className="text-xs font-mono text-ornix-slate-500 uppercase tracking-widest block mb-1">
                    Sector 0{idx + 1}
                  </span>
                  <h3 className="text-xl font-bold font-heading text-ornix-slate-900 mb-1 group-hover:text-ornix-navy-900 transition-colors">
                    {pillar.name}
                  </h3>
                  <p className="text-xs font-semibold text-ornix-navy-700 mb-3">
                    {pillar.headline}
                  </p>
                  <p className="text-ornix-slate-600 text-sm leading-relaxed">
                    {pillar.commitment}
                  </p>
                </div>

                <div className="pt-5 mt-6 border-t border-ornix-slate-200 flex items-center justify-between">
                  <span className="text-xs font-semibold text-ornix-slate-500 group-hover:text-ornix-navy-900 transition-colors">
                    Sovereign Co-Innovation
                  </span>
                  <Link
                    href="/partnerships"
                    className="text-ornix-navy-900 hover:text-ornix-yellow transition-colors inline-flex items-center gap-1 text-xs font-bold"
                  >
                    Partner
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </SlideUp>
          ))}

          {/* Callout Card */}
          <SlideUp>
            <div className="bg-gradient-to-br from-ornix-navy-900 via-ornix-navy-850 to-ornix-navy-950 p-8 rounded-3xl border border-white/10 text-white flex flex-col justify-between h-full shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-36 h-36 bg-ornix-yellow/10 rounded-full blur-2xl pointer-events-none" />
              <div>
                <span className="text-xs font-mono text-ornix-yellow uppercase tracking-widest block mb-2 font-semibold">
                  STRATEGIC CO-INNOVATION
                </span>
                <h3 className="text-2xl font-bold font-heading text-white mb-3">
                  Have an Institutional Sector Challenge?
                </h3>
                <p className="text-ornix-slate-300 text-sm leading-relaxed mb-6">
                  Transforming your organization with artificial intelligence does not start with buying software—it starts with a conversation about your long-term goals.
                </p>
              </div>

              <Button href="/contact" variant="accent" size="md" icon={<ArrowRight className="w-4 h-4" />}>
                Initiate Strategic Dialogue
              </Button>
            </div>
          </SlideUp>
        </StaggerChildren>
      </div>
    </section>
  );
};
