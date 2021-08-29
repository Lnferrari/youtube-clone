import React from 'react'
import Home from './Home/Home'
import Explore from './Explore/Explore'
import Subscriptions from './Subscription/Subscriptions'
import Library from './Library/Library'

const SmallSideBar = () => {
  return (
    <aside className='small_sidebar'>
      <div className='small_sidebar_container'>
        <Home />
        <Explore />
        <Subscriptions />
        <Library />
      </div>
    </aside>
  )
}

export default SmallSideBar
