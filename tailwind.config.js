/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  theme: {
    extend: {
      colors: {
        'primary': {  
          DEFAULT: '#3A93D3',
          50: '#D0E5F5',
          100: '#BFDCF1',
          200: '#9ECAE9',
          300: '#7DB8E2',
          400: '#5BA5DA',
          500: '#3A93D3',
          600: '#2775AE',
          700: '#1D5780',
          800: '#123852',
          900: '#081924',
          950: '#03090E'
        },
        'secondary': {  
          DEFAULT: '#00C6D4',
          50: '#8DF7FF',
          100: '#78F6FF',
          200: '#4FF3FF',
          300: '#27F1FF',
          400: '#00ECFD',
          500: '#00C6D4',
          600: '#00929C',
          700: '#005D64',
          800: '#00292C',
          900: '#000000',
          950: '#000000'
        },
        'tertiary': {
          DEFAULT: '#0093DA',
          50: '#93DCFF',
          100: '#7ED5FF',
          200: '#55C8FF',
          300: '#2DBAFF',
          400: '#04ADFF',
          500: '#0093DA',
          600: '#006DA2',
          700: '#00476A',
          800: '#002232',
          900: '#000000',
          950: '#000000'
        },
      },
    },
    screens: {
      'xs': '400px',
      ...defaultTheme.screens,
    },
  },
  plugins: [],
}
