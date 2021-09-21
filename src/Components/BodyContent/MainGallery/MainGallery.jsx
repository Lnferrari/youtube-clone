import React, { useState, useEffect, useContext} from 'react'
import SearchContext from '../../../Contexts/search/SearchContext'
import axios from 'axios'
import getVideoInfo from '../../../helpers/getVideoInfo'
import VideoCard from '../VideoCard/VideoCard'

const MainGallery = () => {
  const storedVideos = JSON.parse(localStorage.getItem('mainVideos'))
  const [mainVideos, setMainVideos] = useState(storedVideos || [])
  const {API_SEARCH, API_KEY} = useContext(SearchContext)

  const getMainVideos = async () => {
    try {
      if(!storedVideos){
        const response = await axios(`${API_SEARCH}techno&key=${API_KEY}`)
        let videosArray = await response.data.items
        videosArray = await getVideoInfo(videosArray)
        setMainVideos(videosArray)
        localStorage.setItem('mainVideos', JSON.stringify(videosArray))
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getMainVideos()
  }, [])

  const mainGalleryVideos = mainVideos.map(video => (
    <VideoCard
      key={video.id.videoId}
      id={video.id.videoId}
      img={video.snippet.thumbnails.medium.url}
      info={video.snippet}
      eInfo={video.extraInfo}
      channelInfo={video.channelInfo}
    />
  ))

  return (
    <section className='mainGallery'>
      {mainGalleryVideos}
    </section>
  )
}

export default MainGallery
