import React, { useState, useEffect } from 'react'
import { getRelatedVideos, getVideoInfo } from '../../../helpers/fetchingData'
import VideoCard from '../VideoCard/VideoCard'


const RelatedVideos = ({currentVideo}) => {
  const [relatedVideos, setRelatedVideos] = useState([])

  const relatedVideosMarkUp = relatedVideos?.map(video => (
    <VideoCard
      key={video.id.videoId}
      id={video.id.videoId}
      video={video}
      info={video.snippet}
      eInfo={video.extraInfo}
      img={video.snippet.thumbnails.medium.url}
      channelInfo={video.channelInfo}
    />
  ))

  useEffect(async () => {
    const relVideos = await getRelatedVideos(currentVideo)
    const relVideosInfo = await getVideoInfo(relVideos)
    setRelatedVideos(relVideosInfo)
  }, [currentVideo])


  return (
    <div className='related_list'>
      { relatedVideosMarkUp }
    </div>
  )
}

export default RelatedVideos
