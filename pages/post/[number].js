import Router, { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Card from '../../src/components/Card'
import { getPost } from '../../src/api/posts'

function Post() {
  const router = useRouter()
  const { number } = router.query
  const [post, setPost] = useState(null)

  async function fetchPost() {
    setPost(await getPost(number))
  }

  useEffect(() => {
    fetchPost()
  }, [])

  return (
    <>
      <div className="nav">
        <h1 onClick={() => Router.push('/')}>
          디<span style={{ fontSize: 14 }}>미고</span>대
          <span style={{ fontSize: 14 }}>나무</span>숲
        </h1>
      </div>
      {post && <Card post={post} />}
      <style jsx>{`
        * {
          font-family: 'Spoqa Han Sans', sans-serif;
        }
        h1 {
          display: inline;
          margin: 0;
          cursor: pointer;
        }
        .nav {
          margin-bottom: 2rem;
          display: flex;
          justify-content: space-between;
        }
      `}</style>
    </>
  )
}

export default Post
