/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors")
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: { 
      ...colors,
      mainBlue: "#28ddc3",
      lightOrange: "#F04B26",
      background: "#edf5ff",
      dark: "#191919",
      darkAlt: "#111111",
      white: "#FFFFFF",
      darkBlue: "#22aa93",
      grey:"#2c2c2c",
      nextGen:"#4b7d3e"
    },
    screens: {
      "sm" : "400px",
      "md" : "660px",
      "lg" : "1000px",
    },
    fontFamily: { 
      Custom: ["moderniz", "sans-serif"],
     
    },
    "300": '3'
  },
  plugins: [

  ]
};


