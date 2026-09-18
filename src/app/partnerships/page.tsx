import { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import {
  ShieldCheck,
  Users,
  RefreshCw,
  Award,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";
import {
  PARTNERSHIP_PILLARS,
  STRATEGIC_ALLIANCE_ENTITIES,
} from "@/data/ornixVision";
import {
  BRAND_COMPANY,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  HEADQUARTERS,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Partnerships & Strategic Alignment | Ornix AI Solutions PLC",
  description:
    "Unlocking institutional potential across Ethiopia through trusted, long-term strategic collaboration.",
};

const PILLAR_ICONS = [
  <ShieldCheck key="s" className="w-7 h-7 text-ornix-yellow" />,
  <Users key="u" className="w-7 h-7 text-ornix-yellow" />,
  <RefreshCw key="r" className="w-7 h-7 text-ornix-yellow" />,
];

const WORKFLOW_STEPS = [
  {
    step: "01",
    title: "Institutional Assessment & Scope",
    description:
      "Joint diagnostic of operational bottlenecks, data infrastructure, security prerequisites, and strategic economic objectives.",
  },
  {
    step: "02",
    title: "Co-Engineering Architecture",
    description:
      "Embedded Ornix engineers work shoulder-to-shoulder with your domain experts to design custom neural models and pipelines.",
  },
  {
    step: "03",
    title: "Sovereign In-Country Deployment",
    description:
      "Deployment on suitable local cloud infrastructure, such as Ethio Telecom cloud, or on-premise environments designed around each institution's security and data-governance requirements.",
  },
  {
    step: "04",
    title: "Continuous Co-Evolution & Upskilling",
    description:
      "Structured capability transfer, internal staff training, and continuous model retraining as regional datasets and market dynamics evolve.",
  },
];

export default function PartnershipsPage() {
  return (
    <main className="pt-[76px] bg-white text-ornix-navy-900">

      {/* =========================================================
          HERO — WHITE / LEFT ALIGNED
      ========================================================== */}
      <section className="relative overflow-hidden bg-white border-b border-ornix-navy-900/10">
        <div className="absolute inset-0 grid-background opacity-[0.05]" />

        <div className="absolute -top-32 right-0 w-[500px] h-[500px] rounded-full bg-ornix-yellow/[0.08] blur-[140px] pointer-events-none" />

        <div className="absolute bottom-0 right-[12%] w-[280px] h-[280px] rounded-full bg-ornix-navy-900/[0.04] blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="min-h-[560px] md:min-h-[620px] flex items-center py-20 md:py-24">
  <div className="w-full grid grid-cols-1 lg:grid-cols-[1fr_0.55fr] gap-12 lg:gap-20 items-center">

    {/* LEFT — Hero Text */}
    <div className="max-w-3xl text-left">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ornix-yellow/10 border border-ornix-yellow/30 text-ornix-yellow text-xs font-semibold uppercase tracking-[0.18em] mb-7">
        PARTNERSHIPS & STRATEGIC ALIGNMENT
      </div>

      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold tracking-tight leading-[1.05] text-ornix-navy-900 mb-7">
        Strategic Co-Innovation
        <span className="block">Across Ethiopia</span>
      </h1>

      <div className="h-1 w-16 bg-ornix-yellow rounded-full mb-7" />

      <p className="text-base sm:text-lg md:text-xl text-ornix-slate-600 leading-relaxed max-w-2xl">
        Unlocking institutional potential across Ethiopia through
        trusted, long-term strategic collaboration.
      </p>

      <p className="mt-5 text-sm sm:text-base text-ornix-slate-500 leading-relaxed max-w-xl">
        Ornix builds long-term relationships with institutions and
        technology organizations to develop sovereign, locally
        grounded AI around real operational needs.
      </p>
    </div>

    {/* RIGHT — Hero Actions */}
    <div className="flex flex-col gap-5 lg:justify-self-end w-full max-w-sm">
      <Button
        href="#alliance-bar"
        variant="accent"
        size="lg"
        icon={<ArrowRight className="w-5 h-5" />}
        className="w-full justify-center"
      >
        Explore Our Ecosystem
      </Button>
<Button
  href="/contact"
  variant="outline"
  size="lg"
  className="w-full justify-center"
>
  Initiate Partnership Dialogue
</Button>
    </div>

  </div>
</div>
        </div>
      </section>


      {/* =========================================================
          CORE COMMITMENTS — WHITE
      ========================================================== */}
      <section className="relative overflow-hidden bg-white py-20 md:py-24 lg:py-28">

        <div className="absolute top-0 right-0 w-[360px] h-[360px] rounded-full bg-ornix-yellow/[0.06] blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-3xl mb-12 md:mb-14">

            <div className="inline-flex items-center px-3 py-1 rounded-full bg-ornix-yellow/10 border border-ornix-yellow/20 text-ornix-yellow text-xs font-semibold uppercase tracking-[0.18em] mb-5">
              OUR CORE COMMITMENTS
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold tracking-tight leading-[1.1] text-ornix-navy-900">
              The Principles Behind Our Partnerships
            </h2>

            <p className="mt-5 text-base sm:text-lg text-ornix-slate-600 leading-relaxed max-w-3xl">
              Three core principles guide how Ornix builds trusted,
              long-term collaborations with institutions and organizations.
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7">

            {PARTNERSHIP_PILLARS.map((pillar, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-3xl border border-ornix-navy-900/10 bg-ornix-slate-50 p-7 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-ornix-yellow/50 hover:shadow-xl"
              >

                <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-ornix-yellow/[0.08] blur-3xl pointer-events-none" />

                <div className="relative">

                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-7 border border-ornix-yellow/30 bg-ornix-yellow/10">
                    {PILLAR_ICONS[idx]}
                  </div>

                  <span className="text-[11px] font-mono uppercase tracking-widest block mb-3 font-bold text-ornix-yellow">
                    {pillar.badge}
                  </span>

                  <h3 className="text-xl md:text-2xl font-bold font-heading text-ornix-navy-900 mb-4">
                    {pillar.title}
                  </h3>

                  <p className="text-sm md:text-base leading-relaxed text-ornix-slate-600">
                    {pillar.description}
                  </p>

                  <div className="pt-6 mt-8 border-t border-ornix-navy-900/10 flex items-center justify-between text-xs font-mono text-ornix-slate-400">
                    <span>Guiding Pillar 0{idx + 1}</span>
                    <CheckCircle2 className="w-4 h-4 text-ornix-yellow" />
                  </div>

                </div>
              </div>
            ))}

          </div>
        </div>
      </section>


      {/* =========================================================
          STRATEGIC ECOSYSTEM — WHITE
      ========================================================== */}
      <section
        id="alliance-bar"
        className="relative overflow-hidden bg-white py-20 md:py-24 lg:py-28 border-t border-ornix-navy-900/10"
      >

        <div className="absolute inset-0 grid-background opacity-[0.04]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-3xl mb-12 md:mb-14">

            <div className="inline-flex items-center px-3 py-1 rounded-full bg-ornix-navy-900/[0.05] border border-ornix-navy-900/10 text-ornix-navy-900 text-xs font-semibold uppercase tracking-[0.18em] mb-5">
              STRATEGIC ECOSYSTEM
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold tracking-tight leading-[1.1] text-ornix-navy-900">
              Collaboration Across Ethiopia & Beyond
            </h2>

            <p className="mt-5 text-base sm:text-lg text-ornix-slate-600 leading-relaxed max-w-3xl">
              Our growing ecosystem brings together strategic partners,
              institutional collaborators, technology organizations, and
              sector-focused relationships across Ethiopia and beyond.
            </p>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {STRATEGIC_ALLIANCE_ENTITIES.map((entity, idx) => (
              <div
                key={idx}
                className="group rounded-3xl border border-ornix-navy-900/10 bg-ornix-slate-50 p-6 md:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-ornix-yellow/50 hover:shadow-lg"
              >

                <div>

                  <div className="relative w-full h-24 mb-6 rounded-2xl border border-ornix-navy-900/10 bg-white flex items-center justify-center overflow-hidden">

                    {entity.logo ? (
                      <Image
                        src={entity.logo}
                        alt={`${entity.name} logo`}
                        fill
                        sizes="220px"
                        className="object-contain p-4"
                      />
                    ) : (
                      <span className="text-xs font-mono uppercase tracking-wider text-ornix-slate-400">
                        Logo
                      </span>
                    )}

                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono uppercase mb-4 border bg-indigo-50 border-indigo-200 text-indigo-600">
                    <Award className="w-3 h-3" />
                    {entity.badge}
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold font-heading text-ornix-navy-900 mb-2">
                    {entity.name}
                  </h3>

                  <p className="text-xs font-mono mb-3 text-ornix-slate-400">
                    {entity.category}
                  </p>

                  <p className="text-sm leading-relaxed text-ornix-slate-600">
                    {entity.description}
                  </p>

                </div>

                <div className="pt-5 mt-7 border-t border-ornix-navy-900/10 flex items-center justify-between text-xs font-mono text-ornix-yellow">
                  <span>Strategic Ecosystem</span>
                  <CheckCircle2 className="w-4 h-4" />
                </div>

              </div>
            ))}

            <div className="relative overflow-hidden rounded-3xl border border-ornix-navy-900/10 bg-ornix-navy-900 p-7 md:p-8 flex flex-col justify-between">

              <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-ornix-yellow/10 blur-3xl pointer-events-none" />

              <div className="relative">

                <span className="text-[11px] font-mono uppercase tracking-widest font-bold block mb-3 text-ornix-yellow">
                  JOIN THE ALLIANCE
                </span>

                <h3 className="text-xl md:text-2xl font-bold font-heading text-white mb-3">
                  Institutional & Industry Partners
                </h3>

                <p className="text-sm leading-relaxed text-ornix-slate-300">
                  Ornix welcomes collaboration with Ethiopian banks,
                  agricultural organizations, healthcare networks,
                  enterprises, research institutions, and technology
                  organizations to build customized sovereign AI solutions.
                </p>

              </div>

              <div className="relative pt-6 mt-7 border-t border-white/10">

                <Button
                  href="/contact"
                  variant="accent"
                  size="sm"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Discuss an Alliance
                </Button>

              </div>

            </div>

          </div>
        </div>
      </section>


      {/* =========================================================
          CO-INNOVATION JOURNEY — ONE NAVY SECTION
      ========================================================== */}
      <section className="relative overflow-hidden bg-ornix-navy-900 text-white py-20 md:py-28 lg:py-32">

        <div className="absolute inset-0 grid-background opacity-20" />

        <div className="absolute -bottom-32 left-0 w-[420px] h-[420px] rounded-full bg-ornix-yellow/10 blur-[130px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-3xl mb-12 md:mb-14">

            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 text-ornix-yellow text-xs font-semibold uppercase tracking-[0.18em] mb-5">
              ENGAGEMENT METHODOLOGY
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold tracking-tight leading-[1.1] text-white">
              The Co-Innovation Journey
            </h2>

            <p className="mt-5 text-base sm:text-lg text-ornix-slate-300 leading-relaxed max-w-3xl">
              How we structure institutional collaborations from discovery
              and co-engineering through sovereign deployment, capability
              building, and continuous improvement.
            </p>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {WORKFLOW_STEPS.map((step) => (
              <div
                key={step.step}
                className="group relative rounded-3xl border border-white/10 bg-white/[0.045] p-7 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-ornix-yellow/40 hover:bg-white/[0.07]"
              >

                <div className="w-12 h-12 rounded-2xl flex items-center justify-center font-mono font-extrabold text-ornix-yellow text-lg mb-7 border border-ornix-yellow/30 bg-ornix-yellow/10">
                  {step.step}
                </div>

                <h3 className="text-lg md:text-xl font-bold font-heading text-white mb-3 group-hover:text-ornix-yellow transition-colors">
                  {step.title}
                </h3>

                <p className="text-sm leading-relaxed text-ornix-slate-300">
                  {step.description}
                </p>

                <div className="pt-6 mt-7 border-t border-white/10 text-[11px] font-mono text-ornix-slate-500">
                  Phase {step.step} Deployment
                </div>

              </div>
            ))}

          </div>
        </div>
      </section>


      {/* =========================================================
          FINAL CTA — WHITE
      ========================================================== */}
      <section className="relative overflow-hidden bg-white py-20 md:py-24 lg:py-28 border-t border-ornix-navy-900/10">

        <div className="absolute inset-0 grid-background opacity-[0.04]" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full bg-ornix-yellow/[0.07] blur-[140px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ornix-yellow/10 border border-ornix-yellow/30 text-ornix-yellow text-xs font-semibold uppercase tracking-[0.18em] mb-6">
            <Sparkles className="w-3 h-3" />
            START A CONVERSATION
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold tracking-tight leading-[1.1] text-ornix-navy-900 mb-6">
            Transform Your Institution with Ornix AI
          </h2>

          <p className="text-base sm:text-lg text-ornix-slate-600 leading-relaxed max-w-2xl mx-auto mb-10">
            Transforming your organization with artificial intelligence does
            not start with buying software—it starts with a conversation about
            your long-term goals.
          </p>

          <div className="max-w-xl mx-auto rounded-3xl border border-ornix-navy-900/10 bg-ornix-slate-50 p-7 md:p-8">

            <p className="font-bold text-ornix-navy-900 text-lg mb-6 font-heading">
              {BRAND_COMPANY}
            </p>

            <div className="space-y-4 text-sm text-ornix-slate-600">

              <div className="flex items-center justify-center gap-2">
                <MapPin className="w-4 h-4 text-ornix-yellow shrink-0" />
                <span>Headquarters: {HEADQUARTERS}</span>
              </div>

              <div className="flex items-center justify-center gap-2">
                <Mail className="w-4 h-4 text-ornix-yellow shrink-0" />
                <span>
                  Inquiries:{" "}
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-ornix-yellow font-semibold hover:underline"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </span>
              </div>

              <div className="flex items-center justify-center gap-2">
                <Phone className="w-4 h-4 text-ornix-yellow shrink-0" />
                <span>
                  Phone:{" "}
                  <a
                    href={`tel:${CONTACT_PHONE.replace(/\s+/g, "")}`}
                    className="text-ornix-yellow font-semibold hover:underline"
                  >
                    {CONTACT_PHONE}
                  </a>
                </span>
              </div>

            </div>

            <div className="mt-7 pt-7 border-t border-ornix-navy-900/10 flex justify-center">

              <Button
                href="/contact"
                variant="accent"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Submit Strategic Inquiry
              </Button>

            </div>

          </div>
        </div>
      </section>

    </main>
  );
}