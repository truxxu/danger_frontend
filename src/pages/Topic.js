import React, { useState, useEffect } from 'react';
import { useParams, useRouteMatch } from 'react-router-dom';

import Container from '../atoms/Container';
import Button from '../atoms/Button';
import PageContainer from '../atoms/PageContainer';
import LoadingIndicator from '../atoms/LoadingIndicator';
import TopicHeader from '../molecules/TopicHeader';
import NewEntryForm from '../organisms/NewEntryForm';
import ItemList from '../organisms/ItemList';
import Pagination from '../organisms/Pagination';
import useResources from '../hooks/useResources';

const Topic = (props) => {

  let { topicId } = useParams();
  const currentUrl = `topics/${topicId}/discussions`;
  let { url } = useRouteMatch();

  const [visible, setVisible] = useState(false);
  const [getDiscussions, discussions, isLoadingDiscussions] = useResources();


  useEffect(() => {
    getDiscussions(currentUrl)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [topicId]);

  return (
    <PageContainer>
      <TopicHeader topicId={topicId}/>
      <Button onClick={() => setVisible(!visible)}>
        {visible ? "Close" : "Add new entry"}
      </Button>
      <NewEntryForm
        label="Title"
        show={visible}
        maxLength={75}
        url={currentUrl}
      />
      <div className="ui divider" />
      <Container>
        { isLoadingDiscussions ?
          <LoadingIndicator />
          :
          <ItemList data={discussions} to={`${url}/discussion`}/>
        }
      </Container>
      <Pagination />
    </PageContainer>
  )
}

export default Topic
