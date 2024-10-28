import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-81%)' },
        },
      },
      colors: {
        darkWhite: "#f9f8f6",
        grey: "#e8e6e3",
        darkGrey: "#bdbbb9",
        greyText: "#777169",
        greyBox: "#30313b",
        barBlue: "#05a6f0",
        barRed: "#ea4335",
        borderGrey: "#2c2c35",
        lightGrey: "#49495b",
      },
      animation: {
        scroll: 'scroll 20s linear infinite',
      },
    },
  },
  plugins: [],
};
export default config;
