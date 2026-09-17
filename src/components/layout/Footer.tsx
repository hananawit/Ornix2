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
  Ornix AI Solutions PLC combines technical depth, local context, and sovereign artificial intelligence to build long-term technology partnerships around Ethiopia&apos;s institutional needs.
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
  <h4 className="text-sm font-bold text-white uppercase tracking-wider font-heading">
    Solutions
  </h4>

  <ul className="space-y-2.5 text-sm">
    <li>
      <Link href="/solutions#machine-learning" className="hover:text-ornix-yellow transition-colors">
        Machine Learning
      </Link>
    </li>
    <li>
      <Link href="/solutions#deep-learning" className="hover:text-ornix-yellow transition-colors">
        Deep Learning
      </Link>
    </li>
    <li>
      <Link href="/solutions#nlp" className="hover:text-ornix-yellow transition-colors">
        Natural Language Processing
      </Link>
    </li>
    <li>
      <Link href="/solutions#computer-vision" className="hover:text-ornix-yellow transition-colors">
        Computer Vision
      </Link>
    </li>
    <li>
      <Link href="/solutions#robotics" className="hover:text-ornix-yellow transition-colors">
        Robotics & Autonomous Systems
      </Link>
    </li>
    <li>
      <Link href="/solutions#expert-systems" className="hover:text-ornix-yellow transition-colors">
        Expert Systems
      </Link>
    </li>
    <li>
      <Link href="/solutions#fuzzy-logic" className="hover:text-ornix-yellow transition-colors">
        Fuzzy Logic & Cognitive Systems
      </Link>
    </li>
  </ul>
</div>

{/* Sectors Column */}
<div className="lg:col-span-2 flex flex-col gap-4">
  <h4 className="text-sm font-bold text-white uppercase tracking-wider font-heading">
    Sectors
  </h4>

  <ul className="space-y-2.5 text-sm">
    <li>
      <Link href="/sectors#agritech" className="hover:text-ornix-yellow transition-colors">
        AgriTech
      </Link>
    </li>
    <li>
      <Link href="/sectors#fintech" className="hover:text-ornix-yellow transition-colors">
        FinTech & Banking
      </Link>
    </li>
    <li>
      <Link href="/sectors#healthcare" className="hover:text-ornix-yellow transition-colors">
        Healthcare
      </Link>
    </li>
    <li>
      <Link href="/sectors#manufacturing" className="hover:text-ornix-yellow transition-colors">
        Manufacturing & Logistics
      </Link>
    </li>
    <li>
      <Link href="/sectors#public-sector" className="hover:text-ornix-yellow transition-colors">
        Public Sector
      </Link>
    </li>
  </ul>
</div>

 {/* Company Column */}
<div className="lg:col-span-2 flex flex-col gap-4">
  <h4 className="text-sm font-bold text-white uppercase tracking-wider font-heading">
    Company
  </h4>

  <ul className="space-y-2.5 text-sm">
    <li>
      <Link href="/about" className="hover:text-ornix-yellow transition-colors">
        About Ornix
      </Link>
    </li>
    <li>
      <Link href="/about#mission" className="hover:text-ornix-yellow transition-colors">
        Mission & Vision
      </Link>
    </li>
    <li>
      <Link href="/about#team" className="hover:text-ornix-yellow transition-colors">
        Our Team
      </Link>
    </li>
    <li>
      <Link href="/partnerships" className="hover:text-ornix-yellow transition-colors">
        Partnerships
      </Link>
    </li>
    <li>
      <Link href="/contact" className="hover:text-ornix-yellow transition-colors">
        Contact Us
      </Link>
    </li>
  </ul>
</div>

{/* Ornix Principles Column */}
<div className="lg:col-span-2 flex flex-col gap-4">
  <h4 className="text-sm font-bold text-white uppercase tracking-wider font-heading">
    Our Principles
  </h4>

  <div className="space-y-3 text-xs text-ornix-slate-400">
    <div className="flex items-center gap-2">
      <Shield className="w-4 h-4 text-ornix-yellow shrink-0" />
      <span>Data Sovereignty</span>
    </div>

    <div className="flex items-center gap-2">
      <CheckCircle className="w-4 h-4 text-ornix-yellow shrink-0" />
      <span>Locally Grounded AI</span>
    </div>

    <div className="flex items-center gap-2">
      <CheckCircle className="w-4 h-4 text-ornix-yellow shrink-0" />
      <span>Secure AI Infrastructure</span>
    </div>

    <div className="flex items-center gap-2">
      <CheckCircle className="w-4 h-4 text-ornix-yellow shrink-0" />
      <span>Knowledge Transfer</span>
    </div>
  </div>
</div>
</div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-ornix-slate-400">
<p>© {new Date().getFullYear()} Ornix AI Solutions PLC. All rights reserved.</p>          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-ornix-yellow transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-ornix-yellow transition-colors">Terms of Service</Link>
            <Link href="/contact" className="hover:text-ornix-yellow transition-colors">Security & Trust</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
