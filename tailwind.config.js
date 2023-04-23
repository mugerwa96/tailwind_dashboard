/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./*.html"],
  theme: {
    extend: {
      colors:{
        "primary":"#14532D",
        "secondary":"#167f3f"
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}