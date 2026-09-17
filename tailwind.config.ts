import type { Config } from "tailwindcss";

/**
 * ORNIX design tokens
 * ---------------------------------------------------------------
 * Light-first system. Navy is structure + primary action.
 * Yellow is a signal colour only — never a large area on white,
 * never body text. Neutrals are cool (blue-tinted) so white
 * sections read clinical rather than warm//cream.
 */
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ornix: {
          /* ---- Navy: text, dark anchor sections, primary buttons ---- */
          navy: {
            50: "#F1F5FC",
            100: "#DCE5F5",
            200: "#BFCEE9",
            500: "#5472A6",
            600: "#3A5789",
            700: "#27406F",
            800: "#1A2C58",
            850: "#122045",
            900: "#0B1533",
            950: "#050B1C",
          },

          /* ---- Cool neutrals: canvas, paper, borders, muted text ---- */
          slate: {
            50: "#F7F9FC",
            100: "#EEF2F8",
            200: "#DDE4EF",
            300: "#C3CEDF",
            400: "#94A3B8",
            500: "#64748B",
            600: "#4A5A72",
            700: "#374357",
            800: "#253040",
            900: "#0F172A",
          },

          /* ---- Signal yellow ----
             DEFAULT sits on navy. Use 700+ for yellow *text* on
             white (DEFAULT fails contrast at body sizes). */
          yellow: {
            DEFAULT: "#F5B700",
            hover: "#DBA300",
            light: "#FFF6D6",
            glow: "rgba(245, 183, 0, 0.25)",
            50: "#FFF9E6",
            100: "#FFF0BF",
            200: "#FFE58A",
            300: "#FFD84D",
            400: "#FFC81A",
            500: "#F5B700",
            600: "#D9A200",
            700: "#A87E00",
            800: "#7A5C00",
            900: "#4F3C00",
          },
        },
      },

      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        heading: ["var(--font-heading)", "var(--font-sans)", "sans-serif"],
        editorial: ["var(--font-editorial)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },

      /* Fluid display sizes so the hero never needs 4 breakpoints. */
      fontSize: {
        "display-xl": ["clamp(2.75rem, 6vw, 4.5rem)", { lineHeight: "1.04", letterSpacing: "-0.03em", fontWeight: "700" }],
        "display-lg": ["clamp(2.25rem, 4.6vw, 3.5rem)", { lineHeight: "1.08", letterSpacing: "-0.025em", fontWeight: "700" }],
        "display-md": ["clamp(1.875rem, 3.4vw, 2.75rem)", { lineHeight: "1.12", letterSpacing: "-0.02em", fontWeight: "700" }],
        "display-sm": ["clamp(1.5rem, 2.4vw, 2rem)", { lineHeight: "1.2", letterSpacing: "-0.015em", fontWeight: "650" }],
        "body-lg": ["1.125rem", { lineHeight: "1.65" }],
        "body": ["1rem", { lineHeight: "1.7" }],
        "body-sm": ["0.9375rem", { lineHeight: "1.6" }],
        "meta": ["0.8125rem", { lineHeight: "1.5", letterSpacing: "0.01em" }],
      },

      /* Radius hierarchy carries meaning: controls < cards < panels. */
      borderRadius: {
        control: "0.625rem", // 10px — buttons, inputs
        card: "0.875rem",    // 14px — cards, tiles
        panel: "1.25rem",    // 20px — large containers, media
        hero: "1.75rem",     // 28px — hero visual, feature blocks
      },

      /* Navy-tinted, layered. This is what makes a light page feel
         built rather than flat. No generic rgba(0,0,0,.1). */
      boxShadow: {
        "e1": "0 1px 2px rgba(11, 21, 51, 0.04), 0 1px 3px rgba(11, 21, 51, 0.06)",
        "e2": "0 2px 4px rgba(11, 21, 51, 0.04), 0 6px 16px -4px rgba(11, 21, 51, 0.08)",
        "e3": "0 4px 8px rgba(11, 21, 51, 0.04), 0 16px 32px -8px rgba(11, 21, 51, 0.10)",
        "e4": "0 8px 16px rgba(11, 21, 51, 0.06), 0 32px 64px -16px rgba(11, 21, 51, 0.16)",
        "signal": "0 6px 20px -6px rgba(245, 183, 0, 0.45)",
        "inset-hairline": "inset 0 0 0 1px rgba(11, 21, 51, 0.07)",
      },

      /* Section rhythm — used by the .section utility in globals.css */
      spacing: {
        "section": "6rem",
        "section-lg": "8rem",
      },

      maxWidth: {
        container: "80rem", // 1280px
        prose: "68ch",      // keeps line length under ~80 chars
      },

      aspectRatio: {
        hero: "4 / 3",
        media: "16 / 10",
        portrait: "3 / 4",
      },

      transitionTimingFunction: {
        out: "cubic-bezier(0.16, 1, 0.3, 1)",
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        /* Light-system replacements for the old dark hero washes. */
        "wash-paper": "radial-gradient(120% 80% at 50% 0%, #FFFFFF 0%, #F4F6FA 100%)",
        "wash-signal": "radial-gradient(circle at 50% 50%, rgba(245, 183, 0, 0.14) 0%, transparent 70%)",
        "wash-navy": "radial-gradient(circle at 50% 30%, #1A2C58 0%, #0B1533 100%)",
      },

      keyframes: {
        "rise": {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-signal": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.35" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%": { opacity: "0.4", filter: "blur(20px)" },
          "100%": { opacity: "0.8", filter: "blur(30px)" },
        },
      },
      animation: {
        rise: "rise 0.6s cubic-bezier(0.16, 1, 0.3, 1) both",
        "pulse-signal": "pulse-signal 2.4s ease-in-out infinite",
        "pulse-subtle": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
        glow: "glow 3s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [],
};

export default config;
