/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
    screens: {
      'xs': '400px',
      'rxs': '500px',
      'sm': '600px',
      'xmd': '700px',
      'rmd': '800px',
      'md': '900px',
      'xlg': '1000px',
      'lg': '1100px',
      'xxl': '1200px',
      'rxl': '1300px',
      'xl': '1400px',
      '2xl': '1536px',
    }
  },
  plugins: [],
}

