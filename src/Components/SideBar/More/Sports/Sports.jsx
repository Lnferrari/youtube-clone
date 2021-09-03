import React from 'react'
import { NavLink } from 'react-router-dom'
import { IoTrophySharp } from 'react-icons/io5'

const Sports = () => {
  return (
    <NavLink to='channel/UCEgdi0XIXXZ-qJOFPf4JSKw' activeClassName='active' data-for='sidebar' data-tip='Sports'>
      <div className='sidebar_icon_container'>
        <IoTrophySharp size={23} className='sidebar_icon' />
        <h4 className='sidebar_text'>Sports</h4>
      </div>
    </NavLink>
  )
}

export default Sports
