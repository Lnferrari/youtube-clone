import React from 'react'
import Home from './Home/Home'
import Explore from './Explore/Explore'
import Subscriptions from './Subscription/Subscriptions'
import Library from './Library/Library'
import History from './History/History'
import WatchLater from './Watch later/WatchLater'
import LikedVideos from './Liked videos/LikedVideos'
import SubscriptionsSection from './SubscriptionsSection/index'
import MoreSection from './More/index'
import Settings from './Settings/Settings'
import ReportHistory from './Report history/ReportHistory'
import Help from './Help/Help'
import Feedback from './Feedback/SendFeedback'
import ReactTooltip from 'react-tooltip'


const BigSideBar = () => {
  return (
      <>
        <div className='big_sidebar'>
          <div className="side_bar_section">
            <Home />
            <Explore />
            <Subscriptions />
          </div>
          <div className="side_bar_section">
            <Library />
            <History />
            <WatchLater />
            <LikedVideos />
          </div>
          <div className="side_bar_section">
            <SubscriptionsSection />
          </div>
          <div className="side_bar_section">
            <MoreSection />
          </div>
          <div className="side_bar_section">
            <Settings />
            <ReportHistory />
            <Help />
            <Feedback />
          </div>
          <ReactTooltip  effect='solid' id='sidebar' place='bottom' backgroundColor='black' delayShow={300} arrowColor='transparent' offset={{top: 0, left: 0}} className='tooltip'/>
          <div className="side_bar_section footer">
            Cloned by Lucas Ferrari
          </div>
        </div>
        <div className='plus-grid-side'>
        
        </div>
      </>
  )
}

export default BigSideBar
