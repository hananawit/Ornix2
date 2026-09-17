"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Activity } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { HeroVisualization } from "@/components/ui/HeroVisualization";
import { HERO_VIDEO } from "@/lib/constants";
import { FadeIn, SlideUp } from "@/components/ui/FadeIn";

export const Hero: React.FC = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Attempt to load video if available
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => setVideoLoaded(true);
    const handleError = () => setVideoError(true);

    video.addEventListener("canplaythrough", handleCanPlay);
    video.addEventListener("error", handleError);

    return () => {
      video.removeEventListener("canplaythrough", handleCanPlay);
      video.removeEventListener("error", handleError);
    };
  }, []);

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-ornix-navy-900 grid-background">
      {/* Background Video Player with Clean Visibility */}
      {!videoError && (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <video
            ref={videoRef}
            src={HERO_VIDEO}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover scale-105 opacity-80"
          />
          {/* Subtle gradient overlay to ensure text readability without obscuring the video */}
          <div className="absolute inset-0 bg-gradient-to-b from-ornix-navy-900/70 via-ornix-navy-900/40 to-ornix-navy-900" />
        </div>
      )}



      {/* Decorative Radial Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-ornix-navy-700/30 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-ornix-yellow/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Editorial Content */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <SlideUp delay={0.1}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border-ornix-yellow/30 text-ornix-yellow text-xs font-semibold uppercase tracking-wider mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                AI + HEALTHCARE INTELLIGENCE
              </div>
            </SlideUp>

            <SlideUp delay={0.2}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight leading-[1.1] mb-6">
                Intelligence for a{" "}
                <span className="text-ornix-yellow relative inline-block">
                  Healthier Future.
                  <span className="absolute bottom-1.5 left-0 w-full h-1.5 bg-ornix-yellow/25 rounded-full" />
                </span>
              </h1>
            </SlideUp>

            <SlideUp delay={0.3}>
              <p className="text-base sm:text-lg md:text-xl text-ornix-slate-300 font-normal leading-relaxed mb-8 max-w-xl">
                ORNIX combines artificial intelligence, healthcare expertise, and data-driven innovation to transform complex information into meaningful intelligence.
              </p>
            </SlideUp>

            <SlideUp delay={0.4}>
              <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
                <Button href="/solutions" variant="accent" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                  Explore Solutions
                </Button>
                <Button href="/contact" variant="glass" size="lg">
                  Talk to ORNIX
                </Button>
              </div>
            </SlideUp>

            <SlideUp delay={0.5}>
              <div className="mt-12 flex items-center gap-6 pt-6 border-t border-white/10 text-xs text-ornix-slate-400 font-mono">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-ornix-yellow" />
                  <span>Clinical Grade Models</span>
                </div>
                <div className="w-1 h-1 rounded-full bg-ornix-slate-600" />
                <span>HIPAA Aligned</span>
                <div className="w-1 h-1 rounded-full bg-ornix-slate-600" />
                <span>FHIR Native</span>
              </div>
            </SlideUp>
          </div>

          {/* Right Column: AI Visualizer Canvas */}
          <div className="lg:col-span-6 w-full">
            <FadeIn delay={0.3}>
              <HeroVisualization />
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};
