import React from 'react';
import { Link as NavLink } from "react-router-dom";

import "./Navbar.scss";
import Link from '../atoms/Link'

const Navbar = ({results, isLoading}) => {

  const renderLinkList = () => {
    return results.map(link => {
      return (
        <Link key={link.id}>
          <NavLink to={`/topic/${link.id}`}>{link.name}</NavLink>
        </Link>
      )
    })
  }

  return (
    <nav>
      <div className="Navbar__LinkContainer">
        <Link>
          <NavLink to="/">Home</NavLink>
        </Link>
        {renderLinkList()}
      </div>
      <div className="ui divider" />
    </nav>
  )
}

export default Navbar
