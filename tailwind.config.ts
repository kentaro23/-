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
        "mf-navy": {
          950: "#0B1220",
          900: "#111D32",
          800: "#13223D",
          700: "#1C3254"
        },
        "mf-teal": {
          100: "#E0F5F4",
          300: "#5CD6D6",
          400: "#2ABFBF",
          500: "#1F9993"
        },
        "mf-gray": {
          50: "#F8F9FB",
          100: "#F0F2F5",
          200: "#E2E5EA",
          400: "#8A9DB5",
          500: "#5A6B80",
          600: "#3D4F63"
        },
        brand: {
          50: "#F8F9FB",
          100: "#F0F2F5",
          200: "#E2E5EA",
          300: "#C8D0DB",
          400: "#8A9DB5",
          500: "#5A6B80",
          600: "#3D4F63",
          700: "#1C3254",
          800: "#13223D",
          900: "#0B1220"
        },
        accent: {
          50: "#EAF8F7",
          100: "#E0F5F4",
          200: "#BCEBE8",
          300: "#5CD6D6",
          400: "#2ABFBF",
          500: "#1F9993",
          600: "#1A7D78",
          700: "#145F5C",
          800: "#114C49",
          900: "#0D3C3A"
        },
        slateInk: "#0f172a"
      },
      fontFamily: {
        sans: ["Poppins", "Noto Sans JP", "sans-serif"],
        jp: ["Noto Sans JP", "sans-serif"]
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
          "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.14) 1px, transparent 0)"
      }
    }
  },
  plugins: []
};

export default config;
