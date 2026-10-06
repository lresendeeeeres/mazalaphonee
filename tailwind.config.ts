import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        mazala: {
          bg: "#050505",
          surface: "#0D0D10",
          "surface-2": "#141418",
          border: "rgba(255, 255, 255, 0.08)",
          red: "#E10B1F",
          "red-glow": "rgba(225, 11, 31, 0.25)",
          gold: "#C8A45D",
          "gold-soft": "#E8D5A3",
          "gold-glow": "rgba(200, 164, 93, 0.2)",
          text: "#F5F5F7",
          muted: "#9A9AA3",
        },
      },
      fontFamily: {
        heading: ["Jost", "Sora", "sans-serif"],
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
      letterSpacing: {
        "apple-wide": "0.25em",
        "apple-widest": "0.38em",
      },
      boxShadow: {
        "gold-glow": "0 0 25px rgba(200, 164, 93, 0.15)",
        "red-glow": "0 0 25px rgba(225, 11, 31, 0.2)",
        "card-luxury": "0 8px 32px 0 rgba(0, 0, 0, 0.6)",
      },
    },
  },
  plugins: [],
};
export default config;
