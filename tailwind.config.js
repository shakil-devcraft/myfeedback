/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "fontFamily": {
        "roboto": ["Roboto", "sans-serif"],
        "lexend": ["Lexend", "sans-serif"],
      },
      "colors": {
        "d-color": "#1E1E1E",
        "l-color": "#8F8F8F",
        "b-color": "#1677BD",
      }
    },
  },
  plugins: [],
}