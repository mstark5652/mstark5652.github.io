'use strict';


const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const debug = process.env.NODE_ENV !== 'production';
const entryName = 'app.js';

module.exports = {
  devtool: debug ? 'inline-sourcemap' : false,
  entry: [path.resolve(__dirname, 'src', entryName), path.resolve(__dirname, 'src', 'static', 'style', 'main.scss')],
  output: {
    path: path.resolve(__dirname, 'public', 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/,
        loader: ExtractTextPlugin.extract({
          use: [{
            loader: 'css-loader', options: {
              sourceMap: true
            }
          }, {
            loader: 'sass-loader', options: {
              sourceMap: true
            }
          }]
        })
      },
      {
        test: path.join(__dirname, 'src'),
        include: [path.join(__dirname, 'src')],
        exclude: [/node_modules/, path.join(__dirname, 'src', 'static')],
        loader: 'babel-loader',
        options: {
          presets: ["react", "stage-0", "es2015"],
          plugins: ["transform-class-properties", "transform-decorators-legacy"]
        }
      }
    ]
  },
  devServer: {
    contentBase: './public/'
  },
  plugins: [
    new ExtractTextPlugin("bundle.css"),
    // new UglifyJsPlugin()
  ]
};