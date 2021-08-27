import React from 'react'

const Logo = () => {
  return (
    <div className='logo-container'>
      <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="youtube logo" data-tip='YouTube Home' data-for='sidebar' />
    </div>
  )
}

export default Logo
