import React, { useState, useContext } from 'react'
import SideBarContext from './SideBarContext'

const SideBarState = ({children}) => {
  const [isToggled, setIsToggled] = useState(true)

  const handleToggleSideBar = () => {
    setIsToggled(!isToggled)
  }

  return (
    <SideBarContext.Provider value={{isToggled, handleToggleSideBar}}>
      {children}
    </SideBarContext.Provider>
  )
}

export default SideBarState
