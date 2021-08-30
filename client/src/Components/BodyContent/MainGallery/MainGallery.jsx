import React, { useState, useEffect, useContext} from 'react'
import SearchContext from '../../../Contexts/search/SearchContext'
import axios from 'axios'
import VideoCard from '../VideoCard/VideoCard'

const MainGallery = () => {
  const storedVideos = JSON.parse(localStorage.getItem('mainVideos'))
  // const storedChannels = JSON.parse(localStorage.getItem('mainChannels'))
  const [mainVideos, setMainVideos] = useState(storedVideos || [])
  // const [mainChannels, setMainChannels] = useState(storedChannels || [])
  const {API_SEARCH, API_KEY} = useContext(SearchContext)

  const getMainVideos = async () => {
    try {
      if(!storedVideos){
        const response = await axios(`${API_SEARCH}react&key=${API_KEY}`)
        const videosArray = await response.data.items
        console.log(videosArray)
        // setMainVideos(videosArray)
        // let channelsData = []
        for await (let video of videosArray){
          const response = await axios(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet&part=statistics&part=contentDetails&id=${video.snippet.channelId}&key=${API_KEY}`)
          console.log(response)
          const result1 = response.data.items[0].snippet
          const result2 = response.data.items[0].statistics
          const channelInfo = Object.assign({}, {...result1, ...result2})
          // channelsData.push(result)
          video.channelInfo = channelInfo
          console.log(video.channelInfo)
        }
        setMainVideos(videosArray)
        localStorage.setItem('mainVideos', JSON.stringify(videosArray))
      }
    } catch (error) {
      console.log(error);
    }
  }

  // useEffect(() => {
  //   getMainVideos()
  // }, [])

  const mainGalleryVideos = mainVideos.map(video => (
    <VideoCard key={video.id.videoId} id={video.id.videoId} info={video.snippet} channelInfo={video.channelInfo} />
  ))

  return (
    <section className='mainGallery'>
      {mainGalleryVideos}
    </section>
  )
}

export default MainGallery
