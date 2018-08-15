const path = require('path');

const webpack = require('webpack');

const CleanWebpackPlugin = require('clean-webpack-plugin');

const vendors = [
  'react',
  'react-dom',
  'react-router-dom',
  // 'react-redux',
  // 'redux',
];

module.exports = {
  mode: 'production',
  entry: {
    vendor: vendors
  },
  output: {
    path: path.join(__dirname, 'dist/lib'),
    filename: '[name].dll.js',
    library: '[name]_library',
    publicPath: '/'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new webpack.DllPlugin({
      path: path.join(__dirname, 'dist/lib', '[name]-manifest.json'),
      name: '[name]_library',
      context: __dirname
    })
  ]
};
