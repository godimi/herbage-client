require('dotenv').config()
const withCSS = require('@zeit/next-css')
const webpack = require('webpack')

module.exports = withCSS({
  webpack(config) {
    config.module.rules.push({
      test: /\.(png|svg|eot|otf|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 8192,
          name: '[name].[ext]'
        }
      }
    })
    config.module.rules.push({
      test: /\.json5$/,
      loader: 'json5-loader'
    })
    config.plugins.push(
      new webpack.DefinePlugin({
        API_URL: process.env.API_URL
      })
    )
    return config
  },
  env: {
    API_URL: process.env.API_URL
  }
})
