import React from 'react';
import { useParams } from 'react-router-dom';

import HeaderImage from '../atoms/HeaderImage';

const Discussion = () => {

  let { id } = useParams();

  return (
    <div>
      Discussion page
      <HeaderImage imageSrc="https://picsum.photos/300/200" />
    </div>
  )
}

export default Discussion
