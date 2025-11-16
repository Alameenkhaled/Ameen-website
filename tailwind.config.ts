import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#D4B358", // Gold/Yellow color from buttons
        "background-light": "#F3F4F6", // A light grey for contrast
        "background-dark": "#0A0D1B", // The deep blue from the image
      },
      fontFamily: {
        display: ["Poppins", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "1rem", // 16px, matching the rounded cards
      },
    },
  },
  plugins: [],
};
export default config;
