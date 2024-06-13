/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue' : '#005C78',
        'red' : '#E50914',
        'gray': '#808080',
        'black' : '#000000',
        'white' : '#FFFFFF'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [
    daisyui,
  ],
}

