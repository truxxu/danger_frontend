import React, { useState, useEffect } from 'react';
import { useParams, useRouteMatch } from 'react-router-dom';

import HeaderImage from '../atoms/HeaderImage';
import Text from '../atoms/Text';
import Container from '../atoms/Container';
import Button from '../atoms/Button';
import PageContainer from '../atoms/PageContainer';
import LoadingIndicator from '../atoms/LoadingIndicator';
import NewEntryForm from '../organisms/NewEntryForm';
import ItemList from '../organisms/ItemList';
import Pagination from '../organisms/Pagination';
import useResources from '../hooks/useResources';

const Topic = (props) => {

  let { topicId } = useParams();
  let { url } = useRouteMatch();
  const [visible, setVisible] = useState(false);
  const [getResource, results, errorMessage, isLoading] = useResources();

  useEffect(() => {
    getResource(`topics/${topicId}/discussions`)
  }, [topicId]);

  return (
    <PageContainer>
      <HeaderImage imageSrc="https://picsum.photos/300/200" />
      <h2 className="ui header center aligned">{`Topic ID: ${topicId}`}</h2>
      <Text
        content={`Description about Topic ID: ${topicId}`}
        align="center aligned"
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
        { isLoading ?
          <LoadingIndicator />
          :
          <ItemList data={results} to={`${url}/discussion`}/>
        }
      </Container>
      <Pagination />
    </PageContainer>
  )
}

export default Topic
