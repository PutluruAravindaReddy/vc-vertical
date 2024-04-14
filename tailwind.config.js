/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    './node_modules/preline/preline.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        head: ['Protest Guerrilla', 'sans-serif'],
        body: ['Quicksand', 'sans-serif'],
      },
      fontSize: {
        'xxs': '0.5rem',
        'sm': '0.8rem',
        'md': '0.9rem',
        'base': '1rem',
        'xl': '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
        '6xl': '3.815rem',
        '7xl': '4.769rem',
        '8xl': '5.961rem',
        '9xl': '7.451rem',
        '10xl': '9.313rem',
        '11xl': '11.641rem',
        '12xl': '14.551rem',
        '13xl': '18.189rem',
        '14xl': '22.736rem',
        '15xl': '28.420rem',
        '16xl': '35.525rem',
      },
      colors: {
        white: '#ffffff',
        orange: '#F54703',
        lightOrange: '#FF7518',
        darkGray: '#2F2F2F',
        lightGray: '#464545',
        lightBlack: '#1B1B1B',
        black: '#000000',
        blue:'#2563EB'
      },
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
        '7xl': '4rem',
        '8xl': '6rem',
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
}

