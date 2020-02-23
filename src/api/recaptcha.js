import axios from 'axios'

export async function verifyCaptcha(token) {
  return (await axios.post('https://www.google.com/recaptcha/api/siteverify', {
    secret: process.env.RECAPTCHA_SECRET,
    response: token
  })).data
}
