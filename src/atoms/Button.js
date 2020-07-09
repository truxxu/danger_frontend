import React from 'react';

import './Button.scss';
import LoadingIndicator from '../atoms/LoadingIndicator';

const Button = ({onClick, children, disabled}) => {
  if (disabled) {
    return (
      <button className="ui disabled button large">
        <LoadingIndicator height={20} width={30}/>
      </button>
    )
  } else {
    return (
      <div className="Button__Container">
        <button onClick={onClick} className="ui primary button large">{children}</button>
      </div>
    )
  }
}

export default Button
