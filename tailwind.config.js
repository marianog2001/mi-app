 /** @type {import('tailwindcss').Config} */
 module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    extend: {
      fontFamily: {
        'main': ['Kanit','sans'],
      },
      colors:{
        'main-red': '#f74843',
      },
    },
  },
  plugins: [],
}