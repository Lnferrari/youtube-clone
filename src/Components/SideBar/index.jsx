import React, { useContext, useEffect } from 'react'
import SideBarContext from '../../Contexts/sideBar/SideBarContext'
import BigSideBar from './BigSideBar'
import SmallSideBar from './SmallSideBar'
import { useLocation } from 'react-router'
import useWindowSize from '../../helpers/useWindowSize'


const Index = () => {
  const { isToggled, setIsToggled } = useContext(SideBarContext)
  const { width } = useWindowSize()
  const location = useLocation()

  // useEffect(() => {
  //   if (width >= 792) setIsToggled(true)
  //   else setIsToggled(false)
  // }, [])
  
  useEffect(() => {
    width <= 1320
    ? setIsToggled(false)
    : location.pathname.startsWith('/video')
      ? setIsToggled(false)
      : setIsToggled(true)
  }, [width])

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
