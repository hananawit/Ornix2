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
            950: "#060A18",
            900: "#0A1128", // Deep primary navy
            850: "#0F1836",
            800: "#142047",
            700: "#1B2B5E",
            600: "#243777",
            100: "#E6EAFA",
            50: "#F2F5FD",
          },
          yellow: {
            DEFAULT: "#F5B700", // Warm logo golden accent
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
        'hero-pattern': 'radial-gradient(circle at 50% 30%, rgba(20, 32, 71, 0.8) 0%, rgba(10, 17, 40, 1) 100%)',
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
