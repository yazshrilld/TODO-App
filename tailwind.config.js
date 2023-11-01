/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xsm: "350px",
        sm: "480px",
        smd: "650px",
        md: "768px",
        lg: "1024px",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "0.3rem",
          sm: "0.45rem",
          md: "2rem",
        },
      },
    },
    fontFamily: {
      jakarta: ["Plus Jakarta Sans", "sans-serif"],
    },
  },
  plugins: [],
};
