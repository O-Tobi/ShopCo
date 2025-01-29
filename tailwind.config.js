/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"], 
  theme: {
    extend: {
      fontFamily: {
        heading: ["Integral Bold", "sans-serif"],
        body: ["Satoshi", "sans-serif"],
      },
      colors: {
        primary: 'oklch(0% 0 0)',
        page: 'oklch(68.62% 0 0)',
        whiteHeroBg: 'oklch(95.7% 0.0025 345.21)',
        whiteFont: 'oklch(100% 0 0)',
        productBg: 'oklch(95.04% 0.0025 48.72)',
        secondaryHero: 'oklch(95.51% 0 0)',
      }, 
    },
  },
  plugins: [daisyui],

  daisyui: {
    themes: ["light"], // DaisyUI light theme
  },
};
