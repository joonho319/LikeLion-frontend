//tailwindc를 확장하기 위한
module.exports = {
  purge: ['./src/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    minWidth: {
      '1/2': '50%'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
