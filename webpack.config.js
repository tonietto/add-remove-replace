/* global __dirname */
var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './lib/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, ''),
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },
    ],
  },
  // plugins: [
  //   new webpack.optimize.UglifyJsPlugin(),
  // ],
};
