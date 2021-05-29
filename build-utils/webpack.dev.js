/* eslint-disable import/no-extraneous-dependencies */
const { HotModuleReplacementPlugin } = require('webpack');
const path = require('path');
const Dotenv = require('dotenv-webpack');

// Config directories
const SOURCE_DIR = path.resolve(__dirname, '../src');
const OUTPUT_DIR = path.resolve(__dirname, '../dist');

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  entry: {
    main: `${SOURCE_DIR}/index.js`,
  },
  devServer: {
    contentBase: OUTPUT_DIR,
    hot: true,
    publicPath: '/',
    historyApiFallback: true,
    inline: true,
    port: 8080,
    headers: { 'Access-Control-Allow-Origin': '*' },
    proxy: {
      '/api': {
        target: `http://localhost:5000`,
        secure: false,
      },
    },
  },
  plugins: [
    new Dotenv({
      path: './.env.development',
    }),
    new HotModuleReplacementPlugin(),
  ],
};
