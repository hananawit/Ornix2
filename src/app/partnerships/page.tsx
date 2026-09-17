import React from "react";
import { Metadata } from "next";
import { PageBanner } from "@/components/ui/PageBanner";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ShieldCheck, Users, RefreshCw, Award, ArrowRight, Sparkles, CheckCircle2, MapPin, Mail } from "lucide-react";
import Link from "next/link";
import { PARTNERSHIP_PILLARS, STRATEGIC_ALLIANCE_ENTITIES } from "@/data/ornixVision";
import { BRAND_COMPANY, CONTACT_EMAIL, HEADQUARTERS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Partnerships & Strategic Alignment | Ornix AI",
  description: "Unlocking institutional potential across Ethiopia through trusted, long-term strategic collaboration.",
};

const PILLAR_ICONS = [
  <ShieldCheck key="s" className="w-7 h-7 text-ornix-yellow" />,
  <Users key="u" className="w-7 h-7 text-ornix-yellow" />,
  <RefreshCw key="r" className="w-7 h-7 text-ornix-yellow" />,
];

const WORKFLOW_STEPS = [
  { step: "01", title: "Institutional Assessment & Scope", description: "Joint diagnostic of operational bottlenecks, data infrastructure, security prerequisites, and strategic economic objectives." },
  { step: "02", title: "Co-Engineering Architecture", description: "Embedded Ornix engineers work shoulder-to-shoulder with your domain experts to design custom neural models and pipelines." },
  { step: "03", title: "Sovereign In-Country Deployment", description: "100% local hosting on domestic cloud infrastructure (e.g. Ethio Telecom cloud) or air-gapped on-premise hardware." },
  { step: "04", title: "Continuous Co-Evolution & Upskilling", description: "Structured capability transfer, internal staff training, and continuous model retraining as regional datasets and market dynamics evolve." },
];

