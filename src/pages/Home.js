import React, { useContext } from 'react';

import HeaderImage from '../atoms/HeaderImage';
import Text from '../atoms/Text';
import PageContainer from '../atoms/PageContainer';
import ItemList from '../organisms/ItemList';
import { Context } from '../context/TopicsContext';

const Home = () => {

  const { state } = useContext(Context);

  return (
    <PageContainer>
      <HeaderImage imageSrc="https://picsum.photos/300/200" />
      <h1 className="ui header center aligned">Site Name</h1>
      <Text
        content="Description text about the site"
        align="center aligned"
      />
      <ItemList
        data={state.topics}
        to="topic"
        isLoading={state.isLoading}
      />
    </PageContainer>
  );
}

export default Home
