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
  const [ user, setUser ] = useState(localUser || initialUserState)

  const likeVideo = videoId => {
    let updatedUserLikes = []
    const alreadyLiked = user.likedVideos?.find(
      video => video === videoId
    )
    if (alreadyLiked) {
      updatedUserLikes = user.likedVideos.filter(
        video => video !== videoId
      )
    } else {
      updatedUserLikes = user.likedVideos?.concat(videoId)
    }
    setUser({
      ...user,
      likedVideos: updatedUserLikes
    })
    
    localStorage.setItem(
      'userYoutubeClone',
      JSON.stringify(user)
    )
  }

  const addToWatchLater = videoId => {
    const updatedWatchLater = user.watchLater.concat(videoId)
    setUser({
      ...user,
      watchLater: updatedWatchLater
    })

    localStorage.setItem(
      'userYoutubeClone',
      JSON.stringify(user)
    )
  }

  const subscribeToChannel = channelId => {
    let updatedSubscriptions = []
    const alreadySubscribed = user.subscriptions?.find(
      channel => channel === channelId
    )
    if (alreadySubscribed) {
      updatedSubscriptions = user.subscriptions.filter(
        channel => channel !== channelId
      )
    } else {
      updatedSubscriptions = user.subscriptions?.concat(channelId)
    }
    setUser({
      ...user,
      subscriptions: updatedSubscriptions
    })
    
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
