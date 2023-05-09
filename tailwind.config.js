/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: [
    './views/**/*.ejs'
  ],
  theme: {
    extend: {},
  },
  plugins:[
    require('@tailwindcss/typography')
  ],
}
