/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {

    extend: {
      colors: {
        lightOrange: 'rgb(247, 244, 240)',
        darkGray: 'rgb(112, 112, 112)'
      },
      screens: {
        navBreak: '960px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      width: {
        cardWidth: '1070px',
        349: "349px"

      }, height: {
        cardHeight: '620px'
      },
      minHeight: {
        300: "300px"
      },
    },
  },
  plugins: [],
};
