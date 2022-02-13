require('dotenv').config()

module.exports = {
  webpack(config) {
    return config
  },
  publicRuntimeConfig: {
    API_URL: process.env.API_URL,
    RECAPTCHA_KEY: process.env.RECAPTCHA_KEY
  }
}