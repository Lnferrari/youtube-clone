import React, { useContext } from 'react'
import UserContext from '../../../Contexts/user/UserContext'
import VideoCard from '../VideoCard/VideoCard'

const WatchLaterVideos = () => {
  const { user } = useContext(UserContext)

  const watchLaterMarkUp = user.watchLater.map(
    video => (
      <VideoCard
        key={video.id.videoId}
        id={video.id.videoId}
        video={video}
        img={video.snippet.thumbnails.medium.url}
        info={video.snippet}
        eInfo={video.extraInfo}
        channelInfo={video.channelInfo}
      />
    )
  )

  return (
    <section id='watchLater'>
      {
        user.watchLater.length > 0
        ? watchLaterMarkUp
        : <h3>No videos have been added yet</h3>
      }
    </section>
  )
}

export default WatchLaterVideos
