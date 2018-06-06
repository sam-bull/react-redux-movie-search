import React from 'react'
import './search.css'

const SearchPage = ({ setSearchParams }) => (
  <div className='search-container'>
    <p>Search text: </p>
    <input type='text' id='query' />
    <button
      onClick={() => { console.log('click search'); setSearchParams(undefined, document.getElementById('query').value)} }>
      Search Movies
    </button>
  </div>
)

export default SearchPage