export default function PartnershipsPage() {
  return (
    <div
      className="pb-20 text-white min-h-screen"
      style={{ background: "linear-gradient(180deg, #0a1226 0%, #111D3D 30%, #0e1830 100%)" }}
    >
      <div className="pt-28">
        <PageBanner
          badge="Partnerships & Strategic Alignment"
          title="Strategic Co-Innovation Across Ethiopia"
          tagline='"Unlocking institutional potential across Ethiopia through trusted, long-term strategic collaboration."'
          subtitle="Rather than relying on foreign proprietary platforms, Ethiopian organizations can build and own sovereign intelligence assets tailored to national economic growth."
        />
      </div>

      {/* CTA row */}
      <div className="flex flex-wrap items-center justify-center gap-4 py-8 border-b border-white/10">
        <Button href="#alliance-bar" variant="accent" size="md" icon={<ArrowRight className="w-4 h-4" />}>Explore Alliance Ecosystem</Button>
        <Button href="/contact" variant="glass" size="md">Initiate Partnership Dialogue</Button>
      </div>

      {/* ── Partnership Guiding Pillars ─────────────────────────────── */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading badge="OUR CORE COMMITMENTS" title="Partnership Guiding Pillars" subtitle="Three non-negotiable principles that govern every co-innovation partnership we forge in Ethiopia." />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {PARTNERSHIP_PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="p-8 md:p-10 rounded-3xl border flex flex-col justify-between group relative overflow-hidden transition-all duration-300"
              style={{
                background: "rgba(22,32,64,0.70)",
                borderColor: idx === 1 ? "rgba(99,102,241,0.25)" : "rgba(255,255,255,0.09)",
                backdropFilter: "blur(20px)",
              }}
            >
              <div
                className="absolute top-0 right-0 w-36 h-36 rounded-full pointer-events-none"
                style={{ background: idx === 1 ? "radial-gradient(circle, rgba(99,102,241,0.10) 0%, transparent 70%)" : "radial-gradient(circle, rgba(245,183,0,0.07) 0%, transparent 70%)" }}
              />
              <div>
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border group-hover:scale-110 transition-transform"
                  style={{
                    background: idx === 1 ? "rgba(99,102,241,0.12)" : "rgba(245,183,0,0.12)",
                    borderColor: idx === 1 ? "rgba(99,102,241,0.30)" : "rgba(245,183,0,0.30)",
                  }}
                >
                  {PILLAR_ICONS[idx]}
                </div>
                <span
                  className="text-[11px] font-mono uppercase tracking-widest block mb-2 font-bold"
                  style={{ color: idx === 1 ? "#818CF8" : "#F5B700" }}
                >
                  {pillar.badge}
                </span>
                <h3 className="text-2xl font-bold font-heading text-white mb-4">{pillar.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>{pillar.description}</p>
              </div>
              <div className="pt-6 mt-8 border-t border-white/10 flex items-center justify-between text-xs font-mono" style={{ color: "rgba(255,255,255,0.35)" }}>
                <span>Guiding Pillar 0{idx + 1}</span>
                <CheckCircle2 className="w-4 h-4 text-ornix-yellow" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Strategic Alliance Bar ──────────────────────────────────── */}
      <section id="alliance-bar" className="py-16 border-t border-b border-white/10" style={{ background: "rgba(11,17,38,0.6)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="NATIONAL ECOSYSTEM" title="Strategic Alliance Bar" subtitle="Engaging key national institutes, regulatory bodies, financial institutions, and sovereign cloud infrastructure providers." />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {STRATEGIC_ALLIANCE_ENTITIES.map((entity, idx) => (
              <div
                key={idx}
                className="p-7 rounded-3xl border flex flex-col justify-between group transition-all duration-300 hover:border-yellow-400/40"
                style={{ background: "rgba(22,32,64,0.65)", borderColor: "rgba(255,255,255,0.09)", backdropFilter: "blur(20px)" }}
              >
                <div>
                  <div
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono uppercase mb-4 border"
                    style={{ background: "rgba(99,102,241,0.08)", borderColor: "rgba(99,102,241,0.20)", color: "#818CF8" }}
                  >
                    <Award className="w-3 h-3" />{entity.badge}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold font-heading text-white mb-2 group-hover:text-ornix-yellow transition-colors">{entity.name}</h3>
                  <p className="text-xs font-mono mb-3" style={{ color: "rgba(255,255,255,0.40)" }}>{entity.category}</p>
                  <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.60)" }}>{entity.description}</p>
                </div>
                <div className="pt-5 mt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-ornix-yellow">
                  <span>Alliance In Focus</span>
                  <CheckCircle2 className="w-4 h-4" />
                </div>
              </div>
            ))}

            {/* Join Alliance CTA */}
            <div
              className="p-7 rounded-3xl flex flex-col justify-between shadow-2xl relative overflow-hidden border"
              style={{ background: "linear-gradient(135deg, rgba(245,183,0,0.12) 0%, rgba(17,29,61,0.92) 100%)", borderColor: "rgba(245,183,0,0.35)" }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(245,183,0,0.12) 0%, transparent 70%)" }} />
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest font-bold block mb-2 text-ornix-yellow">JOIN THE ALLIANCE</span>
                <h3 className="text-xl font-bold font-heading text-white mb-2">Institutional & Industry Partners</h3>
                <p className="text-xs sm:text-sm leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.65)" }}>We actively collaborate with Ethiopian banks, agricultural unions, healthcare networks, and industrial park operators to build customized sovereign models.</p>
              </div>
              <div className="pt-4 border-t border-white/15">
                <Button href="/contact" variant="accent" size="sm" icon={<ArrowRight className="w-4 h-4" />}>Discuss an Alliance</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Co-Innovation Engagement Framework ─────────────────────── */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading badge="ENGAGEMENT METHODOLOGY" title="The Co-Innovation Journey" subtitle="How we structure our multi-year institutional collaborations from discovery to total digital sovereignty." />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {WORKFLOW_STEPS.map((step, idx) => (
            <div
              key={step.step}
              className="p-7 rounded-3xl border flex flex-col justify-between group transition-all duration-300"
              style={{
                background: idx % 2 === 0 ? "rgba(22,32,64,0.65)" : "rgba(14,20,48,0.70)",
                borderColor: "rgba(255,255,255,0.09)",
                backdropFilter: "blur(20px)",
              }}
            >
              <div>
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center font-mono font-extrabold text-ornix-yellow text-lg mb-6 border group-hover:scale-110 transition-transform"
                  style={{ background: "rgba(245,183,0,0.10)", borderColor: "rgba(245,183,0,0.30)" }}
                >
                  {step.step}
                </div>
                <h3 className="text-lg font-bold font-heading text-white mb-3 group-hover:text-ornix-yellow transition-colors">{step.title}</h3>
                <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.60)" }}>{step.description}</p>
              </div>
              <div className="pt-6 mt-6 border-t border-white/10 text-[11px] font-mono" style={{ color: "rgba(255,255,255,0.35)" }}>
                Phase {step.step} Deployment
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Contact & Inquiries ────────────────────────────────────── */}
      <section className="py-16 border-t border-white/10 text-center" style={{ background: "rgba(11,17,38,0.6)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-bold uppercase tracking-widest mb-6" style={{ background: "rgba(245,183,0,0.08)", borderColor: "rgba(245,183,0,0.28)", color: "#F5B700" }}>
            <Sparkles className="w-3 h-3" /> STRATEGIC PARTNERSHIP OFFICE
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white mb-4">Transform Your Institution with Ornix AI</h2>
          <p className="text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-8" style={{ color: "rgba(255,255,255,0.60)" }}>
            Transforming your organization with artificial intelligence does not start with buying software—it starts with a conversation about your long-term goals.
          </p>
          <div className="p-8 rounded-3xl border max-w-lg mx-auto shadow-2xl mb-8" style={{ background: "rgba(22,32,64,0.70)", borderColor: "rgba(255,255,255,0.10)", backdropFilter: "blur(24px)" }}>
            <p className="font-bold text-white text-lg mb-4 font-heading">{BRAND_COMPANY}</p>
            <div className="space-y-3 text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
              <div className="flex items-center justify-center gap-2">
                <MapPin className="w-4 h-4 text-ornix-yellow shrink-0" />
                <span>Headquarters: {HEADQUARTERS}</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Mail className="w-4 h-4 text-ornix-yellow shrink-0" />
                <span>Inquiries: <a href={`mailto:${CONTACT_EMAIL}`} className="text-ornix-yellow font-semibold hover:underline">{CONTACT_EMAIL}</a></span>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-center gap-4">
              <Button href="/contact" variant="accent" size="md" icon={<ArrowRight className="w-4 h-4" />}>Submit Strategic Inquiry</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
