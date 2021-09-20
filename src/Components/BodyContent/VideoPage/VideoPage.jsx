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
import UserContext from '../../../Contexts/user/UserContext'
import axios from 'axios'
import faker from 'faker'

const VideoPage = () => {
  const { videoId } = useParams()
  const [relatedVideos, setRelatedVideos] = useState(JSON.parse(localStorage.getItem('mainVideos')) || [])
  const [currentVideo, setCurrentVideo ] = useState(
    relatedVideos.find(item =>
      item.id.videoId === videoId
    )
  )
  const [ videoComments, setVideoComments ] = useState([])
  const { setIsToggled } = useContext(SideBarContext)
  const { user,
    likeVideo,
    addToWatchLater,
    subscribeToChannel
  } = useContext(UserContext)
  
  const opts = {
    height: '720',
    width: '1280'
  }

  const videoViews = formatNumber(currentVideo.extraInfo.viewCount)
  const likes = formatViews(currentVideo.extraInfo.likeCount)
  const dislikes = formatViews(currentVideo.extraInfo.dislikeCount)
  const subscribers = formatViews(currentVideo.channelInfo.subscriberCount)
  const comments = formatNumber(currentVideo.extraInfo.commentCount)

  const getComments = async () => {
    const response = await axios(
      `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoId}&key=${process.env.REACT_APP_API_KEY}`
    )
    console.log(response)
    const commentsApi = await response.data.items
    setVideoComments(commentsApi)
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
          currentVideo.snippet.tags.map((tag, i) => (
            <span className='tag' key={i}>#{tag}</span>
          ))
        }
      </div>
      <h1>{currentVideo.snippet.title}</h1>
      <div className='videoplayer_metadata'>
        <span>{videoViews} visualisations</span>
        <span className='dot_separator'> &#8226; </span>
        <span>
          {moment(currentVideo.snippet.publishedAt).format('ll')}
        </span>
      </div>
    </div>
  )

  const videoCommentsMarkUp = videoComments.map(item => {
    const { id, snippet } = item.snippet.topLevelComment
    return (
      <div className="comment_container" key={id}>
        <div className="comment_avatar_container">
          <img src={snippet.authorProfileImageUrl} alt="user avatar" />
        </div>
        <div className='comment_text_container'>
          <div className="comment_author">
            {snippet.authorDisplayName}
            <span>
              {moment(snippet.publishedAt, "YYYYMMDD").fromNow()}
            </span>
          </div>
          <div className='comment_text'>
            {snippet.textOriginal}
          </div>
          <div className='comment_buttons'>
            <div>
              <BiLike size={16}/>
              <span className='muted'>
                {faker.datatype.number(998)}
              </span>
            </div>
            <div>
              <BiDislike size={16}/>
            </div>
            <span className='muted'>REPLY</span>
          </div>
        </div>
      </div>
    )
  })

  useEffect(() => {
    setIsToggled(false)
    getComments()
  }, [])

  useEffect(() => {
    const video = relatedVideos.find(item =>
      item.id.videoId === videoId
    )
    setCurrentVideo(video)
  }, [videoId])

  return (
    <section className='videoPage'>
      <div className="columns_container">
        <div className="column column_1">
          <div className="youtube_player_container">
            <YouTube className='youtube_player' videoId={videoId} onPlay={onPlayerReady} opts={opts} autoplay />
          </div>
          <div className='videoplayer_info'>
            { videoHeaderMarkUp }
            <div className="main_header_buttons">
              <div className='likes_container'>
                <div className="likes">
                  <BiLike size={25} onClick={() => likeVideo(videoId)} />
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
                <Save size={25} onClick={() => addToWatchLater(videoId)}/>
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
                <button
                  onClick={()=>subscribeToChannel(
                    currentVideo.snippet.channelId
                  )}
                  className={`${user?.subscriptions?.some(channel => channel === currentVideo.snippet.channelId) ? 'subscribed' : ''}`}
                >
                  {
                    user?.subscriptions?.some(channel => channel === currentVideo.snippet.channelId)
                    ? 'SUBSCRIBED'
                    : 'SUBSCRIBE'
                  }
                </button>
              </div>
            </div>
            <div className='video_description'>
              {formatText(currentVideo.snippet.description)}
            </div>
          </div>
          <div className="video_comments_container">
            <div className='video_comments_count'>
              {comments} Comments
            </div>
            <div className='video_comments'>
              {videoCommentsMarkUp}
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
