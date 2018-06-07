import React from 'react'
import './search.css'

const SearchPage = ({ setSearchParams }) => (
  <div className='search-container'>
    <div>Search text: </div>
    <input type='text' id='query' />
    <button
      onClick={() => setSearchParams(undefined, document.getElementById('query').value)}>
      Search Movies
    </button>
  </div>
)

export default SearchPage