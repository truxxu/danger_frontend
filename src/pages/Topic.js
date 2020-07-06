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
  let { url } = useRouteMatch();

  const [visible, setVisible] = useState(false);
  const [getTopic, topic] = useResources();
  const [getDiscussions, discussions, isLoadingDiscussions] = useResources();

  useEffect(() => {
    getTopic(`topics/${topicId}`)
    getDiscussions(`topics/${topicId}/discussions`)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [topicId]);

  return (
    <PageContainer>
      <TopicHeader
        title={topic.title}
        description={topic.description}
      />
      <Button
        name={visible ? "Close" : "Add new entry"}
        onClick={() => setVisible(!visible)}
      />
      <NewEntryForm
        label="Title"
        show={visible}
        maxLength={75}
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
