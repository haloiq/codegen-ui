/* eslint-disable */

const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const path = require('path')

const mock = require('./dev/api.json')
const fs = require('fs')

const config = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    historyApiFallback: true,
    compress: true,
    open: false,
    port: 8084,
    proxy: {
      '/': {// 这里代理的是以/api开头的 会走target代理
        target: 'https://start.spring.io',// 你的地址换上
        changeOrigin: true
      }
    }
  },
}

module.exports = merge(common, config)
