"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import {
  submitContactForm,
  ContactFormData,
} from "@/services/contact";
import {
  CheckCircle2,
  AlertCircle,
  Loader2,
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  HEADQUARTERS,
} from "@/lib/constants";

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    organization: "",
    email: "",
    phone: "",
    areaOfInterest: "AI Solutions",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const [statusMessage, setStatusMessage] = useState("");
  const [submissionId, setSubmissionId] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setStatus("loading");
    setStatusMessage("");

    try {
      const result = await submitContactForm(formData);

      if (result.success) {
        setStatus("success");
        setStatusMessage(result.message);

        if (result.submissionId) {
          setSubmissionId(result.submissionId);
        }

        setFormData({
          name: "",
          organization: "",
          email: "",
          phone: "",
          areaOfInterest: "AI Solutions",
          message: "",
        });
      } else {
        setStatus("error");
        setStatusMessage(result.message);
      }
    } catch {
      setStatus("error");
      setStatusMessage(
        "Something went wrong while submitting your inquiry. Please try again."
      );
    }
  };

  return (
    <main className="pt-[76px] bg-white text-ornix-navy-900">
      {/* =========================================================
          CONTACT HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-white border-b border-ornix-navy-900/10">
        {/* Subtle grid */}
        <div className="absolute inset-0 grid-background opacity-[0.045]" />

        {/* Ambient yellow glow */}
        <div className="absolute -top-32 right-0 w-[500px] h-[500px] rounded-full bg-ornix-yellow/[0.08] blur-[140px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="min-h-[560px] md:min-h-[620px] flex items-center py-20 md:py-24">
            <div className="w-full grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-14 lg:gap-20 items-center">
              {/* LEFT — Hero Content */}
              <div className="max-w-3xl text-left">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ornix-yellow/10 border border-ornix-yellow/30 text-ornix-yellow text-xs font-semibold uppercase tracking-[0.18em] mb-7">
                  <span className="w-1.5 h-1.5 rounded-full bg-ornix-yellow animate-pulse" />
                  TALK TO ORNIX
                </div>

                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold tracking-tight leading-[0.98] text-ornix-navy-900">
                  Start a Conversation
                  <span className="block">About AI.</span>
                </h1>

                <div className="h-1 w-16 bg-ornix-yellow rounded-full mt-8 mb-7" />

                <p className="text-lg sm:text-xl md:text-2xl text-ornix-slate-600 leading-relaxed max-w-2xl">
                  Tell us about your organization, your challenges, and where
                  you see an opportunity for artificial intelligence.
                </p>

                <p className="mt-6 text-sm sm:text-base text-ornix-slate-500 leading-relaxed max-w-xl">
                  ORNIX works with institutions to build locally grounded,
                  sovereign solutions around real operational needs.
                </p>
              </div>

              {/* RIGHT — Contact Panel */}
              <div className="relative w-full max-w-md lg:justify-self-end">
                <div className="relative rounded-[2rem] border border-ornix-navy-900/10 bg-ornix-slate-50 p-7 md:p-8 shadow-xl shadow-ornix-navy-900/5 overflow-hidden">
                  {/* Decorative glow */}
                  <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-ornix-yellow/10 blur-3xl pointer-events-none" />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-8">
                      <div>
                        <p className="text-xs uppercase tracking-[0.18em] font-mono text-ornix-slate-500 mb-2">
                          CONNECT WITH US
                        </p>

                        <h2 className="text-2xl md:text-3xl font-heading font-bold text-ornix-navy-900">
                          Let&apos;s Build Together
                        </h2>
                      </div>

                      <div className="w-11 h-11 rounded-xl bg-ornix-navy-900 flex items-center justify-center shrink-0">
                        <Mail className="w-5 h-5 text-ornix-yellow" />
                      </div>
                    </div>

                    {/* Contact Details */}
                    <div className="space-y-4">
                      <a
                        href={`mailto:${CONTACT_EMAIL}`}
                        className="group flex items-center gap-4 p-4 rounded-2xl bg-white border border-ornix-navy-900/10 hover:border-ornix-yellow/50 transition-all duration-300"
                      >
                        <div className="w-10 h-10 rounded-xl bg-ornix-yellow/10 flex items-center justify-center shrink-0">
                          <Mail className="w-4 h-4 text-ornix-yellow" />
                        </div>

                        <div className="min-w-0">
                          <p className="text-[10px] uppercase tracking-[0.16em] text-ornix-slate-400 font-semibold">
                            Email
                          </p>

                          <p className="text-sm font-semibold text-ornix-navy-900 truncate group-hover:text-ornix-yellow transition-colors">
                            {CONTACT_EMAIL}
                          </p>
                        </div>
                      </a>

                      <a
                        href={`tel:${CONTACT_PHONE.replace(/\s+/g, "")}`}
                        className="group flex items-center gap-4 p-4 rounded-2xl bg-white border border-ornix-navy-900/10 hover:border-ornix-yellow/50 transition-all duration-300"
                      >
                        <div className="w-10 h-10 rounded-xl bg-ornix-yellow/10 flex items-center justify-center shrink-0">
                          <Phone className="w-4 h-4 text-ornix-yellow" />
                        </div>

                        <div>
                          <p className="text-[10px] uppercase tracking-[0.16em] text-ornix-slate-400 font-semibold">
                            Phone
                          </p>

                          <p className="text-sm font-semibold text-ornix-navy-900 group-hover:text-ornix-yellow transition-colors">
                            {CONTACT_PHONE}
                          </p>
                        </div>
                      </a>

                      <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-ornix-navy-900/10">
                        <div className="w-10 h-10 rounded-xl bg-ornix-yellow/10 flex items-center justify-center shrink-0">
                          <MapPin className="w-4 h-4 text-ornix-yellow" />
                        </div>

                        <div>
                          <p className="text-[10px] uppercase tracking-[0.16em] text-ornix-slate-400 font-semibold">
                            Headquarters
                          </p>

                          <p className="text-sm font-semibold text-ornix-navy-900">
                            {HEADQUARTERS}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Statement */}
                    <div className="mt-6 pt-6 border-t border-ornix-navy-900/10 flex items-center gap-3">
                      <ShieldCheck className="w-5 h-5 text-ornix-yellow shrink-0" />

                      <p className="text-xs text-ornix-slate-500 leading-relaxed">
                        Conversations are centered around your operational
                        needs, data governance, security, and long-term goals.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating Accent */}
                <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-2xl bg-ornix-yellow flex items-center justify-center shadow-lg">
                  <ArrowRight className="w-6 h-6 text-ornix-navy-900" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CONTACT WORKSPACE
      ========================================================= */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* =====================================================
                FORM
            ===================================================== */}
            <div className="lg:col-span-8 lg:col-start-3 bg-ornix-slate-50 rounded-3xl border border-ornix-navy-900/10 p-6 md:p-8 lg:p-10">
              <div className="mb-7">
                <span className="text-xs font-mono uppercase tracking-[0.18em] text-ornix-yellow font-semibold">
                  GET IN TOUCH
                </span>

                <h2 className="text-2xl md:text-3xl font-bold font-heading text-ornix-navy-900 mt-3">
                  Tell Us What You Are Building
                </h2>

                <p className="text-sm md:text-base text-ornix-slate-600 mt-3 leading-relaxed max-w-2xl">
                  Share your objectives, operational challenges, or
                  partnership interests and our team will review your inquiry.
                </p>
              </div>

              {/* SUCCESS */}
              {status === "success" ? (
                <div className="p-8 md:p-10 rounded-2xl bg-ornix-yellow/10 border border-ornix-yellow/40 text-center space-y-4">
                  <CheckCircle2 className="w-12 h-12 text-ornix-yellow mx-auto" />

                  <h3 className="text-2xl font-bold text-ornix-navy-900 font-heading">
                    Inquiry Submitted
                  </h3>

                  <p className="text-ornix-slate-600 text-sm leading-relaxed max-w-lg mx-auto">
                    {statusMessage}
                  </p>

                  {submissionId && (
                    <p className="text-xs font-mono text-ornix-navy-900 bg-white py-2 px-4 rounded-full inline-block border border-ornix-yellow/40">
                      REFERENCE ID: {submissionId}
                    </p>
                  )}

                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => {
                        setStatus("idle");
                        setSubmissionId("");
                        setStatusMessage("");
                      }}
                      className="text-xs font-semibold text-ornix-navy-900 hover:text-ornix-yellow transition-colors cursor-pointer"
                    >
                      Send another inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* ERROR */}
                  {status === "error" && (
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center gap-3 text-red-600 text-sm">
                      <AlertCircle className="w-5 h-5 shrink-0" />
                      <span>{statusMessage}</span>
                    </div>
                  )}

                  {/* NAME / ORGANIZATION */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-ornix-slate-600 mb-2">
                        Full Name *
                      </label>

                      <input
                        type="text"
                        required
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            name: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3.5 rounded-xl bg-white border border-ornix-navy-900/10 text-ornix-navy-900 placeholder-ornix-slate-400 text-sm focus:outline-none focus:border-ornix-yellow focus:ring-2 focus:ring-ornix-yellow/10 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-ornix-slate-600 mb-2">
                        Organization *
                      </label>

                      <input
                        type="text"
                        required
                        placeholder="Organization / Institution"
                        value={formData.organization}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            organization: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3.5 rounded-xl bg-white border border-ornix-navy-900/10 text-ornix-navy-900 placeholder-ornix-slate-400 text-sm focus:outline-none focus:border-ornix-yellow focus:ring-2 focus:ring-ornix-yellow/10 transition-all"
                      />
                    </div>
                  </div>

                  {/* EMAIL / PHONE */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-ornix-slate-600 mb-2">
                        Email *
                      </label>

                      <input
                        type="email"
                        required
                        placeholder="name@organization.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            email: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3.5 rounded-xl bg-white border border-ornix-navy-900/10 text-ornix-navy-900 placeholder-ornix-slate-400 text-sm focus:outline-none focus:border-ornix-yellow focus:ring-2 focus:ring-ornix-yellow/10 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-ornix-slate-600 mb-2">
                        Phone
                      </label>

                      <input
                        type="tel"
                        placeholder="+251..."
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            phone: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3.5 rounded-xl bg-white border border-ornix-navy-900/10 text-ornix-navy-900 placeholder-ornix-slate-400 text-sm focus:outline-none focus:border-ornix-yellow focus:ring-2 focus:ring-ornix-yellow/10 transition-all"
                      />
                    </div>
                  </div>

                  {/* AREA OF INTEREST */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-ornix-slate-600 mb-2">
                      Area of Interest *
                    </label>

                    <select
                      value={formData.areaOfInterest}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          areaOfInterest:
                            e.target.value as ContactFormData["areaOfInterest"],
                        })
                      }
                      className="w-full px-4 py-3.5 rounded-xl bg-white border border-ornix-navy-900/10 text-ornix-navy-900 text-sm focus:outline-none focus:border-ornix-yellow focus:ring-2 focus:ring-ornix-yellow/10 transition-all"
                    >
                      <option value="AI Solutions">AI Solutions</option>
                      <option value="Sector Solutions">
                        Sector Solutions
                      </option>
                      <option value="Digital Transformation">
                        Digital Transformation
                      </option>
                      <option value="Partnership">Partnership</option>
                      <option value="Strategic Collaboration">
                        Strategic Collaboration
                      </option>
                      <option value="General Inquiry">
                        General Inquiry
                      </option>
                    </select>
                  </div>

                  {/* MESSAGE */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-ornix-slate-600 mb-2">
                      Message *
                    </label>

                    <textarea
                      required
                      rows={5}
                      placeholder="Tell us about your challenge, project, partnership idea, or AI requirement..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          message: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3.5 rounded-xl bg-white border border-ornix-navy-900/10 text-ornix-navy-900 placeholder-ornix-slate-400 text-sm focus:outline-none focus:border-ornix-yellow focus:ring-2 focus:ring-ornix-yellow/10 transition-all resize-none"
                    />
                  </div>

                  {/* SUBMIT */}
                  <Button
                    type="submit"
                    variant="accent"
                    size="lg"
                    className="w-full"
                    disabled={status === "loading"}
                  >
                    {status === "loading" ? (
                      <span className="flex items-center justify-center gap-2">
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Submitting Inquiry...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        Submit Inquiry to ORNIX
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHY ORNIX
      ========================================================= */}
      <section className="bg-ornix-navy-900 text-white py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-[0.18em] text-ornix-yellow font-semibold">
              WHY ORNIX
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mt-4 leading-[1.12]">
              Start With the Problem. Build the Intelligence Around It.
            </h2>

            <p className="text-base md:text-lg text-ornix-slate-300 leading-relaxed mt-6">
              Every organization has different operational realities, data
              environments, infrastructure constraints, and strategic
              priorities. Our approach begins by understanding those realities
              before designing the technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {/* DATA GOVERNANCE */}
            <div className="group border border-white/10 rounded-3xl p-7 bg-white/[0.03] hover:bg-white/[0.06] hover:border-ornix-yellow/30 transition-all duration-300">
              <ShieldCheck className="w-7 h-7 text-ornix-yellow mb-5" />

              <h3 className="text-xl font-heading font-bold mb-3">
                Data Governance
              </h3>

              <p className="text-sm text-ornix-slate-400 leading-relaxed">
                AI initiatives designed with security, governance,
                infrastructure, and data control in mind from the beginning.
              </p>
            </div>

            {/* LOCAL CONTEXT */}
            <div className="group border border-white/10 rounded-3xl p-7 bg-white/[0.03] hover:bg-white/[0.06] hover:border-ornix-yellow/30 transition-all duration-300">
              <MapPin className="w-7 h-7 text-ornix-yellow mb-5" />

              <h3 className="text-xl font-heading font-bold mb-3">
                Local Context
              </h3>

              <p className="text-sm text-ornix-slate-400 leading-relaxed">
                Solutions grounded in Ethiopia&apos;s institutional,
                linguistic, operational, and infrastructure realities.
              </p>
            </div>

            {/* LONG-TERM PARTNERSHIP */}
            <div className="group border border-white/10 rounded-3xl p-7 bg-white/[0.03] hover:bg-white/[0.06] hover:border-ornix-yellow/30 transition-all duration-300">
              <ArrowRight className="w-7 h-7 text-ornix-yellow mb-5" />

              <h3 className="text-xl font-heading font-bold mb-3">
                Long-Term Partnership
              </h3>

              <p className="text-sm text-ornix-slate-400 leading-relaxed">
                Continuous collaboration from strategy and architecture
                through implementation, capability building, and evolution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="relative bg-white text-ornix-navy-900 py-20 md:py-24 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full bg-ornix-yellow/10 blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-ornix-yellow/10 border border-ornix-yellow/30 text-ornix-navy-900 text-xs font-semibold uppercase tracking-[0.18em] mb-6">
            LET&apos;S BUILD TOGETHER
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-[1.1]">
            Your Next AI Initiative Starts With a Conversation.
          </h2>

          <p className="max-w-2xl mx-auto mt-6 text-base md:text-lg text-ornix-slate-600 leading-relaxed">
            Bring us your challenge, opportunity, or idea. We&apos;ll explore
            what it could become together.
          </p>

          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="inline-flex items-center justify-center gap-2 mt-8 px-7 py-3.5 rounded-xl bg-ornix-navy-900 text-white font-semibold hover:bg-ornix-navy-850 transition-colors"
          >
            Email ORNIX
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </main>
  );
}