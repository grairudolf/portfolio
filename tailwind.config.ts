import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        steel: "#4A90B8",
        charcoal: "#1a1a2e",
        offwhite: "#f4f3ef",
        midgrey: "#e9e8e3",
        steelDark: "#2f6a8a"
      },
      maxWidth: {
        page: "1140px"
      },
      boxShadow: {
        brutalSm: "5px 5px 0px #1a1a2e",
        brutalMd: "8px 8px 0px #1a1a2e",
        brutalLg: "12px 12px 0px #1a1a2e",
        brutalDark: "8px 8px 0px #2f6a8a"
      },
      transitionTimingFunction: {
        brutal: "ease"
      },
      transitionDuration: {
        brutal: "120ms"
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        }
      },
      animation: {
        marquee: "marquee 20s linear infinite"
      }
    }
  },
  plugins: []
};

export default config;
