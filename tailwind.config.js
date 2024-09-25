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
    },
    extend: {},
  },
  plugins: [],
}