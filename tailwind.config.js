/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      primary: '#986dff',
      white: '#fff'
    },
    fontFamily: {
      'sans': ['Archivo', ...defaultTheme.fontFamily.sans],
    }
  },
  plugins: [],
}