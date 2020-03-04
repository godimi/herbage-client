import Router from 'next/router'
import Head from 'next/head'
import PropTypes from 'prop-types'
import Card from '../../src/components/Card'
import { getPost } from '../../src/api/posts'

function Post({ post, err }) {
  return (
    <>
      <div className="nav">
        <h1 onClick={() => Router.push('/')}>
          디<span style={{ fontSize: 14 }}>미고</span>대
          <span style={{ fontSize: 14 }}>나무</span>숲
        </h1>
      </div>
      {post ? (
        <>
          <Head>
            <meta property="og:title" content={`${post.number}번째코드`} />
            <meta
              property="og:image"
              content="https://i.postimg.cc/wBJRKDty/bamboocover.jpg"
            />
            <meta property="og:description" content={post.content} />
          </Head>
          <Card post={post} />
        </>
      ) : (
        <div className="card info-nf">존재하지 않는 글입니다.</div>
      )}
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

        .info-nf {
          padding: 2rem;
          border-radius: 7.5px;
          color: #f44336;
        }
      `}</style>
    </>
  )
}

Post.getInitialProps = async ({ query }) => {
  const { number } = query
  try {
    const post = await getPost(number)

    return {
      post
    }
  } catch (err) {
    return {}
  }
}

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    number: PropTypes.number,
    title: PropTypes.string,
    content: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    fbLink: PropTypes.string,
    createdAt: PropTypes.number
  }),
  err: PropTypes.shape({
    response: PropTypes.objectOf({
      status: PropTypes.number
    })
  })
}

export default Post
