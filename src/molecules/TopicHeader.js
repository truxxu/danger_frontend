import React from 'react';

import HeaderImage from '../atoms/HeaderImage';
import Text from '../atoms/Text';

const TopicHeader = ({title, description}) => {
  return (
    <React.Fragment>
      <HeaderImage imageSrc="https://picsum.photos/300/200" />
      <h2 className="ui header center aligned">{title}</h2>
      <Text
        content={description}
        align="center aligned"
      />
    </React.Fragment>
  )
}

export default TopicHeader
