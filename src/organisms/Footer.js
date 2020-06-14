import React from 'react';
import { Link } from "react-router-dom";

import "./Footer.scss";

const Footer = () => {
  return (
    <nav>
      <div className="ui divider" />
      <div className="Footer__LinkContainer">
        <Link to="/faq">FAQ</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  )
}

export default Footer
