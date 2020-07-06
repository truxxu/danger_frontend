import React from 'react';

import Item from '../molecules/Item';

const ItemList = ({data, to}) => {


  const renderLinkList = () => {
    return data.map(link => <Item data={link} to={to} key={link.id} />)
  }

  return (
    <div role="list" className="ui selection divided list">
      {renderLinkList()}
    </div>
  )
}

export default ItemList
