/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    aspectRatio: {
      "2/3": "2 / 3",
    },
    fontFamily: {
      PlayfairDisplay: ["Playfair Display", "serif"],
      inter: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
};
