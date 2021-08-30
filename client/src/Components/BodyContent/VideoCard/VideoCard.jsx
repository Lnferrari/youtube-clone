import React from 'react'
import { ImInfo } from 'react-icons/im'
import { Link } from 'react-router-dom'
import formatNum from '../../../helpers/formatNum'
import moment from 'moment'
import {BiDotsVerticalRounded as Dots} from 'react-icons/bi'

const VideoCard = ({id, info, channelInfo}) => {

  // const views = formatNum(channelInfo.statistics.viewCount)
  const time = moment(info.publishedAt, "YYYYMMDD").fromNow()

  return (
    <div className='videoCard'>
      <Link to={`/video/${id}`}>
        <div className='video_preview'>
          <img src={info.thumbnails.medium.url} alt={info.title} />
        </div>
        <div className='video_info_container'>
          <div className='avatar_container'>
            <img src={channelInfo.thumbnails.default.url} alt={`${info.channelTitle} avatar`} className='avatar' />
          </div>
          <div className='video_text_container'>
            <h3>{info.title}</h3>
            <div className='video_info'>
              <Link to={`/channel/${channelInfo.customUrl}`} >
                <div className='channelName'>
                  {info.channelTitle}
                </div>
              </Link>
              <div className='vide_metadata'>
                {/* <span>{views} views</span> */}
                <span className='dot_separator'>&#8226;</span>
                <span>{time}</span>
              </div>
            </div>
            <div className='dots_container'>
              <Dots size={25} />
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default VideoCard
