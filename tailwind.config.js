/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'base-color':"#64ffda",
        'lightest-slate':"#ccd6f6"
      },
      fontFamily:{
        'font_mono':["SF Mono","Fira Code","Fira Mono","Roboto Mono","monospace"]
      },
      width:{
        "page-width":"1424px"
      },
      backgroundColor:{
        "base_bg":"rgba(10, 25, 47, 0.85)",
        "navy":"#0a192f",
        "lightest-slate":"#ccd6f6",
        "green-tint":"rgba(100,255,218,0.1)"
      },
      borderColor:{
        'base-color':"#64ffda",
      }
    },
  },
  plugins: [],
}