import React, { useContext, useEffect, useState } from 'react'
import SearchContext from '../../../Contexts/search/SearchContext'
import SideBarContext from '../../../Contexts/sideBar/SideBarContext'
import { getVideoInfo } from '../../../helpers/fetchingData'
import VideoCard from '../VideoCard/VideoCard'

const SearchedVideos = () => {
  const [ searchedVideos, setSearchedVideos] = useState([])
  const { searchQuery } = useContext(SearchContext)
  const { setIsToggled } = useContext(SideBarContext)

  const searchedVideosMarkUp = searchedVideos && searchedVideos.map(
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

  useEffect(async () => {
    setIsToggled(true)
    const videos = await getVideoInfo(searchQuery.videos)
    setSearchedVideos(videos)
  }, [])

  return (
    <section className='searchedVideos'>
      {searchedVideosMarkUp}
    </section>
  )
}

export default SearchedVideos
