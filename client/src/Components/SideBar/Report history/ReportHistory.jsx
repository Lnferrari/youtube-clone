import React from 'react'
import { NavLink } from 'react-router-dom'
import { RiFlagFill } from 'react-icons/ri'

const ReportHistory = () => {
  return (
    <NavLink to='/reporthistory' activeClassName='active' data-for='sidebar' data-tip='Report history'>
      <div className='sidebar_icon_container'>
        <RiFlagFill size={23} className='sidebar_icon' />
        <h4 className='sidebar_text'>Report history</h4>
      </div>
    </NavLink>
  )
}

export default ReportHistory
