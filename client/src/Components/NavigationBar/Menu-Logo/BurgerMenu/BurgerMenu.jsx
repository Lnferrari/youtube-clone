import React, { useContext } from 'react'
import {IoMenu as Menu} from 'react-icons/io5'
import SideBarContext from '../../../../Contexts/sideBar/SideBarContext'

const BurgerMenu = () => {
  const {handleToggleSideBar} = useContext(SideBarContext)
  return (
    <button className='icon-container' onClick={handleToggleSideBar}>
      <Menu size={25} />
    </button>
  )
}

export default BurgerMenu
