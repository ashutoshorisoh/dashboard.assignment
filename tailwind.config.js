/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'lg': '1024px',
      'tablet': '640px',
      'mobile': { 'max': '639px' },
      'ipadair': { 'raw': '(min-width: 820px) and (min-height: 1180px)' },
      'ipadpro': { 'raw': '(min-width: 1024px) and (min-height: 1366px)' },
      'surpro': { 'raw': '(min-width: 912px) and (min-height: 1368px)' },

    },
    extend: {},
  },
  plugins: [],
}