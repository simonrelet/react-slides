'use strict';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    './src/index.js'
  ],

  output: {
    path: `${__dirname}/dist`,
    publicPath: '/',
    filename: 'index_bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!sass')
      },
      {
        test: /\.svg$/,
        loader: 'file-loader'
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin('style.css', { allChunks: true }),
    new HtmlWebpackPlugin({
      template: `${__dirname}/src/index.html`,
      filename: 'index.html',
      inject: 'body'
    })
  ],

  resolve: {
    modulesDirectories: [ 'src', 'lib', 'node_modules' ],
    extensions: [ '', '.js', '.jsx' ],
    alias: {
      styles: `${__dirname}/src/styles-partials`,
      icons: `${__dirname}/src/icons`
    }
  }
};
