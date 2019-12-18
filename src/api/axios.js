import axios from 'axios'

console.log(process.env.API_URL)

export default axios.create({
  baseURL: process.env.API_URL
})
