import React from 'react';
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

const LoadingIndicator = ({height, width}) => {
  return (
    <div>
      <Loader
         type="ThreeDots"
         color="#00BFFF"
         height={height}
         width={width}
      />
    </div>
  )
}

LoadingIndicator.defaultProps = {
  width: 100,
  height: 100,
}

export default LoadingIndicator
