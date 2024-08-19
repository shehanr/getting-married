module.exports = {
  content: [
    './_drafts/**/*.html',
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    './*.md',
    './*.html',
  ],
  theme: {
    extend: {
      colors: {
        'drab-dark-brown': '#383E20ff',
        'cinereous': '#A49790ff',
        'charcoal': '#3E4E5Fff',
        'dark-moss-green': '#3E5223ff',
        'redwood': '#B55342ff',
        'silver': '#AEACA9ff',
        'sapphire': '#044FABff',
        'the-knot': '#437e92',
        'floral-white': '#FFFAF0',
        'whispering-blue': '#E2E8f0'
      },
      fontFamily: {
        'abhaya-libre': ['Abhaya Libre', 'serif'],
        'homemade-apple': ['Homemade Apple', 'cursive'],
        'source-sans-pro': ['Source Sans Pro', 'sans-serif'],
      },
      minHeight: {
        'full': '100%',
      },
      gridTemplateColumns: {
        'auto': 'auto',
        'fr': 'minmax(0, 1fr)',
        'repeat(3)': 'repeat(3, minmax(0, 1fr))',
        '4': 'repeat(4, minmax(0, 1fr))',
      }
    },
  },
  plugins: []
}
