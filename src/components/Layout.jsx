import React from 'react'

const Layout = props => {
  return (
    <div className='app-container'>
      <div className='app-content'>{props.children}</div>
    </div>
  )
}

export default Layout
