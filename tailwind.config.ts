import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        navy: {
          950: "#040c18",
          900: "#071527",
          800: "#0d243f",
          700: "#163456",
          600: "#1f466d",
        },
        silver: {
          50: "#fbfcfe",
          100: "#f4f7fb",
          200: "#e4ebf4",
          300: "#c5d4e8",
          400: "#9bb0cc",
          500: "#7a92b3",
        },
        pearl: "#f7f9fc",
        ink: "#142033",
        muted: "#5c6b80",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "Segoe UI", "sans-serif"],
      },
      letterSpacing: {
        brand: "0.18em",
      },
      boxShadow: {
        glow: "0 24px 80px rgba(7, 21, 39, 0.28)",
        soft: "0 18px 50px rgba(20, 32, 51, 0.08)",
      },
    },
  },
  plugins: [],
} satisfies Config;
