import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        school: {
          maroon: "#800000", // Classic Academic Maroon
          gold: "#FFD700",   // Classic Gold
        },
      },
    },
  },
  plugins: [],
};
export default config;