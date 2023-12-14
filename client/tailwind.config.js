/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily:{
      'crimson' : ['"Crimson Text"', 'serif'],
      'signika': ['"Signika Negative"', 'sans-serif']
    },
    extend: {
      backgroundImage:{
        'hero-pattern':"url('/src/assets/background.jpg')"
      },
      animation:{
        heroAnimation:'heroAnimation 2s ease-in'
      },
      keyframes:{
        heroAnimation:{
          from:{
            opacity:'0',
          },
          to:{
            opacity:'1'
          }
        }
      }
    },
  },
  plugins: [],
}