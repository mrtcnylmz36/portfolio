/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    screens: {
      sm: "800px",
      // => @media (min-width: 640px) { ... }

      md: "1300px",
      // => @media (min-width: 768px) { ... }

      lg: "1500px",
      // => @media (min-width: 1024px) { ... }

      xl: "1600px",
      // => @media (min-width: 1280px) { ... }
    },
    colors: {
      ...colors,
      bg: "#F5F5F5",
      bgdark: "#F1F1F1",
      mygreen: "#325846",
      dark: "#1b1b1b",
    },
  },
  plugins: [require("daisyui")],
  darkMode: "class",
};
