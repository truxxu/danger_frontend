import React, { useEffect } from 'react';

import HeaderImage from '../atoms/HeaderImage';
import Text from '../atoms/Text';
import useResources from '../hooks/useResources';

const TopicHeader = ({topicId}) => {

  const [getTopic, topic] = useResources();

  useEffect(() => {
    getTopic(`topics/${topicId}`)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [topicId]);

  return (
    <React.Fragment>
      <HeaderImage imageSrc="https://picsum.photos/300/200" />
      <h2 className="ui header center aligned">{topic.title}</h2>
      <Text
        content={topic.description}
        align="center aligned"
      />
    </React.Fragment>
  )
}

export default TopicHeader
