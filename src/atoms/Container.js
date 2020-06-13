import React from 'react'

const Container = ({children}) => {
  return (
    <div className="ui raised very padded segment">
      {children}
    </div>
  )
}

export default Container
