import React from 'react'
import { NavLink } from 'react-router-dom'
import { IoMdBulb } from 'react-icons/io'

const Learning = () => {
  return (
    <NavLink to='/channel/UCtFRv9O2AHqOZjjynzrv-xg' activeClassName='active' data-for='sidebar' data-tip='Learning'>
      <div className='sidebar_icon_container'>
        <IoMdBulb size={23} className='sidebar_icon' />
        <h4 className='sidebar_text'>Learning</h4>
      </div>
    </NavLink>
  )
}

export default Learning
