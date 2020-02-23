require('dotenv').config()
const withCSS = require('@zeit/next-css')

console.log(process.env.API_URL)

module.exports = withCSS({
  env: {
    API_URL: process.env.API_URL,
    RECAPTCHA_KEY: process.env.RECAPTCHA_KEY,
    RECAPTCHA_SECRET: process.env.RECAPTCHA_SECRET
  }
})
