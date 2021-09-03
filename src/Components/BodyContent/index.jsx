import React, { useContext, useEffect } from 'react'
import { Route } from 'react-router-dom'
import SearchContext from '../../Contexts/search/SearchContext';
import MainGallery from './MainGallery/MainGallery'
import SearchedVideos from './SearchedVideos/SearchedVideos'
import VideoPage from './VideoPage/VideoPage';


const Index = () => {
  const {searchQuery} = useContext(SearchContext)

  return (
    <main>
      <Route exact path='/' component={MainGallery} />
      <Route exact path={`/results?search_query=${searchQuery.input}`}>
        <SearchedVideos />
      </Route>
      <Route exact path='/video/:videoID' component={VideoPage} />
      {/* <Route exact path='/channel/channelID' component={ChannelPage} /> */}
      <Route exact path='/account' />
    </main>
  )
}

export default Index
