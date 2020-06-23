import React from 'react';

import './Comment.scss';

const Comment = (props) => {
  const {name, created, content} = props.data;
  return (
    <div className="comment">
      <div className="content">
        <div className="Comment__Header">
          <div className="author">{name}</div>
          <div className="metadata"><span>wrote on {created}</span></div>
        </div>
        <div className="text">{content}</div>
      </div>
      <div className="ui divider" />
    </div>
  )
}

export default Comment
