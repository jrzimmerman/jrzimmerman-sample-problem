const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname),
  entry: './client/boot.ts',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].[chunkhash].js'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
   module: {
    rules: [
      { enforce: 'pre', test: /\.ts$/, use: 'tslint-loader', exclude: /node_modules/ },
      { test: /\.ts?$/, use: 'awesome-typescript-loader', exclude: /node_modules/ }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'client/index.html'),
      inject: 'body'
    })
  ]
}
