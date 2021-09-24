import React, { useContext, useEffect } from 'react'
import UserContext from '../../../Contexts/user/UserContext'

const SubscriptionsSection = () => {
  const { user } = useContext(UserContext)

  const subscriptionsMarkUp = user.subscriptions.map(
    channel => (
      <div className="channel_subscribed">
        <img src={channel.img} alt={channel.title} className='channel_avatar' />
        <h4>{channel.title}</h4>
      </div>
    )
  )
  
  return (
    <>
      <h3>SUBSCRIPTIONS</h3>
      {
        user.subscriptions.length > 0
        ? subscriptionsMarkUp
        : <h4 style={{ color: '#AAAAAA' }}>
          Not subscribed to any channel
        </h4>
      }
    </>
  )
}

export default SubscriptionsSection
