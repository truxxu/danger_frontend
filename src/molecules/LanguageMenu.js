import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';

import './LanguageMenu.scss';

const LanguageMenu = () => {

  const { i18n } = useTranslation();

  const changeLanguage = code => {
    i18n.changeLanguage(code);
  };

  return (
    <Dropdown className="LanguageMenu" text='Language'>
      <Dropdown.Menu>
        <Dropdown.Item
          flag='gb'
          text='EN'
          onClick={() => changeLanguage('en')}
        />
        <Dropdown.Item
          flag='es'
          text='ES'
          onClick={() => changeLanguage('es')}
        />
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default LanguageMenu
