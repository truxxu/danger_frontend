import React from 'react';
import { Link as NavLink } from "react-router-dom";

import "./Footer.scss";
import Link from '../atoms/Link'

const Footer = () => {
  return (
    <nav>
      <div className="ui divider" />
      <div className="Footer__LinkContainer">
        <Link>
          <NavLink to="/faq">FAQ</NavLink>
        </Link>
        <Link>
          <NavLink to="/about">About</NavLink>
        </Link>
        <Link>
          <NavLink to="/contact">Contact</NavLink>
        </Link>
      </div>
    </nav>
  )
}

export default Footer
