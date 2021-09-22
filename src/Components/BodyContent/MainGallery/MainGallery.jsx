import React, { useState, useEffect, useContext} from 'react'
import SearchContext from '../../../Contexts/search/SearchContext'
import axios from 'axios'
import { getVideoInfo } from '../../../helpers/fetchingData'
import VideoCard from '../VideoCard/VideoCard'
import SideBarContext from '../../../Contexts/sideBar/SideBarContext'
import useWindowSize from '../../../helpers/useWindowSize'

const MainGallery = () => {
  const storedVideos = JSON.parse(localStorage.getItem('mainVideos'))
  const [mainVideos, setMainVideos] = useState(storedVideos || [])
  const { API_KEY } = useContext(SearchContext)
  const { setIsToggled } = useContext(SideBarContext)
  const { width } = useWindowSize()

  
  const getMainVideos = async () => {
    try {
      if(!storedVideos){
        const response = await axios(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=techno&key=${API_KEY}`)
        let videosArray = await response.data.items
        videosArray = await getVideoInfo(videosArray)
        setMainVideos(videosArray)

        // storing videos in localStorage in order that all requests are not consumed
        localStorage.setItem('mainVideos', JSON.stringify(videosArray))
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getMainVideos();
    if (width >= 792) setIsToggled(true)
  }, [])

  const mainGalleryVideos = mainVideos.map(video => (
    <VideoCard
      key={video.id.videoId}
      id={video.id.videoId}
      video={video}
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
