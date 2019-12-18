import axios from './axios'

export async function getVerifier({ safe = false }) {
  try {
    return await axios.get('/verify')
  } catch (err) {
    if (!safe) throw err
    console.log(err)
    return {
      data: {
        error: '서버에 문제가 생겼습니다.',
        id: '',
        question: ''
      }
    }
  }
}
