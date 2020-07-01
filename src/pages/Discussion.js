import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import HeaderImage from '../atoms/HeaderImage';
import Container from '../atoms/Container';
import Button from '../atoms/Button';
import LoadingIndicator from '../atoms/LoadingIndicator';
import PageContainer from '../atoms/PageContainer';
import CommentList from '../organisms/CommentList';
import NewEntryForm from '../organisms/NewEntryForm';
import useResources from '../hooks/useResources';

const Discussion = () => {

  let { topicId, discussionId } = useParams();
  const [visible, setVisible] = useState(false);
  const [getResource, results, errorMessage, isLoading] = useResources();

  useEffect(() => {
    getResource(`topics/${topicId}/discussions/${discussionId}/posts`)
  }, []);

  return (
    <PageContainer>
      <HeaderImage imageSrc="https://picsum.photos/300/200" />
      <div className="ui divider" />
      <Container>
        <h2>{`Discussion ID ${discussionId} page`}</h2>
      </Container>
      <Container>
        { isLoading ?
          <LoadingIndicator />
          :
          <CommentList data={results}/>
        }
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
