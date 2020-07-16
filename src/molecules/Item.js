import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import moment from "moment";
import { useTranslation } from 'react-i18next';

import Text from '../atoms/Text';
import { Context } from '../context/TopicsContext';

const Item = ({data, to}) => {

  const { findTopic } = useContext(Context);
  const { t } = useTranslation(['topic']);

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
            content={
              `${t('topic:comments.by', 'by')} ${author} ${t('topic:comments.on', 'on')} ${moment(created_at).format('D/MM/YY h:mma')}`
            }
            align="description center aligned"
          />
        }
        <Text content={description} align="description center aligned"/>
      </div>
    </Link>
  )
}

export default Item
