module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      primary: '#f56692',
      secondary: '#f34278',
      white: '#fff',
      black: '#000',
      gray: '#D4D4D8',
      'blue-gray': '#6B7280',
      // ...
    }
  },
  variants: {
    extend: {
      backgroundColor: ['checked'],
      borderColor: ['checked'],
    },
  },
  plugins: [],
}
