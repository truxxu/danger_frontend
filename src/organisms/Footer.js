import React from 'react';
import { Link as NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';

import "./Footer.scss";
import Link from '../atoms/Link';

const Footer = () => {

  const { t } = useTranslation(['home']);

  return (
    <nav>
      <div className="ui divider" />
      <div className="Footer__LinkContainer">
        <Link>
          <NavLink to="/faq">
            {t('home:navigation.faq', 'FAQ')}
          </NavLink>
        </Link>
        <Link>
          <NavLink to="/about">
            {t('home:navigation.about', 'About')}
          </NavLink>
        </Link>
        <Link>
          <NavLink to="/contact">
            {t('home:navigation.contact', 'Contact')}
          </NavLink>
        </Link>
      </div>
    </nav>
  )
}

export default Footer
