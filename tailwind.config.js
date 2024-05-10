/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      primary: '#986dff',
      white: '#fff',
      gray: '#9ca3af',
      black: '#000'
    },
    fontFamily: {
      'sans': ['Archivo', ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
}