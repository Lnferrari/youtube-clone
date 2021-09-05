import React, { useState } from 'react'
import SideBarContext from './SideBarContext'


const SideBarState = ({children}) => {
  const [isToggled, setIsToggled] = useState(true)


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
