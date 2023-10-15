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
        txt: '#006f91',
      },
    },
  },
  plugins: [],
}