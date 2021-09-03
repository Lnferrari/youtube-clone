import React from 'react'
import { NavLink } from 'react-router-dom'
import { FiRadio } from 'react-icons/fi'

const Live = () => {
  return (
    <NavLink to='/channel/UC4R8DWoMoI7CAwX8_LjQHig' activeClassName='active' data-for='sidebar' data-tip='Live'>
      <div className='sidebar_icon_container'>
        <FiRadio size={23} className='sidebar_icon' />
        <h4 className='sidebar_text'>Live</h4>
      </div>
    </NavLink>
  )
}

export default Live
