/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'first-color': '#FFDBF7',
        'second-color': '#F0E4FF',
        'third-color': '#00ADC2',
        'black-color': '#000000',
        'title-color': '#6F2480',
        'opaco-color': 'rgba(0, 0, 0, 0.71)'
      },
      fontFamily: {
        sans: ['Karla', 'sans-serif'],
        perso: ['Caveat', 'cursive']
      },
    },
  },
  plugins: [],
}
