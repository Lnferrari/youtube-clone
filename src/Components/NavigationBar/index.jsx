import React, { useContext } from 'react'
import MenuLogo from './Menu-Logo/index'
import SearchBar from './SearchBar/SearchBar'
import ButtonsSection from './Buttons/ButtonsSection';
import SearchContext from '../../Contexts/search/SearchContext';
import useWindowSize from '../../helpers/useWindowSize';

const Index = () => {
  const {
    specialSearchBarMarkUp,
    showSpecialSearchBar,
    showSearchBar,
    hiddeSearchBar
  } = useContext(SearchContext)
  
  const { width } = useWindowSize

  return (
    <nav className='Navbar'>
      {
        width < 640 && showSpecialSearchBar
        ? specialSearchBarMarkUp
        : <>
          <MenuLogo />
          <SearchBar />
          <ButtonsSection />
        </> 
      }
    </nav>
  )
}

export default Index
