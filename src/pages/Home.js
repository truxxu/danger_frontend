import React from 'react';

import Container from '../atoms/Container';
import HeaderImage from '../atoms/HeaderImage';
import Text from '../atoms/Text';

const Home = () => {
  return (
    <div>
      Home page
      <HeaderImage imageSrc="https://picsum.photos/300/200" />
      <Text content="Description text about the site" align="center aligned"/>
      <Container>
        <Text content="content goes here" />
      </Container>
    </div>
  )
}

export default Home
