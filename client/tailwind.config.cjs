/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#020202',
        foreground: '#080808ff',
        primary: '#23d78e',
        secondary_lg: '#030511',
        secondary: '#2427ca',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],

  
}