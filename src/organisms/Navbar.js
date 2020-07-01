import React from 'react';
import { Link as NavLink } from "react-router-dom";

import "./Navbar.scss";
import Link from '../atoms/Link';
import LoadingIndicator from '../atoms/LoadingIndicator';

const Navbar = ({results, isLoading}) => {

  const renderLinkList = () => {
    return results.map(link => {
      return (
        <Link key={link.id}>
          <NavLink to={`/topic/${link.id}`}>{link.title}</NavLink>
        </Link>
      )
    })
  }

  const homeLink = [
    <Link key='home'>
      <NavLink to="/">Home</NavLink>
    </Link>
  ]

  return (
    <nav>
      <div className="Navbar__LinkContainer">
        {isLoading ?
          <LoadingIndicator height={50} width={50}/>
          :
          homeLink.concat(renderLinkList())
        }
      </div>
      <div className="ui divider" />
    </nav>
  )
}

export default Navbar
