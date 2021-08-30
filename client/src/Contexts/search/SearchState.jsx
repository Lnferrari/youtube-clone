import React, { useState, useContext } from 'react'
import SearchContext from './SearchContext'

const SearchState = ({children}) => {
  const [searchQuery, setSearchQuery] = useState({
    input: '',
    videos: []
  })

  const API_KEY = process.env.REACT_APP_API_KEY
  const API_SEARCH = process.env.REACT_APP_API_SEARCH_URL


  return (
    <SearchContext.Provider value={{searchQuery, setSearchQuery, API_SEARCH, API_KEY}}>
      {children}
    </SearchContext.Provider>
  )
}

export default SearchState
