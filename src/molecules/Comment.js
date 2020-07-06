import React from 'react';

import './Comment.scss';
import moment from "moment";

const Comment = (props) => {
  const {author, created_at, message, title} = props.data;
  return (
    <div className="comment">
      <div className="content">
        <div className="author">
          {author}
          <span>
            {' '}wrote on {moment(created_at).format('D/MM/YY h:mma')}
          </span>
        </div>
        <div className="text">{message || title}</div>
      </div>
    </div>
  )
}

export default Comment
