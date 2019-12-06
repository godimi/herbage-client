import axios from './axios'

export function generateToken(password) {
  return axios.post('/a1p4ca', {
    password
  })
}
