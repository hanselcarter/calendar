const merge = require('webpack-merge'),
  webpack = require('webpack'),
  baseConfig = require('./base.config.js'),
  functions = require('./functions.config');

module.exports = [
  merge(baseConfig, {
    mode: 'production',
    devtool: 'source-map',
    plugins: [new webpack.EnvironmentPlugin({ NODE_ENV: 'production' })],
  }),
  functions,
];
