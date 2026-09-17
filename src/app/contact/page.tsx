"use client";

import React, { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { submitContactForm, ContactFormData } from "@/services/contact";
import { CheckCircle2, AlertCircle, Loader2, Mail, Phone, MapPin, Shield } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    organization: "",
    email: "",
    phone: "",
    areaOfInterest: "AI Solutions",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState<string>("");
  const [submissionId, setSubmissionId] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setStatusMessage("");

    const result = await submitContactForm(formData);

    if (result.success) {
      setStatus("success");
      setStatusMessage(result.message);
      if (result.submissionId) setSubmissionId(result.submissionId);
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
  };

  return (
    <div className="pt-28 pb-20 bg-ornix-navy-900 text-white min-h-screen">
      {/* Banner */}
      <section className="py-16 bg-ornix-navy-950 border-b border-white/10 grid-background text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ornix-yellow/20 border border-ornix-yellow/40 text-ornix-yellow text-xs font-semibold uppercase tracking-wider mb-4">
            TALK TO ORNIX
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-white tracking-tight mb-4">
            Let's Build the Future of Healthcare Together.
          </h1>
          <p className="text-base sm:text-lg text-ornix-slate-300 leading-relaxed max-w-2xl mx-auto">
            Contact our health-tech engineering and AI research teams to discuss custom solutions, research collaborations, or enterprise integrations.
          </p>
        </div>
      </section>

      {/* Main Form & Info Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Form */}
          <div className="lg:col-span-7 glass-panel p-8 md:p-10 rounded-3xl border border-white/10">
            <h2 className="text-2xl font-bold font-heading text-white mb-6">Send an Inquiry</h2>

            {status === "success" ? (
              <div className="p-8 rounded-2xl bg-ornix-yellow/10 border border-ornix-yellow/40 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-ornix-yellow mx-auto" />
                <h3 className="text-2xl font-bold text-white font-heading">Inquiry Submitted</h3>
                <p className="text-ornix-slate-200 text-sm leading-relaxed">{statusMessage}</p>
                {submissionId && (
                  <p className="text-xs font-mono text-ornix-yellow bg-ornix-navy-900 py-2 px-4 rounded-full inline-block border border-ornix-yellow/30">
                    REFERENCE ID: {submissionId}
                  </p>
                )}
                <div className="pt-4">
                  <button
                    onClick={() => setStatus("idle")}
                    className="text-xs font-semibold text-ornix-yellow hover:underline cursor-pointer"
                  >
                    Send another inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {status === "error" && (
                  <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center gap-3 text-red-400 text-sm">
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    <span>{statusMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-ornix-slate-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Dr. Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-ornix-navy-950 border border-white/10 text-white placeholder-ornix-slate-500 text-sm focus:outline-none focus:border-ornix-yellow"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-ornix-slate-300 mb-2">
                      Organization *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Health System / Hospital / Institution"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-ornix-navy-950 border border-white/10 text-white placeholder-ornix-slate-500 text-sm focus:outline-none focus:border-ornix-yellow"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-ornix-slate-300 mb-2">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane.doe@hospital.org"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-ornix-navy-950 border border-white/10 text-white placeholder-ornix-slate-500 text-sm focus:outline-none focus:border-ornix-yellow"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-ornix-slate-300 mb-2">
                      Phone (Optional)
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-ornix-navy-950 border border-white/10 text-white placeholder-ornix-slate-500 text-sm focus:outline-none focus:border-ornix-yellow"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-ornix-slate-300 mb-2">
                    Area of Interest *
                  </label>
                  <select
                    value={formData.areaOfInterest}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        areaOfInterest: e.target.value as ContactFormData["areaOfInterest"],
                      })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-ornix-navy-950 border border-white/10 text-white text-sm focus:outline-none focus:border-ornix-yellow"
                  >
                    <option value="AI Solutions">AI Solutions</option>
                    <option value="Healthcare Solutions">Healthcare Solutions</option>
                    <option value="Research Collaboration">Research Collaboration</option>
                    <option value="Digital Transformation">Digital Transformation</option>
                    <option value="Partnership">Partnership</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-ornix-slate-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe your organization's AI initiatives or technical requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-ornix-navy-950 border border-white/10 text-white placeholder-ornix-slate-500 text-sm focus:outline-none focus:border-ornix-yellow resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  variant="accent"
                  size="lg"
                  className="w-full"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin" /> Submitting Request...
                    </span>
                  ) : (
                    "Submit Inquiry to ORNIX"
                  )}
                </Button>
              </form>
            )}
          </div>

          {/* Right Column: Institutional Contact Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
            <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-6">
              <h3 className="text-xl font-bold font-heading text-white">Institutional Engagement</h3>
              <p className="text-sm text-ornix-slate-300 leading-relaxed">
                Whether deploying on-premises models or establishing computational health research partnerships, our engineering teams assist with security audits and integration specs.
              </p>

              <div className="space-y-4 pt-4 border-t border-white/10 text-sm">
                <div className="flex items-center gap-3 text-ornix-slate-300">
                  <Mail className="w-5 h-5 text-ornix-yellow shrink-0" />
                  <span>contact@ornix.health</span>
                </div>
                <div className="flex items-center gap-3 text-ornix-slate-300">
                  <Shield className="w-5 h-5 text-ornix-yellow shrink-0" />
                  <span>HIPAA & Enterprise Compliance Office</span>
                </div>
              </div>
            </div>

            <div className="bg-ornix-yellow/10 p-8 rounded-3xl border border-ornix-yellow/30 space-y-3">
              <h4 className="text-base font-bold text-white font-heading">Sovereign Data Commitments</h4>
              <p className="text-xs text-ornix-slate-300 leading-relaxed">
                All inquiries are processed under strict privacy guidelines. Patient telemetry data is never ingested during standard inquiries.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
