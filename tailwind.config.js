/** @type {import('tailwindcss').Config} */
module.exports = {
  important: '#app',
  content: [
    "./src/**/*.{html,ts}",
    "./src/app/components/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        'sec-400': '#E7D0C8',
        'main-500': '#115740',
      },
      minWidth: {
        '1/2': '50%',
      }
    },
  },
  plugins: [],
}
