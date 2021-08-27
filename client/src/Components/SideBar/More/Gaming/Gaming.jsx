import React from 'react'
import { NavLink } from 'react-router-dom'
import { SiYoutubegaming } from 'react-icons/si'

const Gaming = () => {
  return (
    <NavLink to='/gaming' activeClassName='active' data-for='sidebar' data-tip='Gaming'>
      <div className='sidebar_icon_container'>
        <SiYoutubegaming size={23} className='sidebar_icon' />
        <h4 className='sidebar_text'>Gaming</h4>
      </div>
    </NavLink>
  )
}

export default Gaming

