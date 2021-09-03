import React from 'react'
import { NavLink } from 'react-router-dom'
import { RiFeedbackFill as Feedback } from 'react-icons/ri'

const SendFeedback = () => {
  return (
    <NavLink to='/' activeClassName='active' data-for='sidebar' data-tip='Send feedback'>
      <div className='sidebar_icon_container'>
        <Feedback size={23} className='sidebar_icon' />
        <h4 className='sidebar_text'>Send feedback</h4>
      </div>
    </NavLink>
  )
}

export default SendFeedback