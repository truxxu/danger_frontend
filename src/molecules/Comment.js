import React from 'react';

import './Comment.scss';
import Text from '../atoms/Text';

const Comment = () => {
  return (
    <div role="listitem" className="Comment__Container item">
      <Text
        content="#AuthorName# on Date, No. 12345"
        align="left aligned"
      />
      <Text
        content="Comment Molecule"
        align="left aligned"
      />
    </div>
  )
}

export default Comment
