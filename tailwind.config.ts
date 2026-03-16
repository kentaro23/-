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
        ink: "#111827",
        surface: "#f9fafb",
        accent: {
          DEFAULT: "#0d9488",
          dark: "#0f766e"
        }
      },
      fontFamily: {
        sans: ["Noto Sans JP", "sans-serif"],
        en: ["Poppins", "Noto Sans JP", "sans-serif"]
      },
      boxShadow: {
        subtle: "0 1px 2px rgba(0, 0, 0, 0.04)"
      }
    }
  },
  plugins: []
};

export default config;
