const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './public/*.html',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*.{erb,haml,html,slim}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['VT323', 'Courier', 'monospace'],
        mono: ['Source Code Pro', 'Courier New', 'monospace'],
      },
      colors: {
        matrix: {
          black: '#0c0c0c',
          green: '#00ff00',
          darkgreen: '#003b00',
          lightgreen: '#39ff14',
        },
      },
      backgroundImage: {
        'matrix-rain': "url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"4\" height=\"4\" viewBox=\"0 0 4 4\"%3E%3Cpath fill=\"%2300ff00\" d=\"M1 0h1v1H1V0zm2 1h1v1H3V1zm0 2h1v1H3V3zm-2 0h1v1H1V3z\"%3E%3C/path%3E%3C/svg%3E')",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
  ]
}
