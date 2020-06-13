import React from 'react';
import { Link } from "react-router-dom";

import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav>
      <div className="Navbar__LinkContainer">
        <Link to="/">Home</Link>
        <Link to="/topic">Topic</Link>
        <Link to="/discussion">Discussion</Link>
      </div>
      <div className="ui divider" />
    </nav>
  )
}

export default Navbar
