import React, { useContext } from 'react'
import {ImSearch as SearchIcon} from 'react-icons/im'
import {MdKeyboardVoice as VoiceIcon} from 'react-icons/md'
import SearchContext from '../../../Contexts/search/SearchContext'
import useWindowSize from '../../../helpers/useWindowSize'

const SearchBar = ({onChange, onSubmit}) => {
  const {
    searchQuery,
    setSearchQuery,
    showSearchBar,
  } = useContext(SearchContext)

  const { width } = useWindowSize()

  return (
    <div className={`SearchBar ${width <= 640 ? 'smallSearch' : ''}`}>
      {
        width > 640
        ? (<form onSubmit={onSubmit}>
            <input type="text" name='search' value={searchQuery.input} placeholder='Search' onChange={onChange} autoComplete='false' />
            <button type='submit'>
              <SearchIcon size={20} data-tip='Search' data-for='navbar' />
            </button>
          </form>)
        : <button
            className='icon-container searchIcon'
            onClick={showSearchBar}
          >
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