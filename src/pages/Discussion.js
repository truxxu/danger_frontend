import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import HeaderImage from '../atoms/HeaderImage';
import Container from '../atoms/Container';
import Button from '../atoms/Button';
import PageContainer from '../atoms/PageContainer';
import CommentList from '../organisms/CommentList';
import NewEntryForm from '../organisms/NewEntryForm';

const Discussion = () => {

  let { discussionId } = useParams();
  const [visible, setVisible] = useState(false);

  return (
    <PageContainer>
      <HeaderImage imageSrc="https://picsum.photos/300/200" />
      <div className="ui divider" />
      <Container>
        <h2>{`Discussion ID ${discussionId} page`}</h2>
      </Container>
      <Container>
        <CommentList />
      </Container>
      <Button
        name={visible ? "Close" : "Reply"}
        onClick={() => setVisible(!visible)}
      />
      <NewEntryForm
        label="Comment"
        show={visible}
        maxLength={500}
      />
    </PageContainer>
  )
}

export default Discussion
