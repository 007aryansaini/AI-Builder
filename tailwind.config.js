/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        clash: ["Clash Display", "sans-serif"],
        circular: ["Circular Std", "sans-serif"],
        cabinet: ["Cabinet Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};
