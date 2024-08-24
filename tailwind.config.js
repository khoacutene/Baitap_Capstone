/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontSize: {
        '4.5xl': '44px',
        '2.5xl': '26px',
        '44xl': '44px',
      },
      margin: {
        '1.875': '1.875rem',
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}

