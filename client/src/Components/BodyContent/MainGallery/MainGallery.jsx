import React, { useState, useEffect, useContext} from 'react'
import SearchContext from '../../../Contexts/search/SearchContext'
import axios from 'axios'
import VideoCard from '../VideoCard/VideoCard'

const MainGallery = () => {
  const storedVideos = JSON.parse(localStorage.getItem('mainVideos'))
  const [mainVideos, setMainVideos] = useState(storedVideos || [])
  const {API_SEARCH, API_KEY} = useContext(SearchContext)

  const getMainVideos = async () => {
    try {
      if(!storedVideos){
        const response = await axios(`${API_SEARCH}techno&key=${API_KEY}`)
        const videosArray = await response.data.items
        console.log(videosArray)
        for await (let video of videosArray){
          // get video Extra info
          const videoResponse = await axios(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=contentDetails&part=player&part=statistics&id=${video.id.videoId}&key=${API_KEY}`)
          console.log(video.snippet);
          Object.assign(video.snippet, {...videoResponse.data.items[0].snippet})
          console.log(video.snippet);
          video.extraInfo = Object.assign({}, videoResponse.data.items[0].tags, videoResponse.data.items[0].contentDetails, videoResponse.data.items[0].statistics, videoResponse.data.items[0].player)
          // get channel info
          const channelResponse = await axios(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet&part=statistics&part=contentDetails&id=${video.snippet.channelId}&key=${API_KEY}`)
          // storing fetched data
          const channelResultA = channelResponse.data.items[0].snippet
          const channelResultB = channelResponse.data.items[0].statistics
          const channelInfo = Object.assign({}, {...channelResultA, ...channelResultB})
          video.channelInfo = channelInfo
        }
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
    <VideoCard key={video.id.videoId} id={video.id.videoId} info={video.snippet} channelInfo={video.channelInfo} />
  ))

  return (
    <section className='mainGallery'>
      {mainGalleryVideos}
    </section>
  )
}

export default MainGallery
