module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-preset-env': {
      browsers: ['> 1%', 'last 2 versions'],
    },
    cssnano: {},
  },
};
