import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/class-variance-authority/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.black,
      },
      boxShadow: {
        custom: '0px 4px 8px 0px #0000000A',
      },
    },
  },
  plugins: [],
};
