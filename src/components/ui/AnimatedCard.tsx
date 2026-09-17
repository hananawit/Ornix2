"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  theme?: "dark" | "light";
  accentOnHover?: boolean;
}

export const AnimatedCard: React.FC<AnimatedCardProps> = ({
  children,
  className,
  theme = "dark",
  accentOnHover = true,
}) => {
  return (
    <motion.div
      whileHover={{ y: -5, transition: { duration: 0.3, ease: "easeOut" } }}
      className={cn(
        "relative rounded-2xl p-6 md:p-8 transition-all duration-300 group overflow-hidden",
        theme === "dark"
          ? "bg-ornix-navy-850/80 border border-white/10 hover:border-ornix-yellow/40 hover:shadow-xl hover:shadow-ornix-navy-950/60"
          : "bg-white border border-ornix-slate-200 hover:border-ornix-navy-700/30 hover:shadow-xl hover:shadow-ornix-slate-200/50 text-ornix-slate-900",
        className
      )}
    >
      {/* Subtle top accent line on hover */}
      {accentOnHover && (
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-ornix-yellow to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}
      
      {children}
    </motion.div>
  );
};
