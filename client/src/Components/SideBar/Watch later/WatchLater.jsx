import React from 'react'
import { NavLink } from 'react-router-dom'
import { MdWatchLater } from 'react-icons/md'

const WatchLater = () => {
  return (
    <NavLink to='/playlist?list=WL' activeClassName='active' data-for='sidebar' data-tip='Watch later'>
      <div className='sidebar_icon_container'>
        <MdWatchLater size={23} className='sidebar_icon' />
        <h4 className='sidebar_text'>Watch later</h4>
      </div>
    </NavLink>
  )
}

export default WatchLater

