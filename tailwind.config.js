/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {

    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },

    screens: {
      'sm': '500px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },

    colors: {
      "main_blue": '#00F6ED',
      'second_mustard': '#FED766',
      'akcent': '#FAF33E',
      'black': '#070707',
      'white': '#f9f9f9',
      'gray': '#5b5b5b',
    },
    extend: {},
  },
  plugins: [],
}
