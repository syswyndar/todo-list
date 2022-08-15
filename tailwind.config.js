/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: "#16ABF8",
      "primary-text": "#111111",
      "secondary-text": "#888888",
      gray: "#A4A4A4",
      "text-white": "#FFFFFF",
      "second-white": "#F4F4F4",
      red: "#ED4C5C",
      yellow: "#FFCE31",
      green: "#00A790",
      blue: "#43C4E3",
      purple: "#B01AFF",
    },
    container: {
      center: true,
    },
    screens: {
      sm: "320px",

      md: "640px",
      // => @media (min-width: 640px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      keyframes: {
        wiggle: {
          "0%": {
            transform: "translateY(-10%)",
            opacity: 0,
          },
          "100%": {
            transform: "translateY(0)",
            opacity: 1,
          },
        },
      },
      animation: {
        wiggle: "wiggle 0.7s",
      },
    },
  },
  plugins: [],
};
