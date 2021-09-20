import React, { useState } from 'react'
import UserContext from './UserContext'

const initialUserState = {
  likedVideos: [],
  watchLater: [],
  subscriptions: []
}

const UserState = ({children}) => {
  const localUser = JSON.parse(
    localStorage.getItem('userYoutubeClone')
  )
  const [ user, setUser ] = useState(localStorage || initialUserState)

  const likeVideo = videoId => {
    const updatedUserLikes = user.likedVideos.concat(videoId)
    setUser({ ...user, updatedUserLikes })
    localStorage.setItem(
      'userYoutubeClone',
      JSON.stringify(user)
    )
  }

  const addToWatchLater = videoId => {
    const updatedWatchLater = user.watchLater.concat(videoId)
    setUser({ ...user, updatedWatchLater })
    localStorage.setItem(
      'userYoutubeClone',
      JSON.stringify(user)
    )
  }

  const subscribeToChannel = channelId => {
    const updatedSubscriptions = user.subscriptions.concat(channelId)
    setUser({ ...user, updatedSubscriptions })
    localStorage.setItem(
      'userYoutubeClone',
      JSON.stringify(user)
    )
  }

  return (
    <UserContext.Provider value={{ user, likeVideo, addToWatchLater, subscribeToChannel }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserState
