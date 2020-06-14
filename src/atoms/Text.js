import React from 'react'

const Text = ({content, align}) => {
  return (
    <div className={`ui container ${align}`}>
      <p>{content}</p>
    </div>
  )
}

export default Text
