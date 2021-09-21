import React, { useContext, useEffect } from 'react'
import SideBarContext from '../../Contexts/sideBar/SideBarContext'
import BigSideBar from './BigSideBar'
import SmallSideBar from './SmallSideBar'
import { useLocation } from 'react-router'
import useWindowSize from '../../helpers/useWindowSize'


const Index = () => {
  const { isToggled, setIsToggled } = useContext(SideBarContext)
  const location = useLocation()
  const { width } = useWindowSize()

  return (
    <>
    {
      location.pathname.startsWith('/video/')
      ? (isToggled 
        ? <BigSideBar />
        : null
      )
      : width < 792
        ? null
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
