import React from 'react';

import Comment from '../molecules/Comment'

const CommentList = () => {
  return (
    <div className="ui divided list">
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </div>
  )
}

export default CommentList
