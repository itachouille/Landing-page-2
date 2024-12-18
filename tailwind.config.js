/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#242424",
        gray: "#626262",
        orange: "#F2B53C",
      },
      fontFamily: {
        dm: ["DM Sans"],
        manrope: ["Manrope"],
      },
    },
  },
  plugins: [],
};
