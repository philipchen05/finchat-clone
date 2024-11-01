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
        scroll1: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-81%)' },
        },
        scroll2: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50.35%)' },
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
        highlighter: '#ffe7ba',
        dataDarkGrey: "#5e5e74",
        almostBlack: '#262421',
        chatGrey: "#5e5e74",
        chatText: "#d8d9df",
        chatProfile: "#3f404d",
        veryLightGrey: "#e1e3e1",
      },
      animation: {
        scroll1: 'scroll1 20s linear infinite',
        scroll2: 'scroll2 30s linear infinite',
      },
    },
  },
  plugins: [],
};
export default config;
