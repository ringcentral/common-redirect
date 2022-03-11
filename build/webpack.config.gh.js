/**
 * webpack config for github pages build
 */

require('dotenv').config()
const { resolve } = require('path')
const {
  pugIndex
} = require('./pug')

const config = {
  mode: 'production',
  entry: {
    index: resolve(__dirname, '../src/server/views/index.pug')
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.json']
  },
  output: {
    path: resolve(__dirname, '../docs'),
    filename: 'js/[name].bundle.js',
    publicPath: '/',
    chunkFilename: 'js/[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /index\.pug$/,
        use: [
          'file-loader?name=index.html',
          'concat-loader',
          'extract-loader',
          {
            loader: 'html-loader',
            options: {
              attributes: false
            }
          },
          pugIndex
        ]
      }
    ]
  },
  devtool: 'source-map',
  optimization: {
    minimize: true
  },
  plugins: [
  ]
}

module.exports = config
