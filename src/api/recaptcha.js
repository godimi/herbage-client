import axios from 'axios'
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

export async function verifyCaptcha(token) {
  return (await axios.post('https://www.google.com/recaptcha/api/siteverify', {
    secret: publicRuntimeConfig.RECAPTCHA_SECRET,
    response: token
  })).data
}
