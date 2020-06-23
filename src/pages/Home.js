import React from 'react';

import Container from '../atoms/Container';
import HeaderImage from '../atoms/HeaderImage';
import Text from '../atoms/Text';
import PageContainer from '../atoms/PageContainer';
import ItemList from '../organisms/ItemList';


const Home = () => {

  const linkList = [
    {
      id: 1,
      title: "Section A",
      description: "A description about section A"
    },
    {
      id: 2,
      title: "Section B",
      description: "A description about section B"
    }
  ]
  return (
    <PageContainer>
      <HeaderImage imageSrc="https://picsum.photos/300/200" />
      <h1 className="ui header center aligned">Site Name</h1>
      <Text
        content="Description text about the site"
        align="center aligned"
      />
      <Container>
        <ItemList data={linkList} to="topic" />
      </Container>
    </PageContainer>
  )
}

export default Home
