/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    screens: {
      'sm': '640px',
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
      'gray': '#5F7470',
    },
    extend: {},
  },
  plugins: [],
}
