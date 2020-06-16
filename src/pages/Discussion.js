import React from 'react';
import { useParams } from 'react-router-dom';

import HeaderImage from '../atoms/HeaderImage';
import Container from '../atoms/Container';
import Button from '../atoms/Button';
import CommentList from '../organisms/CommentList'

const Discussion = () => {

  let { id } = useParams();

  return (
    <div>
      <HeaderImage imageSrc="https://picsum.photos/300/200" />
      <div className="ui divider" />
      <Container>
        <h2>{`Discussion ID ${id} page`}</h2>
      </Container>
      <Button name="Reply" />
      <Container>
        <CommentList />
      </Container>
      <Button name="Reply" />
    </div>
  )
}

export default Discussion
