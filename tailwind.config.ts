import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f1f7fb",
          100: "#dcebf6",
          200: "#bad8ec",
          300: "#8dbde0",
          400: "#5c9bce",
          500: "#3e82b6",
          600: "#2f6998",
          700: "#27537a",
          800: "#223f5e",
          900: "#1d3350"
        },
        accent: {
          50: "#ecfdfa",
          100: "#d2f8f0",
          200: "#a8efe1",
          300: "#72e2cf",
          400: "#3acab5",
          500: "#1fb19f",
          600: "#178f83",
          700: "#177369",
          800: "#175c55",
          900: "#174c47"
        },
        slateInk: "#0f172a"
      },
      boxShadow: {
        soft: "0 10px 30px rgba(15, 23, 42, 0.08)",
        panel: "0 6px 24px rgba(15, 23, 42, 0.06)"
      },
      borderRadius: {
        "4xl": "2rem"
      },
      backgroundImage: {
        "hero-grid":
          "radial-gradient(circle at 1px 1px, rgba(34,63,94,0.12) 1px, transparent 0)"
      }
    }
  },
  plugins: []
};

export default config;
