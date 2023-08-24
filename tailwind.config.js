const defaultTheme = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
        sec: ['IBM Plex Sans'],
      },
      colors: {
        dark: '#060315',
        primary: '#3282E9',
        secondary: '#FFA900',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
};
