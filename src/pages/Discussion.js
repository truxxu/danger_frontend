import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import HeaderImage from '../atoms/HeaderImage';
import Container from '../atoms/Container';
import Button from '../atoms/Button';
import PageContainer from '../atoms/PageContainer';
import CommentList from '../organisms/CommentList';
import NewEntryForm from '../organisms/NewEntryForm';

const Discussion = () => {

  let { discussionId } = useParams();
  const [visible, setVisible] = useState(false);

  let linkList = [
    {
      id: 1,
      name: "Wojak",
      created: "21/06/2020 22:30",
      content: "tfw nogf"
    },
    {
      id: 2,
      name: "Pepe",
      created: "21/06/2020 22:31",
      content: "just bee yourself ;)"
    },
    {
      id: 3,
      name: "Wojak",
      created: "21/06/2020 22:32",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
    },
  ];

  return (
    <PageContainer>
      <HeaderImage imageSrc="https://picsum.photos/300/200" />
      <div className="ui divider" />
      <Container>
        <h2>{`Discussion ID ${discussionId} page`}</h2>
      </Container>
      <Container>
        <CommentList data={linkList}/>
      </Container>
      <Button
        name={visible ? "Close" : "Reply"}
        onClick={() => setVisible(!visible)}
      />
      <NewEntryForm
        label="Comment"
        show={visible}
        maxLength={500}
      />
    </PageContainer>
  )
}

export default Discussion
