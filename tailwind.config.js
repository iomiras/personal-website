/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/App.js'],
  theme: {
    extend: {
      colors: {
        'blue-link': '#7899FB',
      },
      height: {
        '128': '32rem',
      }
    },
    fontSize: {
      sm: ['12px', '20px'],
      base: ['16px', '24px'],
      lg: ['24px', '28px'],
      xl: ['30px', '38px'],
      xxl: ['50px', '58px'],
      xxxl: ['90px', '98px'],
    },
    fontFamily: {
      'sans': ['Montserrat', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
    },
  },
  plugins: [],
}
