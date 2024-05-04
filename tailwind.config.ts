// import { Bebas_Neue, Montserrat } from "next/font/google";
import { type Config } from "tailwindcss";
import { fontFamily, screens } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        montserrat: ["var(--font-montserrat)", ...fontFamily.sans],
        bebas: ["var(--font-bebas)", ...fontFamily.sans],
      },
      colors: {
        primary: "#d9272a",
      },
    },
    screens: {
      ...screens,
      "2xl": "1537px",
      lg: "1025px",
    },
  },
  plugins: [],
} satisfies Config;
