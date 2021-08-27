import React from 'react'
import Shome from './SmallHome/SmallHome'
import Sexplorer from './SmallExplorer/SmallExplorer'
import Ssubscription from './SmallSubscription/SmallLibrary'
import Slibrary from './SmallLibrary/SsmallSubscriptions';

const index = ({toggler}) => {

  return (
    <div className={toggler ? '':'plus'}>
      <div className='s_sidebar'>
        <Shome/>
        <Sexplorer />
        <Slibrary />
        <Ssubscription />
      </div>
    </div>
  )
}

export default index