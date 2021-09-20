import React, { useState, useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import {ImSearch as SearchIcon} from 'react-icons/im'
import {MdKeyboardVoice as VoiceIcon} from 'react-icons/md'
import SearchContext from '../../../Contexts/search/SearchContext'
import axios from 'axios'
import useWindowSize from '../../../helpers/useWindowSize'

const SearchBar = () => {
  const {searchQuery, setSearchQuery, API_SEARCH, API_KEY} = useContext(SearchContext)
  const history = useHistory()
  const { width } = useWindowSize()

  const handleChange = e => {
    setSearchQuery({
        ...searchQuery,
        input: e.target.value
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const query = JSON.parse(localStorage.getItem(searchQuery.input))
    if(searchQuery.input !== '' || !query){
      console.log('searching...');
      const response = await axios(`${API_SEARCH}${searchQuery.input}&key=${API_KEY}`)
      console.log(response)
      const result = await response.json()
      console.log(result)
      setSearchQuery({
          ...searchQuery,
          videos: result
      })
      history.push(`/results?search_query=${searchQuery.input}`)
    }
    if(query){
      setSearchQuery({
        ...searchQuery,
        videos: query.videos
      })
      history.push(`/results?search_query=${searchQuery.input}`)
    }
  }

  useEffect(() => {
    localStorage.setItem(searchQuery.input, JSON.stringify(searchQuery.videos))
  }, [searchQuery.videos])

  return (
    <div className={`SearchBar ${width <= 640 ? 'smallSearch' : ''}`}>
      {
        width > 640
        ? (<form onSubmit={handleSubmit}>
            <input type="text" name='search' value={searchQuery.input} placeholder='Search' onChange={handleChange} autoComplete='false' />
            <button>
              <SearchIcon size={20} data-tip='Search' data-for='navbar' />
            </button>
          </form>)
        : <button className='icon-container searchIcon'>
          <SearchIcon size={20} data-tip='Search' data-for='navbar' />
        </button>
      }
      <button className='icon-container voiceIcon'>
        <VoiceIcon size={25} data-tip='Search with your voice' data-for='navbar' />
      </button>
    </div>
  )
}

export default SearchBar