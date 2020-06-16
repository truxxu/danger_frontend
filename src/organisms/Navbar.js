import React from 'react';
import { Link as NavLink } from "react-router-dom";

import "./Navbar.scss";
import Link from '../atoms/Link'

const Navbar = () => {

  const linkList = [
    {
      id: 1,
      title: "Section A",
      description: "A description about section A"
    },
    {
      id: 2,
      title: "Section B",
      description: "A description about section B"
    }
  ]
  const renderLinkList = () => {
    return linkList.map(link => {
      return (
        <Link key={link.id}>
          <NavLink to={`/topic/${link.id}`}>{link.title}</NavLink>
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
