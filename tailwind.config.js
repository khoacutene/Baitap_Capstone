/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      backgroundColor: {
        stColor: "red",
        secondColor: "#d3dce6",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
