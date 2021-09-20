import React from 'react'
import MenuLogo from './Menu-Logo/index'
import SearchBar from './SearchBar/SearchBar'
import ButtonsSection from './Buttons/ButtonsSection';

const index = () => {
  
  return (
    <nav className='Navbar'>
      <MenuLogo />
      <SearchBar />
      <ButtonsSection />
    </nav>
  )
}

export default index
