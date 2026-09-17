import React from "react";
import { Sparkles } from "lucide-react";

interface PageBannerProps {
  badge: string;
  title: React.ReactNode;
  subtitle?: string;
  /** Optional pill text rendered below subtitle */
  tagline?: string;
  /** Indigo left glow? default true */
  indigoGlow?: boolean;
}

/**
 * Consistent premium page-header banner across all inner pages.
 * Uses the same gold + indigo dual-glow treatment as the Hero.
 */
export const PageBanner: React.FC<PageBannerProps> = ({
  badge,
  title,
  subtitle,
  tagline,
  indigoGlow = true,
}) => {
  return (
    <section
      className="py-24 text-center relative overflow-hidden border-b border-white/10"
      style={{
        background:
          "linear-gradient(135deg, #0d1937 0%, #111D3D 45%, #0f1c3a 75%, #0a1226 100%)",
      }}
    >
      {/* Dot-grid texture */}
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />

      {/* Indigo ambient glow – top-left */}
      {indigoGlow && (
        <div
          className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(99,102,241,0.14) 0%, transparent 70%)",
          }}
        />
      )}

      {/* Gold ambient glow – center */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(245,183,0,0.09) 0%, transparent 70%)",
        }}
      />

      {/* Navy depth glow – bottom-right */}
      <div
        className="absolute -bottom-20 -right-20 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(37,56,112,0.40) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Badge pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-bold uppercase tracking-[0.13em] mb-6"
          style={{
            background: "rgba(245,183,0,0.08)",
            borderColor: "rgba(245,183,0,0.30)",
            color: "#F5B700",
          }}
        >
          <Sparkles className="w-3 h-3" />
          {badge}
        </div>

        {/* Title */}
        <h1
          className="font-heading font-extrabold tracking-tight text-white mb-5 leading-tight"
          style={{ fontSize: "clamp(1.8rem, 4.5vw, 3.5rem)" }}
        >
          {title}
        </h1>

        {/* Tagline (italic / gold) */}
        {tagline && (
          <p
            className="text-lg sm:text-xl font-semibold mb-4"
            style={{ color: "#F5B700" }}
          >
            {tagline}
          </p>
        )}

        {/* Subtitle */}
        {subtitle && (
          <p className="text-base sm:text-lg leading-relaxed max-w-2xl mx-auto"
            style={{ color: "rgba(255,255,255,0.60)" }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};
