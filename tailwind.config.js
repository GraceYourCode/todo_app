/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      dark_Blue: "hsl(235, 21%, 11%)",
      desaturated_Blue: "hsl(235, 24%, 19%)",
      light_Grey_Blue: "hsl(234, 39%, 85%)",
      white: "white",
      dark_Grey_Blue: "hsl(234, 11%, 52%)",
      first_Grad: "hsl(192, 100%, 67%)",
      second_Grad: "hsl(280, 87%, 65%)"
    }
  },
  plugins: [],
}