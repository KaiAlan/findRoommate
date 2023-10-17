/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Gill_Sans_MT': ['Gill Sans MT', 'sans-serif']
      },
      fontSize: {
        '7rem': ['7rem',{
          lineHeight: '6rem',
        }],
      },
      colors: {
        primary: '#e6fbff',
        secondary: '#86c4cf',
        txt_large: '#006f91',
        txt_small: '#178FA1',
        clicked_home: '#C26B29',
        unclicked_home: '#006F91',
        review_box: '#148495',
        above_map: "#f5f6f6"
      },
      borderRadius: {
        'map': "26% 73% 39% 61% / 41% 51% 0% 59%"
      },
      inset: {
        '120' : '20%',
        '108' : '8%',
      },
      height: {
        '190' : '90%'
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }  
        },
        slidein: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "40%"
          }
        },
        animate_mic: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "90%": {
            width: "0%",
            visibility: "hidden",
            height: "0rem"
          },
          "100%": {
            visibility: "true",
            height: "3rem"
          }
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }  
        }
      },
      animation: {
        typing: "typing 2s steps(20) infinite alternate, blink .7s infinite",
        slidein: "slidein 3s",
        animate_mic: "animate_mic 3s"
      }
    },
  },
  plugins: [],
}