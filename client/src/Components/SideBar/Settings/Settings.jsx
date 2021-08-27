import React from 'react'
import { NavLink } from 'react-router-dom'
import { AiFillSetting } from 'react-icons/ai'

const Settings = () => {
  return (
      <NavLink to='/' exact activeClassName='active' data-for='sidebar' data-tip='Settings'>
        <div className='sidebar_icon_container'>
          <AiFillSetting size={23} className='sidebar_icon' />
          <h4 className='sidebar_text'>Settings</h4>
        </div>
      </NavLink>
  )
}

export default Settings
