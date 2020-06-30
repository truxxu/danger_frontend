import React from 'react';

import './Comment.scss';

const Comment = (props) => {
  const {author, created_at, message} = props.data;
  return (
    <div className="comment">
      <div className="content">
        <div className="Comment__Header">
          <div className="author">{author}</div>
          <div className="metadata"><span>wrote on {created_at}</span></div>
        </div>
        <div className="text">{message}</div>
      </div>
      <div className="ui divider" />
    </div>
  )
}

export default Comment
