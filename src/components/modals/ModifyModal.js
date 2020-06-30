import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { FiLoader } from 'react-icons/fi'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import css from 'styled-jsx/css'
import BaseModal from './BaseModal'
import TextArea from '../TextArea'

const spinAnimation = css.resolve`
  .spin {
    animation: spin 2s linear infinite;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
`

function ModifyModal({ post, modalHandler, onSubmit }) {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [isLoading, setLoading] = useState(false)

  const reset = () => {
    setContent('')
    setTitle('')
  }

  const id = post ? post.id : -1
  const handleSubmit = async (e) => {
    e.preventDefault()

    if (content.length === 0) {
      toast.error('내용을 입력해주세요.')
      return
    }

    setLoading(true)
    await onSubmit({ id, title, content }, reset)
    setLoading(false)
  }
  const handleClose = (name) => {
    reset()
    modalHandler(name)
  }

  useEffect(() => {
    if (!post) return
    setTitle(post.title)
    setContent(post.content)
  }, [post])

  return (
    <BaseModal modalName="modify" content={post} modalHandler={handleClose}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="content-textarea">내용</label>
        <input
          id="title-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="제목 (최대 20자)"
          maxLength="20"
          required
        />
        <TextArea
          id="content-textarea"
          value={content}
          onUpdate={(c) => setContent(c)}
          placeholder="내용을 입력하세요"
          required
        />
        <button type="submit">
          {!isLoading ? (
            '수정'
          ) : (
            <FiLoader className={classNames('spin', spinAnimation.className)} />
          )}
        </button>
        <style jsx>
          {`
            * {
              font-family: 'Spoqa Han Sans', sans-serif;
            }

            .error {
              text-align: center;
              font-size: 14px;
            }

            input {
              display: inline-block !important;
            }

            label {
              display: none;
            }

            select {
              display: inline-block;
              text-align: center;
              text-align-center: center;
            }
          `}
        </style>
      </form>
    </BaseModal>
  )
}

ModifyModal.propTypes = {
  post: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    number: PropTypes.number,
    title: PropTypes.string,
    content: PropTypes.string.isRequired,
    fbLink: PropTypes.string,
    createdAt: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
    reason: PropTypes.string,
    history: PropTypes.array.isRequired
  }),
  modalHandler: PropTypes.func,
  onSubmit: PropTypes.func
}

export default ModifyModal
