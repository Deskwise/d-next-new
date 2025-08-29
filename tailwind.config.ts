import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "var(--color-accent)",
        surface: "var(--color-bg)",
        white: "var(--color-white)",
        dark: "var(--color-dark)",
        "muted-light": "var(--color-muted-light)",
        border: "var(--color-border)",
        accent: "var(--color-accent)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "sans-serif"],
        serif: ["var(--font-serif)", "Instrument Serif", "serif"],
        display: ["var(--font-display)", "Inter", "sans-serif"],
        inter: ["var(--font-inter)", "Inter", "sans-serif"],
        "instrument-serif": ["var(--font-instrument-serif)", "Instrument Serif", "serif"],
      },
      spacing: {
        "1": "var(--space-1)",
        "2": "var(--space-2)",
        "3": "var(--space-3)",
        "4": "var(--space-4)",
        "5": "var(--space-5)",
        "6": "var(--space-6)",
        "18": "var(--space-18)",
        "20": "var(--space-20)",
        "24": "var(--space-24)",
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "1rem",
        "2xl": "1.25rem",
        full: "var(--radius-full)",
      },
      boxShadow: {
        soft: "var(--shadow-soft)",
        accent: "var(--shadow-accent)",
        glow: "0 0 40px rgba(108,124,255,.35)",
      },
      screens: {
        sm: "390px",
        md: "810px", 
        lg: "1200px",
        xl: "1279px",
      },
    },
  },
  plugins: [],
} satisfies Config;