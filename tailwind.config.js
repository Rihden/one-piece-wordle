/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.blueGray,
      red: colors.red,
      blue: colors.sky,
      yellow: colors.amber,
      cyan: colors.cyan,
      green: colors.green
    }
  },
  plugins: []
}
