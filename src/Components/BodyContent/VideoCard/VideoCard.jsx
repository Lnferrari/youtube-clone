import React from 'react'
import { Link } from 'react-router-dom'
import formatViews from '../../../helpers/formatViews'
import formatTimeVideo from '../../../helpers/formatTimeVideo'
import moment from 'moment'
import {BiDotsVerticalRounded as Dots} from 'react-icons/bi'
import ReactTooltip from 'react-tooltip';


const VideoCard = ({id, video, img, info, eInfo, channelInfo}) => {
  
  const duration = formatTimeVideo(eInfo.duration)
  const views = formatViews(eInfo.viewCount)
  const time = moment(info.publishedAt, "YYYYMMDD").fromNow()

  const videoLinkData = {
    pathname: `/video/${id}`,
    state: video
  }

  return (
    <div className='videoCard'>
      <Link to={videoLinkData}>
        <div className='video_preview'>
          <img src={img} alt={info.title} />
          {
            duration
            ? <div className='video_duration'>
                <span>{duration}</span>
            </div>
            : null
          }
          
        </div>
        <div className='video_info_container'>
          <div className='avatar_container'>
            <img src={img}
              alt={`${info.channelTitle} avatar`}
              className='avatar'
              data-for='avatar'
              data-tip={info.channelTitle}
            />
            <ReactTooltip
              effect='solid'
              id='avatar'
              place='bottom'
              delayShow={200}
              arrowColor='transparent'
              offset={{top: 0, left: 0}}
              className='tooltip'
            />
          </div>
          <div className='video_text_container'>
            <h3
              data-for='title'
              data-tip={info.title}
            >
              {
                info.title.length > 60
                ? (info.title.substring(0, 60)+'...')
                : info.title
              }
            </h3>
            <ReactTooltip
              effect='solid'
              id='title'
              place='bottom'
              delayShow={200}
              arrowColor='transparent'
              offset={{top: 0, left: 0}}
              className='tooltip'
            />
            <div className='video_info'>
              <Link to={`/channel/${channelInfo.customUrl}`}>
                <div className='channelName'
                  data-for='channel'
                  data-tip={info.channelTitle}
                >
                  {info.channelTitle}
                </div>
                <ReactTooltip
                  effect='solid'
                  id='channel'
                  place='top'
                  delayShow={100}
                  offset={{top: 0, left: 0}}
                  arrowColor='transparent'
                  className='tooltip'
                />
              </Link>
              <div className='video_metadata'>
                <span>{views} views</span>
                <span className='dot_separator'> &#8226; </span>
                <span>{time}</span>
              </div>
            </div>
          </div>
          <div className='dots_container'>
            <Dots size={25} className='dots' />
          </div>
        </div>
      </Link>
    </div>
  )
}

export default VideoCard
