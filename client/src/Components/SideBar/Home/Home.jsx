import React from 'react'
import { NavLink } from 'react-router-dom'
// import {BsHouseDoor as Home} from 'react-icons/bs'
// import {BsHouseDoorFill as Home} from 'react-icons/bs'
import { AiFillHome } from 'react-icons/ai'

const Home = () => {

  return (
    <NavLink to='/' activeClassName='active' data-for='sidebar' data-tip='Home'>
      <div className='sidebar_icon_container'>
        <AiFillHome size={23} className='sidebar_icon' />
        <h4 className='sidebar_text'>Home</h4>
      </div>
    </NavLink>
  )
}

export default Home
