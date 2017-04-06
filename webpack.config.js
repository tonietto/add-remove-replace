/* global __dirname */
var path = require('path');
var webpack = require('webpack');

var env = process.env.WEBPACK_ENV;
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

var libraryName = 'add-remove-replace';
var outputFile = libraryName + '.js';
var plugins = [], outputFile;

if (env === 'build') {
  plugins.push(new UglifyJsPlugin({ minimize: true }));
  outputFile = libraryName + '.min.js';
} else {
  outputFile = libraryName + '.js';
}

var config = {
  entry: __dirname + '/src/index.js',
  devtool: 'source-map',
  output: {
    filename: outputFile,
    path: path.resolve(__dirname, 'lib'),
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },
    ],
  },
  plugins: plugins
};

module.exports = config;
