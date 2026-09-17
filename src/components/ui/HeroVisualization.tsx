"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export const HeroVisualization: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 600);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 600);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener("resize", handleResize);

    // Connected Healthcare & AI Data Nodes
    const numNodes = 28;
    const nodes: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      pulse: number;
      type: "signal" | "data" | "neural" | "accent";
    }[] = [];

    for (let i = 0; i < numNodes; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 3 + 2,
        pulse: Math.random() * Math.PI * 2,
        type: i % 7 === 0 ? "accent" : i % 3 === 0 ? "signal" : "neural",
      });
    }

    let time = 0;

    const draw = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      // Draw subtle background medical pulse wave (ECG/Signal line)
      ctx.beginPath();
      ctx.strokeStyle = "rgba(245, 183, 0, 0.08)";
      ctx.lineWidth = 1.5;
      const centerY = height * 0.5;
      for (let x = 0; x < width; x += 3) {
        const signalY =
          centerY +
          Math.sin(x * 0.01 + time) * 20 +
          (x > width * 0.4 && x < width * 0.6 ? Math.sin((x - width * 0.4) * 0.1) * 40 : 0);
        if (x === 0) ctx.moveTo(x, signalY);
        else ctx.lineTo(x, signalY);
      }
      ctx.stroke();

      // Connect nodes with neural network lines
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            const alpha = (1 - dist / 150) * 0.25;
            ctx.beginPath();
            if (nodes[i].type === "accent" || nodes[j].type === "accent") {
              ctx.strokeStyle = `rgba(245, 183, 0, ${alpha * 1.5})`;
              ctx.lineWidth = 1.2;
            } else {
              ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
              ctx.lineWidth = 0.8;
            }
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw and update nodes
      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        node.pulse += 0.03;
        const currentRadius = node.radius + Math.sin(node.pulse) * 1.2;

        ctx.beginPath();
        ctx.arc(node.x, node.y, currentRadius, 0, Math.PI * 2);

        if (node.type === "accent") {
          ctx.fillStyle = "#F5B700";
          ctx.shadowColor = "#F5B700";
          ctx.shadowBlur = 12;
        } else {
          ctx.fillStyle = "rgba(255, 255, 255, 0.85)";
          ctx.shadowColor = "rgba(255, 255, 255, 0.5)";
          ctx.shadowBlur = 6;
        }

        ctx.fill();
        ctx.shadowBlur = 0; // reset
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-full h-[400px] md:h-[520px] rounded-3xl glass-panel p-6 flex items-center justify-center overflow-hidden border border-white/10 shadow-2xl">
      {/* Background radial highlight */}
      <div className="absolute inset-0 bg-gradient-radial from-ornix-yellow/10 via-transparent to-transparent pointer-events-none" />

      {/* Interactive canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Overlay glass card elements */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="absolute top-6 left-6 glass-panel px-4 py-3 rounded-xl border border-white/15 backdrop-blur-xl flex items-center gap-3 shadow-lg"
      >
        <div className="w-3 h-3 rounded-full bg-ornix-yellow animate-ping" />
        <div>
          <p className="text-xs text-ornix-slate-400 font-mono">LIVE TELEMETRY STREAM</p>
          <p className="text-sm font-semibold text-white">10k+ Signals / Sec</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-6 right-6 glass-panel px-4 py-3 rounded-xl border border-white/15 backdrop-blur-xl flex items-center gap-3 shadow-lg"
      >
        <div className="w-8 h-8 rounded-lg bg-ornix-yellow/20 flex items-center justify-center text-ornix-yellow font-bold text-xs">
          AI
        </div>
        <div>
          <p className="text-xs text-ornix-slate-400 font-mono">MODEL ACCURACY</p>
          <p className="text-sm font-semibold text-white">Clinical Grade</p>
        </div>
      </motion.div>

      {/* Central Brand Ring Graphic */}
      <div className="relative z-10 w-44 h-44 rounded-full border border-ornix-yellow/30 flex items-center justify-center p-4 bg-ornix-navy-900/60 backdrop-blur-md shadow-2xl">
        <div className="w-36 h-36 rounded-full border border-white/20 flex items-center justify-center text-center animate-pulse-subtle">
          <div>
            <span className="text-xs font-mono tracking-widest text-ornix-yellow block mb-1">ORNIX CORE</span>
            <span className="text-xl font-bold text-white tracking-wider">INTELLIGENCE</span>
          </div>
        </div>
      </div>
    </div>
  );
};
