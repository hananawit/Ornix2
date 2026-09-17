import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | ORNIX AI Healthcare",
  description: "ORNIX Privacy Policy details data governance, HIPAA alignment, and security protocols for clinical artificial intelligence systems.",
};

export default function PrivacyPage() {
  return (
    <div className="pt-28 pb-20 bg-ornix-navy-900 text-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-extrabold font-heading text-white mb-4">Privacy Policy</h1>
        <p className="text-xs font-mono text-ornix-yellow mb-8">LAST UPDATED: SEPTEMBER 2025</p>

        <div className="glass-panel p-8 md:p-12 rounded-3xl border border-white/10 space-y-8 text-ornix-slate-300 text-sm leading-relaxed">
          <section>
            <h2 className="text-xl font-bold font-heading text-white mb-3">1. Overview & Commitment</h2>
            <p>
              ORNIX Inc. ("ORNIX", "we", "our") is dedicated to protecting protected health information (PHI) and personal data in strict compliance with the Health Insurance Portability and Accountability Act (HIPAA), the Health Information Technology for Economic and Clinical Health (HITECH) Act, and applicable international data privacy standards.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-heading text-white mb-3">2. Health Data Handling & Anonymization</h2>
            <p>
              Machine learning models developed by ORNIX process medical data solely under authorized Business Associate Agreements (BAAs) with covered entities. Clinical telemetry, diagnostic imaging, and EHR narratives are de-identified and anonymized prior to any algorithmic inference training in according with Safe Harbor standards.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-heading text-white mb-3">3. Zero Data Retention Policy</h2>
            <p>
              For ambient clinical assistants and transient telemetry microservices, ORNIX enforces a zero-retention policy for unencrypted raw audio or streaming signals once model inference note generation is complete and signed by the licensed clinician.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-heading text-white mb-3">4. Security Infrastructure</h2>
            <p>
              All data transmitted to or from ORNIX platforms is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption. Enterprise deployments utilize dedicated isolated cloud environments with continuous zero-trust role-based access control (RBAC).
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
