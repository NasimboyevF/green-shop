/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true, 
        padding: '2rem', 
        screens: {
          'lg': '1200px',
        },
      },
    },
  },
  plugins: [],
}
