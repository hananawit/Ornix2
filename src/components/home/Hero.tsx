"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Activity } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { HeroVisualization } from "@/components/ui/HeroVisualization";
import { HERO_VIDEO } from "@/lib/constants";
import { FadeIn, SlideUp } from "@/components/ui/FadeIn";

export const Hero: React.FC = () => {
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const handleError = () => setVideoError(true);
    video.addEventListener("error", handleError);
    return () => video.removeEventListener("error", handleError);
  }, []);

  return (
    <section className="relative min-h-[95vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-ornix-navy-900 grid-background">

      {/* Background Video – clean with light overlay */}
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
            className="w-full h-full object-cover scale-105 opacity-75"
          />
          {/* Very light gradient overlay — video clearly visible */}
          <div className="absolute inset-0 bg-gradient-to-b from-ornix-navy-900/55 via-ornix-navy-850/25 to-ornix-navy-900/85" />
        </div>
      )}

      {/* Ambient hero light blobs — brighter & larger */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-ornix-navy-700/40 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute top-1/3 -left-20 w-[500px] h-[500px] bg-ornix-navy-600/20 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[550px] h-[550px] bg-ornix-yellow/12 rounded-full blur-[180px] pointer-events-none" />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <SlideUp delay={0.1}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-ornix-yellow/40 text-ornix-yellow text-xs font-semibold uppercase tracking-wider mb-6 shadow-sm backdrop-blur-sm">
                <Sparkles className="w-3.5 h-3.5" />
                SOVEREIGN AI • ETHIOPIA • AFRICA
              </div>
            </SlideUp>

            <SlideUp delay={0.2}>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight leading-[1.08] mb-6 drop-shadow-lg">
  Bridging{" "}
  <span className="text-ornix-yellow relative inline-block">
    AI & Ethiopia's Growth.
  </span>
</h1>
            </SlideUp>

            <SlideUp delay={0.3}>
              <p className="text-base sm:text-lg md:text-xl text-white/80 font-normal leading-relaxed mb-8 max-w-xl drop-shadow">
We are here to effectively bridge high-level technical depth with Ethiopia's economic growth pillars, becoming an indispensable national technology partner rather than just another IT vendor.              </p>
            </SlideUp>

            <SlideUp delay={0.4}>
              <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
                <Button href="/solutions" variant="accent" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
Explore Our Capabilities                </Button>
                <Button href="/contact" variant="glass" size="lg">
Partner With Ornix                </Button>
              </div>
            </SlideUp>

<SlideUp delay={0.5}>
  <div className="mt-12 flex items-center gap-6 pt-6 border-t border-white/15 text-xs text-white/60 font-mono">
    <div className="flex items-center gap-2">
      <Activity className="w-4 h-4 text-ornix-yellow" />
      <span>Sovereign AI</span>
    </div>

    <div className="w-1 h-1 rounded-full bg-white/30" />

    <span>Local Intelligence</span>

    <div className="w-1 h-1 rounded-full bg-white/30" />

    <span>Co-Innovation</span>
  </div>
</SlideUp>
          </div>

          {/* Right Column: AI Visualizer */}
<div className="lg:col-span-6 w-full">
  <FadeIn delay={0.3}>
<div className="relative w-full aspect-[16/9]">
  <HeroVisualization />
</div>
  </FadeIn>
</div>
        </div>
      </div>
    </section>
  );
};
