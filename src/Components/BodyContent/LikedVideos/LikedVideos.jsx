import React, { useContext } from 'react'
import axios from 'axios'
import UserContext from '../../../Contexts/user/UserContext'
import VideoCard from '../VideoCard/VideoCard'

const LikedVideos = () => {
  const { user } = useContext(UserContext)

  const likedVideosMarkUp = user.likedVideos?.map(
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
    <section id='likedVideos'>
      {
        user.likedVideos.length > 0
        ? likedVideosMarkUp
        : <h3>No favourite videos yet</h3>
      }
    </section>
  )
}

export default LikedVideos
