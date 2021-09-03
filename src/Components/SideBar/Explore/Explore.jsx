import React from 'react'
import { NavLink } from 'react-router-dom'
import {FaCompass as Compass} from 'react-icons/fa'

const Explore = () => {
  
  return (
      <NavLink to='/feed/explore' exact activeClassName='active' data-for='sidebar' data-tip='Explore'>
        <div className='sidebar_icon_container'>
          <Compass size={23} className='sidebar_icon' />
          <h4 className='sidebar_text'>Explore</h4>
        </div>
      </NavLink>
  )
}

export default Explore
