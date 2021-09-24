import React, { useState, useEffect } from 'react'
import SideBarContext from './SideBarContext'
import useWindowSize from '../../helpers/useWindowSize'


const SideBarState = ({children}) => {
  const [isToggled, setIsToggled] = useState(true)
  const { width } = useWindowSize()

  const handleToggleSideBar = () => {
    setIsToggled(!isToggled)
  }

  return (
    <SideBarContext.Provider value={{isToggled, setIsToggled, handleToggleSideBar}}>
      {children}
    </SideBarContext.Provider>
  )
}

export default SideBarState
