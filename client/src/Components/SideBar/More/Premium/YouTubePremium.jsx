import React from 'react'
import { NavLink } from 'react-router-dom'
import { AiFillYoutube } from 'react-icons/ai'

const YouTubePremium = () => {
  return (
    <NavLink to='/premium' activeClassName='active' data-for='sidebar' data-tip='YouTube Premium'>
      <div className='sidebar_icon_container'>
        <AiFillYoutube size={23} className='sidebar_icon' />
        <h4 className='sidebar_text'>YouTube Premium</h4>
      </div>
    </NavLink>
  )
}

export default YouTubePremium
