import React from 'react'
import { NavLink } from 'react-router-dom'
import { IoMdHelpCircleOutline as HelpIcon } from 'react-icons/io'

const Help = () => {
  return (
    <NavLink to='/' activeClassName='active'>
      <div className='sidebar_icon_container' data-for='sidebar' data-tip='Help'>
        <HelpIcon size={23} className='sidebar_icon' />
        <h4 className='sidebar_text'>Help</h4>
      </div>
    </NavLink>
  )
}

export default Help
