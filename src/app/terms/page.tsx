import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | ORNIX AI Healthcare",
  description: "ORNIX Terms of Service governing platform usage, enterprise clinical AI deployment, and software licensing.",
};

export default function TermsPage() {
  return (
    <div className="pt-28 pb-20 bg-ornix-navy-900 text-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-extrabold font-heading text-white mb-4">Terms of Service</h1>
        <p className="text-xs font-mono text-ornix-yellow mb-8">LAST UPDATED: SEPTEMBER 2025</p>

        <div className="glass-panel p-8 md:p-12 rounded-3xl border border-white/10 space-y-8 text-ornix-slate-300 text-sm leading-relaxed">
          <section>
            <h2 className="text-xl font-bold font-heading text-white mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing or utilizing the ORNIX platform, website, or enterprise API services, healthcare organizations and users agree to be bound by these Terms of Service and all associated Business Associate Agreements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-heading text-white mb-3">2. Clinical Decision Support Disclaimer</h2>
            <p>
              ORNIX solutions provide decision support insights, automated telemetry alerts, and ambient documentation co-pilots intended to assist licensed healthcare professionals. ORNIX software does not make independent medical diagnoses or replace clinical judgment. Licensed medical providers remain solely responsible for patient care decisions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-heading text-white mb-3">3. Enterprise Licensing & Availability</h2>
            <p>
              Platform modules (including ORNIX Intelligence, Assist, Analytics, Vision, and Flow) are licensed under enterprise master service agreements specifying uptime service level agreements (SLAs), maintenance windows, and technical support response parameters.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
