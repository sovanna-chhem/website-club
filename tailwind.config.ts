import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#080B12",
        panel: "#101620",
        line: "#1E2A3A",
        lime: "#C8F169",
        cyan: "#63E6FF"
      },
      boxShadow: {
        glow: "0 0 60px rgba(200,241,105,.1)"
      }
    }
  },
  plugins: []
};

export default config;
