import React from 'react';
import { Link } from "react-router-dom";

import Text from '../atoms/Text';

const ItemList = ({linkList}) => {

  const renderLinkList = () => {
    return linkList.map(link => {
      return (
        <Link to="/topic"role="listitem" className="item" key={link.title}>
          <div className="content">
            <Text content={link.title} align="header center aligned"/>
            <Text content={link.description} align="description center aligned"/>
          </div>
        </Link>
      )
    })
  }

  return (
    <div role="list" className="ui selection divided big list">
      {renderLinkList()}
    </div>
  )
}

export default ItemList
