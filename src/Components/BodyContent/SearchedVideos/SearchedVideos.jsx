import React, { useContext, useEffect, useState } from 'react'
import SearchContext from '../../../Contexts/search/SearchContext'
import getVideoInfo from '../../../helpers/getVideoInfo'
import VideoCard from '../VideoCard/VideoCard'

const SearchVideos = () => {
  const [ searchedVideos, setSearchedVideos] = useState([])
  const { searchQuery } = useContext(SearchContext)

  const searchedVideosMarkUp = searchedVideos.map(
    video => (
      <VideoCard
        key={video.id.videoId}
        id={video.id.videoId}
        img={video.snippet.thumbnails.medium.url}
        info={video.snippet}
        eInfo={video.extraInfo}
        channelInfo={video.channelInfo}
      />
    )
  )

  useEffect(async () => {
    const videos = await getVideoInfo(searchQuery.videos)
    setSearchedVideos(videos)
  }, [])

  return (
    <section className='searchedVideos'>
      {searchedVideosMarkUp}
    </section>
  )
}

export default SearchVideos
