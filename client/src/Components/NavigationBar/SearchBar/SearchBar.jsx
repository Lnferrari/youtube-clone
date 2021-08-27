import React, { useState, useEffect} from 'react'
import {ImSearch as SearchIcon} from 'react-icons/im'
import {MdKeyboardVoice as VoiceIcon} from 'react-icons/md'

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const [videos, setVideos] = useState([])

    const handleChange = (e) => {
        setSearchQuery(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
      <div className='SearchBar'>
          <form onSubmit={handleSubmit}>
              <input type="text" name='search' value={searchQuery} placeholder='Search' onChange={handleChange} autoComplete='false' />
              <button>
                  <SearchIcon size={20} data-tip='Search' data-for='navbar' />
              </button>
          </form>
          <button className='icon-container voiceIcon'>
              <VoiceIcon size={25} data-tip='Search with your voice' data-for='navbar' />
          </button>
      </div>
    )
}

export default SearchBar