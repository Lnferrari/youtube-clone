import React, { useContext } from 'react'
import SideBarContext from '../../Contexts/sideBar/SideBarContext'
import BigSideBar from './BigSideBar'
import SmallSideBar from './SmallSideBar'
import { useLocation } from 'react-router'

const Index = () => {
  const { isToggled, seIsToggled } = useContext(SideBarContext)
  const location = useLocation()
  console.log(location)

  return (
    <>
    {
      location.pathname.startsWith('/video/')
      ? (
        isToggled 
        ? <BigSideBar />
        : <div className='separator'></div>
      )
      : (
          isToggled 
          ? <BigSideBar />
          : <SmallSideBar />
      )
    }
  </>
  )
}

export default Index 
