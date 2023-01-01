/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'base-color':"#64ffda",
        'lightest-slate':"#ccd6f6",
        "slate":"#8892b0"
      },
      fontFamily:{
        'font_mono':["SF Mono","Fira Code","Fira Mono","Roboto Mono","monospace"]
      },
      width:{
        "page-width":"1424px",
        "content-width":"1100px"
      },
      backgroundColor:{
        "base_bg":"rgba(10, 25, 47, 0.85)",
        "navy":"#0a192f",
        "lightest-slate":"#ccd6f6",
        "green-tint":"rgba(100,255,218,0.1)",
        "light-green":"rgba(87, 203, 255, 0.4)",
        "light-navy":"#112240"
      },
      borderColor:{
        "green-tint":"rgba(100,255,218,0.1)",
        'base-color':"#64ffda",
      },
      boxShadow:{
        "lightest-slate":"#ccd6f6",
        "custom":"0 0 1px #ccd6f6"
      },
      fontSize:{
        "heading2":"clamp(40px, 8vw, 80px)"
      },
      gridTemplateColumns:{
        'col1_1_1':"1fr 1fr",
        'col2_3_2':"3fr 2fr",
        'col3_1_4':"1fr 4fr"
      }
    },
  },
  plugins: [],
}