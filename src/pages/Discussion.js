import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import TopicHeader from '../molecules/TopicHeader';
import Container from '../atoms/Container';
import Button from '../atoms/Button';
import PageContainer from '../atoms/PageContainer';
import CommentList from '../organisms/CommentList';
import NewEntryForm from '../organisms/NewEntryForm';
import useResources from '../hooks/useResources';
import Comment from '../molecules/Comment';

const Discussion = () => {

  let { topicId, discussionId } = useParams();
  let currentUrl = `topics/${topicId}/discussions/${discussionId}`;

  const [show, setShow] = useState(false);

  const [getPosts, posts, isLoadingPosts] = useResources();
  const [getDiscussion, discussion] = useResources();

  useEffect(() => {
    getDiscussion(currentUrl);
    getPosts(`${currentUrl}/posts`);
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
      <CommentList
        data={posts}
        isLoading={isLoadingPosts}
      />
      <Button onClick={() => setShow(!show)}>
        {show ? "Close" : "Reply"}
      </Button>
      <NewEntryForm
        label="Comment"
        show={show}
        setShow={setShow}
        maxLength={500}
        url={`${currentUrl}/posts`}
      />
    </PageContainer>
  )
}

export default Discussion
