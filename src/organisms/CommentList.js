import React from 'react';

import Container from '../atoms/Container';
import LoadingIndicator from '../atoms/LoadingIndicator';
import Comment from '../molecules/Comment';


const CommentList = ({data, isLoading}) => {

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

  if (data.length > 0) {
    return (
      <Container>
        { isLoading ?
          <LoadingIndicator />
          :
          <div className="ui minimal comments">
            {renderComment()}
          </div>
        }
      </Container>
    )
  }

  return (
    <Container>
      <div className="">Be the first to post</div>
    </Container>
  )
}

export default CommentList
