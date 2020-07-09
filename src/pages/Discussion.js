import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import TopicHeader from '../molecules/TopicHeader';
import Container from '../atoms/Container';
import Button from '../atoms/Button';
import LoadingIndicator from '../atoms/LoadingIndicator';
import PageContainer from '../atoms/PageContainer';
import CommentList from '../organisms/CommentList';
import NewEntryForm from '../organisms/NewEntryForm';
import useResources from '../hooks/useResources';
import Comment from '../molecules/Comment';

const Discussion = () => {

  let { topicId, discussionId } = useParams();

  const [visible, setVisible] = useState(false);

  const [getPosts, posts, isLoadingPosts] = useResources();
  const [getDiscussion, discussion] = useResources();

  useEffect(() => {
    getDiscussion(`topics/${topicId}/discussions/${discussionId}`)
    getPosts(`topics/${topicId}/discussions/${discussionId}/posts`)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PageContainer>
      <TopicHeader topicId={topicId}/>
      <div className="ui divider" />
      <Container>
        <div className="ui large comments">
          <Comment data={discussion}/>
        </div>
      </Container>
      <CommentList data={posts} isLoading={isLoadingPosts} />
      <Button onClick={() => setVisible(!visible)}>
        {visible ? "Close" : "Reply"}
      </Button>
      <NewEntryForm
        label="Comment"
        show={visible}
        maxLength={500}
      />
    </PageContainer>
  )
}

export default Discussion
