import React from "react";
import { Metadata } from "next";
import { PRODUCT_PLATFORMS } from "@/data/products";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Brain, UserCheck, BarChart3, Eye, Zap, ArrowRight, CheckCircle2, Shield } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ORNIX Platform Suite | Products & Architecture",
  description: "Explore the ORNIX product suite: ORNIX Intelligence, ORNIX Assist, ORNIX Analytics, ORNIX Vision, and ORNIX Flow.",
};

const PRODUCT_ICONS: Record<string, React.ReactNode> = {
  Brain: <Brain className="w-8 h-8 text-ornix-yellow" />,
  UserCheck: <UserCheck className="w-8 h-8 text-ornix-yellow" />,
  BarChart3: <BarChart3 className="w-8 h-8 text-ornix-yellow" />,
  Eye: <Eye className="w-8 h-8 text-ornix-yellow" />,
  Zap: <Zap className="w-8 h-8 text-ornix-yellow" />,
};

export default function ProductsPage() {
  return (
    <div className="pt-28 pb-20 bg-ornix-navy-900 text-white min-h-screen">
      {/* Banner */}
      <section className="py-16 bg-ornix-navy-950 border-b border-white/10 grid-background text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ornix-yellow/20 border border-ornix-yellow/40 text-ornix-yellow text-xs font-semibold uppercase tracking-wider mb-4">
            MODULAR PLATFORM ARCHITECTURE
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-white tracking-tight mb-4">
            The ORNIX Intelligence Platform Suite
          </h1>
          <p className="text-base sm:text-lg text-ornix-slate-300 leading-relaxed max-w-2xl mx-auto">
            Configurable platform modules designed to integrate directly into existing hospital EHR systems, medical imaging PACS, and enterprise health networks.
          </p>
        </div>
      </section>

      {/* Product Cards */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {PRODUCT_PLATFORMS.map((product) => (
          <div
            key={product.id}
            id={product.id}
            className="glass-panel p-8 md:p-12 rounded-3xl border border-white/10 hover:border-ornix-yellow/40 transition-all duration-300 relative overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-8 flex flex-col items-start">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3.5 rounded-2xl bg-ornix-navy-800 border border-white/10">
                    {PRODUCT_ICONS[product.iconName]}
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-ornix-yellow px-2.5 py-0.5 rounded-full bg-ornix-yellow/10 border border-ornix-yellow/20">
                      {product.badge}
                    </span>
                    <h2 className="text-3xl font-bold font-heading text-white mt-1">{product.name}</h2>
                    <p className="text-sm font-semibold text-ornix-yellow">{product.tagline}</p>
                  </div>
                </div>

                <p className="text-ornix-slate-300 text-base leading-relaxed mb-8">
                  {product.description}
                </p>

                <div className="w-full">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-ornix-slate-400 mb-4">
                    Key Technological Features
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {product.keyFeatures.map((feat, idx) => (
                      <div key={idx} className="bg-ornix-navy-950 p-4 rounded-xl border border-white/5">
                        <h5 className="text-sm font-bold text-white mb-1 font-heading">{feat.title}</h5>
                        <p className="text-xs text-ornix-slate-400 leading-relaxed">{feat.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 bg-ornix-navy-950 p-6 rounded-2xl border border-white/10 flex flex-col justify-between h-full">
                <div>
                  <div className="mb-4">
                    <span className="text-xs font-mono text-ornix-slate-400 block mb-1">TARGET AUDIENCE</span>
                    <span className="text-sm font-semibold text-white">{product.targetAudience}</span>
                  </div>

                  <div className="mb-6 pb-6 border-b border-white/10">
                    <span className="text-xs font-mono text-ornix-slate-400 block mb-1">ARCHITECTURE LAYER</span>
                    <span className="text-sm font-mono text-ornix-yellow">{product.architectureLayer}</span>
                  </div>
                </div>

                <Button href="/contact" variant="accent" size="sm" icon={<ArrowRight className="w-4 h-4" />}>
                  Request Platform Demo
                </Button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
