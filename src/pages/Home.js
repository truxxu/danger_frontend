import React, { useEffect } from 'react';

import Container from '../atoms/Container';
import HeaderImage from '../atoms/HeaderImage';
import Text from '../atoms/Text';
import PageContainer from '../atoms/PageContainer';
import ItemList from '../organisms/ItemList';
import useResources from '../hooks/useResources';


const Home = () => {

  const [getResource, results, errorMessage, isLoading] = useResources();

  useEffect(() => {
    getResource('topics')
  }, [])

  return (
    <PageContainer>
      <HeaderImage imageSrc="https://picsum.photos/300/200" />
      <h1 className="ui header center aligned">Site Name</h1>
      <Text
        content="Description text about the site"
        align="center aligned"
      />
      <Container>
        <ItemList data={results} to="topic" />
      </Container>
    </PageContainer>
  )
}

export default Home
