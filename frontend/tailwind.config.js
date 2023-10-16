/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#e6fbff',
        secondary: '#86c4cf',
        txt_large: '#006f91',
        txt_small: '#178FA1',
        clicked_home: '#C26B29',
        unclicked_home: '#006F91',
        review_box: '#148495'
      },
      
    },
  },
  plugins: [],
}