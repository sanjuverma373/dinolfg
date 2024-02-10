/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "dino": "lucky-dino, sans-serif",
        "Chewy": "Chewy, system-ui",
        "Balsamiq": "Balsamiq Sans, sans-serif"
      },
      animation:{
        flip: "plane 6s infinite linear",
        flip1: "plane1 6s infinite linear",
        flip3: "dragon 4s infinite linear alternate",
      },
      keyframes:{
        plane:{
          "0%":{ transform: "translateX(0%)"},
          "100%":{ transform: "translateX(-500%)"},
        },
        plane1:{
          "0%":{ transform: "translateX(0%)"},
          "100%":{ transform: "translateX(500%)"},
        },
        dragon:{
          "0%":{ transform: "translateY(0%)"},
          "100%":{ transform: "translateY(-15%)"},
          

        }
      }

    },
  },
  plugins: [],
}

