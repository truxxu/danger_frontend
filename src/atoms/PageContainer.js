import React from 'react'

const PageContainer = ({children}) => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      {children}
    </div>
  )
}

export default PageContainer
