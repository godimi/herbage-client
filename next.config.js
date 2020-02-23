require('dotenv').config()
const withCSS = require('@zeit/next-css')

module.exports = withCSS({
  env: {
    API_URL: process.env.API_URL,
    RECAPTCHA_KEY: process.env.RECAPTCHA_KEY,
    RECAPTCHA_SECRET: process.env.RECAPTCHA_SECRET
  }
})
