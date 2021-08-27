import React, { useContext } from 'react'
import SideBarContext from '../../Contexts/sideBar/SideBarContext'
import BigSideBar from './BigSideBar'
import SmallSideBar from './SmallSideBar'


const Index = () => {
  const isToggled = useContext(SideBarContext)
  return (
    <aside>
      {
        isToggled
        ? <BigSideBar />
        : <SmallSideBar />
      }
    </aside>
  )
}

export default Index
