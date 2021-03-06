import React from 'react';
import { useTranslation } from 'react-i18next';

import Item from '../molecules/Item';
import Container from '../atoms/Container';
import LoadingIndicator from '../atoms/LoadingIndicator';

const ItemList = ({data, to, isLoading}) => {

  const { t } = useTranslation(['topic']);

  const renderLinkList = () => {
    return data.map(link => <Item data={link} to={to} key={link.id} />)
  };

  if (data.length > 0) {
    return (
      <Container>
        { isLoading ?
          <LoadingIndicator />
          :
          <div role="list" className="ui selection divided list">
            {renderLinkList()}
          </div>
        }
      </Container>
    )
  }

  return (
    <Container>
      <div>
        {t('topic:itemList.placeholder', 'Be the first to create a discussion')}
      </div>
    </Container>
  )
}

export default ItemList
