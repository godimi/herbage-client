import axios from './axios'
import { ACCEPTED } from '../utils/post-status'

export async function getPosts({
  count = 10,
  cursor,
  status = ACCEPTED,
  safe = false
}) {
  try {
    return await axios.get('/posts', {
      params: {
        count,
        cursor,
        status
      }
    })
  } catch (err) {
    if (!safe) throw err
    console.log(err)
    return {
      data: {
        error: '서버에 문제가 생겼습니다.',
        posts: [],
        cursor: '',
        hasNext: false
      }
    }
  }
}

export async function createPost({
  title,
  content,
  answer,
  verifier,
  tag,
  captcha
}) {
  return (
    await axios.post('/posts', {
      title,
      content,
      tag,
      verifier: {
        id: verifier.id,
        answer: answer
      },
      captcha
    })
  ).data
}

export async function getPost(number) {
  return (await axios.get(`/posts/${number}`)).data
}

export async function getPostByHash(hash) {
  return (await axios.get(`/posts/hash/${hash}`)).data
}

export async function acceptPost(id) {
  return (
    await axios.patch(`/posts/${id}`, {
      status: 'ACCEPTED'
    })
  ).data
}

export async function rejectPost({ id, reason }) {
  return (
    await axios.patch(`/posts/${id}`, {
      status: 'REJECTED',
      reason
    })
  ).data
}

export async function modifyPost(post) {
  return (await axios.patch(`/posts/${post.id}`, post)).data
}

export async function deletePost(arg) {
  await axios.delete(`/posts/${arg}`)
}
