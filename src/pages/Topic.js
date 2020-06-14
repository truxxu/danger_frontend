import React from 'react';

import HeaderImage from '../atoms/HeaderImage';
import Text from '../atoms/Text';
import Container from '../atoms/Container';
import Button from '../atoms/Button';
import NewEntryForm from '../organisms/NewEntryForm';
import ItemList from '../organisms/ItemList';

const Topic = () => {
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
      <HeaderImage imageSrc="https://picsum.photos/300/200" />
      <h2 className="ui header center aligned">Second Header</h2>
      <Text
        content="Description text about the topic"
        align="center aligned"
      />
      <Button name="Add new entry" />
      <NewEntryForm />
      <Container>
        <ItemList linkList={linkList}/>
      </Container>
    </div>
  )
}

export default Topic
