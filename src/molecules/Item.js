import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import moment from "moment";

import Text from '../atoms/Text';
import { Context } from '../context/TopicsContext';

const Item = ({data, to}) => {

  const { findTopic } = useContext(Context);

  const {id, title, author, description, created_at} = data;

  return (
    <Link
      to={`${to}/${id}`}
      role="listitem"
      className="item"
      key={id}
      onClick={() => findTopic(id)}
    >
      <div className="content">
        <Text content={title} align="header center aligned"/>
        {author &&
          <Text
            content={`by ${author} on ${moment(created_at).format('D/MM/YY h:mma')}`}
            align="description center aligned"
          />
        }
        <Text content={description} align="description center aligned"/>
      </div>
    </Link>
  )
}

export default Item
