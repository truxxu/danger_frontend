import React from 'react';

import Comment from '../molecules/Comment';

const CommentList = ({data}) => {

  const renderComment = () => {
    return data.map(comment => {
      return (
        <React.Fragment key={comment.id}>
          <Comment data={comment}/>
          <div className="ui divider" />
        </React.Fragment>
      )
    })
  }

  return (
    <div className="ui minimal comments">
      {renderComment()}
    </div>
  )
}

export default CommentList
