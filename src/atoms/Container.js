import React from 'react';

import "./Container.scss"

const Container = ({children}) => {
  return (
    <div className="ui raised segment center aligned Container">
      {children}
    </div>
  )
}

export default Container
