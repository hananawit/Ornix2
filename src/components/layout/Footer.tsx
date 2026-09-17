"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { LOGO_PATH, BRAND_NAME, BRAND_TAGLINE } from "@/lib/constants";
import { ArrowUpRight, Linkedin, Twitter, Youtube, Shield, CheckCircle } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-ornix-navy-850 text-ornix-slate-300 border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-ornix-yellow/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand Info Column */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 overflow-hidden rounded-xl border border-white/15">
                <Image src={LOGO_PATH} alt="ORNIX Logo" fill sizes="40px" className="object-cover" />
              </div>
              <span className="text-2xl font-bold tracking-wider text-white font-heading">{BRAND_NAME}</span>
            </Link>

            <p className="text-sm leading-relaxed text-ornix-slate-400 max-w-sm">
              "{BRAND_TAGLINE}"
            </p>

            <p className="text-xs leading-relaxed text-ornix-slate-500 max-w-sm">
              ORNIX combines artificial intelligence, healthcare domain expertise, and data-driven innovation to build smarter, more responsive healthcare systems.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-white hover:text-ornix-yellow hover:border-ornix-yellow/40 transition-colors"
                aria-label="ORNIX LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-white hover:text-ornix-yellow hover:border-ornix-yellow/40 transition-colors"
                aria-label="ORNIX X Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-white hover:text-ornix-yellow hover:border-ornix-yellow/40 transition-colors"
                aria-label="ORNIX YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Solutions Column */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-heading">Solutions</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/solutions#clinical-intelligence" className="hover:text-ornix-yellow transition-colors">Clinical Intelligence</Link></li>
              <li><Link href="/solutions#medical-data-intelligence" className="hover:text-ornix-yellow transition-colors">Medical Data</Link></li>
              <li><Link href="/solutions#intelligent-assistants" className="hover:text-ornix-yellow transition-colors">Intelligent Assistants</Link></li>
              <li><Link href="/solutions#predictive-analytics" className="hover:text-ornix-yellow transition-colors">Predictive Analytics</Link></li>
              <li><Link href="/solutions#computer-vision" className="hover:text-ornix-yellow transition-colors">Computer Vision</Link></li>
              <li><Link href="/solutions#natural-language-ai" className="hover:text-ornix-yellow transition-colors">Natural Language AI</Link></li>
            </ul>
          </div>

          {/* Research & Platform Column */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-heading">Research</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/research#pipeline" className="hover:text-ornix-yellow transition-colors">Research Pipeline</Link></li>
              <li><Link href="/research#focus-areas" className="hover:text-ornix-yellow transition-colors">Focus Areas</Link></li>
              <li><Link href="/research#publications" className="hover:text-ornix-yellow transition-colors">Publications</Link></li>
              <li><Link href="/research#responsible-ai" className="hover:text-ornix-yellow transition-colors">Responsible AI</Link></li>
              <li><Link href="/products" className="hover:text-ornix-yellow transition-colors">Platform Suite</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-heading">Company</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/about" className="hover:text-ornix-yellow transition-colors">About ORNIX</Link></li>
              <li><Link href="/about#mission" className="hover:text-ornix-yellow transition-colors">Mission & Vision</Link></li>
              <li><Link href="/about#team" className="hover:text-ornix-yellow transition-colors">Leadership & Team</Link></li>
              <li><Link href="/resources" className="hover:text-ornix-yellow transition-colors">Resources & Insights</Link></li>
              <li><Link href="/contact" className="hover:text-ornix-yellow transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Compliance & Contact Column */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-heading">Standards</h4>
            <div className="space-y-3 text-xs text-ornix-slate-400">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-ornix-yellow" />
                <span>HIPAA Aligned Security</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-ornix-yellow" />
                <span>FHIR R4 Interoperable</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-ornix-yellow" />
                <span>Clinical Grade AI</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-ornix-slate-400">
          <p>Â© {new Date().getFullYear()} ORNIX Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-ornix-yellow transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-ornix-yellow transition-colors">Terms of Service</Link>
            <Link href="/contact" className="hover:text-ornix-yellow transition-colors">Security & Trust</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
