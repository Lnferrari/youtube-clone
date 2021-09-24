import React, { useEffect, useState } from 'react'
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

  // receives only name and image in order to render that info. In case of project expansion, the argument would be the channelID in order to get all the info of that channel.
  const subscribeToChannel = (title, img) => {
    const newChannel = {
      title: title,
      img: img
    }
    let updatedSubscriptions = []
    const alreadySubscribed = user.subscriptions?.find(
      channel => channel.title === title
    )
    if (alreadySubscribed) {
      updatedSubscriptions = user.subscriptions.filter(
        channel => channel.title !== title
      )
    } else {
      updatedSubscriptions = user.subscriptions?.concat(newChannel)
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
