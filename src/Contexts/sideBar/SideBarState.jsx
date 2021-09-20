import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router'
import SideBarContext from './SideBarContext'
import useWindowSize from '../../helpers/useWindowSize'


const SideBarState = ({children}) => {
  const [isToggled, setIsToggled] = useState(true)
  const { width } = useWindowSize()
  // const location = useLocation()

  const handleToggleSideBar = () => {
    setIsToggled(!isToggled)
  }

  useEffect(() => {
    width <= 1320
    ? setIsToggled(false)
    : setIsToggled(true)
    // else if (location.pathname.startsWith('/video'))
    //   setIsToggled(false);
    // else setIsToggled(true);
  }, [width])

  return (
    <SideBarContext.Provider value={{isToggled, setIsToggled, handleToggleSideBar}}>
      {children}
    </SideBarContext.Provider>
  )
}

export default SideBarState
