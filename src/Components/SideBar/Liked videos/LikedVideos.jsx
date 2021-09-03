import React from 'react'
import { NavLink } from 'react-router-dom'
import { RiThumbUpFill as Likes } from 'react-icons/ri'

const LikedVideos = () => {
  return (
    <NavLink to='/playlist?list=LL' activeClassName='active' data-for='sidebar' data-tip='Liked videos'>
      <div className='sidebar_icon_container'>
        <Likes size={23} className='sidebar_icon' />
        <h4 className='sidebar_text'>Liked videos</h4>
      </div>
    </NavLink>
  )
}

export default LikedVideos
