import Router from 'next/router'
import Head from 'next/head'
import PropTypes from 'prop-types'
import Card from '../../src/components/Card'
import { getPost } from '../../src/api/posts'

function Post({ post }) {
  return (
    <>
      <Head>
        <meta property="og:title" content={`${post.number}번째코드`} />
      </Head>
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

Post.getInitialProps = async ({ query }) => {
  const { number } = query
  const post = await getPost(number)

  return {
    post
  }
}

Post.propTypes = {
  post: PropTypes.object
}

export default Post
