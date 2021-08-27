import React from 'react'
import { NavLink } from 'react-router-dom'
import { RiHistoryLine } from 'react-icons/ri'

const History = () => {
  return (
    <NavLink to='/feed/history' activeClassName='active' data-for='sidebar' data-tip='History'>
      <div className='sidebar_icon_container'>
        <RiHistoryLine size={23} className='sidebar_icon' />
        <h4 className='sidebar_text'>History</h4>
      </div>
    </NavLink>
  )
}

export default History
