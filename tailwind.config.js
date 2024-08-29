/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontSize: {
        '4.5xl': ['44px',{
          lineHeight: '52px',
        }],
        '2.5xl': '26px',
        '44xl': '44px',
        '3.5': ['40px',{
          lineHeight: '52px',
         }],
      },
      margin: {
        '1.875': '1.875rem', 
      },
      padding: {
        '13': '3.375rem',
        '18.5': '4.625rem',
        '22.5': '5.625rem',
      },
      maxWidth: {
        '3xl': '1390px',
        '3.5xl': '1154px'
      },
      gap: {
        '33': '10.625rem',
      },
      spacing: {
        '105px': '-105px',
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}

