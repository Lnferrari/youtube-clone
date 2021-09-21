import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import NavigationBar from './NavigationBar/index';
import SideBar from './SideBar/index'
import MainGallery from './BodyContent/MainGallery/MainGallery';
import VideoPage from './BodyContent/VideoPage/VideoPage';
import SearchedVideos from './BodyContent/SearchedVideos/SearchedVideos'

const Index = () => {
  
  return (
    <React.Fragment>
      <Router>
        <NavigationBar />
        <SideBar />
        <Switch>
          <main>
            <Route exact path='/' component={MainGallery} />
            <Route exact path='/results/:searchedText'>
              <SearchedVideos />
            </Route>
            <Route exact path='/video/:videoId' component={VideoPage} />
            {/* <Route exact path='/channel/channelId' component={ChannelPage} /> */}
            {/* <Route exact path='/account' /> */}
          </main>
        </Switch>
      </Router>
    </React.Fragment>
  )
}

export default Index
