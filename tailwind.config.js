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
        "slate":"#8892b0",
        "light-slate":"#a8b2d1"
      },
      fontFamily:{
        'font_mono':["SF Mono","Fira Code","Fira Mono","Roboto Mono","monospace"],
        'font_sans':["Calibre","Inter","San Francisco","SF Pro Text","-apple-system","system-ui","sans-serif"]
      },
      width:{
        "page-width":"89rem",
        "content-width":"68.75rem"
      },
      backgroundColor:{
        "base_bg":"rgba(10, 25, 47, 0.85)",
        "navy":"#0a192f",
        "lightest-slate":"#ccd6f6",
        "green-tint":"rgba(100,255,218,0.1)",
        "light-green":"rgba(87, 203, 255, 0.4)",
        "light-navy":"#112240 !important",
        "light-slate":"#a8b2d1"
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
      },
      keyframes:{
        showMore:{
          "0%":{
            height: "35.875rem"
          },
          "100%":{
            height: "100%"
          }
        }
      },
      animation:{
        "show_more": "showMore linear 0.3s"
      }
    },
  },
  plugins: [],
}