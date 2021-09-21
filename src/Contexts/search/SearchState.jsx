import React, { useState, useEffect } from 'react'
import SearchContext from './SearchContext'
// import { ImSearch as SearchIcon } from 'react-icons/im'
// import {MdKeyboardVoice as VoiceIcon} from 'react-icons/md'
// import { BiArrowBack } from 'react-icons/bi'
// import axios from 'axios'
// import { Redirect, useHistory } from 'react-router-dom'

const SearchState = ({children}) => {
  const [searchQuery, setSearchQuery] = useState({
    input: '',
    videos: []
  })
  const [ showSpecialSearchBar, setShowSpecialSearchBar ] = useState(false)

  // let history = useHistory()

  const API_KEY = process.env.REACT_APP_API_KEY
  const API_SEARCH = process.env.REACT_APP_API_SEARCH_URL

  

  const showSearchBar = () => {
    setShowSpecialSearchBar(true)
  }

  const hiddeSearchBar = () => {
    setShowSpecialSearchBar(false)
  }



  // useEffect(() => {
    
  // }, [searchQuery.videos])

  return (
    <SearchContext.Provider value={{
      searchQuery,
      setSearchQuery,
      API_SEARCH,
      API_KEY,
      showSpecialSearchBar,
      showSearchBar,
      hiddeSearchBar
    }}>
      {children}
    </SearchContext.Provider>
  )
}

export default SearchState
