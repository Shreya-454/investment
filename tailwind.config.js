/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "Inter":'"Inter",sans-serif',
      },
      animation:{
        'spin-slow':'spin 5s linear infinite'
      },
    },
  },
  plugins: [],
}
