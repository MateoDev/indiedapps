/* eslint-disable global-require,import/extensions,import/no-dynamic-require */
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const developmentConfig = require('./webpack.dev.js');
const productionConfig = require('./webpack.prod.js');

module.exports = (env) => {
  if (env.development) {
    return merge(commonConfig, developmentConfig);
  }
  if (env.production) {
    return merge(commonConfig, productionConfig);
  }
  throw new Error('No matching configuration was found!');
};
