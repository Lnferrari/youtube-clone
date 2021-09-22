import React, { useContext, useEffect } from 'react'
import { ImSearch as SearchIcon } from 'react-icons/im'
import {MdKeyboardVoice as VoiceIcon} from 'react-icons/md'
import { BiArrowBack } from 'react-icons/bi'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import MenuLogo from './Menu-Logo/index'
import SearchBar from './SearchBar/SearchBar'
import ButtonsSection from './Buttons/ButtonsSection';
import SearchContext from '../../Contexts/search/SearchContext';
import useWindowSize from '../../helpers/useWindowSize';

const Index = () => {
  const {
    searchQuery,
    setSearchQuery,
    API_KEY,
    showSpecialSearchBar,
    setShowSpecialSearchBar,
    showSearchBar,
    hiddeSearchBar
  } = useContext(SearchContext)
  
  const { width } = useWindowSize()
  let history = useHistory()


  const handleChange = e => {
    setSearchQuery({
        ...searchQuery,
        input: e.target.value
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if(searchQuery.input !== ''){
      console.log('searching...');
      const response = await axios(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${searchQuery.input}&key=${API_KEY}`)
      const videosApi = await response.data.items
      setSearchQuery({
          ...searchQuery,
          videos: videosApi
      });
      history.push(`/results/${searchQuery.input}`)
    }
  }

  // Search input field for small devices
  const specialSearchBarMarkUp = (
    <div className='special_searchbar'>
      <button onClick={hiddeSearchBar}>
        <BiArrowBack size={25} />
      </button>
      <form onSubmit={handleSubmit}>
        <input type="text"
          name='search'
          value={searchQuery.input}
          placeholder='Search'
          onChange={handleChange}
          autoComplete='false'
        />
        <button type='submit'>
          <SearchIcon size={20} data-tip='Search' data-for='navbar' />
        </button>
      </form>
      <button className='icon-container voiceIcon'>
        <VoiceIcon size={25} data-tip='Search with your voice' data-for='navbar' />
      </button>
    </div>
  )

  useEffect(() => {
    setShowSpecialSearchBar(false)
  }, [width])

  return (
    <nav className='Navbar'>
      {
        width <= 640 && showSpecialSearchBar
        ? specialSearchBarMarkUp
        : <>
          <MenuLogo />
          <SearchBar onChange={handleChange} onSubmit={handleSubmit} />
          <ButtonsSection />
        </> 
      }
    </nav>
  )
}

export default Index
