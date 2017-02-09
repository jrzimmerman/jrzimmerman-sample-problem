const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname),
  entry: './client/App.js',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].[chunkhash].js'
  },
  resolve: {
    extensions: ['.js']
  },
   module: {
    rules: [
      { enforce: 'pre', test: /\.js$/, use: 'eslint-loader', exclude: /node_modules/ },
      { test: /\.js?$/, use: 'babel-loader', exclude: /node_modules/ }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'client/index.html'),
      inject: 'body'
    })
  ]
}
