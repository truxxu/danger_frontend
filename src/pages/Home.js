import React from 'react';

import Container from '../atoms/Container';
import HeaderImage from '../atoms/HeaderImage';
import Text from '../atoms/Text';
import ItemList from '../organisms/ItemList';

const Home = () => {

  const linkList = [
    {
      title: "Section A",
      description: "A description about section A"
    },
    {
      title: "Section B",
      description: "A description about section B"
    }
  ]
  return (
    <div>
      Home page
      <HeaderImage imageSrc="https://picsum.photos/300/200" />
      <Text content="Description text about the site" align="center aligned"/>
      <Container>
        <ItemList linkList={linkList}/>
      </Container>
    </div>
  )
}

export default Home
