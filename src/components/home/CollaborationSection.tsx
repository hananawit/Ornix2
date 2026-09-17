"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { PARTNERS } from "@/data/partners";

export const CollaborationSection: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-ornix-navy-900/40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-ornix-yellow">
            COLLABORATIONS & STRATEGIC ECOSYSTEM
          </span>

          <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mt-4 mb-5">
            Building Intelligence Through Collaboration
          </h2>

          <p className="text-ornix-slate-300 leading-relaxed">
            Ornix works across government, technology, healthcare, research,
            and international ecosystems to create locally grounded solutions
            with lasting institutional value.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {PARTNERS.map((partner) => (
            <div
              key={partner.id}
              className="group glass-panel min-h-[150px] rounded-2xl border border-white/10 hover:border-ornix-yellow/30 transition-all duration-300 p-5 flex flex-col items-center justify-center text-center"
            >
              {partner.placeholder ? (
                <>
                  <div className="w-12 h-12 rounded-full border border-dashed border-ornix-yellow/40 flex items-center justify-center mb-4">
                    <ArrowUpRight className="w-5 h-5 text-ornix-yellow/70" />
                  </div>

                  <h3 className="text-sm font-semibold text-white">
                    {partner.name}
                  </h3>

                  <p className="text-[10px] uppercase tracking-wider text-ornix-slate-500 mt-2">
                    {partner.type}
                  </p>
                </>
              ) : (
                <>
                  <div className="relative w-full h-16 mb-4">
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      fill
                      sizes="180px"
                      className="object-contain"
                    />
                  </div>

                  <h3 className="text-xs font-semibold text-white">
                    {partner.name}
                  </h3>

                  <p className="text-[10px] uppercase tracking-wider text-ornix-slate-500 mt-2">
                    {partner.type}
                  </p>
                </>
              )}
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-ornix-slate-500 mt-8">
          A growing ecosystem of local and international collaboration.
        </p>
      </div>
    </section>
  );
};