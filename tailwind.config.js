/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        Manrope : ["Manrope"]
      },
      fontWeight:{
        extrabold:"800",
        bold:"700",
        regular:"400",
        medium:"500",
        semibold:"600"
      },
      colors:{
        primary:'#0D82BE',
        secondary:"#00B9DB",
        tertiary:"#615F5F",
        text:"#2e2e2e",
        white:"#F6F6F6",
        neutral:"#ffffff",
        hint:"#6B6B6B",
        lightHint:"#D6D6D6"
      }
    },
  },
  plugins: [],
}
