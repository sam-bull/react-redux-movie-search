import React from 'react'
import SearchPage from './search.search.component'
import DiscoverPage from './search.discover.component'
import FindPage from './search.find.component'
import './search.css';
import '../index.css'

const SearchSection = ({ searchType, setSearchType, setSearchParams }) => {
  const SearchType = (searchType === 'discover')
      ? DiscoverPage
      : (searchType === 'find')
        ? FindPage
        : SearchPage
  return (
  <div className='container'>
    <button className='search--button' onClick={setSearchType('search')}>Search</button>
    <button className='search--button' onClick={setSearchType('discover')}>Discover</button>
    <button className='search--button' onClick={setSearchType('find')}>Find</button>
    <SearchType setSearchParams={setSearchParams} />
  </div>
)
}

export default SearchSection