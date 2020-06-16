import React from 'react';

import './Button.scss';

const Button = ({name}) => {
  return (
    <div className="Button__Container">
      <button className="ui primary button large">{name}</button>
    </div>
  )
}

export default Button
