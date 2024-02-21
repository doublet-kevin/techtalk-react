/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#a2d492',
        'secondary': '#3b476c',
        'tertiary': '#4d96b9',
        'light': '#e1f1dc',
      },
      backgroundColor: {
        'dark': '#070a06',
      },
    },
  },
  plugins: [],
}
