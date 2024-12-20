/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./docs/**/*{html,js}",
    "./node_modules/tw-elements/js/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [require(tw-elements/plugin.cjs)],
  darkMode: "class"
}

