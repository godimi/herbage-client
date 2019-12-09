require('dotenv').config()
const withCSS = require('@zeit/next-css')

console.log('asdasodifnoasidnfioaweofijaoiejf\n\n\n')
console.log(process.env.API_URL)
console.log('\n\n\n\n\nasdfasdfasdfasdf')

module.exports = withCSS({
  target: 'serverless',
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
  env: {
    API_URL: process.env.API_URL
  }
})
