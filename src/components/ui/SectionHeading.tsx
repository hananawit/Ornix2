"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  highlightText?: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  theme?: "dark" | "light";
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  highlightText,
  subtitle,
  align = "center",
  theme = "dark",
  className,
}) => {
  const alignClasses = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto max-w-3xl",
    right: "text-right items-end ml-auto",
  };

  const titleTheme = theme === "dark" ? "text-white" : "text-ornix-slate-900";
  const subtitleTheme = theme === "dark" ? "text-ornix-slate-400" : "text-ornix-slate-600";

  return (
    <div className={cn("flex flex-col mb-12 md:mb-16", alignClasses[align], className)}>
      {badge && (
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ornix-navy-800/80 border border-ornix-yellow/30 text-ornix-yellow text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-ornix-yellow animate-pulse" />
          {badge}
        </div>
      )}

      <h2 className={cn("text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight font-heading leading-tight", titleTheme)}>
        {highlightText && title.includes(highlightText) ? (
          <>
            {title.split(highlightText)[0]}
            <span className="text-ornix-yellow relative inline-block">
              {highlightText}
              <span className="absolute bottom-1 left-0 w-full h-1 bg-ornix-yellow/20 rounded-full" />
            </span>
            {title.split(highlightText)[1]}
          </>
        ) : (
          <>
            {title}{" "}
            {highlightText && (
              <span className="text-ornix-yellow relative inline-block">
                {highlightText}
                <span className="absolute bottom-1 left-0 w-full h-1 bg-ornix-yellow/20 rounded-full" />
              </span>
            )}
          </>
        )}
      </h2>


      {subtitle && (
        <p className={cn("mt-4 text-base md:text-lg leading-relaxed max-w-2xl font-normal", subtitleTheme)}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
