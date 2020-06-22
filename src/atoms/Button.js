import React from 'react';

import './Button.scss';

const Button = ({name, onClick}) => {
  return (
    <div className="Button__Container">
      <button onClick={onClick} className="ui primary button large">{name}</button>
    </div>
  )
}

export default Button
