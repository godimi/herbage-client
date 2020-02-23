require('dotenv').config()
const withCSS = require('@zeit/next-css')

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
    return config
  },
  publicRuntimeConfig: {
    API_URL: process.env.API_URL,
    RECAPTCHA_KEY: process.env.RECAPTCHA_KEY
  }
})
