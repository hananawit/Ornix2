"use client";

import React, { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Search, ArrowRight, BookOpen, Clock, Tag } from "lucide-react";
import Link from "next/link";

interface Article {
  id: string;
  title: string;
  category: "AI" | "Healthcare" | "Research" | "Data Science" | "Digital Health" | "Engineering";
  type: "Article" | "Research" | "Report" | "Case Study" | "News";
  readTime: string;
  date: string;
  excerpt: string;
}

const ARTICLES: Article[] = [
  {
    id: "art-1",
    title: "Navigating HIPAA Compliance for Generative AI in Ambient Clinical Documentation",
    category: "AI",
    type: "Article",
    readTime: "6 min read",
    date: "Sep 2025",
    excerpt: "How domain-tuned foundation models isolate patient health data without storing transient dictation audio streams.",
  },
  {
    id: "art-2",
    title: "FHIR R4 vs. Legacy HL7: Architecting Real-Time Hospital Telemetry Pipelines",
    category: "Data Science",
    type: "Report",
    readTime: "10 min read",
    date: "Aug 2025",
    excerpt: "A deep dive into low-latency event-driven microservice architectures for intensive care unit telemetry ingestion.",
  },
  {
    id: "art-3",
    title: "Reducing Sepsis Mortality with Early-Warning Temporal Deep Learning Models",
    category: "Research",
    type: "Research",
    readTime: "8 min read",
    date: "Jul 2025",
    excerpt: "Evaluating multi-center retrospective validation metrics across 24,000 anonymized ICU vital streams.",
  },
  {
    id: "art-4",
    title: "Automating Prior Authorization: Bridging Payer Rules with Clinical Evidence",
    category: "Healthcare",
    type: "Case Study",
    readTime: "5 min read",
    date: "Jun 2025",
    excerpt: "How natural language entity linking maps physician chart narratives directly to payer necessity coverage guidelines.",
  },
  {
    id: "art-5",
    title: "Sub-Millimeter Anomaly Detection in High-Throughput DICOM Radiology",
    category: "Engineering",
    type: "Article",
    readTime: "7 min read",
    date: "May 2025",
    excerpt: "Optimizing 3D convolutional neural networks for zero-latency DICOM PACS viewer bounding-box rendering.",
  },
];

const CATEGORIES = ["All", "AI", "Healthcare", "Research", "Data Science", "Digital Health", "Engineering"];

export default function ResourcesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredArticles = ARTICLES.filter((article) => {
    const matchesCategory = selectedCategory === "All" || article.category === selectedCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-28 pb-20 bg-ornix-navy-900 text-white min-h-screen">
      {/* Banner */}
      <section className="py-16 bg-ornix-navy-950 border-b border-white/10 grid-background text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ornix-yellow/20 border border-ornix-yellow/40 text-ornix-yellow text-xs font-semibold uppercase tracking-wider mb-4">
            ORNIX INSIGHTS & THOUGHT LEADERSHIP
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-white tracking-tight mb-4">
            Knowledge for Modern Healthcare
          </h1>
          <p className="text-base sm:text-lg text-ornix-slate-300 leading-relaxed max-w-2xl mx-auto">
            Articles, research summaries, and engineering reports detailing artificial intelligence innovation in clinical medicine.
          </p>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 w-full md:w-auto no-scrollbar">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-ornix-yellow text-ornix-navy-950 font-bold"
                    : "glass-panel text-ornix-slate-300 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-ornix-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search insights..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full glass-panel text-xs text-white placeholder-ornix-slate-400 focus:outline-none focus:border-ornix-yellow/50"
            />
          </div>
        </div>

        {/* Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              className="glass-panel p-8 rounded-3xl border border-white/10 hover:border-ornix-yellow/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-mono font-semibold text-ornix-yellow bg-ornix-yellow/10 px-3 py-1 rounded-full border border-ornix-yellow/20">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] text-ornix-slate-400 font-mono">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold font-heading text-white mb-3 group-hover:text-ornix-yellow transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="text-ornix-slate-300 text-xs leading-relaxed mb-6">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-ornix-yellow">
                <span className="text-ornix-slate-400 font-mono">{article.date}</span>
                <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Read Insight <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
