const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'sans': ['Montserrat', ...defaultTheme.fontFamily.sans],
      'serif': ['"Playfair Display"',...defaultTheme.fontFamily.serif],
      'mono': [...defaultTheme.fontFamily.mono]
    },
    colors: {
      'white':'#F4F3EE',
      'black':'#242424',
      'green':'#40916C',
    },
    extend: {
    },
  },
  plugins: [],
}