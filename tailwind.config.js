/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        clash: ["Clash Display", "sans-serif"],
        circular: ["Circular Std", "sans-serif"],
        cabinet: ["Cabinet Grotesk", "sans-serif"],
        orbitron: ["Orbitron", "sans-serif"],
        sansita: ["Sansita Swashed", "system-ui"],
      },
    },
  },
  plugins: [],
};
