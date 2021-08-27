import React from 'react'
import { NavLink } from 'react-router-dom'
import { MdSubscriptions } from 'react-icons/md'

const Subscriptions = () => {
  
  return (
    <NavLink to='/feed/subscriptions' activeClassName='active' data-for='sidebar' data-tip='Subscriptions'>
        <div className='sidebar_icon_container'>
        <MdSubscriptions size={23} className='sidebar_icon' />
        <h4 className='sidebar_text'>Subscriptions</h4>
      </div>
    </NavLink>
  )
}

export default Subscriptions
