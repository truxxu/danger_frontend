import React from 'react';
import { useParams } from 'react-router-dom';

import HeaderImage from '../atoms/HeaderImage';
import Text from '../atoms/Text';
import Container from '../atoms/Container';
import Button from '../atoms/Button';
import NewEntryForm from '../organisms/NewEntryForm';
import ItemList from '../organisms/ItemList';

const Topic = (props) => {

  let { id } = useParams();
  let linkList = [
    {
      id: 1,
      title: "Discussion A",
    },
    {
      id: 2,
      title: "Discussion B",
    }
  ];

  return (
    <div>
      <HeaderImage imageSrc="https://picsum.photos/300/200" />
      <h2 className="ui header center aligned">{`Topic ID: ${id}`}</h2>
      <Text
        content={`Description about Topic ID: ${id}`}
        align="center aligned"
      />
      <Button name="Add new entry" />
      <NewEntryForm />
      <Container>
        <ItemList linkList={linkList} to="discussion"/>
      </Container>
    </div>
  )
}

export default Topic
