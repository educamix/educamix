/** @type {import('tailwindcss').Config} */
import tailwindcssAnimated from 'tailwindcss-animated'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: 'Inter, sans-serif',
        fredoka: 'Fredoka, sans-serif',
      },
      colors: {
        'em-dark-blue': '#001340',
        'em-blue': '#023583',
        'em-purple': '#853987',
        'em-light-pink': '#FE3E8A',
        'em-pink': '#FE0060',
        'em-salmon': '#FE6675',
      },
      fontSize: {
        'em-10': '0.625rem',
      },
    },
  },
  plugins: [
    tailwindcssAnimated,
  ],
}
