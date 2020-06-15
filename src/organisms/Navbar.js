import React from 'react';
import { Link } from "react-router-dom";

import "./Navbar.scss";

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
      return <Link to={`/topic/${link.id}`}>{link.title}</Link>
    })
  }

  return (
    <nav>
      <div className="Navbar__LinkContainer">
        <Link to="/">Home</Link>
        {renderLinkList()}
      </div>
      <div className="ui divider" />
    </nav>
  )
}

export default Navbar
