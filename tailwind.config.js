/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'pure-red' : '#FF0000',
        'light-gray': '#F8F9FA'
      },
      fontFamily: {
        "lato": ['Lato', 'sans-serif']
      }
    },
  },
  plugins: [],
}