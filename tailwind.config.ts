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
        primary: {
          background: "#FBF8F1", // Soft Cream/Linen
          text: "#2F4F4F", // Deep Forest Green
        },
        accent: {
          primary: "#C8795A", // Warm Terracotta/Rust
          secondary: "#87CEEB", // Muted Sky Blue
        },
        highlight: "#DAA520", // Goldenrod Yellow
      },
    },
  },
  plugins: [],
};

export default config; 