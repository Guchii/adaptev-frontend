/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#112D4E",
        light: "#F9F7F7"
      },
      fontFamily: {
        sans: ["Space Grotesk", "sans-serif"],
      }
    },
  },
  plugins: [require("daisyui")],
}