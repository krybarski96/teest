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
      "main_blue": '#4CCFFC',
      'second_mustard': '#FED766',
      'akcent': '#FAF33E',
      'black': '#202020',
      'white': '#F5F5F5',
      'gray': '#6c6c6c',
    },
    extend: {
      backgroundImage: {
        'mountain': "url('./images/mountain.jpg')"
      }
    },
  },
  plugins: [],
}
