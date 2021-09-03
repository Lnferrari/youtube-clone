import React from 'react'
import { NavLink } from 'react-router-dom'
import { MdVideoLibrary } from 'react-icons/md'

const Library = () => {
  
  return (
    <NavLink to='/feed/library' activeClassName='active' data-for='sidebar' data-tip='Library'>
      <div className='sidebar_icon_container'>
        <MdVideoLibrary size={23} className='sidebar_icon' />
        <h4 className='sidebar_text'>Library</h4>
      </div>
    </NavLink>
  )
}

export default Library
