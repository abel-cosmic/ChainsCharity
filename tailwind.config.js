/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Manrope: ["Manrope"],
      },
      fontWeight: {
        extrabold: "800",
        bold: "700",
        regular: "400",
        medium: "500",
        semibold: "600",
      },
      colors: {
        primary: "#0D82BE",
        secondary: "#00B9DB",
        tertiary: "#615F5F",
        text: "#2e2e2e",
        white: "#F6F6F6",
        neutral: "#ffffff",
        hint: "#6B6B6B",
        lightHint: "#D6D6D6",
        testimonial: "#C0C0C0",
        footer: "#565656",
        footerSocialHover: "#005B89",
      },
      boxShadow: {
        blue: "0 10px 40px 0 rgba(13, 130, 190, 0.25)",
        cust: "0 10px 40px 0 rgba(46, 46, 46, 0.1)",
      },
    },
  },
  plugins: [],
};