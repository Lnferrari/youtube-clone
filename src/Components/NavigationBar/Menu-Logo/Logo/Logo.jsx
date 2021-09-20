import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <div className='logo-container'>
      <Link to='/'>
        <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="youtube logo" data-tip='YouTube Home' data-for='sidebar' />
      </Link>
    </div>
  )
}

export default Logo
