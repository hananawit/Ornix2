import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ornix: {
          navy: {
            950: "#0A1226",
            900: "#111D3D",   // Brighter: was #0A1128
            850: "#1A2748",   // section background — brighter than old navy-950
            800: "#1E2E58",   // Brighter: was #142047
            700: "#253870",   // Brighter: was #1B2B5E
            600: "#2E4688",   // Brighter: was #243777
            100: "#D0DAEF",
            50:  "#EBF0FA",
          },
          yellow: {
            DEFAULT: "#F5B700",
            hover: "#E0A700",
            light: "#FFF6D6",
            glow: "rgba(245, 183, 0, 0.25)",
          },
          slate: {
            50: "#F8FAFC",
            100: "#F1F5F9",
            200: "#E2E8F0",
            400: "#94A3B8",
            600: "#475569",
            800: "#1E293B",
            900: "#0F172A",
          }
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "sans-serif"],
        heading: ["var(--font-heading)", "Plus Jakarta Sans", "sans-serif"],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': 'radial-gradient(circle at 50% 30%, rgba(37, 56, 112, 0.7) 0%, rgba(17, 29, 61, 1) 100%)',
        'glow-accent': 'radial-gradient(circle at 50% 50%, rgba(245, 183, 0, 0.15) 0%, transparent 70%)',
      },
      animation: {
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { opacity: '0.4', filter: 'blur(20px)' },
          '100%': { opacity: '0.8', filter: 'blur(30px)' },
        }
      }
    },
  },
  plugins: [],
};

export default config;
