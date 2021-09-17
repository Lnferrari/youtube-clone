import React, { useEffect, useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import YouTube from 'react-youtube'
import SideBarContext from '../../../Contexts/sideBar/SideBarContext'
import VideoCard from '../VideoCard/VideoCard'
import moment from 'moment'
import formatNumber from '../../../helpers/formatNumber'
import { RiFlagLine, RiShareForwardLine as Share } from 'react-icons/ri'
import { BiLike, BiDislike } from 'react-icons/bi'
import { MdPlaylistAdd as Save } from 'react-icons/md'
import formatViews from '../../../helpers/formatViews'

const VideoPage = () => {
  const { videoID } = useParams()
  const [relatedVideos, setRelatedVideos] = useState(JSON.parse(localStorage.getItem('mainVideos')) || [])
  const [currentVideo, setCurrentVideo ] = useState(
    relatedVideos.find(item =>
      item.id.videoId === videoID
    )
  )
  const { setIsToggled } = useContext(SideBarContext)

  const videoViews = formatNumber(currentVideo.extraInfo.viewCount)

  const likes = formatViews(currentVideo.extraInfo.likeCount)
  const dislikes = formatViews(currentVideo.extraInfo.dislikeCount)
  const subscribers = formatViews(currentVideo.channelInfo.subscriberCount)

  const opts = {
    height: '720',
    width: '1280'
  }

  const formatText = text => {
    const formatedText = text.split(' ').map(
      x => x.startsWith('http') ?
      <a href={x}>{x}</a> : <span> {x} </span>
    )
    return formatedText
  }

  const onPlayerReady = e => {
    e.target.playVideo();
  }

  const relatedVideosMarkUp = relatedVideos.map(video => (
    <VideoCard key={video.id.videoId} id={video.id.videoId} info={video.snippet} eInfo={video.extraInfo} image={video.snippet.thumbnails.default.url} channelInfo={video.channelInfo} />
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
        <span>{videoViews} visualisations</span>
        <span className='dot_separator'> &#8226; </span>
        <span>{moment(currentVideo.snippet.publishedAt).format('ll')}</span>
      </div>
    </div>
  )

  useEffect(() => {
    setIsToggled(false)
  }, [])

  return (
    <section className='videoPage'>
      <div className="columns_container">
        <div className="column column_1">
          <div className="youtube_player_container">
            <YouTube className='youtube_player' videoId={videoID} onPlay={onPlayerReady} opts={opts} autoplay />
          </div>
          <div className='videoplayer_info'>
            { videoHeaderMarkUp }
            <div className="main_header_buttons">
              <div className='likes_container'>
                <div className="likes">
                  <BiLike size={25} />
                  <span>{likes}</span>
                </div>
                <div className="dislikes">
                  <BiDislike size={25} />
                  <span>{dislikes}</span>
                </div>
              </div>
              <div className="share">
                <Share size={25} />
                <span>SHARE</span>
              </div>
              <div className="save">
                <Save size={25} />
                <span>SAVE</span>
              </div>
              <div className="report">
                <RiFlagLine size={25}
                  className='sidebar_icon'
                />
              </div>
            </div>
          </div>
          <div className="channel_video_info">
            <div className='channel_data'>
              <div className='channel_avatar'>
                <img src={currentVideo.channelInfo.thumbnails.default.url} alt="avatar" />
              </div>
              <div className='channel_title'>
                <a href="/">
                  {currentVideo.channelInfo.title}
                </a>
                <span>
                  {subscribers} subscribers
                </span>
              </div>
              <div className='channel_subscribe'>
                <button>SUBSCRIBE</button>
              </div>
            </div>
            <div className='video_description'>
              {formatText(currentVideo.snippet.description)}
            </div>
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
