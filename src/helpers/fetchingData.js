import axios from "axios"

const API_KEY = process.env.REACT_APP_API_KEY

export const getVideoInfo = async (videosArr) => {
  try {
    for (let video of videosArr){
      // get extra video info
      const videoResponse = await axios(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=contentDetails&part=player&part=statistics&id=${video.id.videoId}&key=${API_KEY}`)
      Object.assign(video.snippet, {...videoResponse.data.items[0].snippet})
      video.extraInfo = Object.assign(
        {},
        videoResponse.data.items[0].tags,
        videoResponse.data.items[0].contentDetails,
        videoResponse.data.items[0].statistics,
        videoResponse.data.items[0].player
      )
      // get channel info
      const channelResponse = await axios(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet&part=statistics&part=contentDetails&id=${video.snippet.channelId}&key=${API_KEY}`)
      // storing fetched data
      const channelResultA = channelResponse.data.items[0].snippet
      const channelResultB = channelResponse.data.items[0].statistics
      const channelInfo = Object.assign(
        {},
        {
          ...channelResultA,
          ...channelResultB
        }
      )
      video.channelInfo = channelInfo
    }

    return videosArr

  } catch (error) {
    console.log(error);
  }
}

export const getComments = async (videoId) => {
  const response = await axios(
    `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoId}&key=${API_KEY}`
  )
  const commentsApi = await response.data.items
  return commentsApi
}

export const getRelatedVideos = async (videoId) => {
  try {
    const response = await axios(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&relatedToVideoId=${videoId}&type=video&key=${API_KEY}`)
    const relatedVideosApi = await response.data.items
    return relatedVideosApi
  } catch (err) {
    console.log(err)
  }
}