import React from 'react';

import './Comment.scss';
import moment from "moment";

const Comment = (props) => {
  const {author, created_at, message, title} = props.data;
  return (
    <div className="comment">
      <div className="content">
        <div className="Comment__Header">
          <div className="author">{author}</div>
          <div className="metadata">
            <span>
              wrote on {moment(created_at).format('D/MM/YY h:mma')}
            </span>
          </div>
        </div>
        <div className="text">{message || title}</div>
      </div>
      <div className="ui divider" />
    </div>
  )
}

export default Comment
