/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
          sans: ['Tajawal', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'header': '#E1EBFA',
        'default': '#3185FC',
        'second': '#FFCC00',
        'body': '#f9fbfe',
      },

    },
},
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require("flowbite/plugin")

  ],
}
