import React, { useState, useEffect } from 'react'
import SearchContext from './SearchContext'
import { ImSearch as SearchIcon } from 'react-icons/im'
import {MdKeyboardVoice as VoiceIcon} from 'react-icons/md'
import { BiArrowBack } from 'react-icons/bi'
import axios from 'axios'
import { Redirect, useHistory } from 'react-router-dom'

const SearchState = ({children}) => {
  const [searchQuery, setSearchQuery] = useState({
    input: '',
    videos: []
  })
  const [ showSpecialSearchBar, setShowSpecialSearchBar ] = useState(false)

  let history = useHistory()

  const API_KEY = process.env.REACT_APP_API_KEY
  const API_SEARCH = process.env.REACT_APP_API_SEARCH_URL

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
      const response = await axios(`${API_SEARCH}${searchQuery.input}&key=${API_KEY}`)
      const result = await response.data
      setSearchQuery({
          ...searchQuery,
          videos: result.items
      });
      // history.push(`/results/${searchQuery.input}`)
      <Redirect to={`/results/${searchQuery.input}`} />
    }
  }

  const showSearchBar = () => {
    setShowSpecialSearchBar(true)
  }

  const hiddeSearchBar = () => {
    setShowSpecialSearchBar(false)
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

  // useEffect(() => {
    
  // }, [searchQuery.videos])

  return (
    <SearchContext.Provider value={{
      searchQuery,
      setSearchQuery,
      API_SEARCH,
      API_KEY,
      handleChange,
      handleSubmit,
      specialSearchBarMarkUp,
      showSpecialSearchBar,
      showSearchBar,
      hiddeSearchBar
    }}>
      {children}
    </SearchContext.Provider>
  )
}

export default SearchState
