import React from 'react'

const HeaderImage = ({imageSrc}) => {
  return (
    <div>
      Header Image Component
      <img src={imageSrc} className="ui centered image" alt=""/>
    </div>
  )
}

export default HeaderImage
