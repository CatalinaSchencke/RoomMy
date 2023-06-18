/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  theme: {
    extend: {
      colors: {
        "primary-blue": "#5DA8BD",
        "darken-blue": "#4A758E",
        "vivid-blue":"#2596be",
      },
    },
    screens: {
      'xs': '400px',
      ...defaultTheme.screens,
    },
  },
  plugins: [],
}
