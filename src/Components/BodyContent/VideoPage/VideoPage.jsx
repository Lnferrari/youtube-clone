import React, { useEffect, useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import YouTube from 'react-youtube'
import SideBarContext from '../../../Contexts/sideBar/SideBarContext'
import VideoCard from '../VideoCard/VideoCard'
import moment from 'moment'
import formatNumber from '../../../helpers/formatNumber'

const VideoPage = () => {
  const { videoID } = useParams()
  const [relatedVideos, setRelatedVideos] = useState(JSON.parse(localStorage.getItem('mainVideos')) || [])
  const [currentVideo, setCurrentVideo ] = useState(
    relatedVideos.find(item => item.id.videoId === videoID)
  )
  const { setIsToggled } = useContext(SideBarContext)

  const opts = {
    height: '1080',
    width: '1920',
    playerVars: {
      autoplay: 1,
    },
  }

  const onPlayerReady = e => {
    e.target.playVideo();
  }

  useEffect(() => {
    setIsToggled(false)
  },[])

  const relatedVideosMarkUp = relatedVideos.map(video => (
    <VideoCard key={video.id.videoId} id={video.id.videoId} info={video.snippet} eInfo={video.extraInfo} image={video.snippet.thumbnails.default.url} channelInfo={video.channelInfo} className='related_video' />
  ))


  const videoHeaderMarkUp = (
    <div className='video_main_info'>
      <div className='tags'>
        {
          currentVideo.snippet.tags.map(tag => (
            <span className='tag'>#{tag}</span>
          ))
        }
      </div>
      <h1>{currentVideo.snippet.title}</h1>
      <div className='videoplayer_metadata'>
        <span>{formatNumber(currentVideo.extraInfo.viewCount)} visualisations</span>
        <span className='dot_separator'> &#8226; </span>
        <span>{moment(currentVideo.snippet.publishedAt).format('ll')}</span>
      </div>
    </div>
  )

  

  return (
    <section className='videoPage'>
      <div className="columns_container">
        <div className="column column_1">
          <YouTube className='youtube_player' videoId={videoID} onPlay={onPlayerReady} opts={opts} />
          <div className='videoplayer_info'>
            { videoHeaderMarkUp }
          </div>
        </div>
        <div className="column column_2">
        <div className='related_list'>
          { relatedVideosMarkUp }
        </div>
        </div>
      </div>
    </section>
  )
}

export default VideoPage
