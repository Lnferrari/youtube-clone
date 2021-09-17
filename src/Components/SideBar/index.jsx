import React, { useContext, useEffect } from 'react'
import SideBarContext from '../../Contexts/sideBar/SideBarContext'
import BigSideBar from './BigSideBar'
import SmallSideBar from './SmallSideBar'
import { useLocation } from 'react-router'


const Index = () => {
  const { isToggled, setIsToggled } = useContext(SideBarContext)
  const location = useLocation()

  // useEffect(() => {
  //   if (location.pathname.startsWith('/video'))
  //     setIsToggled(false)
  // }, [location])

  return (
    <>
    {
      location.pathname.startsWith('/video/')
      ? (isToggled 
        ? <BigSideBar />
        : null
      )
      : (isToggled 
        ? <BigSideBar />
        : <SmallSideBar />
      )
    }
  </>
  )
}

export default Index 
