import React from 'react'
import { NavLink } from 'react-router-dom'
import { MdLocalMovies as Movies } from 'react-icons/md'

const MoviesShows = () => {
  return (
    <NavLink to='/feed/storefront?bp=ogUCKAI%3D' activeClassName='active' data-for='sidebar' data-tip='Movies & Shows'>
      <div className='sidebar_icon_container'>
        <Movies size={23} className='sidebar_icon' />
        <h4 className='sidebar_text'>Movies & Shows</h4>
      </div>
    </NavLink>
  )
}

export default MoviesShows
