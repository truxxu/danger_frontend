import React from 'react';

import Comment from '../molecules/Comment';

const CommentList = ({data}) => {

  const renderComment = () => {
    return data.map(comment => <Comment key={comment.id} data={comment}/>)
  }

  return (
    <div className="ui minimal comments">
      {renderComment()}
    </div>
  )
}

export default CommentList
