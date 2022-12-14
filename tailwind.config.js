const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    minWidth: {
      '0': '0',
      '4/10': '40%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
     },
     letterSpacing: {
      normal: '-.025em',
      medium: '-.025em',
    },
    //  boxShadow: {
    //   'hover': '0px 0px 59.5243px #A783B7'
    //  },
    extend: {
      spacing: {
        'big': '46rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
