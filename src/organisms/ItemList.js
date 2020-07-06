import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import moment from "moment";

import Text from '../atoms/Text';
import { Context } from '../context/TopicsContext';

const ItemList = ({data, to}) => {

  const { findTopic } = useContext(Context);

  const renderLinkList = () => {
    return data.map(link => {
      const {id, title, author, description, created_at} = link;
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
    })
  }

  return (
    <div role="list" className="ui selection divided list">
      {renderLinkList()}
    </div>
  )
}

ItemList.defaultProps = {
  from: ""
}

export default ItemList
