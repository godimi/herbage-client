import axios from 'axios'

console.log('API URL: ' + process.env.API_URL)

export default axios.create({
  baseURL: process.env.API_URL
})
