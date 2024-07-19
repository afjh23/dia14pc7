/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#006d77',
        primaryHover: '#83c5be',
        pantone: '#555',
        pokemon: {
          fire: '#ff7402',
          water: '#4592c4',
          grass: '#9bcc50',
          electric: '#bba909',
          ice: '#51c4e7',
          fighting: '#d56723',
          poison: '#7e0058',
          ground: '#ab9842',
          flying: '#3dc7ef',
          psychic: '#f366b9',
          bug: '#729f3f',
          rock: '#a38c21',
          ghost: '#4d5b64',
          dragon: {
            DEFAULT: '#53a4cf',
            secondary: '#f16e57',
          },
          dark: '#707070',
          steel: '#9eb7b8',
          fairy: '#fdb9e9',
          normal: '#a4acaf',
        }
      }
    },
  },
  plugins: [],
}

