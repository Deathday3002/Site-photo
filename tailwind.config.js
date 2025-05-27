/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        fondClair: '#FAF6EF',
        fondSombre: '#121212',
        texteClair: '#F5F5F5',
        texteFonce: '#111111',
        rouge: '#A10000',
        jaune: '#F4C430',
      },
    },
  },
  plugins: [],
};
