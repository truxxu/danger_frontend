import React from 'react'

import './Link.scss';

const Link = ({children}) => {
  return (
    <div className="Link__Container">
      {children}
    </div>
  )
}

export default Link
