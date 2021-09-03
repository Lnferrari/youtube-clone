import React, { useContext } from 'react'
import SearchContext from '../../../Contexts/search/SearchContext'

const SearchVideos = () => {
  const {searchQuery} = useContext(SearchContext)

  return (
    <section className='searchedVideos'>
      
    </section>
  )
}

export default SearchVideos
