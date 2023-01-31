/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {

    extend: {
      colors:{
        lightOrange: 'rgb(247, 244, 240)',
        darkGray: 'rgb(112, 112, 112)'
      },
      screens: {
      navBreak: '960px',
    },
    },
  },
  plugins: [],
};
