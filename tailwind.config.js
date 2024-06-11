/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sora: ["'Sora', sans-serif"],
        poppins: ["'Poppins', sans-serif"],
        inter: ["'Inter', sans-serif"]
      },
      colors: {
        lightGray: '#F3F4F6',
        textGray: '#4B5563',
        primary: '#4F46E5'
      }
    }
  },
  plugins: []
}
