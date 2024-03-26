// import { Bebas_Neue, Montserrat } from "next/font/google";
import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        montserrat: ["var(--font-montserrat)"],
        bebas: ["var(--font-bebas)"],
      },
      colors: {
        primary: "#d9272a",
      },
    },
  },
  plugins: [],
} satisfies Config;
