import React from 'react';

import Container from '../atoms/Container';
import HeaderImage from '../atoms/HeaderImage';

const Home = () => {
  return (
    <div>
      Home page
      <Container>
        Content
        <HeaderImage imageSrc="https://picsum.photos/300/200" />
      </Container>
    </div>
  )
}

export default Home
