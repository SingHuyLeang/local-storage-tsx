/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#111827",
        light: "#FEFEFE",
        
        primary: "#046C1C",
      },
      fontFamily: {
        regular: ["regular", "sans-serif"],
        bold: ["bold", "sans-serif"],
        medium: ["medium", "sans-serif"],
      },
    },
  },
  plugins: [],
};
