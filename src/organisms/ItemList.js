import React from 'react';
import { Link } from "react-router-dom";

import Text from '../atoms/Text';

const ItemList = ({data, to}) => {

  const renderLinkList = () => {
    return data.map(link => {
      return (
        <Link to={`${to}/${link.id}`} role="listitem" className="item" key={link.id}>
          <div className="content">
            <Text content={link.name} align="header center aligned"/>
            <Text content={link.description} align="description center aligned"/>
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
