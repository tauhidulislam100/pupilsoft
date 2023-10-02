const defaultTheme = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
        sec: ['IBM Plex Sans'],
        commissioner: ['var(--font-commissioner)'],
        jost: ['var(--font-jost)'],
        poppins: ['var(--font-poppins)'],
      },
      colors: {
        dark: '#0B1327',
        primary: '#FFA900',
        secondary: '#B9B9CF',
        stroke: '#BBB2B2',
      },
      borderRadius: {
        xlg: '10px',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
};
