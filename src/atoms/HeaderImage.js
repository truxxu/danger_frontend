import React from 'react';

import './HeaderImage.scss'

const HeaderImage = ({imageSrc}) => {
  return (
    <div className="HeaderImage__Container">
      <img src={imageSrc} className="ui centered image" alt=""/>
    </div>
  )
}

export default HeaderImage
