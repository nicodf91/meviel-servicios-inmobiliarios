import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#F07D00",
          red: "#DD291B",
          gray: "#D7D9D8",
          charcoal: "#332F2E",
          white: "#FFFFFF",
          warm: "#F1F1F0",
          whatsapp: "#25D366",
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      boxShadow: {
        soft: "0 14px 40px rgba(51, 47, 46, 0.08)",
        card: "0 10px 24px rgba(51, 47, 46, 0.06)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};

export default config;
