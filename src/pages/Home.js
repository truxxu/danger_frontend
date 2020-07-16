import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import HeaderImage from '../atoms/HeaderImage';
import Text from '../atoms/Text';
import PageContainer from '../atoms/PageContainer';
import ItemList from '../organisms/ItemList';
import { Context } from '../context/TopicsContext';

const Home = () => {

  const { state } = useContext(Context);
  const { t, i18n } = useTranslation(['home']);

  const changeLanguage = code => {
    i18n.changeLanguage(code);
  };

  return (
    <PageContainer>
      <HeaderImage imageSrc="https://picsum.photos/300/200" />
      <h1 className="ui header center aligned">
        {t('home:name', 'Site name')}
      </h1>
      <Text
        content={t('home:description', 'Site description')}
        align="center aligned"
      />
      <button type="button" onClick={() => changeLanguage('es')}>
        ES
      </button>

      <button type="button" onClick={() => changeLanguage('en')}>
        EN
      </button>
      <ItemList
        data={state.topics}
        to="topic"
        isLoading={state.isLoading}
      />
    </PageContainer>
  );
}

export default Home
