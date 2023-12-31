/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    letterSpacing: {
      widest: "10px",
      wider: "8px",
      wide: "6px"
    },
    borderWidth: {
      1: ".5px",
      2: "2px"
    },
    extend: {
      fontFamily: {
        primary: "Josefin Sans"
      }
    },
    colors: {
      dark_Blue: "hsl(235, 21%, 11%)",
      desaturated_Blue: "hsl(235, 24%, 19%)",
      light_Grey_Blue: "hsl(234, 39%, 85%)",
      white: "white",
      dark_Grey_Blue: "hsl(234, 11%, 52%)",
      very_Dark_Grey_Blue: "hsl(233, 14%, 35%)",
      first_Grad: "hsl(192, 100%, 67%)",
      second_Grad: "hsl(280, 87%, 65%)",
      light_Grey: "hsl(0, 0%, 98%)",
      very_Light_Grey_Blue: "hsl(236, 33%, 92%)",
      light_Mode_Grey_Blue: "hsl(233, 11%, 84%)",
      light_Mode_Dark_Grey_Blue: "hsl(236, 9%, 61%)",
      light_Mode_Very_Dark_Grey_Blue: "hsl(235, 19%, 35%)",
      bright_Blue: "hsl(220, 98%, 61%)",
      transparent: "transparent"
    },
    screens: {
      xs: "310px",
      sm: "480px",
      md: "680px",
      "2md": "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px"
    }
  },
  plugins: [],
}