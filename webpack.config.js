/* global __dirname */
var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './lib/index.js',
  output: {
    filename: 'add-remove-replace.js',
    path: path.resolve(__dirname, ''),
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: 'babel-loader' },
    ],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
  ],
};
