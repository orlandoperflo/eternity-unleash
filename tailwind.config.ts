import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./lib/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        night: "#050609",
        graphite: "#101217",
        bone: "#F4F0E8",
        fog: "#A9B0BA",
        ember: "#E9D8B4",
        signal: "#9AB8FF"
      },
      boxShadow: {
        orbit: "0 0 0 1px rgba(255,255,255,0.08), 0 30px 80px rgba(0,0,0,0.45)",
        glass: "inset 0 1px 0 rgba(255,255,255,0.08), 0 24px 70px rgba(0,0,0,0.35)"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      backgroundImage: {
        "radial-fade": "radial-gradient(circle at 50% 0%, rgba(154,184,255,0.20), rgba(5,6,9,0) 46%)"
      }
    }
  },
  plugins: []
};

export default config;
